"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CounterAnimation from "./counter-animation";

export interface Stat {
  end: number;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Card
              key={i}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <CounterAnimation
                  end={stat.end}
                  suffix="+"
                  duration={2}
                />
                <h3 className="text-xl font-semibold mt-2 text-gray-800">
                  {stat.label}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
