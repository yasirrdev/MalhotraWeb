"use client"

import { useState, useEffect } from "react"
import PageHeader from "@/components/about/pageHeader"
import PolicySection from "@/components/about/policySection"
import PrinciplesSection from "@/components/about/principlesSection"
import StandardsSection from "@/components/about/standardsSection"

interface WorkingStandardsPolicy {
  policy: {
    headline: string
    text: string
  }
  generalPrinciples: {
    title: string
    description: string
  }[]
  workingStandards: {
    title: string
    description: string
  }[]
}

export default function WorkingStandardsPage() {
  const [policyData, setPolicyData] = useState<WorkingStandardsPolicy | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/data/about/workingStandartPolicy.json")
        const data = await response.json()
        setPolicyData(data.workingStandardsPolicy)
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

  if (!policyData) {
    return (
      <div className="container mx-auto px-4 py-20">
        <p className="text-center text-lg text-gray-600">Content not available</p>
      </div>
    )
  }

  return (
    <div>
      <PageHeader
        title="Working Standards Policy"
        description="Our commitment to ethical business practices and fair treatment of all stakeholders"
      />
      <PolicySection policy={policyData.policy} />
      <PrinciplesSection principles={policyData.generalPrinciples} />
      <StandardsSection standards={policyData.workingStandards} />
    </div>
  )
}
