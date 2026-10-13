import type { MetadataRoute } from 'next'
import { getAllContent } from '@/lib/mdx'
import { SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/publications',
    '/presentations',
    '/talks',
    '/cv',
    ...getAllContent('pages')
      .filter(({ slug }) => slug !== 'index')
      .map(({ slug }) => `/page/${encodeURIComponent(slug)}`),
  ]

  return paths.map((path) => ({ url: `${SITE_URL}${path}` }))
}
