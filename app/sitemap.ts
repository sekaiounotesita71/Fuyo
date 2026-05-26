import type { MetadataRoute } from "next";
import { company } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: company.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
