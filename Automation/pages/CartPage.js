const { BasePage } = require('./BasePage');

class CartPage extends BasePage {

    constructor(page) {
        super(page);

        this.cartItems =
            page.locator('.cart_item');

        this.continueShoppingButton =
            page.locator('[data-test="continue-shopping"]');

        this.checkoutButton =
            page.locator('[data-test="checkout"]');
    }

    async getCartItemCount() {
        return await this.cartItems.count();
    }

    async removeProduct(productName) {

        const product = this.cartItems.filter({
            hasText: productName
        });

        await product.locator('button').click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };