"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Cable } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useLanguage } from "@/context/languageContext";

interface ProductCardProps {
  product?: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
  };
  cable?: Cable;
}

export default function ProductCard({ product, cable }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { lang } = useLanguage();

  const slugify = (text: string) =>
    text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");

  if (product) {
    return (
      <Card
        className={cn(
          "border-none shadow-lg transition-all duration-300 h-full",
          isHovered ? "shadow-xl transform -translate-y-1" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6 pt-8 flex flex-col items-center text-center">
          <div
            className={cn(
              "mb-6 p-4 rounded-full bg-primary/10 transition-all duration-300",
              isHovered ? "bg-primary/20" : ""
            )}
          >
            {product.icon}
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            {product.title}
          </h3>
          <p className="text-gray-600">{product.description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-center">
          <Button
            variant="outline"
            className={cn(
              "group transition-all duration-300 bg-primary text-white",
              isHovered ? "bg-secondary text-white hover:bg-secondary/90" : ""
            )}
            asChild
          >
            <Link href={product.link}>
              {lang === "en" ? "Explore" : "Keşfet"}
              <ArrowRight
                className={cn(
                  "ml-2 h-4 w-4 transition-transform duration-300",
                  isHovered ? "transform translate-x-1" : ""
                )}
              />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (cable) {
    return (
      <div
        className={cn(
          "bg-white rounded-lg overflow-hidden shadow-md transition-all duration-150 h-full",
          isHovered ? "shadow-xl transform -translate-y-1" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <Image
            src={cable.image || "/placeholder.svg?height=200&width=280"}
            alt={cable.name}
            width={280}
            height={200}
            className="w-full h-[180px] object-cover"
          />
          <div
            className={cn(
              "absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-150",
              isHovered ? "opacity-100" : ""
            )}
          >
            <Button
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-6"
              asChild
            >
              <Link
                href={`/products/${slugify(
                  cable.category
                )}/${slugify(cable.name)}`}
              >
                {lang === "en" ? "Details" : "Detaylar"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 h-12">
            {cable.name}
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">
                {lang === "en" ? "Cable Type:" : "Kablo Tipi:"}
              </span>
              <span className="text-gray-900 font-medium">
                {cable.cableType}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {lang === "en" ? "Insulation:" : "Yalıtım:"}
              </span>
              <span className="text-gray-900 font-medium">
                {cable.insulationMaterial}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {lang === "en" ? "Temp Range:" : "Sıcaklık Aralığı:"}
              </span>
              <span className="text-gray-900 font-medium">
                {cable.temperatureRange}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">
                {lang === "en" ? "Standard:" : "Standart:"}
              </span>
              <span className="text-gray-900 font-medium">
                {cable.referenceStandard}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
