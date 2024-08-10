import { defineConfig } from '@playwright/test'
import { resolve } from 'path'

const baseURL = 'http://localhost:4321/'

export default defineConfig({
  testDir: resolve('./test/e2e'),
  use: {
    baseURL,
  },
  webServer: {
    command: 'astro dev',
    url: baseURL,
  },
})
