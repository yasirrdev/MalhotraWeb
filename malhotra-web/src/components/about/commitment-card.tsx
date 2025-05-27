import type { LucideIcon } from "lucide-react"

interface CommitmentCardProps {
  commitment: string
  index: number
  icon: LucideIcon
}

export default function CommitmentCard({ commitment, index, icon: Icon }: CommitmentCardProps) {
  return (
    <div
      className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mr-4 p-2 bg-primary/10 rounded-full flex-shrink-0">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <p className="text-gray-700">{commitment}</p>
    </div>
  )
}
