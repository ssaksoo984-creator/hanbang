import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header";
import Footer from "./_components/layout/Footer";
import EventBanner from "./_components/home/EventBanner";
import PopupBanner from "./_components/layout/PopupBanner";
import SideIconBar from "./_components/layout/SideIconBar";
import { popups } from "./_data/popup";
import { sideIcons } from "./_data/sideIcons";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notoSerifKr = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteTitle = "리브한의원";
const siteDescription =
  "체질 맞춤 다이어트부터 척추관절, 보양 처방까지 — 리브한의원이 근본부터 다스립니다.";
const ogImage = "/images/hero/hero_hanbang_01.png";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 2000,
        height: 1125,
        alt: siteTitle,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${notoSerifKr.variable} ${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans-ko">
        <PopupBanner popups={popups} />
        <div className="fixed top-0 inset-x-0 z-50">
          <EventBanner />
          <Header />
        </div>
        <SideIconBar items={sideIcons} />
        <main className="flex-1 pt-[6.5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
