import { test, expect } from '@playwright/test';

test('Automate login flow', async ({ page }) => {
    // Open test site
    await page.goto('/');

    // Set credentials
    await page.locator('[data-test="username"]').fill(process.env.SAUCEDEMO_USER);
    await page.locator('[data-test="password"]').fill(process.env.SAUCEDEMO_PASSWORD);

    // Click Login
    await page.locator('[data-test="login-button"]').click();

    // Expect to be successful
    await expect(page).toHaveURL('/inventory.html');
});
