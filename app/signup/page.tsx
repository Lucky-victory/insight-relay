"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart3, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AppLogo } from "@/components/ui/app-logo";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D11] flex items-center justify-center px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4B3D8C]/10 via-[#0D0D11] to-[#4bf8f3]/5" />

      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#4bf8f3]/5 rounded-full blur-3xl"
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="p-8 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 shadow-xl">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <AppLogo />{" "}
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#F3F4F6] mb-2">
              Create your account
            </h1>
            <p className="text-[#9CA3AF]">Start your 14-day free trial today</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-[#F3F4F6]">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  placeholder="John"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-[#F3F4F6]">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Doe"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#F3F4F6]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#F3F4F6]">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] hover:text-[#4bf8f3] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 rounded border-[#F3F4F6]/20"
              />
              <label className="text-sm text-[#9CA3AF]">
                I agree to the{" "}
                <Link href="/terms" className="text-[#4bf8f3] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-[#4bf8f3] hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl h-12 font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              asChild
            >
              <Link href="/onboarding">Create Account</Link>
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-[#9CA3AF]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#4bf8f3] hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
