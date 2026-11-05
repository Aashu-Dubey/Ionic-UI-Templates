import { expect, test } from '@playwright/test';

test('shows the home page by default on load', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL(/\/menu\/home$/);
  await expect(page.locator('ion-title')).toContainText('Ionic UI');
});
