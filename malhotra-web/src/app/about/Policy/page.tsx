"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowUpCircle,
  Users,
  Zap,
  DollarSign,
  Truck,
  Lightbulb,
  Scale,
  Leaf,
  ShieldAlert,
  HardHat,
  Database,
  MessageCircle,
  type LucideIcon,
} from "lucide-react"
import PageHeader from "@/components/about/pageHeader"
import SectionHeader from "@/components/about/sectionHeader"
import PolicyStatement from "@/components/about/policy-statment"
import CommitmentCard from "@/components/about/commitment-card"
import CTASection from "@/components/about/ctaSection"

interface PolicyData {
  title: string
  company: string
  scope: string
  statement: string
  commitments: string[]
  last_revision: string
  language: string
}

export default function PolicyPage() {
  const [policyData, setPolicyData] = useState<PolicyData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("/data/about/policy.json")
        const data = await response.json()
        setPolicyData(data)
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

  const commitmentIcons: LucideIcon[] = [
    ArrowUpCircle, 
    Users,
    Zap, // Efficiency
    DollarSign, // Costs
    Truck, // Suppliers and subcontractors
    Lightbulb, // Technology and innovation
    Scale, // Legal compliance
    Leaf, // Environmental protection
    ShieldAlert, // Risk assessment
    HardHat, // Hazard prevention
    HardHat, // Occupational safety
    Database, // Resources
    MessageCircle, // Communication
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div>
      <PageHeader title={policyData.title} description={`${policyData.company} - ${policyData.scope}`} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <PolicyStatement statement={policyData.statement} />

          <SectionHeader
            title="Our Commitments"
            description="We are committed to upholding the highest standards in quality, environment, energy, and occupational health & safety"
          />

          <motion.div
            className="grid grid-cols-1 gap-4 mt-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {policyData.commitments.map((commitment, index) => (
              <motion.div key={index} variants={item}>
                <CommitmentCard commitment={commitment} index={index} icon={commitmentIcons[index] || ArrowUpCircle} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-sm text-gray-500 border-t border-gray-200 pt-6">
            <p>Last revised: {new Date(policyData.last_revision).toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Learn More About Our Policies?"
        description="Contact us to learn more about our commitment to quality, environment, energy, and occupational health & safety"
        button_1="Contact Us"
        button_2="View Standards Policy"
      />
    </div>
  )
}
