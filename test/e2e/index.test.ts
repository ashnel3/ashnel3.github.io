import { test, expect } from '@playwright/test'

test('index page renders', async ({ page }) => {
  await page.goto('./')
  expect(await page.$(`text="'Hello World!'"`)).not.toBe(null)
})
