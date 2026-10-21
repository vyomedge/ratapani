import { SITE } from '@/lib/site';

/**
 * Open to all search engines AND AI answer engines (GPTBot, ClaudeBot,
 * PerplexityBot, Google-Extended, etc.) so Ratapani content can be cited in
 * ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews (GEO).
 */
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-SearchBot',
          'Claude-User',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
          'Bingbot',
          'CCBot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
