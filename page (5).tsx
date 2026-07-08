import type { MetadataRoute } from "next";
import { columnPosts, company, serviceDetails } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    { path: "", priority: 1 },
    ...Object.values(serviceDetails).map((service) => ({ path: service.href, priority: 0.85 })),
    { path: "/column", priority: 0.8 },
    { path: "/diagnosis", priority: 0.9 },
    { path: "/case", priority: 0.7 },
    { path: "/note", priority: 0.65 },
    ...columnPosts.map((post) => ({ path: `/column/${post.slug}`, priority: 0.7 }))
  ];

  return staticPaths.map((item) => ({
    url: `${company.siteUrl}${item.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: item.priority
  }));
}
