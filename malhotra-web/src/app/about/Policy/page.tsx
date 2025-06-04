"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpCircle,
  Users,
  Zap,
  DollarSign,
  Truck,
  Lightbulb,
  Scale,
  Leaf,
  ShieldAlert,
  HardHat,
  Database,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/languageContext";
import PageHeader from "@/components/about/pageHeader";
import SectionHeader from "@/components/about/sectionHeader";
import PolicyStatement from "@/components/about/policy-statment";
import CommitmentCard from "@/components/about/commitment-card";
import CTASection from "@/components/about/ctaSection";

interface PolicyData {
  title: string;
  company: string;
  scope: string;
  statement: string;
  commitments: string[];
  last_revision: string;
  language: string;
}

export default function PolicyPage() {
  const { lang } = useLanguage();
  const [policyData, setPolicyData] = useState<PolicyData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/data/about/policy/dataPolicy${lang.toUpperCase()}.json`)
      .then((res) => res.json())
      .then((data: PolicyData) => setPolicyData(data))
      .catch((error) => {
        console.error("Error fetching content:", error);
        setPolicyData(null);
      })
      .finally(() => setIsLoading(false));
  }, [lang]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
      </div>
    );
  }

  if (!policyData) {
    return (
      <div className="container mx-auto px-4 py-20">
        <p className="text-center text-lg text-gray-600">
          {lang === "en" ? "Content not available" : "İçerik mevcut değil"}
        </p>
      </div>
    );
  }

  const commitmentIcons: LucideIcon[] = [
    ArrowUpCircle,
    Users,
    Zap,
    DollarSign,
    Truck,
    Lightbulb,
    Scale,
    Leaf,
    ShieldAlert,
    HardHat,
    HardHat,
    Database,
    MessageCircle,
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const commitmentsHeader =
    lang === "en" ? "Our Commitments" : "Taahhütlerimiz";
  const commitmentsDescription =
    lang === "en"
      ? "We are committed to upholding the highest standards in quality, environment, energy, and occupational health & safety"
      : "Kalite, çevre, enerji ve iş sağlığı & güvenliğinde en yüksek standartları sürdürmeye kararlıyız";

  const ctaTitle =
    lang === "en"
      ? "Want to Learn More About Our Policies?"
      : "Politikalarımız Hakkında Daha Fazla Bilgi Mi Almak İstiyorsunuz?";
  const ctaDescription =
    lang === "en"
      ? "Contact us to learn more about our commitment to quality, environment, energy, and occupational health & safety"
      : "Kalite, çevre, enerji ve iş sağlığı & güvenliği taahhüdümüz hakkında daha fazla bilgi edinmek için bizimle iletişime geçin";
  const ctaButton1 = lang === "en" ? "Contact Us" : "İletişime Geçin";
  const ctaButton2 =
    lang === "en" ? "View Standards Policy" : "Standart Politikayı Görüntüle";

  return (
    <div>
      <PageHeader
        title={policyData.title}
        description={`${policyData.company} - ${policyData.scope}`}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <PolicyStatement statement={policyData.statement} />

          <SectionHeader
            title={commitmentsHeader}
            description={commitmentsDescription}
          />

          <motion.div
            className="grid grid-cols-1 gap-4 mt-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {policyData.commitments.map((commitment, index) => (
              <motion.div key={index} variants={item}>
                <CommitmentCard
                  commitment={commitment}
                  index={index}
                  icon={commitmentIcons[index]}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-sm text-gray-500 border-t border-gray-200 pt-6">
            <p>
              {lang === "en" ? "Last revised:" : "Son revizyon:"}{" "}
              {new Date(policyData.last_revision).toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title={ctaTitle}
        description={ctaDescription}
        button_1={ctaButton1}
        button_2={ctaButton2}
      />
    </div>
  );
}
