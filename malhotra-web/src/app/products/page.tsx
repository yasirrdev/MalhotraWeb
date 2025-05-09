"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Filter, Search } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import ProductGrid from "@/components/products/product-grid"
import productsData from "@/data/data"
import type { ProductProps } from "@/components/products/product-card"

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>(productsData)

  const categories = [
    { id: "all", name: "All Products" },
    { id: "Automotive Cable", name: "Automotive Cable" },
    { id: "Data Communication Cable", name: "Data Communication Cable" },
    { id: "Speciality Cable", name: "Speciality Cable" },
    { id: "High Voltage Cable", name: "High Voltage Cable" },
  ]

  useEffect(() => {
    let filtered = productsData

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((product) => product.category === activeCategory)
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(term) ||
          product.cableType.toLowerCase().includes(term) ||
          product.insulationMaterial.toLowerCase().includes(term),
      )
    }

    setFilteredProducts(filtered)
  }, [activeCategory, searchTerm])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] overflow-hidden mb-12">
        <div className="relative w-full h-[300px] overflow-hidden mb-12">
          <Image
            src="/products/cables-banner.jpg"
            alt="Our Products"
            fill
            sizes="100vw"
            priority
            className="object-cover"
            quality={85}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Our Products</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Delivering high-quality cable solutions for diverse industries and applications.
          </p>
        </div>
      </div>

      {/* Browse Products Section */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold heading-primary">Browse Our Products</h2>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <form onSubmit={handleSearch} className="relative flex-grow md:flex-grow-0">
              <Input
                type="text"
                placeholder="Search..."
                className="w-full md:w-[300px] pr-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                <Search className="h-4 w-4" />
              </Button>
            </form>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Sort By</span>
            </Button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide gap-0 mb-8">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`tab ${index === 0 ? "rounded-l" : ""} ${
                index === categories.length - 1 ? "rounded-r" : ""
              } ${activeCategory === category.id ? "tab-active" : "tab-inactive"}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  )
}
