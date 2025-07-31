"use client";

import type React from "react";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

export function StatCard({ title, value, change, trend, icon }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 hover:border-[#4bf8f3]/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-[#4B3D8C]/20">{icon}</div>
        <div
          className={`flex items-center gap-1 text-sm ${trend === "up" ? "text-[#4bf8f3]" : "text-red-400"}`}
        >
          {trend === "up" ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          {change}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#F3F4F6] mb-1">{value}</h3>
        <p className="text-[#9CA3AF] text-sm">{title}</p>
      </div>
    </motion.div>
  );
}
