"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  BarChart3,
  Home,
  Bell,
  Calendar,
  TrendingUp,
  Settings,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AppLogo } from "../ui/app-logo";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Alerts", href: "/alerts", icon: Bell },
  { name: "Scheduler", href: "/scheduler", icon: Calendar },
  { name: "Analytics", href: "/analytics", icon: TrendingUp },
  { name: "Integrations", href: "/integrations", icon: Zap },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <motion.div
      initial={false}
      animate={{ width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen bg-[#F3F4F6]/5 backdrop-blur-md border-r border-[#F3F4F6]/10 flex flex-col"
    >
      {/* Header */}
      <div className="p-6 border-b border-[#F3F4F6]/10">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <AppLogo />
            </div>
          )}
          {collapsed && (
            <div className="flex justify-center w-full">
              <AppLogo
                showLarge={false}
                width={40}
                height={32}
                className="w-10 h-8"
              />
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-[#4B3D8C]/20 text-[#2EC8C3] border border-[#4B3D8C]/30"
                      : "text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#F3F4F6]/5"
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                  {collapsed && (
                    <div className="absolute left-16 bg-[#0D0D11] text-[#F3F4F6] px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 border border-[#F3F4F6]/10">
                      {item.name}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Toggle Button */}
      <div className="p-4 border-t border-[#F3F4F6]/10">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="w-full justify-center text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#F3F4F6]/5"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>
    </motion.div>
  );
}
