interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gray-50 py-40 pt-40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          {description && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>}
        </div>
      </div>
    </div>
  )
}
