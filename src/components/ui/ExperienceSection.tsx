"use client";

import React from "react";
import { Disc3, Wind, Sparkles, SunDim } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#041109]/90 border-t border-[#18462b]/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071c10]/90 border border-[#c87d55]/40 text-[#df8b5f] text-xs tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#df8b5f]" />
            Atmosphere & Senses • الأجواء
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ed] tracking-tight mb-4">
            The BU-GA Experience
          </h2>
          <p className="text-[#d9d2c2]/80 text-sm sm:text-base leading-relaxed">
            Every element inside BU-GA is curated to elevate your day: from hand-pulled espresso shots to the soothing acoustic atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl p-8 backdrop-blur-xl bg-[#071c10]/85 border border-[#1b4329]/60 hover:border-[#c87d55]/60 hover:shadow-[0_10px_30px_rgba(4,17,9,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#041109] border border-[#c87d55]/40 flex items-center justify-center text-[#df8b5f] mb-6 shadow-inner">
              <Disc3 className="w-6 h-6 animate-spin duration-[15000ms]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#f7f4ed] mb-3">
              Acoustic Harmony
            </h3>
            <p className="text-[#d9d2c2]/80 text-sm leading-relaxed">
              Warm background jazz, acoustic selections, and low-tempo ambient rhythms carefully calibrated to encourage unhurried conversation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-8 backdrop-blur-xl bg-[#071c10]/85 border border-[#1b4329]/60 hover:border-[#c87d55]/60 hover:shadow-[0_10px_30px_rgba(4,17,9,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#041109] border border-[#c87d55]/40 flex items-center justify-center text-[#df8b5f] mb-6 shadow-inner">
              <SunDim className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#f7f4ed] mb-3">
              Warm Ambient Lighting
            </h3>
            <p className="text-[#d9d2c2]/80 text-sm leading-relaxed">
              Intimate amber illumination set against rich forest green walls and warm espresso timber, creating a relaxing neighborhood haven.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl p-8 backdrop-blur-xl bg-[#071c10]/85 border border-[#1b4329]/60 hover:border-[#c87d55]/60 hover:shadow-[0_10px_30px_rgba(4,17,9,0.7)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#041109] border border-[#c87d55]/40 flex items-center justify-center text-[#df8b5f] mb-6 shadow-inner">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#f7f4ed] mb-3">
              Inviting Aromatics
            </h3>
            <p className="text-[#d9d2c2]/80 text-sm leading-relaxed">
              The rich, enticing aroma of freshly ground dark roasts, steaming cardamoms, and natural tropical fruit blends filling the air.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
