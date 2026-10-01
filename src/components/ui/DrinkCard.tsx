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
    <article className="group relative rounded-2xl overflow-hidden backdrop-blur-xl bg-[#071c10]/85 border border-[#1b4329]/50 hover:border-[#c87d55]/60 hover:shadow-[0_12px_32px_rgba(4,17,9,0.7),_0_0_20px_rgba(200,125,85,0.15)] transition-all duration-400 flex flex-col justify-between">
      {/* 1. Media Container (Future Photography Slot) */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-b from-[#0b2717] to-[#05140b] border-b border-[#1b4329]/40">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.imageAlt || item.nameEn}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          /* Intentional Branded Architectural Fallback */
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-radial from-[#c87d55]/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Emblem Watermark */}
            <div className="relative w-12 h-12 rounded-full border border-[#c87d55]/30 bg-[#041109]/70 flex items-center justify-center mb-2 shadow-inner group-hover:border-[#c87d55]/70 group-hover:scale-110 transition-all duration-500">
              <Coffee className="w-5 h-5 text-[#c87d55]" />
            </div>

            <span className="font-serif text-[10px] tracking-[0.25em] text-[#d9d2c2]/70 uppercase">
              BU-GA Artisan
            </span>

            {/* Decorative filigree flourishes */}
            <div className="mt-1 flex items-center gap-2 opacity-35">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#c87d55]" />
              <span className="text-[9px] text-[#c87d55]">❖</span>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#c87d55]" />
            </div>
          </div>
        )}

        {/* Status Badge (if item has one) */}
        {item.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#120906]/90 border border-[#c87d55]/50 text-[#e8a682] backdrop-blur-md shadow-md">
              <Sparkles className="w-2.5 h-2.5 text-[#df8b5f]" />
              <span>{item.badge}</span>
            </span>
          </div>
        )}
      </div>

      {/* 2. Content Body */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Top Line: Arabic Name (Primary in Egyptian context) */}
          <div className="flex items-start justify-between gap-3 mb-1.5" dir="rtl">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f7f4ed] group-hover:text-white transition-colors">
              {item.nameAr}
            </h3>
            {/* Price Pill */}
            <span className="font-serif text-sm sm:text-base font-semibold text-[#f7f4ed] whitespace-nowrap px-2.5 py-1 rounded-lg bg-[#14281a]/90 border border-[#c87d55]/40 shadow-sm" dir="ltr">
              {item.formattedPrice}
            </span>
          </div>

          {/* Subtitle: English Name */}
          <p className="text-xs text-[#c87d55] font-sans font-medium tracking-wide mb-2.5">
            {item.nameEn}
          </p>

          {/* Descriptions if available */}
          {(item.descriptionAr || item.descriptionEn) && (
            <div className="text-xs text-[#d9d2c2]/80 leading-relaxed font-light mb-4 space-y-1">
              {item.descriptionAr && (
                <p dir="rtl" className="text-right">
                  {item.descriptionAr}
                </p>
              )}
              {item.descriptionEn && (
                <p className="text-left text-[#d9d2c2]/70 text-[11px]">
                  {item.descriptionEn}
                </p>
              )}
            </div>
          )}
        </div>

        {/* 3. Bottom Tags & Ingredients */}
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="pt-3 border-t border-[#1b4329]/50 flex flex-wrap gap-1.5 mt-2">
            {item.ingredients.map((ing, idx) => (
              <span
                key={idx}
                className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-md bg-[#041109]/80 border border-[#1b4329]/60 text-[#d9d2c2]/80"
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
