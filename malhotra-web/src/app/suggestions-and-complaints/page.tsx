import HeroSection from "@/components/suggestions/hero-section"
import SuggestionsForm from "@/components/suggestions/suggestions-form"
import ContactSection from "@/components/suggestions/contact-section"
import WhyChooseUsSection from "@/components/suggestions/why-choose-us"
import texts from "@/../public/data/suggestions/suggestions.json"

export const metadata = {
  title: texts.metadata.title,
  description: texts.metadata.description,
}

export default function SuggestionsAndComplaintsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection texts={texts.hero} />

      <section id="feedback-form" className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <SuggestionsForm texts={texts.form} />
          </div>
        </div>
      </section>

      <ContactSection texts={texts.contact} />

      <WhyChooseUsSection texts={texts.whyChooseUs} />
    </div>
  )
}
