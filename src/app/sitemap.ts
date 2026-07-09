import type { MetadataRoute } from "next";
import { siteSettings } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteSettings.domain,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteSettings.domain}${siteSettings.impressumUrl}`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteSettings.domain}${siteSettings.privacyUrl}`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
