import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { company, serviceDetails } from "@/data/site";

const service = serviceDetails.web;

export const metadata: Metadata = {
  title: `${service.title} | ${company.nameJa}`,
  description: service.description,
  alternates: { canonical: service.href },
  openGraph: {
    title: service.title,
    description: service.description,
    url: service.href,
    siteName: company.nameJa,
    locale: "ja_JP",
    type: "website"
  }
};

export default function WebServicePage() {
  return <ServiceDetailPage slug="web" />;
}
