import type { ReactNode } from "react"

interface InfoCardProps {
  title: string
  content: string
  icon: ReactNode
}

export default function InfoCard({ title, content, icon }: InfoCardProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
      <div className="flex items-center mb-6">
        <div className="bg-primary/10 p-3 rounded-full mr-4">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  )
}
