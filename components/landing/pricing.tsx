"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Up to 5 data sources",
      "10 custom alerts",
      "Weekly reports",
      "Email support",
      "Basic analytics",
      "1 user account",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    monthlyPrice: 79,
    yearlyPrice: 790,
    features: [
      "Up to 20 data sources",
      "Unlimited alerts",
      "Daily reports",
      "Priority support",
      "Advanced analytics",
      "5 user accounts",
      "Custom integrations",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    features: [
      "Unlimited data sources",
      "Unlimited alerts",
      "Real-time reports",
      "24/7 phone support",
      "AI-powered insights",
      "Unlimited users",
      "White-label options",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F3F4F6] to-[#4bf8f3] bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a
            14-day free trial.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span
              className={`text-lg ${
                !isYearly ? "text-[#F3F4F6]" : "text-[#9CA3AF]"
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-[#4B3D8C]"
            />
            <span
              className={`text-lg ${
                isYearly ? "text-[#F3F4F6]" : "text-[#9CA3AF]"
              }`}
            >
              Yearly
            </span>
            <div className="px-3 py-1 rounded-full bg-[#4bf8f3]/20 text-[#4bf8f3] text-sm font-medium">
              Save 17%
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute z-10 -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-[#4B3D8C] to-[#4bf8f3] text-white text-sm font-medium">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 h-full ${
                  plan.popular
                    ? "bg-[#4B3D8C]/10 border-[#4B3D8C]/50 shadow-xl shadow-[#4B3D8C]/20"
                    : "bg-[#F3F4F6]/5 border-[#F3F4F6]/10 hover:border-[#4bf8f3]/30"
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#F3F4F6] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-[#9CA3AF] mb-6">{plan.description}</p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-[#F3F4F6]">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[#9CA3AF]">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>

                  {isYearly && (
                    <div className="text-sm text-[#4bf8f3] mt-1">
                      $
                      {Math.round(
                        (plan.monthlyPrice * 12 - plan.yearlyPrice) / 12
                      )}
                      /month saved
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#4bf8f3] flex-shrink-0" />
                      <span className="text-[#9CA3AF]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white shadow-xl hover:shadow-2xl hover:scale-105"
                      : "bg-[#F3F4F6]/10 hover:bg-[#4bf8f3]/20 text-[#4bf8f3] border border-[#4bf8f3]/30"
                  }`}
                  asChild
                >
                  <Link href="/signup">Start Free Trial</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
