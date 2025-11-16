
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { LogoWordmark } from "./components/brand/Logo";
import UserMenu from "./components/layout/UserMenu";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const navigation = [
    { name: "Home", path: createPageUrl("Landing") },
    { name: "Blog", path: createPageUrl("Blog") },
    { name: "About the Packs", path: createPageUrl("AboutThePacks") },
    { name: "Sign Up", path: createPageUrl("Subscribe") }
  ];

  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-[#12161C]" : "bg-white";
  const borderColor = isDark ? "border-[#A78BFA]/20" : "border-gray-200";
  const textColor = isDark ? "text-[#E6EAF0]" : "text-[#0E1217]";
  const textColorMuted = isDark ? "text-[#E6EAF0]/80" : "text-gray-600";
  const hoverTextColor = isDark ? "text-[#A78BFA]" : "text-[#6D28D9]";

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-[#0B0D10]' : 'bg-[#F7F7F8]'} relative`}>
      {isDark && (
        <div 
          className="fixed inset-0 bg-center bg-cover opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage: "url('https://raw.githubusercontent.com/JC-fin/galaxy-gaming/main/Brand%20Pack/SVGs/Galaxy%20Background.svg')"
          }}
        ></div>
      )}
      
      <style>{`
        :root {
          --bg-primary: ${isDark ? '#0B0D10' : '#F7F7F8'};
          --bg-surface: ${isDark ? '#12161C' : '#FFFFFF'};
          --text-primary: ${isDark ? '#E6EAF0' : '#0E1217'};
          --accent: ${isDark ? '#7C3AED' : '#6D28D9'};
          --accent-light: ${isDark ? '#A78BFA' : '#8B5CF6'};
        }
      `}</style>

      {/* Header/Navigation */}
      <header className={`${bgColor} border-b ${borderColor} sticky top-0 z-50 ${isDark ? 'shadow-lg shadow-[#7C3AED]/10' : 'shadow-sm'} relative`}>
        <nav className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Landing")} className="hover:opacity-80 transition-opacity">
              <LogoWordmark theme={theme} className="h-12" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    location.pathname === item.path
                      ? hoverTextColor
                      : `${textColorMuted} hover:${hoverTextColor}`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <UserMenu theme={theme} onThemeToggle={toggleTheme} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <UserMenu theme={theme} onThemeToggle={toggleTheme} />
              <button
                className={`p-2 rounded-lg ${isDark ? 'hover:bg-[#A78BFA]/10' : 'hover:bg-gray-100'} ${textColor}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden py-4 border-t ${borderColor}`}>
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-medium py-2 transition-colors ${
                      location.pathname === item.path
                        ? hoverTextColor
                        : textColorMuted
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className={`${bgColor} border-t ${borderColor} ${textColor} py-12 lg:py-16 relative`}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <LogoWordmark theme={theme} className="mb-4 h-10" />
              <p className={`${textColorMuted} text-sm`}>
                Premium Magic the Gathering subscription boxes for collectors and players.
              </p>
            </div>

            <div>
              <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-[#0E1217]'}`}>Quick Links</h3>
              <ul className={`space-y-2 ${textColorMuted} text-sm`}>
                <li><Link to={createPageUrl("Landing")} className={`hover:${hoverTextColor} transition-colors`}>Home</Link></li>
                <li><Link to={createPageUrl("Blog")} className={`hover:${hoverTextColor} transition-colors`}>Blog</Link></li>
                <li><Link to={createPageUrl("AboutThePacks")} className={`hover:${hoverTextColor} transition-colors`}>About the Packs</Link></li>
                <li><Link to={createPageUrl("Subscribe")} className={`hover:${hoverTextColor} transition-colors`}>Sign Up</Link></li>
              </ul>
            </div>

            <div>
              <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-[#0E1217]'}`}>Support</h3>
              <ul className={`space-y-2 ${textColorMuted} text-sm`}>
                <li><a href="#" className={`hover:${hoverTextColor} transition-colors`}>FAQ</a></li>
                <li><a href="#" className={`hover:${hoverTextColor} transition-colors`}>Contact Us</a></li>
                <li><a href="#" className={`hover:${hoverTextColor} transition-colors`}>Shipping Info</a></li>
              </ul>
            </div>

            <div>
              <h3 className={`font-bold mb-4 ${isDark ? 'text-white' : 'text-[#0E1217]'}`}>Legal</h3>
              <ul className={`space-y-2 ${textColorMuted} text-sm`}>
                <li><a href="#" className={`hover:${hoverTextColor} transition-colors`}>Privacy Policy</a></li>
                <li><a href="#" className={`hover:${hoverTextColor} transition-colors`}>Terms of Service</a></li>
                <li><a href="#" className={`hover:${hoverTextColor} transition-colors`}>Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className={`pt-8 border-t ${borderColor} text-center ${textColorMuted} text-sm`}>
            <p>&copy; 2025 Galaxy Gaming. All rights reserved. Magic: The Gathering is a trademark of Wizards of the Coast LLC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
