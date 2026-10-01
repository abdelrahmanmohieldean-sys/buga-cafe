"use client";

import React from "react";
import { MenuCategory } from "@/data/menuData";
import { AmbientBackground } from "./AmbientBackground";
import { DrinkCard } from "./DrinkCard";
import { Sparkles } from "lucide-react";

interface CategorySectionProps {
  category: MenuCategory;
  index: number;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  index,
}) => {
  return (
    <section
      id={category.id}
      className="relative min-h-[50vh] sm:min-h-[60vh] py-10 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 border-b border-[#143522]/40 scroll-mt-24"
    >
      {/* 1. Full-bleed Living Atmosphere Background Engine */}
      <AmbientBackground categoryId={category.id} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 2. Category Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-14">
          {/* Category Number & Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#071c10]/80 border border-[#c87d55]/40 text-[#df8b5f] text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3 backdrop-blur-md">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#df8b5f]" />
            <span>
              {String(index + 1).padStart(2, "0")} • {category.nameEn}
            </span>
          </div>

          {/* Bilingual Headings */}
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#f7f4ed] tracking-tight mb-1 sm:mb-2">
            {category.nameAr}
          </h2>
          <p className="font-serif text-base sm:text-xl lg:text-2xl text-[#c87d55] italic font-normal mb-2 sm:mb-3 tracking-wide">
            {category.nameEn}
          </p>

          {/* Category Descriptions if available */}
          {(category.descriptionAr || category.descriptionEn) && (
            <p className="text-xs sm:text-sm md:text-base text-[#d9d2c2]/85 leading-relaxed max-w-2xl mx-auto font-light px-2">
              {category.descriptionAr || category.descriptionEn}
            </p>
          )}

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-3 sm:mt-5 opacity-40">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#c87d55]" />
            <span className="text-[#c87d55] text-[10px] sm:text-xs font-serif">❖</span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#c87d55]" />
          </div>
        </div>

        {/* 3. Responsive Products Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 lg:gap-6">
          {category.items.map((item) => (
            <DrinkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
