const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async open() {
        await super.open('https://www.saucedemo.com/');
    }

    async enterUsername(username) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async isErrorMessageVisible() {
        return await this.errorMessage.isVisible();
    }
}

module.exports = { LoginPage };