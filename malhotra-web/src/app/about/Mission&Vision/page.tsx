"use client"

import { useState, useEffect } from "react"
import PageHeader from "@/components/about/pageHeader"
import PurposeStrategySection from "@/components/about/porpouseStrategySection"
import MissionVisionSection from "@/components/about/missionVisionSection"
import ValuesSection from "@/components/about/valuesSection"
import CTASection from "@/components/about/ctaSection"

interface AboutContent {
  pageHeader:{
    title: string 
    description: string
  }
  purpose: {
    title: string
    content: string
  }
  strategy: {
    title: string
    content: string
  }
  mission: {
    title: string
    content: string
  }
  values: {
    title: string
    description: string
    items: string[]
  }
  vision: {
    title: string
    content: string
  }
  ctaSection: {
    title: string
    description: string
    button_1: string
    button_2: string
  }
}

export default function MissionVisionPage() {
  const [content, setContent] = useState<AboutContent | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/data/about/strategyMission&VisionData.json")
        const data: AboutContent = await response.json()
        setContent(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching content:", error)
        setIsLoading(false)
      }
    }

    fetchContent()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="container mx-auto px-4 py-20">
        <p className="text-center text-lg text-gray-600">Content not available</p>
      </div>
    )
  }

  return (
    <div>
      <PageHeader title={content.pageHeader.title} description={content.pageHeader.description}/>
      <PurposeStrategySection purpose={content.purpose} strategy={content.strategy} />
      <MissionVisionSection mission={content.mission} vision={content.vision} />
      <ValuesSection title={content.values.title} description={content.values.description} items={content.values.items} />
      <CTASection title={content.ctaSection.title} description={content.ctaSection.description} button_1={content.ctaSection.button_1} button_2={content.ctaSection.button_2}/>
    </div>
  )
}
