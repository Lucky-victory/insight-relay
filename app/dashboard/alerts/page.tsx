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
import { Plus, Bell, Mail, Search, MoreHorizontal } from "lucide-react";

const alerts = [
  {
    id: 1,
    name: "Revenue Drop Alert",
    metric: "Total Revenue",
    threshold: "$1,000",
    status: "active",
    lastTriggered: "2 hours ago",
    recipients: ["john@acme.com", "alerts@acme.com"],
  },
  {
    id: 2,
    name: "High Traffic Alert",
    metric: "Website Visitors",
    threshold: "10,000 visitors",
    status: "active",
    lastTriggered: "Never",
    recipients: ["marketing@acme.com"],
  },
  {
    id: 3,
    name: "Low Conversion Rate",
    metric: "Conversion Rate",
    threshold: "2%",
    status: "inactive",
    lastTriggered: "1 day ago",
    recipients: ["sales@acme.com"],
  },
];

export default function AlertsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const filteredAlerts = alerts.filter((alert) =>
    alert.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#F3F4F6] mb-2">Alerts</h1>
          <p className="text-[#9CA3AF]">
            Monitor your key metrics and get notified when thresholds are met.
          </p>
        </div>

        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl">
              <Plus className="w-4 h-4 mr-2" />
              Create Alert
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#0D0D11] border-[#F3F4F6]/20 text-[#F3F4F6] max-w-md">
            <DialogHeader>
              <DialogTitle className="text-[#F3F4F6]">
                Create New Alert
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="alertName" className="text-[#F3F4F6]">
                  Alert Name
                </Label>
                <Input
                  id="alertName"
                  placeholder="Enter alert name"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metric" className="text-[#F3F4F6]">
                  Metric
                </Label>
                <Select>
                  <SelectTrigger className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl">
                    <SelectValue placeholder="Select metric" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0D0D11] border-[#F3F4F6]/20">
                    <SelectItem value="revenue">Total Revenue</SelectItem>
                    <SelectItem value="users">Active Users</SelectItem>
                    <SelectItem value="conversion">Conversion Rate</SelectItem>
                    <SelectItem value="traffic">Website Traffic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="threshold" className="text-[#F3F4F6]">
                  Threshold Value
                </Label>
                <Input
                  id="threshold"
                  placeholder="Enter threshold value"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="recipients" className="text-[#F3F4F6]">
                  Email Recipients
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
                  Create Alert
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
          placeholder="Search alerts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
        />
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {filteredAlerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 hover:border-[#4bf8f3]/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#4B3D8C]/20">
                  <Bell className="w-5 h-5 text-[#4bf8f3]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F3F4F6] mb-1">
                    {alert.name}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm">
                    {alert.metric} • Threshold: {alert.threshold}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Badge
                  variant={alert.status === "active" ? "default" : "secondary"}
                  className={`${
                    alert.status === "active"
                      ? "bg-[#4bf8f3]/20 text-[#4bf8f3] border-[#4bf8f3]/30"
                      : "bg-[#9CA3AF]/20 text-[#9CA3AF] border-[#9CA3AF]/30"
                  } rounded-full`}
                >
                  {alert.status}
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
                <div className="flex items-center gap-4">
                  <span className="text-[#9CA3AF]">
                    Last triggered:{" "}
                    <span className="text-[#F3F4F6]">
                      {alert.lastTriggered}
                    </span>
                  </span>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#9CA3AF]" />
                    <span className="text-[#9CA3AF]">
                      {alert.recipients.length} recipients
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
