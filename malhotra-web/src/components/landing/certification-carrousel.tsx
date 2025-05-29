"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionHeader from "@/components/about/sectionHeader";

interface Certification {
  name: string;
  image: string;
  asrNumber?: string;
  iatfNo?: string;
  issueDate?: string;
  expirationDate?: string;
  initialRegistration?: string;
}

interface CertificationLabels {
  asrNumber: string;
  iatfNo: string;
  issueDate: string;
  expirationDate: string;
  initialRegistration: string;
}

interface CertificationCarouselProps {
  certifications: Certification[];
  labels: CertificationLabels;
  sectionHeader: {
    title: string;
    description?: string;
  };
}

export default function CertificationCarousel({
  certifications,
  labels,
  sectionHeader,
}: CertificationCarouselProps) {
  const safeCerts = certifications || [];
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const len = safeCerts.length;

  if (len === 0) {
    return <p className="text-center py-8">No hay certificados para mostrar.</p>;
  }

  const prevIdx = (current - 1 + len) % len;
  const nextIdx = (current + 1) % len;
  const goPrev = () => setCurrent(prevIdx);
  const goNext = () => setCurrent(nextIdx);
  const cert = safeCerts[current];

  return (
    <div className="pt-20 relative z-10">
      <SectionHeader
        title={sectionHeader.title}
        description={sectionHeader.description}
      />

      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div
          onClick={goPrev}
          className="absolute inset-y-0 left-0 w-1/2 z-20 cursor-pointer"
        />
        <div
          onClick={goNext}
          className="absolute inset-y-0 right-0 w-1/2 z-20 cursor-pointer"
        />

        {safeCerts.map((c, idx) => {
          let cls = "absolute top-1/2 transform transition-all duration-500 ";
          if (idx === current) {
            cls +=
              "left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 z-30";
          } else if (idx === prevIdx) {
            cls +=
              "left-1/4 -translate-x-1/2 -translate-y-1/2 scale-75 opacity-50 z-0";
          } else if (idx === nextIdx) {
            cls +=
              "left-3/4 -translate-x-1/2 -translate-y-1/2 scale-75 opacity-50 z-0";
          } else {
            cls += "-translate-y-1/2 opacity-0";
          }

          return (
            <div
              key={idx}
              className={cls}
              onClick={() => idx === current && setIsModalOpen(true)}
            >
              <div className="relative w-48 md:w-64 lg:w-80">
                <Image
                  src={c.image}
                  alt={c.name}
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-lg object-cover cursor-pointer"
                />
              </div>
            </div>
          );
        })}

        <button
          type="button"
          aria-label="Anterior"
          onClick={goPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={goNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 w-full flex justify-center space-x-2 z-20">
          {safeCerts.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Ir al slide ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === current ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center backdrop-blur-sm">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 md:mx-0 flex flex-col md:flex-row gap-6 relative border-2 border-gray-200 shadow-2xl">
            <button
              type="button"
              aria-label="Cerrar modal"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex-shrink-0">
              <Image
                src={cert.image}
                alt={cert.name}
                width={400}
                height={300}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>

            <div className="flex-1 overflow-y-auto">
              <h3 className="text-2xl font-bold mb-4">{cert.name}</h3>
              <ul className="space-y-2 text-gray-700">
                {cert.asrNumber && (
                  <li>
                    <strong>{labels.asrNumber}:</strong> {cert.asrNumber}
                  </li>
                )}
                {cert.iatfNo && (
                  <li>
                    <strong>{labels.iatfNo}:</strong> {cert.iatfNo}
                  </li>
                )}
                {cert.issueDate && (
                  <li>
                    <strong>{labels.issueDate}:</strong> {cert.issueDate}
                  </li>
                )}
                {cert.expirationDate && (
                  <li>
                    <strong>{labels.expirationDate}:</strong>{" "}
                    {cert.expirationDate}
                  </li>
                )}
                {cert.initialRegistration && (
                  <li>
                    <strong>{labels.initialRegistration}:</strong>{" "}
                    {cert.initialRegistration}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
