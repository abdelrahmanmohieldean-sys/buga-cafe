"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/ui/HeroSection";
import { SignatureMenu } from "@/components/ui/SignatureMenu";
import { BrandStory } from "@/components/ui/BrandStory";
import { ExperienceSection } from "@/components/ui/ExperienceSection";
import { LocationSection } from "@/components/ui/LocationSection";
import { ReservationModal } from "@/components/ui/ReservationModal";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#041109] text-[#f7f4ed] selection:bg-[#c87d55]/30 selection:text-white">
      {/* Navigation */}
      <Navbar onReserveClick={() => setReservationOpen(true)} />

      {/* Main Experience Sections */}
      <div className="relative z-10">
        <HeroSection />
        <SignatureMenu />
        <BrandStory />
        <ExperienceSection />
        <LocationSection />
        <Footer />
      </div>

      {/* Reservation Dialog */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </main>
  );
}
