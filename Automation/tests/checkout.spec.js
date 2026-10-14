const { test, expect } = require('@playwright/test');
const data = require('../data/data.json');
const { login, tambahProduk, bukaCart, isiDataCheckout } = require('../helpers/helper');

test.describe('CHECKOUT', () => {

  test.beforeEach(async ({ page }) => {
    await login(page, data.standardUser.username, data.standardUser.password);
    await tambahProduk(page, data.produk.backpack);
    await bukaCart(page);
    await page.locator('[data-test="checkout"]').click();
  });

  test('TC-CHECK-001 - Membuka halaman checkout', async ({ page }) => {
    await expect(page).toHaveURL(/checkout-step-one/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information');
  });

  test('TC-CHECK-002 - Checkout dengan data valid', async ({ page }) => {
    await isiDataCheckout(page, data.customer.firstName, data.customer.lastName, data.customer.postalCode);
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL(/checkout-step-two/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
  });

  test('TC-CHECK-003 - First Name kosong', async ({ page }) => {
    await isiDataCheckout(page, '', data.customer.lastName, data.customer.postalCode);
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
  });

  test('TC-CHECK-004 - Last Name kosong', async ({ page }) => {
    await isiDataCheckout(page, data.customer.firstName, '', data.customer.postalCode);
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('Last Name is required');
  });

  test('TC-CHECK-005 - ZIP kosong', async ({ page }) => {
    await isiDataCheckout(page, data.customer.firstName, data.customer.lastName, '');
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('Postal Code is required');
  });

  test('TC-CHECK-006 - Informasi produk tampil di Overview', async ({ page }) => {
    await isiDataCheckout(page, data.customer.firstName, data.customer.lastName, data.customer.postalCode);
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
    await expect(page.locator('[data-test="total-label"]')).toBeVisible();
  });

  test('TC-CHECK-007 - Menyelesaikan checkout', async ({ page }) => {
    await isiDataCheckout(page, data.customer.firstName, data.customer.lastName, data.customer.postalCode);
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

    await expect(page).toHaveURL(/checkout-complete/);
  });

  test('TC-CHECK-008 - Konfirmasi checkout tampil', async ({ page }) => {
    await isiDataCheckout(page, data.customer.firstName, data.customer.lastName, data.customer.postalCode);
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
  });

});
