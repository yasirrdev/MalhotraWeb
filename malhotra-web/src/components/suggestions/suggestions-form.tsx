"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, User, Mail, Phone, MessageSquare, Send, Star } from "lucide-react"
import axios from "axios"

interface SuggestionsFormProps {
  texts: {
    title: string
    subtitle: string
    fields: {
      name: { label: string; placeholder: string }
      email: { label: string; placeholder: string }
      phone: { label: string; placeholder: string }
      message: { label: string; placeholder: string }
    }
    validation: {
      nameRequired: string
      emailInvalid: string
      phoneRequired: string
      messageMinLength: string
    }
    submit: {
      button: string
      loading: string
      success: { title: string; message: string }
      error: { title: string; message: string; failedMessage: string }
    }
  }
}

export default function SuggestionsForm({ texts }: SuggestionsFormProps) {
  const formSchema = z.object({
    Name: z.string().min(2, { message: texts.validation.nameRequired }),
    Email: z.string().email({ message: texts.validation.emailInvalid }),
    Phone: z.string().min(1, { message: texts.validation.phoneRequired }),
    Message: z.string().min(10, { message: texts.validation.messageMinLength }),
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Phone: "",
      Message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    const formData = new FormData()
    formData.append("Name", data.Name)
    formData.append("Email", data.Email)
    formData.append("Phone", data.Phone)
    formData.append("Message", data.Message)

    try {
      const response = await axios.post("https://formspree.io/f/xwpogdoo", formData)

      if (response.status === 200) {
        setSubmitResult({
          success: true,
          message: texts.submit.success.message,
        })
        reset()
      } else {
        setSubmitResult({
          success: false,
          message: texts.submit.error.failedMessage,
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: texts.submit.error.message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-2xl border-0 bg-white relative overflow-hidden">
        {/* Decorative elements using brand colors */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full translate-y-12 -translate-x-12" />

        <CardHeader className="text-center pb-8 relative z-10 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
              <Star className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold text-primary mb-4">{texts.title}</CardTitle>
          <CardDescription className="text-lg text-neutral-600 max-w-2xl mx-auto">{texts.subtitle}</CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 p-8">
          {submitResult && (
            <div
              className={`p-6 rounded-2xl mb-8 border transition-all duration-500 ${
                submitResult.success
                  ? "bg-success/5 text-success-dark border-success/20"
                  : "bg-error/5 text-error-dark border-error/20"
              }`}
            >
              <div className="flex items-start gap-4">
                {submitResult.success ? (
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-error rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertCircle className="h-5 w-5 text-white" />
                  </div>
                )}
                <div>
                  <p className="font-bold text-lg mb-1">
                    {submitResult.success ? texts.submit.success.title : texts.submit.error.title}
                  </p>
                  <p>{submitResult.message}</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-semibold text-primary flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {texts.fields.name.label}
                </Label>
                <div className="relative group">
                  <Input
                    id="name"
                    placeholder={texts.fields.name.placeholder}
                    {...register("Name")}
                    className={`pl-12 h-14 text-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary border-2 rounded-xl ${
                      errors.Name
                        ? "border-error focus:ring-error"
                        : "border-neutral-200 group-hover:border-neutral-300"
                    }`}
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors duration-200" />
                </div>
                {errors.Name && (
                  <p className="text-error text-sm flex items-center gap-2 bg-error/5 p-3 rounded-lg border border-error/20">
                    <AlertCircle className="h-4 w-4" />
                    {errors.Name.message}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-semibold text-primary flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {texts.fields.email.label}
                </Label>
                <div className="relative group">
                  <Input
                    id="email"
                    type="email"
                    placeholder={texts.fields.email.placeholder}
                    {...register("Email")}
                    className={`pl-12 h-14 text-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary border-2 rounded-xl ${
                      errors.Email
                        ? "border-error focus:ring-error"
                        : "border-neutral-200 group-hover:border-neutral-300"
                    }`}
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors duration-200" />
                </div>
                {errors.Email && (
                  <p className="text-error text-sm flex items-center gap-2 bg-error/5 p-3 rounded-lg border border-error/20">
                    <AlertCircle className="h-4 w-4" />
                    {errors.Email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="phone" className="text-sm font-semibold text-primary flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {texts.fields.phone.label}
              </Label>
              <div className="relative group">
                <Input
                  id="phone"
                  placeholder={texts.fields.phone.placeholder}
                  {...register("Phone")}
                  className={`pl-12 h-14 text-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary border-2 rounded-xl ${
                    errors.Phone ? "border-error focus:ring-error" : "border-neutral-200 group-hover:border-neutral-300"
                  }`}
                />
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors duration-200" />
              </div>
              {errors.Phone && (
                <p className="text-error text-sm flex items-center gap-2 bg-error/5 p-3 rounded-lg border border-error/20">
                  <AlertCircle className="h-4 w-4" />
                  {errors.Phone.message}
                </p>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-sm font-semibold text-primary flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                {texts.fields.message.label}
              </Label>
              <div className="relative group">
                <Textarea
                  id="message"
                  placeholder={texts.fields.message.placeholder}
                  rows={8}
                  {...register("Message")}
                  className={`pl-12 pt-6 resize-none text-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary border-2 rounded-xl ${
                    errors.Message
                      ? "border-error focus:ring-error"
                      : "border-neutral-200 group-hover:border-neutral-300"
                  }`}
                />
                <MessageSquare className="absolute left-4 top-6 h-5 w-5 text-neutral-400 group-hover:text-primary transition-colors duration-200" />
              </div>
              {errors.Message && (
                <p className="text-error text-sm flex items-center gap-2 bg-error/5 p-3 rounded-lg border border-error/20">
                  <AlertCircle className="h-4 w-4" />
                  {errors.Message.message}
                </p>
              )}
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                className="w-full h-16 bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{texts.submit.loading}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Send className="h-5 w-5" />
                    <span>{texts.submit.button}</span>
                  </div>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
