const { test, expect } = require('../fixtures/test');
const { users } = require('../test-data/users');

test.describe('Checkout', () => {

    test.beforeEach(async ({
        loginPage,
        inventoryPage,
        cartPage
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

        await cartPage.checkout();
    });


    test('User dapat mengisi informasi checkout', async ({
        checkoutPage
    }) => {

        await checkoutPage.fillCustomerInformation(
            'Sandi',
            'QA',
            '60123'
        );

        await expect(
            checkoutPage.firstNameInput
        ).toHaveValue('Sandi');

        await expect(
            checkoutPage.lastNameInput
        ).toHaveValue('QA');

        await expect(
            checkoutPage.postalCodeInput
        ).toHaveValue('60123');
    });


    test('User dapat menyelesaikan checkout', async ({
        checkoutPage
    }) => {

        await checkoutPage.fillCustomerInformation(
            'Sandi',
            'QA',
            '60123'
        );

        await checkoutPage.continueCheckout();

        await checkoutPage.finishOrder();

        await expect(
            checkoutPage.completeHeader
        ).toBeVisible();
    });


    test('Checkout gagal jika informasi customer kosong', async ({
        checkoutPage
    }) => {

        await checkoutPage.continueCheckout();

        await expect(
            checkoutPage.errorMessage
        ).toBeVisible();
    });

});