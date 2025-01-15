import { test, expect } from '@playwright/test';

test('Automate login flow', async ({ page }) => {
    // Open test site
    await page.goto('https://www.saucedemo.com/');

    // Set credentials
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");

    // Click Login
    await page.locator('[data-test="login-button"]').click();

    // Expect to be successful
    expect(page.url()).toBe("https://www.saucedemo.com/inventory.html")
});
