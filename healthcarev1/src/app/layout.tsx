import type { Metadata } from "next";
import {  DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Grainy from "@/components/GrainyTexture";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "HealthCareV1",
  description: "For Educational Purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable}  antialiased`}
      >
        <NavBar/>
        <Grainy/>
        {children}
      </body>
    </html>
  );
}
