import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DiagnosisCTA } from "@/components/DiagnosisCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { columnPosts, company } from "@/data/site";

type ColumnArticlePageProps = {
  params: Promise<{ slug: string }>;
};

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
    title: `${post.title} | ${company.nameJa}`,
    description: post.excerpt,
    alternates: { canonical: `/column/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
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
        <PageHero eyebrow={post.category} title={post.title} lead={post.excerpt} ctaLabel="無料相談する" />
        <article className="section-y bg-white">
          <div className="container-shell max-w-3xl">
            {post.body.map((paragraph) => (
              <p key={paragraph} className="mb-7 text-base leading-9 text-slate-700 md:text-lg">
                {paragraph}
              </p>
            ))}
            <div className="mt-12 border-l-2 border-gold bg-smoke p-6">
              <p className="font-semibold leading-8 text-ink">
                自社の場合、何から整えるべきか知りたい方は、食品輸出・DX 初回診断からご相談ください。
              </p>
            </div>
          </div>
        </article>
        <DiagnosisCTA />
      </main>
      <Footer />
    </>
  );
}
