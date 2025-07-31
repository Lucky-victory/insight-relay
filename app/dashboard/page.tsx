"use client";

import { StatCard } from "@/components/dashboard/stat-card";
import { DollarSign, Users, ShoppingCart, Activity } from "lucide-react";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
  { month: "Jul", revenue: 7000 },
];

const userData = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 220 },
  { month: "Mar", users: 280 },
  { month: "Apr", users: 250 },
  { month: "May", users: 320 },
  { month: "Jun", users: 300 },
  { month: "Jul", users: 350 },
];
export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#F3F4F6] mb-2">Dashboard</h1>
        <p className="text-[#9CA3AF]">
          Welcome back! Here's what's happening with your business.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          change="+12.5%"
          trend="up"
          icon={<DollarSign className="w-6 h-6 text-[#4bf8f3]" />}
        />
        <StatCard
          title="Active Users"
          value="2,350"
          change="+8.2%"
          trend="up"
          icon={<Users className="w-6 h-6 text-[#4bf8f3]" />}
        />
        <StatCard
          title="Orders"
          value="1,234"
          change="-2.4%"
          trend="down"
          icon={<ShoppingCart className="w-6 h-6 text-[#4bf8f3]" />}
        />
        <StatCard
          title="Conversion Rate"
          value="3.24%"
          change="+0.8%"
          trend="up"
          icon={<Activity className="w-6 h-6 text-[#4bf8f3]" />}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:6">
        <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
          <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">
            Revenue Trend
          </h3>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-64 w-full"
          >
            <LineChart
              data={revenueData}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                stroke="hsl(var(--muted-foreground))"
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Line
                dataKey="revenue"
                type="monotone"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>

        <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
          <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">
            User Activity
          </h3>

          <ChartContainer
            config={{
              users: {
                label: "Users",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-64 w-full"
          >
            <BarChart
              data={userData}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                stroke="hsl(var(--muted-foreground))"
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="users" fill="hsl(var(--chart-2))" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
        <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">
          Live Activity Feed
        </h3>
        <div className="space-y-4">
          {[
            { time: "2 min ago", event: "New user registered", type: "user" },
            {
              time: "5 min ago",
              event: "Payment received: $299",
              type: "payment",
            },
            {
              time: "12 min ago",
              event: "Alert triggered: High traffic",
              type: "alert",
            },
            { time: "18 min ago", event: "Report generated", type: "report" },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-xl bg-[#F3F4F6]/5"
            >
              <div className="w-2 h-2 bg-[#4bf8f3] rounded-full"></div>
              <div className="flex-1">
                <p className="text-[#F3F4F6] text-sm">{activity.event}</p>
                <p className="text-[#9CA3AF] text-xs">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
