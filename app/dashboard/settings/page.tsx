"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Shield, User, Plus, Trash2 } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@acme.com",
    role: "Owner",
    status: "active",
    avatar: "JD",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@acme.com",
    role: "Admin",
    status: "active",
    avatar: "JS",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@acme.com",
    role: "Member",
    status: "pending",
    avatar: "MJ",
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("organization");
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const tabs = [
    { id: "organization", name: "Organization", icon: Building },
    { id: "team", name: "Team", icon: Users },
    { id: "security", name: "Security", icon: Shield },
    { id: "profile", name: "Profile", icon: User },
  ];

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#F3F4F6] mb-2">Settings</h1>
          <p className="text-[#9CA3AF]">
            Manage your account, team, and organization settings.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-[#4B3D8C]/20 text-[#4bf8f3] border border-[#4B3D8C]/30"
                      : "text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#F3F4F6]/5"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-2xl bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10"
            >
              {activeTab === "organization" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-[#F3F4F6]">
                    Organization Settings
                  </h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName" className="text-[#F3F4F6]">
                        Organization Name
                      </Label>
                      <Input
                        id="orgName"
                        defaultValue="Acme Corp"
                        className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="orgDescription"
                        className="text-[#F3F4F6]"
                      >
                        Description
                      </Label>
                      <Textarea
                        id="orgDescription"
                        placeholder="Tell us about your organization"
                        className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="domain" className="text-[#F3F4F6]">
                        Domain
                      </Label>
                      <Input
                        id="domain"
                        defaultValue="acme.com"
                        className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl"
                      />
                      <p className="text-sm text-[#9CA3AF]">
                        Domain verification status: Verified
                      </p>
                    </div>

                    <Button className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl">
                      Save Changes
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "team" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-[#F3F4F6]">
                      Team Members
                    </h2>

                    <Dialog
                      open={isInviteModalOpen}
                      onOpenChange={setIsInviteModalOpen}
                    >
                      <DialogTrigger asChild>
                        <Button className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl">
                          <Plus className="w-4 h-4 mr-2" />
                          Invite Member
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#0D0D11] border-[#F3F4F6]/20 text-[#F3F4F6]">
                        <DialogHeader>
                          <DialogTitle className="text-[#F3F4F6]">
                            Invite Team Member
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                          <div className="space-y-2">
                            <Label
                              htmlFor="inviteEmail"
                              className="text-[#F3F4F6]"
                            >
                              Email Address
                            </Label>
                            <Input
                              id="inviteEmail"
                              type="email"
                              placeholder="colleague@acme.com"
                              className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
                            />
                          </div>
                          <div className="flex gap-3 pt-4">
                            <Button
                              onClick={() => setIsInviteModalOpen(false)}
                              variant="outline"
                              className="flex-1 border-[#F3F4F6]/20 text-[#F3F4F6] hover:bg-[#F3F4F6]/10 rounded-xl"
                            >
                              Cancel
                            </Button>
                            <Button
                              onClick={() => setIsInviteModalOpen(false)}
                              className="flex-1 bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl"
                            >
                              Send Invite
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="space-y-4">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 rounded-xl bg-[#F3F4F6]/5 border border-[#F3F4F6]/10"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#4B3D8C] rounded-full flex items-center justify-center text-white font-medium">
                            {member.avatar}
                          </div>
                          <div>
                            <h4 className="font-medium text-[#F3F4F6]">
                              {member.name}
                            </h4>
                            <p className="text-sm text-[#9CA3AF]">
                              {member.email}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <Badge
                            className={`${
                              member.status === "active"
                                ? "bg-[#4bf8f3]/20 text-[#4bf8f3] border-[#4bf8f3]/30"
                                : "bg-[#9CA3AF]/20 text-[#9CA3AF] border-[#9CA3AF]/30"
                            } rounded-full`}
                          >
                            {member.status}
                          </Badge>
                          <span className="text-sm text-[#9CA3AF]">
                            {member.role}
                          </span>
                          {member.role !== "Owner" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-400 hover:text-red-300"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-[#F3F4F6]">
                    Security Settings
                  </h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="currentPassword"
                        className="text-[#F3F4F6]"
                      >
                        Current Password
                      </Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newPassword" className="text-[#F3F4F6]">
                        New Password
                      </Label>
                      <Input
                        id="newPassword"
                        type="password"
                        className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="confirmPassword"
                        className="text-[#F3F4F6]"
                      >
                        Confirm New Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl"
                      />
                    </div>

                    <Button className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl">
                      Update Password
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-[#F3F4F6]">
                    Profile Settings
                  </h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-[#F3F4F6]">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          defaultValue="John"
                          className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-[#F3F4F6]">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          defaultValue="Doe"
                          className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#F3F4F6]">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john@acme.com"
                        className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] rounded-xl"
                      />
                    </div>

                    <Button className="bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl">
                      Save Profile
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
