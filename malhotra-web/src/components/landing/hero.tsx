// components/landing/HeroSection.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonIcon: string;
  buttonLink: string;
}

export default function HeroSection({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonIcon,
  buttonLink,
}: HeroSectionProps) {
  const IconComponent = (Icons as any)[buttonIcon] as React.ComponentType<{
    className?: string;
  }>;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover"
      />
      {/* Aquí el contenedor: justify-center (vertical) + items-start (izquierda) */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 sm:px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight text-left">
          {title}
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl text-left">
          {subtitle}
        </p>
        <div className="w-full max-w-xs">
          <Button
            asChild
            className="
              w-full
              bg-red-600 hover:bg-red-700
              text-white
              px-8 py-6 text-lg
              rounded-md
              transition-transform duration-300
              transform hover:scale-105
              shadow-lg hover:shadow-xl
            "
          >
            <Link
              href={buttonLink}
              className="flex items-center justify-center"
            >
              {buttonText}
              <IconComponent className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
