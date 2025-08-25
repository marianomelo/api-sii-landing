import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://api-sii.tecnologicachile.cl';
  const currentDate = new Date();

  // One‑page: include only canonical URL; avoid fragment identifiers
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
