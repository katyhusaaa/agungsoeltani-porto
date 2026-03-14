import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Kalau ada folder rahasia ntar
    },
    sitemap: 'https://agungsoeltani.web.id/sitemap.xml', // Ganti pake domain lo
  };
}