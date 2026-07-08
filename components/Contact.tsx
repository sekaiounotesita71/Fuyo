"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { company, consultationMethodOptions, contactHighlights, industryOptions, serviceOptions } from "@/data/site";

type FormState = {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  industry: string;
  service: string;
  consultationMethod: string;
  message: string;
  privacyAgreed: boolean;
};

const initialState: FormState = {
  companyName: "",
  name: "",
  email: "",
  phone: "",
  industry: industryOptions[0],
  service: serviceOptions[0],
  consultationMethod: consultationMethodOptions[0],
  message: "",
  privacyAgreed: false
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const contactEmail = company.email;

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`【お問い合わせ】${form.companyName || form.name || "LP"}`);
    const body = encodeURIComponent(
      [
        `会社名: ${form.companyName}`,
        `お名前: ${form.name}`,
        `メールアドレス: ${form.email}`,
        `電話番号: ${form.phone}`,
        `業種: ${form.industry}`,
        `相談したい内容: ${form.service}`,
        `希望する相談方法: ${form.consultationMethod}`,
        `個人情報の取り扱いへの同意: ${form.privacyAgreed ? "同意済み" : "未同意"}`,
        "",
        "現在の課題:",
        form.message
      ].join("\n")
    );
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [contactEmail, form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    if (formspreeEndpoint) {
      return;
    }

    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <section id="contact" className="section-y bg-ink text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="食品輸出・DX 初回診断を申し込む"
            description="海外展開、業務DX、AI活用、WEB導線について、現状の課題と優先順位を整理します。何から始めればよいかわからない段階でもご相談ください。"
            tone="dark"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {contactHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 border border-white/12 p-4 text-white/78">
                  <Icon size={18} className="text-gold" aria-hidden />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <form
          action={formspreeEndpoint || mailtoHref}
          method="POST"
          onSubmit={handleSubmit}
          className="border border-white/12 bg-white p-6 text-ink shadow-soft md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              会社名
              <input
                name="company"
                value={form.companyName}
                onChange={(event) => updateField("companyName", event.target.value)}
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-green"
                autoComplete="organization"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              お名前
              <input
                name="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-green"
                autoComplete="name"
                required
              />
            </label>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              メールアドレス
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-green"
                autoComplete="email"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              電話番号
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-green"
                autoComplete="tel"
              />
            </label>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              業種
              <select
                name="industry"
                value={form.industry}
                onChange={(event) => updateField("industry", event.target.value)}
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-green"
              >
                {industryOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              相談したい内容
              <select
                name="service"
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-green"
              >
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-semibold">
            現在の課題
            <textarea
              name="message"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="min-h-40 resize-y border border-line bg-white px-4 py-3 font-normal leading-7 outline-none transition focus:border-green"
              placeholder="例：LINE注文を整理したい、見積作成を早くしたい、海外バイヤー対応を相談したい"
              required
            />
          </label>

          <fieldset className="mt-5 grid gap-3 text-sm font-semibold">
            <legend>希望する相談方法</legend>
            <div className="grid gap-3 sm:grid-cols-3">
              {consultationMethodOptions.map((option) => (
                <label key={option} className="flex items-center gap-2 border border-line px-4 py-3 font-normal">
                  <input
                    type="radio"
                    name="consultation_method"
                    value={option}
                    checked={form.consultationMethod === option}
                    onChange={(event) => updateField("consultationMethod", event.target.value)}
                    className="accent-green"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-5 flex items-start gap-3 text-sm leading-7 text-slate-700">
            <input
              type="checkbox"
              name="privacy_agreed"
              checked={form.privacyAgreed}
              onChange={(event) => updateField("privacyAgreed", event.target.checked)}
              className="mt-1 accent-green"
              required
            />
            <span>
              <Link href="/privacy" className="font-semibold text-green underline-offset-4 hover:underline">
                プライバシーポリシー
              </Link>
              に同意します。
            </span>
          </label>

          <input type="hidden" name="_subject" value="合同会社芙蓉 食品輸出・DX 初回診断お問い合わせ" />
          <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-green sm:w-auto">
            初回診断を申し込む
            <ArrowRight size={17} aria-hidden />
          </button>
          {!formspreeEndpoint ? (
            <p className="mt-4 text-xs leading-6 text-slate-500">
              メールでのご相談も受け付けています。送信ボタンから入力内容をもとにメールを作成できます。
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
