import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/solutions",
    "/solutions/aegis",
    "/solutions/argus",
    "/solutions/exploitsense",
    "/services",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const now = new Date();

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/solutions" ? 0.9 : 0.7,
  }));
}
