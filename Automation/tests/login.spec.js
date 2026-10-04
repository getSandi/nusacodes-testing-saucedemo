const { test, expect } = require('../fixtures/test');
const { users } = require('../test-data/users');

test.describe('Login', () => {

    test('Standard user dapat login', async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            users.standardUser.username,
            users.standardUser.password
        );

        await expect(loginPage.page)
            .toHaveURL(/inventory/);
    });


    test('Locked out user tidak dapat login', async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            users.lockedOutUser.username,
            users.lockedOutUser.password
        );

        await expect(loginPage.errorMessage)
            .toBeVisible();
    });


    test('Invalid username tidak dapat login', async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            'invalid_user',
            users.standardUser.password
        );

        await expect(loginPage.errorMessage)
            .toBeVisible();
    });


    test('Invalid password tidak dapat login', async ({ loginPage }) => {

        await loginPage.open();

        await loginPage.login(
            users.standardUser.username,
            'wrong_password'
        );

        await expect(loginPage.errorMessage)
            .toBeVisible();
    });

});