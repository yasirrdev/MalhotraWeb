"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CertificationCarouselProps {
  certifications: {
    name: string
    image: string
  }[
    
  ]
}

export default function CertificationCarousel({ certifications }: CertificationCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const itemsToShow = 3
  const maxIndex = Math.max(0, certifications.length - itemsToShow)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        nextSlide()
      } else {
        setCurrentIndex(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, maxIndex])

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          className="rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="min-w-[33.333%] px-2">
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.name}
                  width={150}
                  height={100}
                  className="object-contain h-20"
                />
                <p className="mt-3 text-center font-medium text-gray-700">{cert.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
