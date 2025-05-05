import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle, Factory, Globe, MapPin, Phone, Send, Truck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import CounterAnimation from "@/components/landing/counter-animation"
import ProductCard from "@/components/landing/product-card"
import CertificationCarousel from "@/components/landing/certification-carrousel"
import ClientLogoSlider from "@/components/landing/client-logo-slider"
import Navbar from "@/components/landing/navbar"

export default function Home() {
  const products = [
    {
      title: "Automotive Cables",
      description: "High-performance cables for the automotive industry with superior durability and reliability.",
      icon: <Truck className="h-10 w-10 text-primary" />,
      link: "/products/automotive",
    },
    {
      title: "Data Communication Cables",
      description: "Advanced data cables designed for fast and reliable transmission in various environments.",
      icon: <Globe className="h-10 w-10 text-primary" />,
      link: "/products/data-communication",
    },
    {
      title: "High-Voltage Cables",
      description: "Industrial-grade high-voltage cables engineered for safety and performance.",
      icon: <Factory className="h-10 w-10 text-primary" />,
      link: "/products/high-voltage",
    },
    {
      title: "Custom Solutions",
      description: "Tailored cable solutions designed to meet your specific requirements and applications.",
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      link: "/products/custom",
    },
  ]

  const coreValues = [
    {
      title: "Quality Excellence",
      description: "Committed to delivering products that exceed industry standards",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: "Innovation",
      description: "Constantly evolving our technology and processes",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Customer Focus",
      description: "Dedicated to understanding and meeting customer needs",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
  ]

  const certifications = [
    { name: "ISO 9001:2015", image: "/placeholder.svg?height=100&width=150" },
    { name: "ISO 14001:2015", image: "/placeholder.svg?height=100&width=150" },
    { name: "IATF 16949", image: "/placeholder.svg?height=100&width=150" },
    { name: "UL Certified", image: "/placeholder.svg?height=100&width=150" },
    { name: "CE Marking", image: "/placeholder.svg?height=100&width=150" },
  ]

  const clients = [
    { name: "Client 1", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Client 2", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Client 3", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Client 4", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Client 5", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Client 6", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Client 7", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Client 8", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <main className="flex min-h-screen flex-col font-montserrat">
      <Navbar />
      {/* Hero Section - Add padding-top to account for fixed navbar */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden pt-20">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Malhotra Cables Manufacturing"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              On the Path of Continuous Improvement
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              20 years of excellence in manufacturing automotive, data-communication, and high-voltage cables.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <CounterAnimation end={100} suffix="+" duration={2} />
                <h3 className="text-xl font-semibold mt-2 text-gray-800">Customers</h3>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <CounterAnimation end={100} suffix="+" duration={2} />
                <h3 className="text-xl font-semibold mt-2 text-gray-800">Vendors</h3>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <CounterAnimation end={1000} suffix="+" duration={2.5} />
                <h3 className="text-xl font-semibold mt-2 text-gray-800">Employees</h3>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <CounterAnimation end={10} suffix="+" duration={1.5} />
                <h3 className="text-xl font-semibold mt-2 text-gray-800">Locations</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering high-quality cable solutions for diverse industries and applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same */}
      {/* Core Values & Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
              <div className="space-y-8">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 p-2 bg-primary/10 rounded-full">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Certifications</h2>
              <CertificationCarousel certifications={certifications} />
            </div>
          </div>
        </div>
      </section>

      {/* Message from the Director */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Director of Malhotra Cables"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Message from the Director</h2>
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                "At Malhotra Cables, our commitment to quality and innovation has driven our success for over two
                decades. We believe in building lasting relationships with our customers by delivering products that
                exceed expectations. Our journey of continuous improvement reflects our dedication to excellence in
                everything we do."
              </blockquote>
              <p className="text-xl font-semibold text-primary">Rajiv Malhotra</p>
              <p className="text-gray-600">Managing Director, Malhotra Cables</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & OEM Approvals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients & OEM Approvals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Trusted by leading companies across industries</p>
          </div>
          <ClientLogoSlider clients={clients} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Malhotra Cables</h3>
              <p className="text-gray-400 mb-6">
                20 years of excellence in manufacturing automotive, data-communication, and high-voltage cables.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-accent transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Products</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/automotive" className="text-gray-400 hover:text-white transition-colors">
                    Automotive Cables
                  </Link>
                </li>
                <li>
                  <Link href="/products/data" className="text-gray-400 hover:text-white transition-colors">
                    Data Communication Cables
                  </Link>
                </li>
                <li>
                  <Link href="/products/high-voltage" className="text-gray-400 hover:text-white transition-colors">
                    High-Voltage Cables
                  </Link>
                </li>
                <li>
                  <Link href="/products/custom" className="text-gray-400 hover:text-white transition-colors">
                    Custom Solutions
                  </Link>
                </li>
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
    </main>
  )
}
