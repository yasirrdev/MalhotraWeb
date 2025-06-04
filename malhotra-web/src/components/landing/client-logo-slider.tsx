"use client";

import Image from "next/image";
import SectionHeader from "@/components/about/sectionHeader";

interface Client {
  name: string;
  logo: string;
}

interface ClientLogoSliderProps {
  headerClientSection: {
    title: string;
    description?: string;
  };
  clients: Client[];
}

export default function ClientLogoSlider({
  headerClientSection,
  clients,
}: ClientLogoSliderProps) {
  const priorityKeys = [
    "yazaki",
    "aptiv",
    "dhoot",
    "fme",
    "hesto",
    "naipno",
    "unominda",
  ];

  const topClients = clients.filter((c) =>
    priorityKeys.includes(c.name.toLowerCase())
  );
  const bottomClients = clients.filter(
    (c) => !priorityKeys.includes(c.name.toLowerCase())
  );

  const topItems = [...topClients, ...topClients];
  const bottomItems = [...bottomClients, ...bottomClients];

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
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title={headerClientSection.title}
          description={headerClientSection.description}
        />

        <div className="space-y-8 mt-8">
          {renderRow(topItems, "top")}
          {renderRow(bottomItems, "bottom")}
        </div>
      </div>

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
    </section>
  );
}
