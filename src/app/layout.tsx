import type { Metadata } from "next";
import { Public_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const PublicSans = Public_Sans({ subsets: ["latin"], weight: ["700"] });
const Dmserifdisplay = DM_Serif_Display({subsets: ['latin'],weight: ['400']})

export const metadata: Metadata = {
  title: "PayApi",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${PublicSans.className}, ${Dmserifdisplay.className}`}>{children}</body>
    </html>
  );
}
