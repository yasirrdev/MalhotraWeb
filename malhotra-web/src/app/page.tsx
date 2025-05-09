"use client";

import Image from "next/image";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CounterAnimation from "@/components/landing/counter-animation";
import ProductCard from "@/components/landing/product-card";
import CertificationCarousel from "@/components/landing/certification-carrousel";
import ClientLogoSlider from "@/components/landing/client-logo-slider";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import dataHome from "@/data/home/dataHome.json";
import Link from "next/link";

type DataHome = typeof dataHome;

export default function Home() {
  const { products, coreValues, certifications, clients } =
    dataHome as DataHome;

  return (
    <main className="flex min-h-screen flex-col font-montserrat">
      <Navbar />

      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/landing/images/cables.jpg"
          alt="Malhotra Cables Manufacturing"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              On the Path of Continuous Improvement
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              20 years of excellence in manufacturing automotive,
              data-communication, and high-voltage cables.
            </p>
            <Button className="bg-secondary hover:bg-secondary/50 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Our Products
              <Icons.ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 100, label: "Customers" },
              { end: 100, label: "Vendors" },
              { end: 1000, label: "Employees" },
              { end: 10, label: "Locations" },
            ].map(({ end, label }, i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <CounterAnimation end={end} suffix="+" duration={2} />
                  <h3 className="text-xl font-semibold mt-2 text-gray-800">
                    {label}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering high-quality cable solutions for diverse industries
              and applications
            </p>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Core Values
              </h2>
              <div className="space-y-8">
                {coreValues.map((v, i) => {
                  const Icon = (Icons as any)[v.icon];
                  return (
                    <div key={i} className="flex items-start">
                      <div className="mr-4 p-2 bg-primary/10 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {v.title}
                        </h3>
                        <p className="text-gray-600">{v.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our Certifications
              </h2>
              <CertificationCarousel certifications={certifications} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <Image
                src="/landing/images/rajiv_malhotra.jpg"
                alt="Director of Malhotra Cables"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Message from the Director
              </h2>
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                "At Malhotra Cables, our commitment to quality and innovation
                has driven our success for over two decades. We believe in
                building lasting relationships with our customers by delivering
                products that exceed expectations. Our journey of continuous
                improvement reflects our dedication to excellence in everything
                we do."
              </blockquote>
              <p className="text-xl font-semibold text-primary">
                Rajiv Malhotra
              </p>
              <p className="text-gray-600">
                Managing Director, Malhotra Cables
              </p>
            </div>
          </div>
        </div>
      </section>

¡      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Clients & OEM Approvals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading companies across industries
            </p>
          </div>
          <ClientLogoSlider clients={clients} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
