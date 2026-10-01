"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Coffee, MapPin } from "lucide-react";

interface NavbarProps {
  onReserveClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#041109]/85 border-b border-[#18462b]/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#c87d55]/40 shadow-[0_0_15px_rgba(200,125,85,0.2)] group-hover:border-[#df8b5f] transition-all duration-300">
            <Image
              src="/bu-ga-logo.jpg"
              alt="BU-GA Café"
              fill
              sizes="44px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.25em] text-xl font-bold bg-gradient-to-r from-[#f7f4ed] via-[#e8a682] to-[#c87d55] bg-clip-text text-transparent">
              BU-GA
            </span>
            <span className="text-[10px] tracking-[0.35em] text-[#d9d2c2]/70 font-sans uppercase -mt-1">
              Café & Roastery
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#menu"
            className="text-sm font-medium text-[#d9d2c2] hover:text-[#f7f4ed] transition-colors tracking-wide flex items-center gap-1.5"
          >
            <Coffee className="w-3.5 h-3.5 text-[#c87d55]" />
            Full Menu
          </a>
          <a
            href="#story"
            className="text-sm font-medium text-[#d9d2c2] hover:text-[#f7f4ed] transition-colors tracking-wide"
          >
            Our Story
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-[#d9d2c2] hover:text-[#f7f4ed] transition-colors tracking-wide"
          >
            The Salon
          </a>
          <a
            href="#visit"
            className="text-sm font-medium text-[#d9d2c2] hover:text-[#f7f4ed] transition-colors tracking-wide flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-[#c87d55]" />
            Location & Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#071c10]/90 border border-[#1b4329]/70 text-[#f7f4ed]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium tracking-wide">Open Daily • حي الجامعة</span>
          </div>

          <button
            onClick={onReserveClick}
            className="relative group px-5 py-2 rounded-full overflow-hidden border border-[#c87d55]/40 bg-gradient-to-r from-[#df8b5f] via-[#c87d55] to-[#b3643b] text-[#041109] text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,125,85,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Reserve Table</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#d9d2c2] hover:text-white hover:bg-[#071c10] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#c87d55]" />
            ) : (
              <Menu className="w-6 h-6 text-[#c87d55]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 backdrop-blur-2xl bg-[#041109]/95 border-b border-[#1b4329] space-y-3">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#f7f4ed] hover:bg-[#071c10] rounded-md"
          >
            Full Menu
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#f7f4ed] hover:bg-[#071c10] rounded-md"
          >
            Our Story
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#f7f4ed] hover:bg-[#071c10] rounded-md"
          >
            The Salon Experience
          </a>
          <a
            href="#visit"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#f7f4ed] hover:bg-[#071c10] rounded-md"
          >
            Location & Hours
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onReserveClick) onReserveClick();
              }}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#df8b5f] via-[#c87d55] to-[#b3643b] text-[#041109] font-semibold text-sm text-center shadow-md"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
