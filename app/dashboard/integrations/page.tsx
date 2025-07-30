"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, CheckCircle, AlertCircle, Settings } from "lucide-react"

const integrations = [
  {
    id: 1,
    name: "Stripe",
    description: "Payment processing and revenue tracking",
    logo: "💳",
    status: "connected",
    webhookStatus: "active",
    lastSync: "2 minutes ago",
    enabled: true,
  },
  {
    id: 2,
    name: "Google Analytics",
    description: "Website traffic and user behavior analytics",
    logo: "📊",
    status: "connected",
    webhookStatus: "active",
    lastSync: "5 minutes ago",
    enabled: true,
  },
  {
    id: 3,
    name: "Shopify",
    description: "E-commerce platform integration",
    logo: "🛍️",
    status: "disconnected",
    webhookStatus: "inactive",
    lastSync: "Never",
    enabled: false,
  },
  {
    id: 4,
    name: "HubSpot",
    description: "CRM and marketing automation",
    logo: "🎯",
    status: "connected",
    webhookStatus: "error",
    lastSync: "1 hour ago",
    enabled: true,
  },
  {
    id: 5,
    name: "Mailchimp",
    description: "Email marketing campaigns",
    logo: "📧",
    status: "disconnected",
    webhookStatus: "inactive",
    lastSync: "Never",
    enabled: false,
  },
  {
    id: 6,
    name: "Slack",
    description: "Team communication and notifications",
    logo: "💬",
    status: "connected",
    webhookStatus: "active",
    lastSync: "10 minutes ago",
    enabled: true,
  },
]

export default function IntegrationsPage() {
  const [integrationStates, setIntegrationStates] = useState(
    integrations.reduce(
      (acc, integration) => {
        acc[integration.id] = integration.enabled
        return acc
      },
      {} as Record<number, boolean>,
    ),
  )

  const toggleIntegration = (id: number) => {
    setIntegrationStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-[#2EC8C3]/20 text-[#2EC8C3] border-[#2EC8C3]/30"
      case "disconnected":
        return "bg-[#9CA3AF]/20 text-[#9CA3AF] border-[#9CA3AF]/30"
      default:
        return "bg-[#9CA3AF]/20 text-[#9CA3AF] border-[#9CA3AF]/30"
    }
  }

  const getWebhookStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-[#2EC8C3]" />
      case "error":
        return <AlertCircle className="w-4 h-4 text-red-400" />
      default:
        return <AlertCircle className="w-4 h-4 text-[#9CA3AF]" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#F3F4F6] mb-2">Integrations</h1>
        <p className="text-[#9CA3AF]">Connect your favorite tools and platforms to InsightRelay.</p>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrations.map((integration, index) => (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 hover:border-[#2EC8C3]/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl">{integration.logo}</div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F3F4F6] mb-1">{integration.name}</h3>
                  <p className="text-sm text-[#9CA3AF]">{integration.description}</p>
                </div>
              </div>
              <Switch
                checked={integrationStates[integration.id]}
                onCheckedChange={() => toggleIntegration(integration.id)}
                className="data-[state=checked]:bg-[#4B3D8C]"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA3AF]">Status</span>
                <Badge className={`${getStatusColor(integration.status)} rounded-full`}>{integration.status}</Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA3AF]">Webhook</span>
                <div className="flex items-center gap-2">
                  {getWebhookStatusIcon(integration.webhookStatus)}
                  <span className="text-sm text-[#F3F4F6] capitalize">{integration.webhookStatus}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#9CA3AF]">Last sync</span>
                <span className="text-sm text-[#F3F4F6]">{integration.lastSync}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-6 pt-4 border-t border-[#F3F4F6]/10">
              {integration.status === "connected" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-[#F3F4F6]/20 text-[#F3F4F6] hover:bg-[#F3F4F6]/10 rounded-xl bg-transparent"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
              ) : (
                <Button size="sm" className="flex-1 bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl">
                  Connect
                </Button>
              )}
              <Button variant="ghost" size="sm" className="text-[#9CA3AF] hover:text-[#F3F4F6]">
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Setup Guide */}
      <div className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10">
        <h3 className="text-xl font-semibold text-[#F3F4F6] mb-4">Need Help?</h3>
        <p className="text-[#9CA3AF] mb-4">Check out our setup guides to get the most out of your integrations.</p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="border-[#2EC8C3]/50 text-[#2EC8C3] hover:bg-[#2EC8C3]/10 rounded-xl bg-transparent"
          >
            View Documentation
          </Button>
          <Button
            variant="outline"
            className="border-[#F3F4F6]/20 text-[#F3F4F6] hover:bg-[#F3F4F6]/10 rounded-xl bg-transparent"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}
