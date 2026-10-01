"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [time, setTime] = useState("18:00 (Evening)");
  const [area, setArea] = useState("Main Lounge");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl p-8 backdrop-blur-2xl bg-[#071c10]/95 border border-[#c87d55]/40 shadow-[0_25px_60px_rgba(4,17,9,0.9)] text-[#f7f4ed]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#d9d2c2] hover:text-white hover:bg-[#0b2717] transition-colors"
        >
          <X className="w-5 h-5 text-[#c87d55]" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <CheckCircle2 className="w-16 h-16 text-[#df8b5f] mb-4 animate-bounce" />
            <h3 className="font-serif text-2xl font-bold text-[#f7f4ed] mb-2">
              Reservation Confirmed
            </h3>
            <p className="text-[#d9d2c2] text-sm max-w-xs">
              We look forward to welcoming you at BU-GA Café. A confirmation message has been registered.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#c87d55] block mb-1">
                Table Booking • حجز طاولة
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#f7f4ed]">
                Reserve Your BU-GA Table
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs text-[#d9d2c2] mb-1 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Karim Mansour"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#041109]/90 border border-[#1b4329] text-base text-[#f7f4ed] placeholder-[#d9d2c2]/40 focus:outline-none focus:border-[#c87d55] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-[#d9d2c2] mb-1 font-medium">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+20 10..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#041109]/90 border border-[#1b4329] text-base text-[#f7f4ed] placeholder-[#d9d2c2]/40 focus:outline-none focus:border-[#c87d55] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-[#d9d2c2] mb-1 font-medium">
                  Party Size
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#041109]/90 border border-[#1b4329] text-base sm:text-xs text-[#f7f4ed] focus:outline-none focus:border-[#c87d55]"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>6+ Lounge</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#d9d2c2] mb-1 font-medium">
                  Time Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#041109]/90 border border-[#1b4329] text-base sm:text-xs text-[#f7f4ed] focus:outline-none focus:border-[#c87d55]"
                >
                  <option>10:00 Morning</option>
                  <option>14:00 Afternoon</option>
                  <option>18:00 Evening</option>
                  <option>21:00 Late Night</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#d9d2c2] mb-1 font-medium">
                  Seating Area
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#041109]/90 border border-[#1b4329] text-base sm:text-xs text-[#f7f4ed] focus:outline-none focus:border-[#c87d55]"
                >
                  <option>Main Lounge</option>
                  <option>Barista Counter</option>
                  <option>Outdoor Terrace</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#df8b5f] via-[#c87d55] to-[#b3643b] text-[#041109] font-semibold text-sm tracking-wider hover:shadow-[0_0_25px_rgba(200,125,85,0.4)] transition-all"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
