"use client";

import React from "react";
import * as Icons from "lucide-react";
import SectionHeader from "@/components/about/sectionHeader";

interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

interface CoreValuesSectionProps {
  sectionHeader: {
    title: string;
    description?: string;
  };
  coreValues: CoreValue[];
}

export default function CoreValuesSection({
  sectionHeader,
  coreValues,
}: CoreValuesSectionProps) {
  const { title, description } = sectionHeader;

  return (
    <div>
      <SectionHeader title={title} description={description} />
      <div className="space-y-8 mt-8">
        {coreValues.map((value, index) => {
          const IconComponent = (Icons as any)[value.icon];
          return (
            <div key={index} className="flex items-start">
              <div className="mr-4 p-2 bg-primary/10 rounded-full">
                <IconComponent className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
