import Image from "next/image"
import Link from "next/link"

export interface ProductProps {
  id: string
  name: string
  image: string
  specs: string[]
  pdf?: string
}

export default function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image || "/placeholder.svg?height=200&width=300"}
          alt={product.name}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-[#00607d]">{product.name}</h3>

        <div className="space-y-1 mb-4 text-sm">
          {product.specs.map((spec, index) => (
            <p key={index} className="text-gray-600">
              {spec}
            </p>
          ))}
        </div>
      </div>

      <div className="p-4 pt-0">
        <Link
          href={`/products/${product.id}`}
          className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-2 rounded transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
