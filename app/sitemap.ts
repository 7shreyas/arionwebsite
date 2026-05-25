import type { MetadataRoute } from 'next'
import { site } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url,                    lastModified: new Date(), priority: 1.0 },
{ url: `${site.url}/approach`,      lastModified: new Date(), priority: 0.8 },
    { url: `${site.url}/contact`,       lastModified: new Date(), priority: 0.9 },
  ]
}
