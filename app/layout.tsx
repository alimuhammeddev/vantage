import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "VANTAGE MOTORS | Luxury & Performance Vehicles",
    template: "%s | VANTAGE MOTORS",
  },
  description:
    "Explore the VANTAGE MOTORS concept collection of luxury vehicles, performance cars, and premium automobiles.",
  openGraph: {
    title: "VANTAGE MOTORS | Luxury & Performance Vehicles",
    description: "Driven by distinction. Discover our illustrative collection of exceptional vehicles.",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
