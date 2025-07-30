import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { CTABanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D11] text-[#F3F4F6]">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  )
}
