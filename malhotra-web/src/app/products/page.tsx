"use client"

import { useState, useEffect } from "react"
import ProductFilters from "@/components/products/product-filters"
import ProductGrid from "@/components/products/product-grid"
import productsData from "@/data/data"
import type { ProductProps } from "@/components/products/product-card"

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>(productsData.products)

  useEffect(() => {
    let filtered = productsData.products

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((product) => product.category === activeCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(term) || product.specs.some((spec) => spec.toLowerCase().includes(term)),
      )
    }

    setFilteredProducts(filtered)
  }, [activeCategory, searchTerm])

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-lg mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00607d] to-[#00607d]/80 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/products/cables-banner.jpg')] bg-cover bg-center opacity-50 z-[-1]"></div>
        <div className="relative z-10 h-full flex flex-col justify-center px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Products</h1>
          <p className="text-white text-lg max-w-2xl">
            Browse our comprehensive range of high-quality cables designed for various industrial applications.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Browse Our Products</h2>
        <ProductFilters
          categories={productsData.categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSearch={setSearchTerm}
        />
      </div>

      <ProductGrid products={filteredProducts} />
    </div>
  )
}
