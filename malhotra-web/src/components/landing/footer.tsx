import Link from "next/link"
import { Instagram, Twitter, Facebook, Linkedin, MapPin, Phone, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Malhotra Cables</h3>
            <p className="text-gray-400 mb-6">
              20 years of excellence in manufacturing automotive, data-communication, and high-voltage cables.
            </p>
            <div className="flex space-x-4">
              <a title="Instagram" href="#" className="text-white hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a title="Twitter" href="#" className="text-white hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a title="Facebook" href="#" className="text-white hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a title="LinkedIn" href="#" className="text-white hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products/automotive" className="text-gray-400 hover:text-white">Automotive Cables</Link></li>
              <li><Link href="/products/data-communication" className="text-gray-400 hover:text-white">Data Communication Cables</Link></li>
              <li><Link href="/products/high-voltage" className="text-gray-400 hover:text-white">High-Voltage Cables</Link></li>
              <li><Link href="/products/custom" className="text-gray-400 hover:text-white">Custom Solutions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-400">123 Industrial Area, Delhi NCR, India - 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 11 2345 6789</span>
              </li>
              <li className="flex items-center">
                <Send className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@malhotracables.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Malhotra Cables. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}