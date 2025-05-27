"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Eye,
  Scale,
  Lock,
  BookOpen,
  Award,
  FileText,
  DollarSign,
  UserCheck,
} from "lucide-react"
import SectionHeader from "@/components/about/sectionHeader"
import type { JSX } from "react/jsx-runtime"

interface PrincipleProps {
  title: string
  description: string
}
interface PrinciplesSectionProps {
  sectionHeader: {
    title: string
    description?: string
  }
  principles: PrincipleProps[]
}

const principleIcons: Record<string, JSX.Element> = {
  Integrity: <Shield className="h-6 w-6" />,
  Transparency: <Eye className="h-6 w-6" />,
  Impartiality: <Scale className="h-6 w-6" />,
  Confidentiality: <Lock className="h-6 w-6" />,
  Compliance: <BookOpen className="h-6 w-6" />,
  Fair: <Award className="h-6 w-6" />,
  Intellectual: <FileText className="h-6 w-6" />,
  "Anti-Corruption": <DollarSign className="h-6 w-6" />,
  Identity: <UserCheck className="h-6 w-6" />,
}

const findIcon = (title: string): JSX.Element => {
  const key = Object.keys(principleIcons).find((k) => title.includes(k))
  return key ? principleIcons[key] : <Shield className="h-6 w-6" />
}

export default function PrinciplesSection({
  sectionHeader,
  principles,
}: PrinciplesSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader title={sectionHeader.title} description={sectionHeader.description}/>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {principles.map((principle, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="p-6 pb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    {findIcon(principle.title)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-gray-700">{principle.description}</p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1
                           bg-gradient-to-r from-primary to-primary/70
                           scale-x-0 origin-left transition-transform duration-300
                           group-hover:scale-x-100"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
