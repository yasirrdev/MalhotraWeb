import type { Metadata } from "next"
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Products – Malhotra",
  description: "Explore our range of high-quality cables and wires.",
}

export default function ProductsLayout({
  children,
}: {
  children: ReactNode
}) {
  return <div className="default-class">{children}</div>
}
