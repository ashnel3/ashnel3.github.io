import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'

export const GET: APIRoute = (context) =>
  rss({
    title: 'ashnel3',
    description: "ashnel3's development blog",
    site: context.site as URL,
    items: [],
  })
