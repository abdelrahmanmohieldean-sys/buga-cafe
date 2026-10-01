"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, Sparkles, Coffee } from "lucide-react";

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-[#18462b]/40 bg-[#041109]/95">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#c87d55]/40 p-8 backdrop-blur-2xl bg-[#071c10]/90 shadow-[0_20px_50px_rgba(4,17,9,0.8)]">
              {/* Emblem watermark */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto mb-6 rounded-2xl overflow-hidden border border-[#c87d55]/30 shadow-2xl">
                <Image
                  src="/bu-ga-logo.jpg"
                  alt="BU-GA Heritage"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>

              <div className="text-center">
                <h4 className="font-serif text-xl font-bold text-[#f7f4ed] mb-1">
                  The BU-GA Insignia
                </h4>
                <p className="text-xs text-[#c87d55] font-sans tracking-widest uppercase">
                  Handcrafted Heritage • Your Daily Dose of Joy
                </p>
              </div>

              {/* Decorative flourish border lines */}
              <div className="mt-6 pt-6 border-t border-[#1b4329]/70 grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="block font-serif text-lg font-bold text-[#f7f4ed]">
                    Artisanal
                  </span>
                  <span className="text-[11px] text-[#d9d2c2]/70 uppercase tracking-wider">
                    Roast & Brew
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-lg font-bold text-[#f7f4ed]">
                    Fresh Blends
                  </span>
                  <span className="text-[11px] text-[#d9d2c2]/70 uppercase tracking-wider">
                    Juices & Shakes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071c10]/90 border border-[#c87d55]/40 text-[#df8b5f] text-xs tracking-widest uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#df8b5f]" />
              Our Philosophy • فلسفتنا
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ed] tracking-tight leading-tight mb-6">
              Vintage Grandeur Re-imagined For Daily Joy
            </h2>

            <p className="text-[#d9d2c2]/90 text-base sm:text-lg leading-relaxed mb-6 font-light">
              BU-GA was founded on a simple conviction: that a neighborhood café should be an extraordinary sanctuary. From our classic Turkish coffee and specialty espresso to our handcrafted fruit juices and thick milkshakes, every creation is prepared with authentic craftsmanship.
            </p>

            <p className="text-[#d9d2c2]/80 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Whether meeting friends between university lectures, hosting an intimate conversation, or grabbing your morning roast, BU-GA welcomes you with warm Egyptian hospitality and timeless vintage refinement.
            </p>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#18462b]/50">
              <div className="p-4 rounded-xl bg-[#071c10]/80 border border-[#1b4329]/60">
                <Coffee className="w-5 h-5 text-[#c87d55] mb-2" />
                <h5 className="font-serif text-sm font-semibold text-[#f7f4ed] mb-1">
                  Pure Ingredients
                </h5>
                <p className="text-xs text-[#d9d2c2]/70 leading-normal">
                  Fresh seasonal fruits, premium coffee beans, and genuine chocolate confectioneries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#071c10]/80 border border-[#1b4329]/60">
                <ShieldCheck className="w-5 h-5 text-[#c87d55] mb-2" />
                <h5 className="font-serif text-sm font-semibold text-[#f7f4ed] mb-1">
                  12 Curated Sections
                </h5>
                <p className="text-xs text-[#d9d2c2]/70 leading-normal">
                  An expansive menu catering to coffee connoisseurs, smoothie lovers, and families alike.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#071c10]/80 border border-[#1b4329]/60">
                <HeartHandshake className="w-5 h-5 text-[#c87d55] mb-2" />
                <h5 className="font-serif text-sm font-semibold text-[#f7f4ed] mb-1">
                  Warm Hospitality
                </h5>
                <p className="text-xs text-[#d9d2c2]/70 leading-normal">
                  Attentive tableside service rooted in authentic Egyptian generosity and warmth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
