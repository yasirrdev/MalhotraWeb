"use client"

import Image from "next/image"

interface ClientLogoSliderProps {
  clients: {
    name: string
    logo: string
  }[]
}

export default function ClientLogoSlider({ clients }: ClientLogoSliderProps) {
  const priorityKeys = [
    "yazaki",
    "aptiv",
    "dhoot",
    "fme",
    "hesto",
    "naipno",
    "unominda"
  ]

  const topClients = clients.filter(c =>
    priorityKeys.includes(c.name.toLowerCase())
  )
  const bottomClients = clients.filter(
    c => !priorityKeys.includes(c.name.toLowerCase())
  )

  const topItems = [...topClients, ...topClients]
  const bottomItems = [...bottomClients, ...bottomClients]

  const renderRow = (items: typeof topItems, rowId: string) => (
    <div key={rowId} className="w-full overflow-hidden">
      <div className="slider-content flex">
        {items.map((client, idx) => (
          <div key={`${rowId}-${idx}`} className="mx-8 flex-shrink-0 group">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center h-24">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={80}
                className="object-contain max-h-16 transition-all duration-600"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-8">
      {renderRow(topItems, "top")}
      {renderRow(bottomItems, "bottom")}

      <style jsx global>{`
        .slider-content {
          width: max-content;       
          display: flex;            
          animation: slide 30s linear infinite;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
