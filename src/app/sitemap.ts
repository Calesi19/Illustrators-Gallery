import type { MetadataRoute } from "next";
import { siteConfig } from "../../config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/contact"].map((path) => ({
    url: `${siteConfig.site_url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
