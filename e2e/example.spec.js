import { test, expect } from '@playwright/test';

test('Acessar página do Playwright e validar título', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForLoadState('load');
  await expect(page).toHaveTitle(/Playwright/);
});
