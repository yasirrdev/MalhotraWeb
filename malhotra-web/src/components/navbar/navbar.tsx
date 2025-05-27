"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)
  const aboutButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node) &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(event.target as Node)
      ) {
        setIsAboutDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAboutDropdownOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => document.removeEventListener("keydown", handleEscKey)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300",
        isScrolled ? "shadow-sm" : "",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 py-4">
            <Image
              src="/landing/images/MalhotraLogo.webp"
              alt="Malhotra Cables Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-primary font-semibold transition-colors duration-150 text-sm py-2 px-1"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-800 hover:text-primary font-semibold transition-colors duration-150 text-sm py-2 px-1"
            >
              Products
            </Link>
            <div className="relative">
              <button
                ref={aboutButtonRef}
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="flex items-center text-gray-800 hover:text-primary font-semibold transition-colors duration-150 text-sm py-2 px-1"
              >
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAboutDropdownOpen && (
                <div
                  ref={aboutDropdownRef}
                  className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                >
                  <Link
                    href="/about/strategyMission&Vision"
                    className="block px-4 py-3 text-sm text-gray-800 hover:text-primary hover:bg-gray-50 transition-colors duration-150"
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    href="/about/policy"
                    className="block px-4 py-3 text-sm text-gray-800 hover:text-primary hover:bg-gray-50 transition-colors duration-150"
                  >
                    Policy
                  </Link>
                  <Link
                    href="/about/workingStandardsPolicy"
                    className="block px-4 py-3 text-sm text-gray-800 hover:text-primary hover:bg-gray-50 transition-colors duration-150"
                  >
                    Standards Policy
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/suggestions-and-complaints"
              className="text-gray-800 hover:text-primary font-semibold transition-colors duration-150 text-sm py-2 px-1"
            >
              Suggestions & Complaints
            </Link>
            <Link
              href="/career"
              className="text-gray-800 hover:text-primary font-semibold transition-colors duration-150 text-sm py-2 px-1"
            >
              Career
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary hover:bg-gray-100 transition-colors duration-150"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b">
          <Link href="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/placeholder.svg?height=40&width=180"
              alt="Malhotra Cables Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-4 sm:px-6 pt-8 pb-6 h-[calc(100%-5rem)] overflow-y-auto">
          <div className="space-y-4">
            <Link
              href="/"
              className="block py-3 px-4 text-lg font-semibold text-gray-800 hover:text-primary rounded-md hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block py-3 px-4 text-lg font-semibold text-gray-800 hover:text-primary rounded-md hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <div>
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="flex items-center justify-between w-full py-3 px-4 text-lg font-semibold text-gray-800 hover:text-primary rounded-md hover:bg-gray-50 transition-colors duration-150"
              >
                About
                <ChevronDown
                  className={cn("h-5 w-5 transition-transform duration-200", isAboutDropdownOpen ? "rotate-180" : "")}
                />
              </button>
              <div className={cn("pl-4 space-y-2 mt-2", isAboutDropdownOpen ? "block" : "hidden")}>
                <Link
                  href="/about/strategyMission&Vision"
                  className="block py-3 px-4 text-base font-medium text-gray-800 hover:text-primary rounded-md hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mission & Vision
                </Link>
                <Link
                  href="/about/policy"
                  className="block py-3 px-4 text-base font-medium text-gray-800 hover:text-primary rounded-md hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Policy
                </Link>
                <Link
                  href="/about/workingStandardsPolicy"
                  className="block py-3 px-4 text-base font-medium text-gray-800 hover:text-primary rounded-md hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Standards Policy
                </Link>
              </div>
            </div>
            <Link
              href="/suggestions-and-complaints"
              className="block py-3 px-4 text-lg font-semibold text-gray-800 hover:text-primary rounded-md hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Suggestions & Complaints
            </Link>
            <Link
              href="/career"
              className="block py-3 px-4 text-lg font-semibold text-gray-800 hover:text-primary rounded-md hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Career
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
