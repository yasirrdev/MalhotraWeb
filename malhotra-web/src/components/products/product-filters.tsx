"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Category {
  id: string
  name: string
}

interface ProductFiltersProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
  onSearch: (searchTerm: string) => void
}

export default function ProductFilters({
  categories,
  activeCategory,
  onCategoryChange,
  onSearch,
}: ProductFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex overflow-x-auto pb-2 md:pb-0">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 whitespace-nowrap mr-2 rounded-md ${
                activeCategory === category.id ? "tab-active" : "tab-inactive"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <form onSubmit={handleSearch} className="flex items-center ml-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
