const { BasePage } = require('./BasePage');

class InventoryPage extends BasePage {

    constructor(page) {
        super(page);

        this.inventoryContainer =
            page.locator('[data-test="inventory-container"]');

        this.productList =
            page.locator('.inventory_item');

        this.cartLink =
            page.locator('[data-test="shopping-cart-link"]');

        this.cartBadge =
            page.locator('[data-test="shopping-cart-badge"]');

        this.sortDropdown =
            page.locator('[data-test="product-sort-container"]');

        this.menuButton =
            page.locator('#react-burger-menu-btn');

        this.logoutLink =
            page.locator('[data-test="logout-sidebar-link"]');
    }

    async isInventoryDisplayed() {
        return await this.inventoryContainer.isVisible();
    }

    async getProductCount() {
        return await this.productList.count();
    }

    async addProduct(productName) {

        const product = this.productList.filter({
            hasText: productName
        });

        await product.locator('button').click();
    }

    async removeProduct(productName) {

        const product = this.productList.filter({
            hasText: productName
        });

        await product.locator('button').click();
    }

    async getCartCount() {

        if (await this.cartBadge.isVisible()) {
            return await this.cartBadge.textContent();
        }

        return '0';
    }

    async sortProducts(option) {
        await this.sortDropdown.selectOption(option);
    }

    async openCart() {
        await this.cartLink.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}

module.exports = { InventoryPage };