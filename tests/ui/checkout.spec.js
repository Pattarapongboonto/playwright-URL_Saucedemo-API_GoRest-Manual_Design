const { test, expect } = require('@playwright/test');
const env = require('../../config/env');

test('UI - Login and checkout flow', async ({ page }) => {

    await page.goto(env.baseUrl);

    // Login
    await page.fill('#user-name', env.username);
    await page.fill('#password', env.password);
    await page.click('#login-button');

    // Assert login success
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Add items
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bike-light');

    // Cart check
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    await page.click('.shopping_cart_link');

    // Checkout
    await page.click('#checkout');

    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'QA');
    await page.fill('#postal-code', '10110');

    await page.click('#continue');

    // Verify checkout page
    await expect(page.locator('.summary_total_label')).toBeVisible();

    await page.click('#finish');

    // Final assertion
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});