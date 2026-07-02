class CartPage {

    constructor(page) {

        this.page = page;

        this.checkoutButton = page.locator('[data-test="checkout"]');

    }

    async getPrices() {

        const prices = await this.page.locator(".inventory_item_price").allTextContents();

        return prices;

    }

    async checkout() {
        await this.checkoutButton.click();
    }

}

module.exports = CartPage;