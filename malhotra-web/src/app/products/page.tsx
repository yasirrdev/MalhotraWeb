"use client";

import React, { useState, useEffect } from "react";
import { Filter, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/products/product-grid";
import type { ProductProps } from "@/components/products/product-card";
import { useLanguage } from "@/context/languageContext";

export default function ProductsPage() {
  const { lang } = useLanguage();
  const [productsData, setProductsData] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: lang === "en" ? "All Products" : "Tüm Ürünler" },
    { id: "Automotive Cable", name: lang === "en" ? "Automotive Cable" : "Otomotiv Kablosu" },
    { id: "Data Communication Cable", name: lang === "en" ? "Data Communication Cable" : "Veri İletişim Kablosu" },
    { id: "Speciality Cable", name: lang === "en" ? "Speciality Cable" : "Özel Kablosu" },
    { id: "High Voltage Cable", name: lang === "en" ? "High Voltage Cable" : "Yüksek Gerilim Kablosu" },
  ];

  useEffect(() => {
    fetch(`/data/products/dataProducts${lang.toUpperCase()}.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data: ProductProps[]) => {
        setProductsData(data);
        setFilteredProducts(data);
      })
      .catch(console.error);
  }, [lang]);

  useEffect(() => {
    let list = [...productsData];
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.cableType.toLowerCase().includes(term) ||
          p.insulationMaterial.toLowerCase().includes(term)
      );
    }
    setFilteredProducts(list);
  }, [productsData, activeCategory, searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="relative w-full h-[300px] overflow-hidden mb-12">
        <Image
          src="/products/cablesBanner.png"
          alt={lang === "en" ? "Our Products" : "Ürünlerimiz"}
          fill
          sizes="100vw"
          priority
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {lang === "en" ? "Our Products" : "Ürünlerimiz"}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            {lang === "en"
              ? "Delivering high-quality cable solutions for diverse industries and applications."
              : "Çeşitli endüstriler ve uygulamalar için yüksek kaliteli kablo çözümleri sunuyoruz."}
          </p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold heading-primary">
            {lang === "en" ? "Browse Our Products" : "Ürünlerimizi Keşfedin"}
          </h2>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <form onSubmit={handleSearch} className="relative flex-grow md:flex-grow-0">
              <Input
                type="text"
                placeholder={lang === "en" ? "Search..." : "Ara..."}
                className="w-full md:w-[300px] pr-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>

            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">
                {lang === "en" ? "Sort By" : "Sırala"}
              </span>
            </Button>
          </div>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-0 mb-8">
          {categories.map((category, idx) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={[
                "tab",
                idx === 0 && "rounded-l",
                idx === categories.length - 1 && "rounded-r",
                activeCategory === category.id ? "tab-active" : "tab-inactive",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {category.name}
            </button>
          ))}
        </div>

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
