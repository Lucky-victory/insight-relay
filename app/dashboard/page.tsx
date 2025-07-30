"use client"

import { StatCard } from "@/components/dashboard/stat-card"
import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#F3F4F6] mb-2">Dashboard</h1>
        <p className="text-[#9CA3AF]">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          change="+12.5%"
          trend="up"
          icon={<DollarSign className="w-6 h-6 text-[#2EC8C3]" />}
        />
        <StatCard
          title="Active Users"
          value="2,350"
          change="+8.2%"
          trend="up"
          icon={<Users className="w-6 h-6 text-[#2EC8C3]" />}
        />
        <StatCard
          title="Orders"
          value="1,234"
          change="-2.4%"
          trend="down"
          icon={<ShoppingCart className="w-6 h-6 text-[#2EC8C3]" />}
        />
        <StatCard
          title="Conversion Rate"
          value="3.24%"
          change="+0.8%"
          trend="up"
          icon={<Activity className="w-6 h-6 text-[#2EC8C3]" />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
          <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">Revenue Trend</h3>
          <div className="h-64 flex items-center justify-center text-[#9CA3AF]">
            Chart placeholder - Revenue over time
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
          <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">User Activity</h3>
          <div className="h-64 flex items-center justify-center text-[#9CA3AF]">Chart placeholder - User activity</div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
        <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">Live Activity Feed</h3>
        <div className="space-y-4">
          {[
            { time: "2 min ago", event: "New user registered", type: "user" },
            { time: "5 min ago", event: "Payment received: $299", type: "payment" },
            { time: "12 min ago", event: "Alert triggered: High traffic", type: "alert" },
            { time: "18 min ago", event: "Report generated", type: "report" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-[#F3F4F6]/5">
              <div className="w-2 h-2 bg-[#2EC8C3] rounded-full"></div>
              <div className="flex-1">
                <p className="text-[#F3F4F6] text-sm">{activity.event}</p>
                <p className="text-[#9CA3AF] text-xs">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
