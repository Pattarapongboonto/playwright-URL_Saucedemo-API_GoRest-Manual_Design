const env = require("../config/env");

class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async openWebsite() {
        await this.page.goto(env.baseUrl);
    }

    async login() {
        await this.username.fill(env.username);
        await this.password.fill(env.password);
        await this.loginButton.click();
    }

    async loginWithInvalidPassword() {
        await this.username.fill(env.username);
        await this.password.fill("wrongpassword");
        await this.loginButton.click();
    }

}

module.exports = LoginPage;