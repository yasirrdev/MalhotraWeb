"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Send,
} from "lucide-react"

interface FooterData {
  company: {
    name: string
    description: string
    social: { key: string; url: string }[]
  }
  quickLinks: { key: string; label: string; href: string }[]
  productLinks: { key: string; label: string; href: string }[]
  contact: { address: string; phone: string; email: string }
}

export default function Footer() {
  const [data, setData] = useState<FooterData | null>(null)

  useEffect(() => {
    fetch("/data/footer/dataFooter.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  if (!data) return null

  const socialIcons: Record<string, React.ComponentType<any>> = {
    instagram: Instagram,
    twitter: Twitter,
    facebook: Facebook,
    linkedin: Linkedin,
  }

  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h3 className="text-xl font-bold mb-6">{data.company.name}</h3>
            <p className="text-gray-300 mb-6">{data.company.description}</p>
            <div className="flex space-x-4">
              {data.company.social.map((s) => {
                const Icon = socialIcons[s.key] || Instagram
                return (
                  <a
                    title="a"
                    key={s.key}
                    href={s.url}
                    className="text-white hover:text-secondary transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {data.quickLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {data.productLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-300">{data.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-300">{data.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Send className="h-6 w-6 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-300">{data.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-primary mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Malhotra Cables. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
