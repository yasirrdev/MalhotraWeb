"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/languageContext";
import PageHeader from "@/components/about/pageHeader";
import PolicySection from "@/components/about/policySection";
import PrinciplesSection from "@/components/about/principlesSection";
import StandardsSection from "@/components/about/standardsSection";

interface WorkingStandardsPolicy {
  policy: {
    headline: string;
    text: string;
  };
  generalPrinciples: {
    title: string;
    description: string;
  }[];
  workingStandards: {
    title: string;
    description: string;
  }[];
  pageHeader: {
    title: string;
    description: string;
  };
  headerStandarSection: {
    title: string;
    description: string;
  };
  headerPrinciplesSection: {
    title: string;
    description: string;
  };
}

export default function WorkingStandardsPage() {
  const { lang } = useLanguage();
  const [policyData, setPolicyData] = useState<WorkingStandardsPolicy | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fileName = `dataWorkingStandartPolicy${lang.toUpperCase()}.json`;
    fetch(`/data/about/workingStandartPolicy/${fileName}`)
      .then((res) => res.json())
      .then((data: { workingStandardsPolicy: WorkingStandardsPolicy }) => {
        setPolicyData(data.workingStandardsPolicy);
      })
      .catch((err) => {
        console.error("Error fetching content:", err);
        setPolicyData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [lang]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!policyData) {
    return (
      <div className="container mx-auto px-4 py-20">
        <p className="text-center text-lg text-gray-600">Content not available</p>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={policyData.pageHeader.title}
        description={policyData.pageHeader.description}
      />
      <PolicySection policy={policyData.policy} />
      <PrinciplesSection
        sectionHeader={policyData.headerPrinciplesSection}
        principles={policyData.generalPrinciples}
      />
      <StandardsSection
        standards={policyData.workingStandards}
        sectionHeader={policyData.headerStandarSection}
      />
    </div>
  );
}
