"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  key: string
  label: string
  href?: string
  items?: { key: string; label: string; href: string }[]
}

export default function Navbar() {
  const [items, setItems] = useState<NavItem[]>([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdownKey, setOpenDropdownKey] = useState<string | null>(null)
  const [mobileDropdownKey, setMobileDropdownKey] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    fetch("/data/navbar/navbar.json")
      .then(res => res.json())
      .then((json: NavItem[]) => setItems(json))
      .catch(err => console.error("Error cargando navbar.json", err))
  }, [])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        openDropdownKey &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpenDropdownKey(null)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [openDropdownKey])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdownKey(null)
        setMobileDropdownKey(null)
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300",
      isScrolled && "shadow-sm"
    )}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 py-4">
            <Image
              src="/landing/images/MalhotraLogo.webp"
              alt="Malhotra Cables Logo"
              width={120}
              height={30}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {items.map(item =>
              item.items ? (
                <div key={item.key} className="relative">
                  <button
                    ref={buttonRef}
                    onClick={() =>
                      setOpenDropdownKey(openDropdownKey === item.key ? null : item.key)
                    }
                    className="flex items-center text-gray-800 hover:text-primary font-semibold text-sm py-2 px-1"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {openDropdownKey === item.key && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                    >
                      {item.items.map(sub => (
                        <Link
                          key={sub.key}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-gray-800 hover:text-primary hover:bg-gray-50"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={item.href!}
                  className="text-gray-800 hover:text-primary font-semibold text-sm py-2 px-1"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/landing/images/MalhotraLogo.webp"
              alt="Malhotra Cables Logo"
              width={180}
              height={40}
            />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-md">
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        <nav className="px-4 sm:px-6 pt-8 pb-6 h-[calc(100%-5rem)] overflow-y-auto">
          <div className="space-y-4">
            {items.map(item =>
              item.items ? (
                <div key={item.key}>
                  <button
                    onClick={() =>
                      setMobileDropdownKey(mobileDropdownKey === item.key ? null : item.key)
                    }
                    className="flex items-center justify-between w-full py-3 px-4 font-semibold text-lg text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform duration-200",
                        mobileDropdownKey === item.key && "rotate-180"
                      )}
                    />
                  </button>
                  {mobileDropdownKey === item.key && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.items.map(sub => (
                        <Link
                          key={sub.key}
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 px-4 text-base text-gray-800 hover:text-primary hover:bg-gray-50"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={item.href!}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 font-semibold text-lg text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
