import { MessageCircle, Phone, Users, Clock, Award, Shield } from "lucide-react"

interface HeroSectionProps {
  texts: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    stats: Array<{
      number: string
      label: string
    }>
    cta: {
      primary: string
      secondary: string
    }
  }
}

export default function HeroSection({ texts }: HeroSectionProps) {
  const iconMap = {
    0: Users,
    1: Clock,
    2: Award,
    3: Shield,
  }

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32" />

      <div className="relative container mx-auto px-4 sm:px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <MessageCircle className="h-5 w-5 text-white" />
            <span className="text-white font-medium">{texts.badge}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            {texts.title}
            <span className="block text-secondary">{texts.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">{texts.subtitle}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {texts.stats.map((stat, index) => {
              const IconComponent = iconMap[index as keyof typeof iconMap]
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#feedback-form"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              {texts.cta.primary}
            </a>
            <a
              href="#contact-info"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              {texts.cta.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
