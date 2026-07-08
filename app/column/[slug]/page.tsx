import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { DiagnosisCTA } from "@/components/DiagnosisCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { columnPosts, company } from "@/data/site";

type ColumnArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function renderMarkdown(markdown: string) {
  const blocks: ReactNode[] = [];
  const lines = markdown.split(/\r?\n/);
  let paragraph: string[] = [];
  let list: string[] = [];

  function flushParagraph() {
    if (paragraph.length === 0) {
      return;
    }
    const text = paragraph.join(" ");
    blocks.push(
      <p key={`p-${blocks.length}`} className="mb-7 text-base leading-9 text-slate-700 md:text-lg">
        {text}
      </p>
    );
    paragraph = [];
  }

  function flushList() {
    if (list.length === 0) {
      return;
    }
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="mb-8 grid gap-2 border-l-2 border-gold pl-5 text-slate-700">
        {list.map((item) => (
          <li key={item} className="leading-8">
            {item}
          </li>
        ))}
      </ul>
    );
    list = [];
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h2 key={`h2-${blocks.length}`} className="mb-5 mt-12 font-serif text-3xl font-semibold leading-tight text-ink">
          {line.slice(3)}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h3 key={`h3-${blocks.length}`} className="mb-4 mt-9 font-serif text-2xl font-semibold leading-tight text-ink">
          {line.slice(4)}
        </h3>
      );
      continue;
    }

    if (line.startsWith("・")) {
      flushParagraph();
      list.push(line.slice(1).trim());
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();

  return blocks;
}

export function generateStaticParams() {
  return columnPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ColumnArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = columnPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/column/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `/column/${post.slug}`,
      siteName: company.nameJa,
      locale: "ja_JP",
      type: "article"
    }
  };
}

export default async function ColumnArticlePage({ params }: ColumnArticlePageProps) {
  const { slug } = await params;
  const post = columnPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    mainEntityOfPage: `${company.siteUrl}/column/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: company.nameJa,
      url: company.siteUrl
    }
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <Header />
      <main>
        <PageHero
          eyebrow={post.category}
          title={post.title}
          lead={post.excerpt}
          ctaLabel={post.cta.label}
          ctaHref={post.cta.href}
        />
        <article className="section-y bg-white">
          <div className="container-shell max-w-3xl">
            {renderMarkdown(post.body)}
            <div className="mt-14 border border-line bg-smoke p-7">
              <h2 className="font-serif text-2xl font-semibold text-ink">{post.cta.title}</h2>
              <p className="mt-4 leading-8 text-slate-700">{post.cta.description}</p>
              <Link href={post.cta.href} className="mt-6 inline-flex text-sm font-bold text-green">
                {post.cta.label}
              </Link>
            </div>
          </div>
        </article>
        <DiagnosisCTA />
      </main>
      <Footer />
    </>
  );
}
