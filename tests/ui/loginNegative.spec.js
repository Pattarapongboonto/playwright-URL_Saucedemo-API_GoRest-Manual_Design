const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');

test('Invalid Login', async ({ page }) => {

    const login = new LoginPage(page);

    await login.openWebsite();

    await login.loginWithInvalidPassword();

    await expect(login.errorMessage)
        .toContainText("Username and password do not match");

});