import { Shield } from "lucide-react"

interface PolicyStatementProps {
  statement: string
}

export default function PolicyStatement({ statement }: PolicyStatementProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="bg-primary/10 p-3 rounded-full mr-4">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Policy Statement</h2>
      </div>
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="leading-relaxed">{statement}</p>
      </div>
    </div>
  )
}
