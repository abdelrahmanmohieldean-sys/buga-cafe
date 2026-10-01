"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { MENU_CATEGORIES } from "@/data/menuData";
import { CategoryNav } from "./CategoryNav";
import { CategorySection } from "./CategorySection";

export const SignatureMenu: React.FC = () => {
  return (
    <div id="menu" className="relative">
      {/* 1. Menu Introduction Hero Header */}
      <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#041109] via-[#071c10] to-[#041109] border-t border-[#143522]/50 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071c10]/90 border border-[#c87d55]/40 text-[#df8b5f] text-xs tracking-widest uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#df8b5f]" />
            BU-GA Café Authentic Menu • قائمة بوجا كافيه
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#f7f4ed] tracking-tight mb-4">
            The Complete Collection
          </h2>

          <p className="text-[#d9d2c2]/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light mb-2">
            Every roast is calibrated to perfection. Fresh juices, signature milkshakes, specialty espresso, and Egyptian warm beverages crafted with care.
          </p>

          <p className="text-xs text-[#c87d55] font-serif tracking-widest uppercase">
            Your Daily Dose of Joy • جرعتك اليومية من السعادة
          </p>
        </div>
      </div>

      {/* 2. Sticky Category Quick-Jump Bar */}
      <CategoryNav />

      {/* 3. Continuous Scroll Category Sections (Each with its own Looping Video Background) */}
      <div className="space-y-0">
        {MENU_CATEGORIES.map((category, index) => (
          <CategorySection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
