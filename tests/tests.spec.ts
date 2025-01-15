import { test, expect } from '@playwright/test';

// Use beforeEach function for shared login steps
test.beforeEach(async ({page}) => {
    // Open test site
    await page.goto('/');

    // Set credentials
    await page.locator('[data-test="username"]').fill(process.env.SAUCEDEMO_USER);
    await page.locator('[data-test="password"]').fill(process.env.SAUCEDEMO_PASSWORD);

    // Click Login button
    await page.locator('[data-test="login-button"]').click();

    // Expect login to be successful
    await expect(page).toHaveURL('/inventory.html');
    expect(page.locator('[data-test="title"]')).toBeInViewport();
    expect(page.locator('[data-test="title"]')).toHaveText("Products");
});

test('Test Case #1', async ({ page }) => {
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

test('Test Case #2', async ({ page }) => {
    // Click on top left hamburger button
    await page.getByRole('button', { name: 'Open Menu' }).click();

    // Navigate to about
    await page.locator('[data-test="about-sidebar-link"]').click(); 

    // Verify navigation
    await expect(page).toHaveURL('https://saucelabs.com/');
    await expect(page.getByRole('link', { name: 'Saucelabs' })).toBeInViewport();
    await expect(page.getByText('The world relies on your code')).toBeInViewport();
    await expect(page.getByRole('img', { name: 'Scroll down' })).toBeInViewport();
});
