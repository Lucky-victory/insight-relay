"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTABanner() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4B3D8C]/20 via-[#0D0D11] to-[#2EC8C3]/20" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#4B3D8C]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#2EC8C3]/20 backdrop-blur-md border border-[#2EC8C3]/30 mb-8">
            <Sparkles className="w-4 h-4 text-[#2EC8C3]" />
            <span className="text-sm text-[#2EC8C3] font-medium">Start Your Free Trial Today</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F3F4F6] via-[#2EC8C3] to-[#4B3D8C] bg-clip-text text-transparent leading-tight">
            Ready to Transform Your
            <br />
            Business Insights?
          </h2>

          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of businesses already using InsightRelay to make data-driven decisions and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              asChild
            >
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-[#2EC8C3]/50 text-[#2EC8C3] hover:bg-[#2EC8C3]/10 px-10 py-4 rounded-2xl text-lg font-semibold backdrop-blur-md transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>

          <div className="mt-8 text-sm text-[#9CA3AF]">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </motion.div>
      </div>
    </section>
  )
}
