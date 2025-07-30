"use client"

import { Bell, Search, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Topbar() {
  return (
    <header className="h-16 bg-[#F3F4F6]/5 backdrop-blur-md border-b border-[#F3F4F6]/10 flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
          <Input
            placeholder="Search..."
            className="pl-10 bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative text-[#9CA3AF] hover:text-[#F3F4F6]">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#2EC8C3] rounded-full text-xs"></span>
        </Button>

        {/* Organization Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-[#F3F4F6] hover:bg-[#F3F4F6]/5">
              <span className="text-sm font-medium">Acme Corp</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#0D0D11] border-[#F3F4F6]/20">
            <DropdownMenuLabel className="text-[#F3F4F6]">Organizations</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#F3F4F6]/20" />
            <DropdownMenuItem className="text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#F3F4F6]/5">
              Acme Corp
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#F3F4F6]/5">
              Create Organization
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 text-[#F3F4F6] hover:bg-[#F3F4F6]/5">
              <div className="w-8 h-8 bg-[#4B3D8C] rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">John Doe</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#0D0D11] border-[#F3F4F6]/20">
            <DropdownMenuLabel className="text-[#F3F4F6]">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#F3F4F6]/20" />
            <DropdownMenuItem className="text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#F3F4F6]/5">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#F3F4F6]/5">
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-[#F3F4F6]/5">
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
