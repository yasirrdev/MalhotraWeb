import { Check } from "lucide-react"
import SectionHeader from "@/components/about/sectionHeader"

interface ValuesProps {
  title: string
  description: string
  items: string[]
}

export default function ValuesSection({ title, description, items }: ValuesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader title={title} description={description} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-2 rounded-full mb-4">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <p className="text-gray-800 font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
