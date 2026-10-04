const { test, expect } = require('../fixtures/test');
const { users } = require('../test-data/users');

test.describe('Cart', () => {

    test.beforeEach(async ({
        loginPage,
        inventoryPage
    }) => {

        await loginPage.open();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await inventoryPage.addProduct(
            'Sauce Labs Backpack'
        );

        await inventoryPage.openCart();
    });


    test('Product yang ditambahkan muncul di cart', async ({
        cartPage
    }) => {

        await expect(
            cartPage.cartItems
        ).toHaveCount(1);
    });


    test('User dapat menghapus product dari cart', async ({
        cartPage
    }) => {

        await cartPage.removeProduct(
            'Sauce Labs Backpack'
        );

        await expect(
            cartPage.cartItems
        ).toHaveCount(0);
    });


    test('User dapat kembali ke inventory', async ({
        cartPage,
        inventoryPage
    }) => {

        await cartPage.continueShopping();

        await expect(
            inventoryPage.inventoryContainer
        ).toBeVisible();
    });


    test('User dapat melanjutkan ke checkout', async ({
        cartPage
    }) => {

        await cartPage.checkout();

        await expect(
            cartPage.page
        ).toHaveURL(/checkout-step-one/);
    });

});