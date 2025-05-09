import Image from "next/image"

export interface ProductProps {
  id: string
  name: string
  cableType: string
  insulationMaterial: string
  temperatureRange: string
  referenceStandard: string
  image: string
  category?: string
}

export default function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="card">
      <div className="relative h-50 p-14 flex justify-center items-center bg-background-tertiary">
        <Image
          src={product.image || "/placeholder.svg?height=120&width=300"}
          alt={product.name}
          width={240}
          height={80}
          className="object-contain max-h-28"
        />
      </div>

      <div className="card-body">
        <h3 className="text-base font-semibold mb-3 line-clamp-2 text-primary">{product.name}</h3>

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <p className="text-muted">Cable Type</p>
            <p className="font-medium">{product.cableType}</p>
          </div>
          <div>
            <p className="text-muted">Insulation Material</p>
            <p className="font-medium">{product.insulationMaterial}</p>
          </div>
          <div>
            <p className="text-muted">Temperature Range</p>
            <p className="font-medium">{product.temperatureRange}</p>
          </div>
          <div>
            <p className="text-muted">Reference Standard</p>
            <p className="font-medium">{product.referenceStandard}</p>
          </div>
        </div>
      </div>

      {/* <div className="card-footer">
        <Link
          href={`/products/${product.id}`}
          className="btn-primary block w-full text-center"
        >
          View Details
        </Link>
      </div> */}
    </div>
  )
}
