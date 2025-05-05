"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface ClientLogoSliderProps {
  clients: {
    name: string
    logo: string
  }[]
}

export default function ClientLogoSlider({ clients }: ClientLogoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Clone the slider content for infinite loop effect
    const sliderContent = slider.querySelector(".slider-content")
    if (!sliderContent) return

    const clone = sliderContent.cloneNode(true)
    slider.appendChild(clone)

    // Set animation
    const sliderItems = slider.querySelectorAll(".slider-content")
    sliderItems.forEach((item, index) => {
      const element = item as HTMLElement
      element.style.animation = `slide 30s linear infinite ${index * -15}s`
    })

    return () => {
      // Clean up
      if (clone.parentNode) {
        slider.removeChild(clone)
      }
    }
  }, [])

  return (
    <div className="w-full overflow-hidden" ref={sliderRef}>
      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>

      <div className="slider-content flex">
        {clients.map((client, index) => (
          <div key={index} className="mx-8 flex-shrink-0 group">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={80}
                className="object-contain max-h-16 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
