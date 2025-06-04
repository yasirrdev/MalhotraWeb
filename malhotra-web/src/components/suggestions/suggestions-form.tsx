"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
} from "lucide-react";
import axios from "axios";

interface TextsSchema {
  card: {
    title: string;
    description: string;
  };
  labels: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  button: {
    defaultText: string;
    submittingText: string;
  };
  messages: {
    success: string;
    failure: string;
    unexpected: string;
  };
  validation: {
    nameRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    messageMin: string;
  };
}

export default function SuggestionsForm() {
  const [texts, setTexts] = useState<TextsSchema | null>(null);
  const [isLoadingTexts, setIsLoadingTexts] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    setIsLoadingTexts(true);
    fetch("/data/suggestionsAndComplaints/dataFormEN.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<TextsSchema>;
      })
      .then((json) => {
        setTexts(json);
        setFetchError(null);
      })
      .catch(() =>
        setFetchError("Failed to load form texts. Please refresh the page.")
      )
      .finally(() => setIsLoadingTexts(false));
  }, []);

  if (isLoadingTexts) {
    return (
      <div className="flex items-center justify-center h-60">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
      </div>
    );
  }

  if (fetchError || !texts) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <p className="text-red-600">{fetchError}</p>
      </div>
    );
  }

  const formSchema = z.object({
    Name: z.string().min(2, { message: texts.validation.nameRequired }),
    Email: z.string().email({ message: texts.validation.emailInvalid }),
    Phone: z.string().min(1, { message: texts.validation.phoneRequired }),
    Message: z.string().min(10, { message: texts.validation.messageMin }),
  });

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
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Email", data.Email);
    formData.append("Phone", data.Phone);
    formData.append("Message", data.Message);

    try {
      const response = await axios.post(
        "https://formspree.io/f/xwpogdoo",
        formData
      );

      if (response.status === 200) {
        setSubmitResult({
          success: true,
          message: texts.messages.success,
        });
        reset();
      } else {
        setSubmitResult({
          success: false,
          message: texts.messages.failure,
        });
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: texts.messages.unexpected,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {texts.card.title}
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 mt-2">
            {texts.card.description}
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
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  {texts.labels.name}
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    placeholder={texts.placeholders.name}
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
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {texts.labels.email}
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    placeholder={texts.placeholders.email}
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
              <Label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                {texts.labels.phone}
              </Label>
              <div className="relative">
                <Input
                  id="phone"
                  placeholder={texts.placeholders.phone}
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
              <Label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                {texts.labels.message}
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder={texts.placeholders.message}
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
                    {texts.button.submittingText}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    {texts.button.defaultText}
                  </div>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
