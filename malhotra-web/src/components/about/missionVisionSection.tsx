import Image from "next/image"
import { Compass, Award } from "lucide-react"

interface MissionVisionProps {
  mission: {
    title: string
    content: string
  }
  vision: {
    title: string
    content: string
  }
}

export default function MissionVisionSection({ mission, vision }: MissionVisionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Compass className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{mission.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">{mission.content}</p>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
              <Image src="/about/ourMission.avif?height=400&width=600" alt="Our Vision" fill className="object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{vision.title}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">{vision.content}</p>
            <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
              <Image src="/about/ourVision.jpg?height=400&width=600" alt="Our Vision" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
