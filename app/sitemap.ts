
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://benefactor.academy",
      lastModified: new Date(),
    },
    {
      url: "https://benefactor.academy/blog",
      lastModified: new Date(),
    },
    {
      url: "https://benefactor.academy/trends",
      lastModified: new Date(),
    },
    {
      url: "https://benefactor.academy/ai-tools",
      lastModified: new Date(),
    },
  ];
}
