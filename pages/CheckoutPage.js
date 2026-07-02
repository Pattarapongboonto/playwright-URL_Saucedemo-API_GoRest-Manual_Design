class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.firstName = page.locator('#first-name');

        this.lastName = page.locator('#last-name');

        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');

        this.finishButton = page.locator('#finish');

        this.completeHeader = page.locator('.complete-header');

    }

    async fillInformation() {

        await this.firstName.fill("John");

        await this.lastName.fill("Doe");

        await this.postalCode.fill("10110");

        await this.continueButton.click();

    }

    async finishOrder() {

        await this.finishButton.click();

    }

}

module.exports = CheckoutPage;