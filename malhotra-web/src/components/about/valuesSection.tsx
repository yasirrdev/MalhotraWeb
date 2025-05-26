import { Check } from "lucide-react"
import SectionHeader from "@/components/about/sectionHeader"
import { motion } from "framer-motion"

interface ValuesProps {
  title: string
  description: string
  items: string[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

export default function ValuesSection({ title, description, items }: ValuesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader title={title} description={description} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((value, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-50 p-6 rounded-lg shadow-sm overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-2 rounded-full mb-4">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-gray-800 font-medium">{value}</p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/70"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
