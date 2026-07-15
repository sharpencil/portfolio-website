import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://youngryu.com'

  const routes = [
    '',
    '/about',
    '/capabilities',
    '/start',
    '/work',
    '/work/smartstream',
    '/work/iodine-interact',
    '/work/operational-intelligence',
    '/work/siemens-dfl',
    '/work/evergreen-sis',
    '/work/siemens-config-tool',
    '/work/outpatient',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
