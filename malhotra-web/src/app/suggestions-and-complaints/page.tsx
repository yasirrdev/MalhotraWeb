"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/suggestions/hero-section";
import SuggestionsForm from "@/components/suggestions/suggestions-form";
import ContactSection from "@/components/suggestions/contact-section";
import WhyChooseUsSection from "@/components/suggestions/why-choose-us";
import { useLanguage } from "@/context/languageContext";

interface SuggestionsAndComplaintsSchema {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    stats: Array<{
      number: string;
      label: string;
    }>;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  form: {
    title: string;
    subtitle: string;
    fields: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      phone: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
    };
    validation: {
      nameRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      messageMinLength: string;
    };
    submit: {
      button: string;
      loading: string;
      success: {
        title: string;
        message: string;
      };
      error: {
        title: string;
        message: string;
        failedMessage: string;
      };
    };
  };
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    methods: Array<{
      title: string;
      description: string;
      contact: string;
      type: "email" | "phone" | "location";
    }>;
  };
  whyChooseUs: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
}

export default function SuggestionsAndComplaintsPage() {
  const { lang } = useLanguage();
  const [texts, setTexts] = useState<SuggestionsAndComplaintsSchema | null>(null);

  useEffect(() => {
    fetch(`/data/suggestionsAndComplaints/dataSuggestionsAndComplaints${lang.toUpperCase()}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<SuggestionsAndComplaintsSchema>;
      })
      .then((json) => {
        setTexts(json);
      })
      .catch(() => {
        setTexts(null);
      });
  }, [lang]);

  if (!texts) {
    return null;
  }

  const { hero, form, contact, whyChooseUs } = texts;
  return (
    <div className="min-h-screen bg-background">
      <HeroSection texts={hero} />
      <section id="feedback-form" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <SuggestionsForm texts={form} />
          </div>
        </div>
      </section>
      <ContactSection texts={contact} />
      <WhyChooseUsSection texts={whyChooseUs} />
    </div>
  );
}
