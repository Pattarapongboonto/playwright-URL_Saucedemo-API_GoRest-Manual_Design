class InventoryPage {

    constructor(page) {

        this.page = page;

        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');

        this.cartButton = page.locator('[data-test="shopping-cart-link"]');

    }

    async addProduct(productName) {

        await this.page.locator('.inventory_item')
            .filter({ hasText: productName })
            .locator('button')
            .click();

    }

    async openCart() {
        await this.cartButton.click();
    }

}

module.exports = InventoryPage;