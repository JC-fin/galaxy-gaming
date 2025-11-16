import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, Moon, Sun, LogOut } from "lucide-react";

export default function UserMenu({ theme, onThemeToggle }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
    updateLastLogin();
  }, []);

  const loadUser = async () => {
    try {
      // DISABLED: Base44 auth call to prevent redirects
      // const currentUser = await base44.auth.me();
      // setUser(currentUser);
      // For now, set user to null to show Sign In button
      setUser(null);
    } catch (error) {
      console.error("Failed to load user:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const updateLastLogin = async () => {
    try {
      // DISABLED: Base44 auth update to prevent redirects
      // await base44.auth.updateMe({
      //   last_logged_in_date: new Date().toISOString()
      // });
    } catch (error) {
      console.error("Failed to update last login:", error);
    }
  };

  const handleLogout = () => {
    // DISABLED: Base44 logout to prevent redirects
    // base44.auth.logout();
    setUser(null);
  };

  if (loading) {
    return (
      <div className="w-10 h-10 rounded-full bg-[#A78BFA]/20 animate-pulse"></div>
    );
  }

  if (!user) {
    return (
      <Link to={createPageUrl("Subscribe")}>
        <Button
          className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white hover:opacity-90"
        >
          Sign In
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative w-10 h-10 rounded-full ring-2 ring-[#7C3AED]/30 hover:ring-[#7C3AED] transition-all focus:outline-none focus:ring-[#7C3AED] focus:ring-offset-2 focus:ring-offset-[#0B0D10]">
          {user.profile_picture ? (
            <img
              src={user.profile_picture}
              alt={user.full_name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          )}
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-64 bg-[#12161C] border-[#A78BFA]/20 text-[#E6EAF0]"
      >
        {/* User Info Header */}
        <div className="px-3 py-3 border-b border-[#A78BFA]/20">
          <p className="font-semibold text-white">{user.full_name}</p>
          <p className="text-sm text-[#E6EAF0]/60">{user.email}</p>
          {user.subscription_type && user.subscription_type !== "None" && (
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#7C3AED]/20 text-[#A78BFA]">
                {user.subscription_type} Plan
              </span>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <div className="py-1">
          <Link to={createPageUrl("AccountSettings")}>
            <DropdownMenuItem className="cursor-pointer hover:bg-[#7C3AED]/10 focus:bg-[#7C3AED]/10">
              <Settings className="w-4 h-4 mr-3" />
              Account Settings
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem 
            onClick={onThemeToggle}
            className="cursor-pointer hover:bg-[#7C3AED]/10 focus:bg-[#7C3AED]/10"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4 mr-3" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 mr-3" />
                Dark Mode
              </>
            )}
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="bg-[#A78BFA]/20" />

        {/* Logout */}
        <div className="py-1">
          <DropdownMenuItem 
            onClick={handleLogout}
            className="cursor-pointer hover:bg-red-500/10 focus:bg-red-500/10 text-red-400"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Log Out
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}