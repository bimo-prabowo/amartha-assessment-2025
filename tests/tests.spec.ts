import { test, expect } from '@playwright/test';

test('Test Case #1', async ({ page }) => {
    // Open test site
    await page.goto('/');

    // Set credentials
    await page.locator('[data-test="username"]').fill(process.env.SAUCEDEMO_USER);
    await page.locator('[data-test="password"]').fill(process.env.SAUCEDEMO_PASSWORD);

    // Click Login button
    await page.locator('[data-test="login-button"]').click();

    // Expect login to be successful
    await expect(page).toHaveURL('/inventory.html');
    expect(page.locator('[data-test="title"]')).toHaveText("Products");

    // Add one item to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    // Get item details
    const itemName = page.locator('[data-test="item-1-title-link"]').textContent;
    const itemDescription = page.getByText('Get your testing superhero on').textContent;
    const itemPrice = page.locator('div').filter({ hasText: /^\$15\.99Remove$/ }).locator('[data-test="inventory-item-price"]').textContent;

    // Click on shopping cart icon
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Expect page redirection to cart
    await expect(page).toHaveURL('/cart.html');
    expect(page.locator('[data-test="title"]')).toHaveText("Your Cart");

    // Verify item in cart
    expect(page.locator('[data-test="item-quantity"]')).toHaveText("1");
    expect(page.locator('[data-test="item-1-title-link"]').textContent).toBe(itemName);
    expect(page.locator('[data-test="inventory-item-desc"]').textContent).toBe(itemDescription);
    expect(page.locator('[data-test="inventory-item-price"]').textContent).toBe(itemPrice);
});
