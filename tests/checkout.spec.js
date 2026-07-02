const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const priceUtil = require('../utils/priceUtil');

test('Complete Checkout', async ({ page }) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    // Login
    await login.openWebsite();

    await login.login();

    await expect(page).toHaveURL(/inventory/);

    // Add Product

    await inventory.addProduct("Sauce Labs Backpack");

    await inventory.addProduct("Sauce Labs Bike Light");

    await expect(inventory.cartBadge).toHaveText("2");

    // Open Cart

    await inventory.openCart();

    // Verify Price

    const prices = await cart.getPrices();

    const total = priceUtil.calculateTotal(
        priceUtil.removeDollar(prices[0]),
        priceUtil.removeDollar(prices[1])
    );

    console.log("Total Price =", total);

    // Checkout

    await cart.checkout();

    await checkout.fillInformation();

    // Finish

    await checkout.finishOrder();

    await expect(checkout.completeHeader)
        .toHaveText("Thank you for your order!");

});