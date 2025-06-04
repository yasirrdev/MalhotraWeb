import type { Metadata } from "next"
import React, { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Mission & Vision - Malhotra",
  description: "Explore our range of high-quality cables and wires.",
}

export default function StrategyLayout({
  children,
}: {
  children: ReactNode
}) {
  return <div className="default-class">{children}</div>
}