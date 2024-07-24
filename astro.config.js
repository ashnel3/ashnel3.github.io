// https://astro.build/config

import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  build: {
    assets: 'assets',
  },
  site: 'https://ashnel3.github.io',
  integrations: [mdx(), sitemap(), svelte(), tailwind()],
})
