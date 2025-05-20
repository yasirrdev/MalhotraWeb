"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Users, Clock, DollarSign, Heart, UserCheck, Briefcase } from "lucide-react"
import SectionHeader from "@/components/about/sectionHeader"
import type { JSX } from "react"

interface StandardProps {
  title: string
  description: string
}

interface StandardsSectionProps {
  standards: StandardProps[]
}

// Map of standard keywords to icons
const standardIcons: Record<string, JSX.Element> = {
  Employment: <Briefcase className="h-6 w-6" />,
  Workers: <Users className="h-6 w-6" />,
  Hours: <Clock className="h-6 w-6" />,
  Wages: <DollarSign className="h-6 w-6" />,
  Humane: <Heart className="h-6 w-6" />,
  "Non-Discrimination": <UserCheck className="h-6 w-6" />,
  Freedom: <Users className="h-6 w-6" />,
}

// Function to find the appropriate icon based on the standard title
const findIcon = (title: string): JSX.Element => {
  const key = Object.keys(standardIcons).find((k) => title.includes(k))
  return key ? standardIcons[key] : <Briefcase className="h-6 w-6" />
}

export default function StandardsSection({ standards }: StandardsSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Working Standards"
          description="The standards we uphold in our workplace and business relationships"
        />

        <div className="mt-12 max-w-3xl mx-auto">
          {standards.map((standard, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                  expandedIndex === index ? "bg-primary text-white" : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-full mr-3 ${expandedIndex === index ? "bg-white/20" : "bg-primary/10"}`}>
                    {findIcon(standard.title)}
                  </div>
                  <h3 className="text-lg font-semibold">{standard.title}</h3>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    expandedIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{standard.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
