"use client";

import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 border-t border-[#18462b]/40 bg-[#030d07] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Logo Emblem */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#c87d55]/40 mb-4 shadow-lg">
          <Image
            src="/bu-ga-logo.jpg"
            alt="BU-GA Emblem"
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>

        <h3 className="font-serif text-2xl font-bold tracking-[0.25em] text-[#f7f4ed] uppercase mb-1">
          BU-GA
        </h3>
        <p className="text-xs tracking-[0.35em] text-[#c87d55] uppercase font-sans mb-8">
          Your Daily Dose of Joy • بوجا كافيه
        </p>

        {/* Decorative Ornamental Divider */}
        <div className="flex items-center gap-4 max-w-xs w-full mb-8 opacity-40">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c87d55] to-transparent" />
          <span className="text-[#c87d55] text-xs font-serif">❖</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c87d55] to-transparent" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs tracking-wider text-[#d9d2c2]/70 mb-8">
          <a href="#menu" className="hover:text-[#f7f4ed] transition-colors">
            Menu
          </a>
          <a href="#story" className="hover:text-[#f7f4ed] transition-colors">
            Our Story
          </a>
          <a href="#experience" className="hover:text-[#f7f4ed] transition-colors">
            The Experience
          </a>
          <a href="#visit" className="hover:text-[#f7f4ed] transition-colors">
            Location & Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-[#d9d2c2]/50 font-sans tracking-wide">
          © {new Date().getFullYear()} BU-GA Café. All rights reserved. University District, Mansoura, Egypt.
        </p>
      </div>
    </footer>
  );
};
