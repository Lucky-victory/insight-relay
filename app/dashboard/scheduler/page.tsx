"use client";

import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Calendar,
  Clock,
  Users,
  Search,
  MoreHorizontal,
} from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Weekly Revenue Report",
    frequency: "Weekly",
    nextRun: "Monday, 9:00 AM",
    recipients: ["team@acme.com", "ceo@acme.com"],
    template: "Revenue Summary",
    status: "active",
  },
  {
    id: 2,
    name: "Monthly Analytics",
    frequency: "Monthly",
    nextRun: "1st of month, 8:00 AM",
    recipients: ["marketing@acme.com"],
    template: "Analytics Overview",
    status: "active",
  },
  {
    id: 3,
    name: "Daily Performance",
    frequency: "Daily",
    nextRun: "Tomorrow, 7:00 AM",
    recipients: ["ops@acme.com"],
    template: "Performance Dashboard",
    status: "paused",
  },
];

export default function SchedulerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#F3F4F6] mb-2">Scheduler</h1>
          <p className="text-[#9CA3AF]">
            Manage your automated reports and delivery schedules.
          </p>
        </div>

        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              Schedule Report
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0D0D11] border-[#F3F4F6]/20 text-[#F3F4F6] max-w-md">
            <DialogHeader>
              <DialogTitle className="text-[#F3F4F6]">
                Schedule New Report
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="reportName" className="text-[#F3F4F6]">
                  Report Name
                </Label>
                <Input
                  id="reportName"
                  placeholder="Enter report name"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency" className="text-[#F3F4F6]">
                  Frequency
                </Label>
                <Select>
                  <SelectTrigger className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl">
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
                <Label htmlFor="template" className="text-[#F3F4F6]">
                  Template
                </Label>
                <Select>
                  <SelectTrigger className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl">
                    <SelectValue placeholder="Select template" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0D0D11] border-[#F3F4F6]/20">
                    <SelectItem value="revenue">Revenue Summary</SelectItem>
                    <SelectItem value="analytics">
                      Analytics Overview
                    </SelectItem>
                    <SelectItem value="performance">
                      Performance Dashboard
                    </SelectItem>
                    <SelectItem value="custom">Custom Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="recipients" className="text-[#F3F4F6]">
                  Recipients
                </Label>
                <Input
                  id="recipients"
                  placeholder="Enter email addresses (comma separated)"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={() => setIsCreateModalOpen(false)}
                  variant="outline"
                  className="flex-1 border-[#F3F4F6]/20 text-[#F3F4F6] hover:bg-[#F3F4F6]/10 rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => setIsCreateModalOpen(false)}
                  className="flex-1 bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl"
                >
                  Schedule Report
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
        <Input
          placeholder="Search reports..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
        />
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 hover:border-[#4bf8f3]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#4B3D8C]/20">
                  <Calendar className="w-5 h-5 text-[#4bf8f3]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F3F4F6] mb-1">
                    {report.name}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm">
                    {report.template} • {report.frequency}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Badge
                  variant={report.status === "active" ? "default" : "secondary"}
                  className={`${
                    report.status === "active"
                      ? "bg-[#4bf8f3]/20 text-[#4bf8f3] border-[#4bf8f3]/30"
                      : "bg-[#9CA3AF]/20 text-[#9CA3AF] border-[#9CA3AF]/30"
                  } rounded-full`}
                >
                  {report.status}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#9CA3AF] hover:text-[#F3F4F6]"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#F3F4F6]/10">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#9CA3AF]" />
                    <span className="text-[#9CA3AF]">
                      Next run:{" "}
                      <span className="text-[#F3F4F6]">{report.nextRun}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#9CA3AF]" />
                    <span className="text-[#9CA3AF]">
                      {report.recipients.length} recipients
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
