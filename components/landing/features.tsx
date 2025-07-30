"use client"

import { motion } from "framer-motion"
import { Bell, Calendar, BarChart3, Zap, Mail, Shield } from "lucide-react"

const features = [
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Get notified instantly when your key metrics hit critical thresholds. Set up custom rules and receive alerts via email or webhook.",
    gradient: "from-[#4B3D8C] to-[#2EC8C3]",
  },
  {
    icon: Calendar,
    title: "Scheduled Reports",
    description:
      "Automate your reporting workflow with daily, weekly, or monthly reports delivered directly to your team's inbox.",
    gradient: "from-[#2EC8C3] to-[#4B3D8C]",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Monitor your business performance with live dashboards and interactive charts that update in real-time.",
    gradient: "from-[#4B3D8C] to-[#2EC8C3]",
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description: "Transform complex data into actionable insights with AI-powered analysis and trend detection.",
    gradient: "from-[#2EC8C3] to-[#4B3D8C]",
  },
  {
    icon: Mail,
    title: "Engagement Tracking",
    description:
      "Track email open rates, click-through rates, and engagement metrics to optimize your communication strategy.",
    gradient: "from-[#4B3D8C] to-[#2EC8C3]",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level security with end-to-end encryption, SSO integration, and compliance with industry standards.",
    gradient: "from-[#2EC8C3] to-[#4B3D8C]",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F3F4F6] to-[#2EC8C3] bg-clip-text text-transparent">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
            Everything you need to turn your data into actionable insights and drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 hover:border-[#2EC8C3]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#2EC8C3]/10 h-full">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4 group-hover:text-[#2EC8C3] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-[#9CA3AF] leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
