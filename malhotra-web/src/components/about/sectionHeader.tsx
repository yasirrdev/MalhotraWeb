interface SectionHeaderProps {
  title: string
  description?: string
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
    </div>
  )
}