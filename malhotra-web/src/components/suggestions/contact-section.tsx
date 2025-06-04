import { Mail, Phone, MapPin, Zap } from "lucide-react"

interface ContactSectionProps {
  texts: {
    title: string
    titleHighlight: string
    subtitle: string
    methods: Array<{
      title: string
      description: string
      contact: string
      type: string
    }>
  }
}

export default function ContactSection({ texts }: ContactSectionProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "email":
        return Mail
      case "phone":
        return Phone
      case "location":
        return MapPin
      default:
        return Mail
    }
  }

  const getGradient = (index: number) => {
    const gradients = ["from-primary to-primary-light", "from-secondary to-secondary-dark", "from-info to-info-dark"]
    return gradients[index] || gradients[0]
  }

  const getHoverColor = (index: number) => {
    const colors = ["hover:border-primary/30", "hover:border-secondary/30", "hover:border-info/30"]
    return colors[index] || colors[0]
  }

  const getTextColor = (index: number) => {
    const colors = [
      "text-primary hover:text-primary-dark",
      "text-secondary hover:text-secondary-dark",
      "text-info hover:text-info-dark",
    ]
    return colors[index] || colors[0]
  }

  const getHref = (type: string, contact: string) => {
    switch (type) {
      case "email":
        return `mailto:${contact}`
      case "phone":
        return `tel:${contact.replace(/\s/g, "")}`
      default:
        return "#"
    }
  }

  return (
    <section id="contact-info" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              {texts.title} <span className="text-secondary">{texts.titleHighlight}</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">{texts.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {texts.methods.map((method, index) => {
              const IconComponent = getIcon(method.type)
              return (
                <div
                  key={index}
                  className={`group bg-white border border-neutral-200 ${getHoverColor(
                    index,
                  )} p-8 rounded-2xl transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${getGradient(
                        index,
                      )} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 ${getTextColor(index).split(" ")[0]}`}>{method.title}</h3>
                    <p className="text-neutral-600 mb-6">{method.description}</p>
                    {method.type === "location" ? (
                      <div className={`font-semibold ${getTextColor(index)}`}>
                        <span>{method.contact}</span>
                      </div>
                    ) : (
                      <a
                        href={getHref(method.type, method.contact)}
                        className={`inline-flex items-center gap-2 font-semibold transition-colors duration-200 ${getTextColor(
                          index,
                        )}`}
                      >
                        <span>{method.contact}</span>
                        <Zap className="h-4 w-4" />
                      </a>
                    )}
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
