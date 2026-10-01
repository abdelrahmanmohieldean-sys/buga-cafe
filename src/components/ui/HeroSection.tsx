"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { CinematicBackground } from "./CinematicBackground";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-10 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 1. Hero Looping Cinematic Background Layer */}
      <CinematicBackground
        videoSrc="/videos/hero-loop.mp4"
        posterSrc="/images/hero/hero-poster.webp"
        priority={true}
        overlayGradient="bg-gradient-to-b from-[#041109]/55 via-[#041109]/25 to-[#041109]/75"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c87d55]/40 bg-[#071c10]/80 backdrop-blur-md mb-8 shadow-[0_0_25px_rgba(200,125,85,0.15)] animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#df8b5f]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#f7f4ed] font-medium">
            Your Daily Dose of Joy • بوجا كافيه
          </span>
          <span className="w-1 h-1 rounded-full bg-[#c87d55]" />
          <span className="text-xs text-[#c87d55] tracking-widest font-sans">EGYPT</span>
        </div>

        {/* Embossed Logo Emblem Presentation */}
        <div className="relative mb-8 group cursor-pointer">
          {/* Subtle copper/emerald halo around logo */}
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-[#c87d55]/25 via-[#18462b]/30 to-[#c87d55]/25 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-[#c87d55]/40 shadow-[0_15px_45px_rgba(4,17,9,0.9)] group-hover:border-[#df8b5f] transition-all duration-500">
            <Image
              src="/bu-ga-logo.jpg"
              alt="BU-GA Café Emblem"
              fill
              sizes="(max-width: 640px) 176px, 208px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f7f4ed] leading-[1.1] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          Where Vintage Grandeur <br />
          <span className="bg-gradient-to-r from-[#f7f4ed] via-[#e8a682] to-[#c87d55] bg-clip-text text-transparent italic font-normal">
            Meets Artisanal Specialty Coffee
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg text-[#d9d2c2]/95 leading-relaxed mb-10 font-sans font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
          An unhurried sanctuary crafted in rich forest green and warm espresso tones.
          Experience handcrafted coffees, fresh Egyptian fruit juices, creamy milkshakes,
          and refreshing soda creations.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#df8b5f] via-[#c87d55] to-[#b3643b] text-[#041109] font-semibold text-sm tracking-wider hover:shadow-[0_0_30px_rgba(200,125,85,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Explore Complete Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#story"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#1b4329]/80 bg-[#071c10]/70 backdrop-blur-md text-[#f7f4ed] hover:text-white hover:border-[#c87d55]/80 font-medium text-sm tracking-wider transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-[#c87d55]" />
            <span>Our Heritage</span>
          </a>
        </div>

        {/* Feature Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mt-16 pt-12 border-t border-[#18462b]/40 w-full max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-2xl font-bold text-[#f7f4ed]">100%</span>
            <span className="text-xs tracking-widest text-[#d9d2c2]/70 uppercase mt-1">
              Fresh & Specialty Roast
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="font-serif text-2xl font-bold text-[#f7f4ed]">12</span>
            <span className="text-xs tracking-widest text-[#d9d2c2]/70 uppercase mt-1">
              Curated Menu Collections
            </span>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center">
            <span className="font-serif text-2xl font-bold text-[#f7f4ed]">Atmosphere</span>
            <span className="text-xs tracking-widest text-[#d9d2c2]/70 uppercase mt-1">
              Warm Egyptian Salon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
