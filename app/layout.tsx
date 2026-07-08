import type { Metadata, Viewport } from "next";
import "./globals.css";
import { company } from "@/data/site";

const title = "合同会社芙蓉 | 食品業界向けAI・DX導入支援と海外進出支援";
const description =
  "合同会社芙蓉は、食品業界・水産業界の現場を理解した実践型のAI・DX導入支援、海外進出支援、業務改善支援を提供します。LINE注文整理、見積作成、OCR、営業管理、海外対応まで小さく始められるDXを支援します。";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title,
  description,
  keywords: [
    "合同会社芙蓉",
    "FUYOU LLC",
    "食品業界 DX",
    "食品業界 AI",
    "水産業 DX",
    "LINE注文 整理",
    "見積作成 効率化",
    "OCR 導入支援",
    "海外進出支援",
    "輸出実務 相談"
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
        alt: "食品業界の業務改善と海外展開を表す清潔感のあるビジネスイメージ"
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
  themeColor: "#0E1B16"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.nameJa,
    alternateName: company.nameEn,
    url: company.siteUrl,
    email: company.email
  };

  return (
    <html lang="ja">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c")
          }}
        />
        {children}
      </body>
    </html>
  );
}
