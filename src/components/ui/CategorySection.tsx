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
      className="relative min-h-[70vh] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#143522]/40 scroll-mt-24"
    >
      {/* 1. Full-bleed Living Atmosphere Background Engine */}
      <AmbientBackground categoryId={category.id} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 2. Category Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Category Number & Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071c10]/80 border border-[#c87d55]/40 text-[#df8b5f] text-xs tracking-widest uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#df8b5f]" />
            <span>
              {String(index + 1).padStart(2, "0")} • {category.nameEn}
            </span>
          </div>

          {/* Bilingual Headings */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#f7f4ed] tracking-tight mb-2">
            {category.nameAr}
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#c87d55] italic font-normal mb-4 tracking-wide">
            {category.nameEn}
          </p>

          {/* Category Descriptions if available */}
          {(category.descriptionAr || category.descriptionEn) && (
            <p className="text-sm sm:text-base text-[#d9d2c2]/85 leading-relaxed max-w-2xl mx-auto font-light">
              {category.descriptionAr || category.descriptionEn}
            </p>
          )}

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 mt-6 opacity-40">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#c87d55]" />
            <span className="text-[#c87d55] text-xs font-serif">❖</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#c87d55]" />
          </div>
        </div>

        {/* 3. Responsive Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {category.items.map((item) => (
            <DrinkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
