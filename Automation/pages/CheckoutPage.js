const { BasePage } = require('./BasePage');

class CheckoutPage extends BasePage {

    constructor(page) {
        super(page);

        this.firstNameInput =
            page.locator('[data-test="firstName"]');

        this.lastNameInput =
            page.locator('[data-test="lastName"]');

        this.postalCodeInput =
            page.locator('[data-test="postalCode"]');

        this.continueButton =
            page.locator('[data-test="continue"]');

        this.cancelButton =
            page.locator('[data-test="cancel"]');

        this.finishButton =
            page.locator('[data-test="finish"]');

        this.completeHeader =
            page.locator('[data-test="complete-header"]');

        this.errorMessage =
            page.locator('[data-test="error"]');
    }

    async fillCustomerInformation(
        firstName,
        lastName,
        postalCode
    ) {

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async cancelCheckout() {
        await this.cancelButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
    }

    async isOrderComplete() {
        return await this.completeHeader.isVisible();
    }

    async isErrorVisible() {
        return await this.errorMessage.isVisible();
    }
}

module.exports = { CheckoutPage };