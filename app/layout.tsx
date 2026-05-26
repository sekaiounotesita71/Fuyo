import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { company } from "@/data/site";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap"
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap"
});

const title = "合同会社芙蓉 | 食品業界の海外展開と業務DXを支援";
const description =
  "合同会社芙蓉は、海外営業、AI・DX導入、インバウンド対応、多言語WEB制作まで、食品業界の現場理解を強みに中小企業の成長を支援します。";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title,
  description,
  keywords: [
    "合同会社芙蓉",
    "Fuyo LLC",
    "食品業界 DX",
    "海外進出支援",
    "水産 輸出",
    "インバウンド支援",
    "多言語サイト制作"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: company.nameJa,
    title,
    description,
    images: [
      {
        url: "/images/hero-food-export.png",
        width: 1536,
        height: 864,
        alt: "食品輸出とグローバルビジネスを想起させるデスクシーン"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-food-export.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B111C"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${notoSerifJp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
