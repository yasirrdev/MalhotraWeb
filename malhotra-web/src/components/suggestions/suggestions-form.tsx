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
import { AlertCircle, CheckCircle2, User, Mail, Phone, MessageSquare, Send } from "lucide-react"
import axios from "axios"

const formSchema = z.object({
  Name: z.string().min(2, { message: "Name is required" }),
  Email: z.string().email({ message: "Please enter a valid email address" }),
  Phone: z.string().min(1, { message: "Phone number is required" }),
  Message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export default function SuggestionsForm() {
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
          message: "Your message has been sent successfully. We will respond shortly.",
        })
        reset()
      } else {
        setSubmitResult({
          success: false,
          message: "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Contact Us
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 mt-2">
            We'd love to hear your suggestions and feedback
          </CardDescription>
        </CardHeader>

        <CardContent>
          {submitResult && (
            <div
              className={`p-4 rounded-lg mb-6 border transition-all duration-300 ${
                submitResult.success
                  ? "bg-green-50 text-green-800 border-green-200"
                  : "bg-red-50 text-red-800 border-red-200"
              }`}
            >
              <div className="flex items-center">
                {submitResult.success ? (
                  <CheckCircle2 className="h-5 w-5 mr-3 text-green-600" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-3 text-red-600" />
                )}
                <p className="font-medium">{submitResult.message}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Your Name
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register("Name")}
                    className={`pl-10 h-12 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.Name ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                    }`}
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                {errors.Name && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.Name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    {...register("Email")}
                    className={`pl-10 h-12 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.Email ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                    }`}
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                {errors.Email && (
                  <p className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.Email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number
              </Label>
              <div className="relative">
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  {...register("Phone")}
                  className={`pl-10 h-12 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.Phone ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                  }`}
                />
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              {errors.Phone && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.Phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Your Message
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder="Please describe your suggestion or complaint in detail..."
                  rows={6}
                  {...register("Message")}
                  className={`pl-10 pt-4 resize-none transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.Message ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                  }`}
                />
                <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
              </div>
              {errors.Message && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.Message.message}
                </p>
              )}
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Submit Message
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
