"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/languageContext";
import StatsSection, { Stat } from "@/components/landing/stats";
import ProductsSection from "@/components/landing/productsSection";
import CoreValuesSection from "@/components/landing/coreValues";
import CertificationCarousel from "@/components/landing/certification-carrousel";
import ClientLogoSlider from "@/components/landing/client-logo-slider";
import HeroSection from "@/components/landing/hero";
import DirectorSection, { DirectorData } from "@/components/landing/director";

interface DataHome {
  hero: {
    backgroundImage: string;
    title: string;
    subtitle: string;
    button: { text: string; icon: string; link: string };
  };
  stats: Stat[];
  headerProductsSection: { title: string; description?: string };
  products: { title: string; description: string; icon: string; link: string }[];
  headerValuesSection: { title: string; description?: string };
  coreValues: { title: string; description: string; icon: string }[];
  headerCertificationsSection: { title: string; description: string };
  certificationLabels: {
    asrNumber: string;
    iatfNo: string;
    issueDate: string;
    expirationDate: string;
    initialRegistration: string;
  };
  certifications: {
    name: string;
    image: string;
    asrNumber?: string;
    iatfNo?: string;
    issueDate?: string;
    expirationDate?: string;
    initialRegistration?: string;
  }[];
  director: DirectorData;
  headerClientSection: { title: string; description?: string };
  clients: { name: string; logo: string }[];
}

export default function HomePage() {
  const { lang } = useLanguage();
  const [dataHome, setDataHome] = useState<DataHome | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/data/home/dataHome${lang.toUpperCase()}.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<DataHome>;
      })
      .then((json) => {
        setDataHome(json);
        setError(null);
      })
      .catch(() => setError("Failed to load homepage data."))
      .finally(() => setIsLoading(false));
  }, [lang]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
      </div>
    );
  }

  if (error || !dataHome) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  const {
    hero,
    stats,
    headerProductsSection,
    products,
    headerValuesSection,
    coreValues,
    headerCertificationsSection,
    certificationLabels,
    certifications,
    director,
    headerClientSection,
    clients,
  } = dataHome;

  return (
    <main className="flex min-h-screen flex-col font-montserrat">
      <HeroSection
        backgroundImage={hero.backgroundImage}
        title={hero.title}
        subtitle={hero.subtitle}
        buttonText={hero.button.text}
        buttonIcon={hero.button.icon}
        buttonLink={hero.button.link}
      />
      <StatsSection stats={stats} />
      <ProductsSection sectionHeader={headerProductsSection} products={products} />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <CoreValuesSection
              sectionHeader={headerValuesSection}
              coreValues={coreValues}
            />
            <CertificationCarousel
              certifications={certifications}
              labels={certificationLabels}
              sectionHeader={headerCertificationsSection}
            />
          </div>
        </div>
      </section>
      <DirectorSection data={director} />
      <ClientLogoSlider
        clients={clients}
        headerClientSection={headerClientSection}
      />
    </main>
  );
}
