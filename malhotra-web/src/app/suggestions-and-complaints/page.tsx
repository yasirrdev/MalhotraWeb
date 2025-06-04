"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SuggestionsForm from "@/components/suggestions/suggestions-form";
import { useLanguage } from "@/context/languageContext";

interface TextsSchema {
  banner: {
    heading: string;
    paragraph: string;
  };
  form: {
    submitHeading: string;
  };
  contact: {
    sectionHeading: string;
    emailLabel: string;
    emailText: string;
    phoneLabel: string;
    phoneText: string;
  };
}

export default function SuggestionsAndComplaintsPage() {
  const { lang } = useLanguage();
  const [texts, setTexts] = useState<TextsSchema | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/data/suggestionsAndComplaints/dataSuggestionsAndComplaints${lang.toUpperCase()}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<TextsSchema>;
      })
      .then((json) => {
        setTexts(json);
        setError(null);
      })
      .catch(() => {
        setError("Failed to load page data.");
        setTexts(null);
      })
      .finally(() => setIsLoading(false));
  }, [lang]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
      </div>
    );
  }

  if (error || !texts) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  const { banner, form, contact } = texts;

  return (
    <div className="min-h-screen">
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/products/cables-banner.jpg"
          alt={banner.heading}
          fill
          sizes="100vw"
          priority
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 flex flex-col justify-center z-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {banner.heading}
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              {banner.paragraph}
            </p>
          </div>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {form.submitHeading}
              </h2>
              <SuggestionsForm />
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {contact.sectionHeading}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">
                    {contact.emailLabel}
                  </h4>
                  <p className="text-gray-700">{contact.emailText}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">
                    {contact.phoneLabel}
                  </h4>
                  <p className="text-gray-700">{contact.phoneText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
