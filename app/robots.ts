import type { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: process.env.ROBOTS_INDEX_ENABLED ? '/' : undefined,
      disallow: !process.env.ROBOTS_INDEX_ENABLED ? '/' : undefined,
    },
    sitemap: `${process.env.NEXT_PUBLIC_PAGE_URL}/sitemap.xml`,
  }
}