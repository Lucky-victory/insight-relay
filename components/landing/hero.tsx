"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4B3D8C]/20 via-[#0D0D11] to-[#4bf8f3]/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-[#4B3D8C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#4bf8f3]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#4B3D8C]/20 backdrop-blur-md border border-[#4B3D8C]/30 mb-6">
            <Zap className="w-4 h-4 text-[#4bf8f3]" />
            <span className="text-sm text-[#9CA3AF]">
              Real-time Business Insights
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F3F4F6] via-[#4bf8f3] to-[#4B3D8C] bg-clip-text text-transparent leading-tight">
            Transform Data Into
            <br />
            Actionable Insights
          </h1>

          <p className="text-xl md:text-2xl text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
            Automated alerts, scheduled reports, and engagement analytics
            designed for SMBs and growth-stage companies ready to scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
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
            className="border-[#4bf8f3]/50 text-[#4bf8f3] hover:bg-[#4bf8f3]/10 px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-md transition-all duration-300 bg-transparent"
            asChild
          >
            <Link href="#features">View Demo</Link>
          </Button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: BarChart3,
              title: "Real-time Analytics",
              desc: "Live business metrics",
            },
            {
              icon: Zap,
              title: "Smart Alerts",
              desc: "Automated notifications",
            },
            {
              icon: TrendingUp,
              title: "Growth Insights",
              desc: "Actionable recommendations",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 hover:border-[#4bf8f3]/30 transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-[#4bf8f3] mb-3 mx-auto" />
              <h3 className="font-semibold text-[#F3F4F6] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
