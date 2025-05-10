import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = true }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
