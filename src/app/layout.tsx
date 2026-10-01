import type { Metadata } from "next";
import { Geist, Cinzel } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BU-GA Café — Your Daily Dose of Joy | بوجا كافيه",
  description:
    "BU-GA Café in Mansoura, Egypt. Exceptional coffees, fresh natural fruit juices, creamy milkshakes, and authentic Egyptian hospitality in a warm vintage atmosphere.",
  icons: {
    icon: "/bu-ga-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${cinzel.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#041109] text-[#f7f4ed] font-sans">
        {children}
      </body>
    </html>
  );
}

