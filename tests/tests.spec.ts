import { test, expect } from '@playwright/test';

test('Automate login flow', async ({ page }) => {
    // Open test site
    await page.goto('/');

    // Set credentials
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");

    // Click Login
    await page.locator('[data-test="login-button"]').click();

    // Expect to be successful
    await expect(page).toHaveURL('/inventory.html');
});
