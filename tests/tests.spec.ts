import { test, expect } from '@playwright/test';

test('Automate login flow', async ({ page }) => {
    // Open test site
    await page.goto('https://www.saucedemo.com/');

    // Set credentials
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("standard_user");
});
