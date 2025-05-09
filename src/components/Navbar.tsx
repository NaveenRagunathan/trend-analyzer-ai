import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sparkles, Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = true }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1E1E3F]/90 backdrop-blur-md shadow-lg"
          : transparent
            ? "bg-transparent"
            : "bg-[#1E1E3F]"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <div className="absolute inset-0 bg-gradient-to-r from-mint to-secondary rounded-full blur opacity-50 animate-pulse"></div>
              <div className="relative h-full w-full flex items-center justify-center bg-[#120D3A] rounded-full border border-mint/30">
                <Sparkles className="h-4 w-4 text-mint" />
              </div>
            </div>
            <span className="text-xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-mint via-accent to-secondary">
              TrendSeer<span className="text-lavender">AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#A89EC9] hover:text-lavender transition-colors font-medium text-sm relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mint group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <Button className="bg-transparent border-2 border-mint/30 hover:border-mint/70 text-mint hover:bg-mint/10 rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-mint to-[#2DD4BF] hover:from-[#2DD4BF] hover:to-mint text-[#120D3A] rounded-lg px-5 py-2 text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-mint/20">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-lavender hover:bg-[#3DD598]/10 hover:text-mint"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 border-t border-[#3DD598]/20 mt-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-[#A89EC9] hover:text-lavender hover:bg-[#3DD598]/10 rounded-md transition-colors font-medium text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 space-y-2">
              <Button className="w-full bg-transparent border border-mint/30 hover:border-mint/70 text-mint hover:bg-mint/10 rounded-lg py-2 text-sm font-medium transition-all duration-300">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-mint to-[#2DD4BF] hover:from-[#2DD4BF] hover:to-mint text-[#120D3A] rounded-lg py-2 text-sm font-bold transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
