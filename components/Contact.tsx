"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { company, contactHighlights, serviceOptions } from "@/data/site";

type FormState = {
  companyName: string;
  name: string;
  email: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  companyName: "",
  name: "",
  email: "",
  service: serviceOptions[0],
  message: ""
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const contactEmail = company.email;

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`【お問い合わせ】${form.companyName || form.name || "WEBサイトより"}`);
    const body = encodeURIComponent(
      [
        `会社名: ${form.companyName}`,
        `お名前: ${form.name}`,
        `メールアドレス: ${form.email}`,
        `希望サービス: ${form.service}`,
        "",
        "相談内容:",
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
            title="まずは課題整理からご相談ください"
            description="海外展開、業務DX、WEB導線、インバウンド対応まで、現状に合わせて必要な支援を整理します。"
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
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-navy"
                autoComplete="organization"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              お名前
              <input
                name="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-navy"
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
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-navy"
                autoComplete="email"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              希望サービス
              <select
                name="service"
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="border border-line bg-white px-4 py-3 font-normal outline-none transition focus:border-navy"
              >
                {serviceOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-semibold">
            相談内容
            <textarea
              name="message"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="min-h-40 resize-y border border-line bg-white px-4 py-3 font-normal leading-7 outline-none transition focus:border-navy"
              required
            />
          </label>

          <input type="hidden" name="_subject" value="合同会社芙蓉 WEBサイトお問い合わせ" />
          <button
            type="submit"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-navy sm:w-auto"
          >
            送信する
            <ArrowRight size={17} aria-hidden />
          </button>
          <p className="mt-4 text-xs leading-6 text-slate-500">
            Formspreeのエンドポイントを設定するとフォーム送信に切り替わります。未設定時はメール作成画面を開きます。
          </p>
        </form>
      </div>
    </section>
  );
}
