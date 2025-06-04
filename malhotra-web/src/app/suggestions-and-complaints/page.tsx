import Image from "next/image"
import SuggestionsForm from "@/components/suggestions/suggestions-form"

export const metadata = {
  title: "Suggestions and Complaints - Malhotra Cables",
  description: "Submit your product-related requests, suggestions, or complaints. We will respond shortly.",
}

export default function SuggestionsAndComplaintsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/products/cables-banner.jpg"
          alt="Suggestions and Complaints"
          fill
          sizes="100vw"
          priority
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 flex flex-col justify-center z-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Suggestions and Complaints</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl">
              Please fill out the form below to communicate your product-related requests and suggestions or complaints.
              We will respond shortly.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Feedback</h2>
              <SuggestionsForm />
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">Email</h4>
                  <p className="text-gray-700">info@malhotracables.com</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary mb-2">Phone</h4>
                  <p className="text-gray-700">+91 11 2345 6789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
