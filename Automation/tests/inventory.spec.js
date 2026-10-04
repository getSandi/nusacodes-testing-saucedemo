const { test, expect } = require('../fixtures/test');
const { users } = require('../test-data/users');

test.describe('Inventory', () => {

    test.beforeEach(async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );
    });


    test('Inventory page ditampilkan setelah login', async ({
        inventoryPage
    }) => {

        await expect(
            inventoryPage.inventoryContainer
        ).toBeVisible();
    });


    test('User dapat melihat daftar produk', async ({
        inventoryPage
    }) => {

        const productCount =
            await inventoryPage.getProductCount();

        expect(productCount).toBeGreaterThan(0);
    });


    test('User dapat menambahkan produk ke cart', async ({
        inventoryPage
    }) => {

        await inventoryPage.addProduct(
            'Sauce Labs Backpack'
        );

        await expect(
            inventoryPage.cartBadge
        ).toHaveText('1');
    });


    test('User dapat menambahkan beberapa produk', async ({
        inventoryPage
    }) => {

        await inventoryPage.addProduct(
            'Sauce Labs Backpack'
        );

        await inventoryPage.addProduct(
            'Sauce Labs Bike Light'
        );

        await expect(
            inventoryPage.cartBadge
        ).toHaveText('2');
    });


    test('User dapat melakukan sorting product', async ({
        inventoryPage
    }) => {

        await inventoryPage.sortProducts('az');

        await expect(
            inventoryPage.sortDropdown
        ).toHaveValue('az');
    });

});