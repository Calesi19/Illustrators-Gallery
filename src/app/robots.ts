import type { MetadataRoute } from "next";
import { siteConfig } from "../../config/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.site_url}/sitemap.xml`,
  };
}
