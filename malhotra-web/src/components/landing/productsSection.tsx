"use client";

import React from "react";
import * as Icons from "lucide-react";
import SectionHeader from "@/components/about/sectionHeader";
import ProductCard from "@/components/landing/product-card";

interface Product {
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface ProductsSectionProps {
  sectionHeader: {
    title: string;
    description?: string;
  };
  products: Product[];
}

export default function ProductsSection({
  sectionHeader,
  products,
}: ProductsSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {sectionHeader.title}
          </h2>
          {sectionHeader.description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {sectionHeader.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => {
            const IconComponent = (Icons as any)[p.icon];
            return (
              <ProductCard
                key={i}
                product={{
                  ...p,
                  icon: <IconComponent className="h-10 w-10 text-primary" />,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
