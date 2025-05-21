interface CTASectionProps {
  title: string
  description: string
  button_1: string
  button_2: string
}

export default function CTASection({
  title,
  description,
  button_1,
  button_2,
}: CTASectionProps) {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
          {description}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            {button_1}
          </a>
          <a
            href="/career"
            className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            {button_2}
          </a>
        </div>
      </div>
    </section>
  )
}
