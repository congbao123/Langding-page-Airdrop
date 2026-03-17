import { MetadataRoute } from 'next'
import { getBaseUrl } from '@/lib/config'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add more dynamic URLs here in the future
  ]
}
