import { Zap, Shield, Award, Users } from "lucide-react"

interface WhyChooseUsSectionProps {
  texts: {
    title: string
    titleHighlight: string
    subtitle: string
    features: Array<{
      title: string
      description: string
    }>
  }
}

export default function WhyChooseUsSection({ texts }: WhyChooseUsSectionProps) {
  const icons = [Zap, Shield, Award, Users]
  const colors = ["success", "info", "warning", "secondary"]

  return (
    <section className="py-20 bg-gradient-to-r from-neutral-50 to-background-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              {texts.title} <span className="text-secondary">{texts.titleHighlight}</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">{texts.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {texts.features.map((feature, index) => {
              const IconComponent = icons[index]
              const color = colors[index]
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-${color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className={`h-6 w-6 text-${color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                      <p className="text-neutral-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
