"use client";

import React from "react";
import { MapPin, Clock, Phone, Sparkles, Navigation } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="visit" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-[#18462b]/40 bg-[#041109]/95">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071c10]/90 border border-[#c87d55]/40 text-[#df8b5f] text-xs tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#df8b5f]" />
                Café Address & Contact
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#f7f4ed] tracking-tight mb-4">
                Visit BU-GA Café
              </h2>
              <p className="text-[#d9d2c2]/80 text-sm sm:text-base leading-relaxed">
                Your daily dose of joy. Visit our inviting space for freshly brewed coffees, signature cold drinks, and authentic Egyptian hospitality.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#071c10]/70 border border-[#1b4329]/60">
                <MapPin className="w-5 h-5 text-[#c87d55] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#f7f4ed]">
                    Location & Branch
                  </h4>
                  <p className="text-xs sm:text-sm text-[#d9d2c2]/90 mt-0.5" dir="rtl">
                    حي الجامعة - بجوار كلية تربية
                  </p>
                  <p className="text-[11px] text-[#c87d55] mt-0.5">
                    University District — Next to Faculty of Education, Mansoura, Egypt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#071c10]/70 border border-[#1b4329]/60">
                <Clock className="w-5 h-5 text-[#c87d55] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#f7f4ed]">
                    Working Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-[#d9d2c2]/90 mt-0.5">
                    Daily: 08:00 AM — 02:00 AM <br />
                    Coffee & Refreshments Served All Day
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#071c10]/70 border border-[#1b4329]/60">
                <Phone className="w-5 h-5 text-[#c87d55] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#f7f4ed]">
                    Direct Hotline & Delivery
                  </h4>
                  <a
                    href="tel:01505804049"
                    className="text-xs sm:text-sm text-[#df8b5f] hover:underline font-mono font-medium block mt-0.5"
                  >
                    015 0580 4049
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stylized Location Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 backdrop-blur-2xl bg-[#071c10]/85 border border-[#c87d55]/30 shadow-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#041109] border border-[#c87d55]/40 flex items-center justify-center text-[#df8b5f] mb-6 shadow-inner">
                <Navigation className="w-7 h-7 text-[#df8b5f]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#f7f4ed] mb-2">
                We Are Open Now
              </h3>
              <p className="text-[#d9d2c2]/80 text-sm max-w-sm mb-8">
                Welcome to BU-GA Café. Dine in, take out, or order your favorite drinks directly.
              </p>

              <div className="w-full flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl border border-[#1b4329] bg-[#041109]/80 hover:bg-[#0b2717] text-[#f7f4ed] text-xs font-medium tracking-wider text-center transition-colors"
                >
                  Open in Google Maps
                </a>
                <a
                  href="tel:01505804049"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#df8b5f] via-[#c87d55] to-[#b3643b] text-[#041109] hover:opacity-95 text-xs font-semibold tracking-wider text-center transition-opacity shadow-md"
                >
                  Call 015 0580 4049
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
