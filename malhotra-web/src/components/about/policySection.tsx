interface PolicyProps {
  policy: {
    headline: string
    text: string
  }
}

export default function PolicySection({ policy }: PolicyProps) {
  const paragraphs = policy.text.split("\n\n").filter(Boolean)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{policy.headline}</h2>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
