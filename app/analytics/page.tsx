"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Mail, Eye, MousePointer, Search, Filter } from "lucide-react"

const reports = [
  {
    id: 1,
    name: "Weekly Revenue Report",
    sentDate: "2024-01-15",
    recipients: 25,
    openRate: "68%",
    clickRate: "12%",
    status: "delivered",
  },
  {
    id: 2,
    name: "Monthly Analytics",
    sentDate: "2024-01-10",
    recipients: 15,
    openRate: "72%",
    clickRate: "18%",
    status: "delivered",
  },
  {
    id: 3,
    name: "Daily Performance",
    sentDate: "2024-01-14",
    recipients: 8,
    openRate: "45%",
    clickRate: "8%",
    status: "failed",
  },
]

export default function AnalyticsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [dateRange, setDateRange] = useState("last-30-days")

  const filteredReports = reports.filter((report) => report.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#F3F4F6] mb-2">Engagement Analytics</h1>
        <p className="text-[#9CA3AF]">Track the performance of your sent reports and email engagement.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
          <Input
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
          />
        </div>

        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-48 bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-[#0D0D11] border-[#F3F4F6]/20">
            <SelectItem value="last-7-days">Last 7 days</SelectItem>
            <SelectItem value="last-30-days">Last 30 days</SelectItem>
            <SelectItem value="last-90-days">Last 90 days</SelectItem>
            <SelectItem value="custom">Custom range</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-[#4B3D8C]/20">
              <Mail className="w-5 h-5 text-[#2EC8C3]" />
            </div>
            <h3 className="font-semibold text-[#F3F4F6]">Total Sent</h3>
          </div>
          <div className="text-2xl font-bold text-[#F3F4F6] mb-1">1,247</div>
          <div className="text-sm text-[#2EC8C3]">+12% from last month</div>
        </div>

        <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-[#4B3D8C]/20">
              <Eye className="w-5 h-5 text-[#2EC8C3]" />
            </div>
            <h3 className="font-semibold text-[#F3F4F6]">Avg Open Rate</h3>
          </div>
          <div className="text-2xl font-bold text-[#F3F4F6] mb-1">62%</div>
          <div className="text-sm text-[#2EC8C3]">+3% from last month</div>
        </div>

        <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-[#4B3D8C]/20">
              <MousePointer className="w-5 h-5 text-[#2EC8C3]" />
            </div>
            <h3 className="font-semibold text-[#F3F4F6]">Avg Click Rate</h3>
          </div>
          <div className="text-2xl font-bold text-[#F3F4F6] mb-1">13%</div>
          <div className="text-sm text-[#2EC8C3]">+1% from last month</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
          <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">Open Rate Trend</h3>
          <div className="h-64 flex items-center justify-center text-[#9CA3AF]">
            Chart placeholder - Open rate over time
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
          <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">Click Rate Trend</h3>
          <div className="h-64 flex items-center justify-center text-[#9CA3AF]">
            Chart placeholder - Click rate over time
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
        <h3 className="text-xl font-semibold text-[#F3F4F6] mb-6">Recent Reports</h3>

        <div className="space-y-4">
          {filteredReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 rounded-xl bg-[#F3F4F6]/5 border border-[#F3F4F6]/10 hover:border-[#2EC8C3]/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-[#4B3D8C]/20">
                    <TrendingUp className="w-4 h-4 text-[#2EC8C3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#F3F4F6]">{report.name}</h4>
                    <p className="text-sm text-[#9CA3AF]">Sent on {report.sentDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-sm font-medium text-[#F3F4F6]">{report.recipients}</div>
                    <div className="text-xs text-[#9CA3AF]">Recipients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-[#F3F4F6]">{report.openRate}</div>
                    <div className="text-xs text-[#9CA3AF]">Open Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-[#F3F4F6]">{report.clickRate}</div>
                    <div className="text-xs text-[#9CA3AF]">Click Rate</div>
                  </div>
                  <Badge
                    variant={report.status === "delivered" ? "default" : "destructive"}
                    className={`${
                      report.status === "delivered"
                        ? "bg-[#2EC8C3]/20 text-[#2EC8C3] border-[#2EC8C3]/30"
                        : "bg-red-500/20 text-red-400 border-red-500/30"
                    } rounded-full`}
                  >
                    {report.status}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
