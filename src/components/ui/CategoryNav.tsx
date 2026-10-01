"use client";

import React, { useEffect, useState, useRef } from "react";
import { MENU_CATEGORIES } from "@/data/menuData";

export const CategoryNav: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    MENU_CATEGORIES[0]?.id || "hot-coffee"
  );
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = MENU_CATEGORIES.length - 1; i >= 0; i--) {
        const cat = MENU_CATEGORIES[i];
        const el = document.getElementById(cat.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveCategoryId(cat.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (id: string) => {
    setActiveCategoryId(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-20 z-30 w-full backdrop-blur-2xl bg-[#041109]/90 border-y border-[#18462b]/40 shadow-[0_10px_25px_rgba(4,17,9,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={navContainerRef}
          className="flex items-center gap-2 sm:gap-3 py-3 overflow-x-auto scrollbar-none text-xs tracking-wider"
        >
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-[#c87d55] text-[#041109] font-semibold shadow-[0_0_15px_rgba(200,125,85,0.4)] scale-105"
                    : "bg-[#071c10]/80 border border-[#1b4329]/60 text-[#d9d2c2] hover:text-white hover:border-[#c87d55]/60 hover:bg-[#0b2717]"
                }`}
              >
                <span>{cat.nameEn}</span>
                <span className="opacity-60 text-[10px]">({cat.nameAr})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
