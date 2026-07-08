import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${company.nameJa}`,
  description: "合同会社芙蓉のプライバシーポリシーです。お問い合わせ時に取得する個人情報の利用目的、管理、第三者提供、開示請求について記載しています。",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "プライバシーポリシー",
    description: "合同会社芙蓉の個人情報の取り扱いについて。",
    url: "/privacy",
    siteName: company.nameJa,
    locale: "ja_JP",
    type: "website"
  }
};

const sections = [
  {
    title: "個人情報の取得について",
    body:
      "合同会社芙蓉は、お問い合わせフォーム等を通じて、会社名、お名前、メールアドレス、電話番号、相談内容などの個人情報を取得する場合があります。"
  },
  {
    title: "個人情報の利用目的",
    body:
      "取得した個人情報は、お問い合わせへの回答、初回診断や相談の日程調整、サービスの提案、業務上必要な連絡のために利用します。"
  },
  {
    title: "個人情報の管理",
    body:
      "取得した個人情報は、漏えい、紛失、改ざん、不正アクセス等を防止するため、適切に管理します。"
  },
  {
    title: "第三者提供について",
    body:
      "法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。"
  },
  {
    title: "外部サービスの利用について",
    body:
      "お問い合わせフォームの送信やアクセス解析等に外部サービスを利用する場合があります。外部サービスの利用にあたっては、必要な範囲で情報が送信される場合があります。"
  },
  {
    title: "開示・訂正・削除について",
    body:
      "ご本人から個人情報の開示、訂正、削除、利用停止等の請求があった場合は、法令に基づき適切に対応します。"
  },
  {
    title: "プライバシーポリシーの変更",
    body:
      "本ポリシーの内容は、必要に応じて変更することがあります。変更後の内容は、本ページに掲載した時点で有効となります。"
  }
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Privacy Policy"
          title="プライバシーポリシー"
          lead="合同会社芙蓉は、お問い合わせやご相談にあたり取得する個人情報を、適切に取り扱います。"
        />
        <section className="section-y bg-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <SectionHeading
              eyebrow="Policy"
              title="個人情報の取り扱いについて"
              description="本ページでは、合同会社芙蓉における個人情報の取得、利用、管理について定めます。"
            />
            <div className="divide-y divide-line border-y border-line">
              {sections.map((section) => (
                <section key={section.title} className="py-8">
                  <h2 className="font-serif text-2xl font-semibold text-ink">{section.title}</h2>
                  <p className="mt-4 leading-8 text-slate-600">{section.body}</p>
                </section>
              ))}
              <section className="py-8">
                <h2 className="font-serif text-2xl font-semibold text-ink">お問い合わせ窓口</h2>
                <p className="mt-4 leading-8 text-slate-600">
                  個人情報の取り扱いに関するお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
