import {
  BriefcaseBusiness,
  ClipboardCheck,
  Globe2,
  Handshake,
  Languages,
  LineChart,
  Mail,
  Network,
  Ship,
  Sparkles,
  Store,
  Workflow
} from "lucide-react";

export const company = {
  nameJa: "合同会社芙蓉",
  nameEn: "Fuyo LLC",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@fuyo-link.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://fuyo-link.com"
};

export const navItems = [
  { label: "会社について", href: "#about" },
  { label: "サービス", href: "#services" },
  { label: "強み", href: "#strength" },
  { label: "料金", href: "#pricing" },
  { label: "お問い合わせ", href: "#contact" }
];

export const services = [
  {
    title: "海外進出支援",
    description: "食品・水産関連企業の海外営業、輸出実務、商談準備を現場目線で支援します。",
    icon: Ship,
    items: ["海外営業戦略", "商談資料作成", "英語対応", "輸出実務サポート", "展示会・商談支援"]
  },
  {
    title: "業務DX支援",
    description: "中小企業の現場業務に合わせ、AI活用や受発注整理を無理なく導入します。",
    icon: Workflow,
    items: ["AI活用", "LINE注文整理", "見積・受発注管理", "顧客管理", "業務フロー改善"]
  },
  {
    title: "インバウンド支援",
    description: "訪日客向けの導線、言語対応、商品訴求をWEBと現場の両面から整えます。",
    icon: Store,
    items: ["訪日客向け導線設計", "多言語対応", "店舗・商品訴求", "SNS・WEB活用"]
  },
  {
    title: "WEB制作",
    description: "問い合わせ獲得を目的に、会社サイト、LP、多言語サイトを設計・制作します。",
    icon: Globe2,
    items: ["会社サイト", "LP制作", "多言語サイト", "問い合わせ導線設計"]
  }
];

export const strengths = [
  { title: "食品・水産業界の現場理解", icon: ClipboardCheck },
  { title: "海外営業・輸出実務への理解", icon: BriefcaseBusiness },
  { title: "中小企業向けの現実的なDX提案", icon: LineChart },
  { title: "AIと人の実務を組み合わせた支援", icon: Sparkles },
  { title: "戦略だけでなく、制作・運用まで対応", icon: Network }
];

export const flow = [
  "無料相談",
  "課題整理",
  "提案",
  "制作・実装",
  "改善・運用支援"
];

export const pricing = [
  { name: "WEBサイト制作", price: "20万円〜", detail: "LP、会社サイト、多言語サイトの設計・制作" },
  { name: "DX導入支援", price: "10万円〜", detail: "AI活用、LINE注文整理、業務フロー改善" },
  { name: "海外営業支援", price: "月額5万円〜", detail: "営業資料、英語対応、商談準備、輸出実務支援" },
  { name: "顧問・伴走支援", price: "月額3万円〜", detail: "継続的な課題整理、改善、運用相談" }
];

export const faqs = [
  {
    question: "実績がなくても相談できますか？",
    answer: "はい。まずは現状の課題整理から対応可能です。"
  },
  {
    question: "食品業界以外でも相談できますか？",
    answer: "はい。ただし食品・水産・輸出関連を特に得意としています。"
  },
  {
    question: "WEB制作だけでも依頼できますか？",
    answer: "可能です。問い合わせ獲得を目的とした構成から支援します。"
  },
  {
    question: "AIやDXに詳しくなくても大丈夫ですか？",
    answer: "大丈夫です。現場業務に合わせて、使える形に落とし込みます。"
  }
];

export const serviceOptions = [
  "海外進出支援",
  "DX支援",
  "インバウンド支援",
  "WEB制作",
  "その他"
];

export const contactHighlights = [
  { label: "無料相談", icon: Handshake },
  { label: "多言語対応", icon: Languages },
  { label: "メール受付", icon: Mail }
];
