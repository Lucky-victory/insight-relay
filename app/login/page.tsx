"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart3, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AppLogo } from "@/components/ui/app-logo";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D11] flex items-center justify-center px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4B3D8C]/10 via-[#0D0D11] to-[#2EC8C3]/5" />

      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-[#4B3D8C]/5 rounded-full blur-3xl"
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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="p-8 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 shadow-xl">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <AppLogo />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#F3F4F6] mb-2">
              Welcome back
            </h1>
            <p className="text-[#9CA3AF]">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#F3F4F6]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
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
                  placeholder="Enter your password"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] hover:text-[#2EC8C3] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                <input
                  type="checkbox"
                  className="rounded border-[#F3F4F6]/20"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-[#2EC8C3] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl h-12 font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              asChild
            >
              <Link href="/dashboard">Sign In</Link>
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-[#9CA3AF]">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[#2EC8C3] hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
