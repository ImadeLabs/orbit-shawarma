import type { MetadataRoute } from "next";

const siteUrl = "https://orbitshawarma.com";
const routes = ["", "/menu", "/about", "/contact", "/cart", "/checkout", "/login", "/signup"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
