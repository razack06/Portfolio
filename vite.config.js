import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { site, profile, contact } from './src/data/profile.js'

// Escape values before placing them in HTML attributes/text.
const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Injects SEO / Open Graph tags from src/data/profile.js into index.html,
 * so crawlers see real content without running JavaScript.
 */
function seoFromProfile(base) {
  return {
    name: 'seo-from-profile',
    transformIndexHtml(html) {
      const siteUrl = site.url.replace(/\/$/, '')
      const ogImage = siteUrl ? `${siteUrl}/${site.ogImage}` : `${base}${site.ogImage}`
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.title,
        email: `mailto:${contact.email}`,
        address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
        sameAs: [contact.linkedin, contact.github].filter(Boolean),
        ...(siteUrl && { url: siteUrl }),
      }
      const tags = [
        `<title>${esc(site.title)}</title>`,
        `<meta name="description" content="${esc(site.description)}" />`,
        `<meta name="author" content="${esc(profile.name)}" />`,
        siteUrl && `<link rel="canonical" href="${esc(siteUrl)}/" />`,
        `<meta property="og:type" content="profile" />`,
        `<meta property="og:title" content="${esc(site.title)}" />`,
        `<meta property="og:description" content="${esc(site.description)}" />`,
        `<meta property="og:image" content="${esc(ogImage)}" />`,
        `<meta property="og:image:width" content="1200" />`,
        `<meta property="og:image:height" content="630" />`,
        siteUrl && `<meta property="og:url" content="${esc(siteUrl)}/" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${esc(site.title)}" />`,
        `<meta name="twitter:description" content="${esc(site.description)}" />`,
        `<meta name="twitter:image" content="${esc(ogImage)}" />`,
        // Preload the hero photo so it doesn't wait for JavaScript (it's the LCP image on phones)
        profile.photo && `<link rel="preload" as="image" href="${esc(base + profile.photo)}" fetchpriority="high" type="image/webp" />`,
        `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
      ]
        .filter(Boolean)
        .join('\n    ')
      return html.replace('<!--SEO-->', tags)
    },
  }
}

export default defineConfig(() => {
  // GitHub Pages project sites live under /<repo>/; the deploy workflow sets BASE_PATH.
  const base = process.env.BASE_PATH || '/'
  return {
    base,
    plugins: [react(), tailwindcss(), seoFromProfile(base)],
  }
})
