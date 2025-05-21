import { Lightbulb, Target } from "lucide-react"
import InfoCard from "@/components/about/infoCard"

interface PurposeStrategyProps {
  purpose: {
    title: string
    content: string
  }
  strategy: {
    title: string
    content: string
  }
}

export default function PurposeStrategySection({ purpose, strategy }: PurposeStrategyProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <InfoCard
            title={purpose.title}
            content={purpose.content}
            icon={<Lightbulb className="h-8 w-8 text-primary" />}
          />
          <InfoCard
            title={strategy.title}
            content={strategy.content}
            icon={<Target className="h-8 w-8 text-primary" />}
          />
        </div>
      </div>
    </section>
  )
}
