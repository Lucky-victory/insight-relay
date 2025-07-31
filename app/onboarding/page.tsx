"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart3, Building, Database, Bell, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const steps = [
  { id: 1, name: "Company Info", icon: Building },
  { id: 2, name: "Data Sources", icon: Database },
  { id: 3, name: "Alerts & Reports", icon: Bell },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D11] px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <BarChart3 className="w-8 h-8 text-accent" />
          <span className="text-2xl font-bold text-[#F3F4F6]">
            InsightRelay
          </span>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    currentStep >= step.id
                      ? "bg-[#4B3D8C] border-[#4B3D8C] text-white"
                      : "border-[#F3F4F6]/20 text-[#9CA3AF]"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                <span className="text-sm text-[#9CA3AF] mt-2">{step.name}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-24 h-0.5 mx-4 transition-all duration-300 ${
                    currentStep > step.id ? "bg-[#4B3D8C]" : "bg-[#F3F4F6]/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 shadow-xl">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#F3F4F6] mb-2">
                    Tell us about your company
                  </h2>
                  <p className="text-[#9CA3AF]">
                    Help us customize your experience
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-[#F3F4F6]">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      placeholder="Acme Corp"
                      className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-[#F3F4F6]">
                        Industry
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl h-12">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D0D11] border-[#F3F4F6]/20">
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companySize" className="text-[#F3F4F6]">
                        Company Size
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl h-12">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0D0D11] border-[#F3F4F6]/20">
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">
                            51-200 employees
                          </SelectItem>
                          <SelectItem value="201+">201+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-[#F3F4F6]">
                      Website (Optional)
                    </Label>
                    <Input
                      id="website"
                      placeholder="https://acmecorp.com"
                      className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#F3F4F6] mb-2">
                    Connect your data sources
                  </h2>
                  <p className="text-[#9CA3AF]">
                    Choose the platforms you want to monitor
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Stripe", desc: "Payment processing", logo: "💳" },
                    {
                      name: "Google Analytics",
                      desc: "Website analytics",
                      logo: "📊",
                    },
                    {
                      name: "Shopify",
                      desc: "E-commerce platform",
                      logo: "🛍️",
                    },
                    { name: "HubSpot", desc: "CRM & Marketing", logo: "🎯" },
                    { name: "Mailchimp", desc: "Email marketing", logo: "📧" },
                    { name: "Slack", desc: "Team communication", logo: "💬" },
                  ].map((integration) => (
                    <div
                      key={integration.name}
                      className="p-4 rounded-xl bg-[#F3F4F6]/5 border border-[#F3F4F6]/10 hover:border-accent/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{integration.logo}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#F3F4F6]">
                            {integration.name}
                          </h3>
                          <p className="text-sm text-[#9CA3AF]">
                            {integration.desc}
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          className="rounded border-[#F3F4F6]/20"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#F3F4F6] mb-2">
                    Set up alerts & reports
                  </h2>
                  <p className="text-[#9CA3AF]">
                    Configure your notification preferences
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#F3F4F6]">
                      Alert Preferences
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Revenue drops below threshold",
                        "Website traffic spikes",
                        "New customer signups",
                        "Payment failures",
                      ].map((alert) => (
                        <label
                          key={alert}
                          className="flex items-center gap-3 text-[#9CA3AF]"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-[#F3F4F6]/20"
                            defaultChecked
                          />
                          {alert}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-[#F3F4F6]">
                      Report Frequency
                    </h3>
                    <Select>
                      <SelectTrigger className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl h-12">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0D0D11] border-[#F3F4F6]/20">
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="notificationEmail"
                      className="text-[#F3F4F6]"
                    >
                      Notification Email
                    </Label>
                    <Input
                      id="notificationEmail"
                      type="email"
                      placeholder="alerts@acmecorp.com"
                      className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="border-[#F3F4F6]/20 text-[#F3F4F6] hover:bg-[#F3F4F6]/10 rounded-xl px-6 bg-transparent"
              >
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  onClick={nextStep}
                  className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl px-6"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl px-6"
                  asChild
                >
                  <Link href="/dashboard">Complete Setup</Link>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
