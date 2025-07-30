"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BarChart3, Twitter, Linkedin, Github, Mail } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "API", href: "/api" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Help Center", href: "/help" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
    { name: "Cookies", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[#F3F4F6]/10 bg-[#0D0D11]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand and newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-8 h-8 text-[#2EC8C3]" />
              <span className="text-xl font-bold text-[#F3F4F6]">InsightRelay</span>
            </div>
            <p className="text-[#9CA3AF] mb-6 leading-relaxed">
              Transform your business data into actionable insights with real-time analytics, automated alerts, and
              intelligent reporting.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-[#F3F4F6]">Stay updated</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
                />
                <Button className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 rounded-xl px-6">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[#F3F4F6] mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#9CA3AF] hover:text-[#2EC8C3] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#F3F4F6] mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#9CA3AF] hover:text-[#2EC8C3] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#F3F4F6] mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#9CA3AF] hover:text-[#2EC8C3] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#F3F4F6] mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#9CA3AF] hover:text-[#2EC8C3] transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#F3F4F6]/10">
          <p className="text-[#9CA3AF] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} InsightRelay. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://twitter.com"
              className="text-[#9CA3AF] hover:text-[#2EC8C3] transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-[#9CA3AF] hover:text-[#2EC8C3] transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com"
              className="text-[#9CA3AF] hover:text-[#2EC8C3] transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:hello@insightrelay.com"
              className="text-[#9CA3AF] hover:text-[#2EC8C3] transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
