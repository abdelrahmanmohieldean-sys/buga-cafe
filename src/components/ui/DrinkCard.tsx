"use client";

import React from "react";
import Image from "next/image";
import { Coffee, Sparkles } from "lucide-react";
import { MenuItem } from "@/data/menuData";

interface DrinkCardProps {
  item: MenuItem;
}

export const DrinkCard: React.FC<DrinkCardProps> = ({ item }) => {
  return (
    <article className="group relative rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-xl bg-[#071c10]/85 border border-[#1b4329]/50 hover:border-[#c87d55]/60 hover:shadow-[0_10px_28px_rgba(4,17,9,0.7),_0_0_18px_rgba(200,125,85,0.15)] transition-all duration-300 flex flex-col justify-between">
      {/* 1. Media Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-b from-[#0b2717] to-[#05140b] border-b border-[#1b4329]/40">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt || item.nameEn}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          /* Intentional Branded Architectural Fallback */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center select-none">
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-radial from-[#c87d55]/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Emblem Watermark */}
            <div className="relative w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full border border-[#c87d55]/30 bg-[#041109]/70 flex items-center justify-center mb-1 shadow-inner group-hover:border-[#c87d55]/70 group-hover:scale-105 transition-all duration-300">
              <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#c87d55]" />
            </div>

            <span className="font-serif text-[7.5px] sm:text-[9px] md:text-[10px] tracking-[0.2em] text-[#d9d2c2]/70 uppercase">
              BU-GA Artisan
            </span>

            {/* Decorative filigree flourishes */}
            <div className="mt-0.5 sm:mt-1 flex items-center gap-1 sm:gap-2 opacity-35">
              <div className="h-px w-3 sm:w-6 bg-gradient-to-r from-transparent to-[#c87d55]" />
              <span className="text-[7px] sm:text-[9px] text-[#c87d55]">❖</span>
              <div className="h-px w-3 sm:w-6 bg-gradient-to-l from-transparent to-[#c87d55]" />
            </div>
          </div>
        )}

        {/* Status Badge (if item has one) */}
        {item.badge && (
          <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 z-10">
            <span className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[7.5px] sm:text-[9px] font-semibold tracking-wider uppercase bg-[#120906]/90 border border-[#c87d55]/50 text-[#e8a682] backdrop-blur-md shadow-md">
              <Sparkles className="w-2 h-2 text-[#df8b5f]" />
              <span className="truncate max-w-[85px] sm:max-w-none">{item.badge}</span>
            </span>
          </div>
        )}
      </div>

      {/* 2. Content Body */}
      <div className="p-2 sm:p-3 md:p-4 flex flex-col flex-1 justify-between gap-1.5 sm:gap-2">
        <div>
          {/* Top Line: Arabic Name (Primary in Egyptian context) */}
          <h3
            dir="rtl"
            className="font-serif text-xs sm:text-sm md:text-base font-bold text-[#f7f4ed] group-hover:text-white transition-colors leading-snug line-clamp-2 text-right mb-0.5"
          >
            {item.nameAr}
          </h3>

          {/* Subtitle: English Name */}
          <p
            dir="ltr"
            className="text-[9.5px] sm:text-[11px] md:text-xs text-[#c87d55] font-sans font-medium tracking-wide line-clamp-1 text-left mb-1"
          >
            {item.nameEn}
          </p>

          {/* Descriptions if available */}
          {(item.descriptionAr || item.descriptionEn) && (
            <div className="text-[8.5px] sm:text-[10px] md:text-xs text-[#d9d2c2]/75 leading-tight sm:leading-relaxed font-light line-clamp-2 mb-1">
              {item.descriptionAr && (
                <p dir="rtl" className="text-right">
                  {item.descriptionAr}
                </p>
              )}
              {item.descriptionEn && !item.descriptionAr && (
                <p className="text-left text-[#d9d2c2]/60 text-[8px] sm:text-[9px]">
                  {item.descriptionEn}
                </p>
              )}
            </div>
          )}
        </div>

        {/* 3. Bottom Row: Price Pill & Brand Mark */}
        <div className="pt-1.5 sm:pt-2 border-t border-[#1b4329]/40 flex items-center justify-between gap-1 mt-auto">
          <span
            className="font-serif text-[11px] sm:text-xs md:text-sm font-semibold text-[#f7f4ed] whitespace-nowrap px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md bg-[#14281a]/95 border border-[#c87d55]/40 shadow-sm"
            dir="ltr"
          >
            {item.formattedPrice}
          </span>
          <span className="text-[7.5px] sm:text-[9px] text-[#c87d55]/50 font-serif tracking-widest uppercase select-none">
            BU-GA
          </span>
        </div>

        {/* Optional Ingredients */}
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="pt-1 border-t border-[#1b4329]/30 flex flex-wrap gap-1 mt-1">
            {item.ingredients.map((ing, idx) => (
              <span
                key={idx}
                className="text-[7.5px] sm:text-[9px] tracking-wider uppercase px-1 py-0.2 rounded bg-[#041109]/80 border border-[#1b4329]/60 text-[#d9d2c2]/80"
              >
                {ing}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
