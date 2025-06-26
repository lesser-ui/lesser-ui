// fortawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const partialSans = localFont({
  src: "./PartialSansKR-Regular.otf",
  variable: "--font-partial-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lesser UI - 같이 만들고, 같이 나누는 오픈소스 UI",
    template: "%s | Lesser UI",
  },

  description:
    "개발자들을 위한 오픈소스 UI 블럭 공유 플랫폼. 손쉽게 UI를 만들고, 영감을 얻고, 함께 나눠보세요.",

  verification: {
    google: "X8abBNxolxp2vkT2B7w1uCMZm9zkCEGLo0xpbL7Fw9U",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${partialSans.variable} w-[1440px] overflow-auto antialiased`}
      >
        <div id="modal-root" />
        <Navbar />
        {modal}
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
