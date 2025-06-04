"use client"

import React from "react"
import Image from "next/image"

export interface DirectorData {
  header: string
  message: string
  name: string
  title: string
  image: string
}

export interface DirectorSectionProps {
  data: DirectorData
}

export default function DirectorSection({ data }: DirectorSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <Image
              src={data.image}
              alt={data.name}
              width={300}
              height={300}
              className="object-cover rounded-lg shadow-md max-w-full h-auto"
              priority
            />
          </div>

          {/* Texto del mensaje */}
          <div className="w-full md:w-2/3 md:pl-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {data.header}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {data.message}
            </p>
            <p className="text-xl font-semibold text-primary-dark">
              {data.name}
            </p>
            <p className="text-gray-600">
              {data.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}