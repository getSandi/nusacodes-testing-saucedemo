const { test, expect } = require('@playwright/test');
const data = require('../data/data.json');
const { login, tambahProduk, hapusProduk, bukaCart } = require('../helpers/helper');

test.describe('CART', () => {

  test.beforeEach(async ({ page }) => {
    await login(page, data.standardUser.username, data.standardUser.password);
  });

  test('TC-CART-001 - Membuka shopping cart', async ({ page }) => {
    await bukaCart(page);

    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');
  });

  test('TC-CART-002 - Produk tampil di cart', async ({ page }) => {
    await tambahProduk(page, data.produk.backpack);
    await bukaCart(page);

    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1);
    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
  });

  test('TC-CART-003 - Hapus produk dari cart', async ({ page }) => {
    await tambahProduk(page, data.produk.backpack);
    await bukaCart(page);

    await page.locator(`[data-test="remove-${data.produk.backpack}"]`).click();

    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(0);
  });

  test('TC-CART-004 - Jumlah item bertambah', async ({ page }) => {
    await tambahProduk(page, data.produk.backpack);
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

    await tambahProduk(page, data.produk.bikeLight);
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');
  });

  test('TC-CART-005 - Jumlah item berkurang setelah dihapus', async ({ page }) => {
    await tambahProduk(page, data.produk.backpack);
    await tambahProduk(page, data.produk.bikeLight);
    await bukaCart(page);

    await page.locator(`[data-test="remove-${data.produk.backpack}"]`).click();

    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1);
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  });

  test('TC-CART-006 - Lanjut ke checkout', async ({ page }) => {
    await tambahProduk(page, data.produk.backpack);
    await bukaCart(page);

    await page.locator('[data-test="checkout"]').click();

    await expect(page).toHaveURL(/checkout-step-one/);
  });

});

test.describe('CART (problem_user)', () => {

  // BUG-002 masih Open, jadi test ini DIHARAPKAN gagal (lihat penjelasan test.fail di inventory.spec.js)
  test('TC-CART-003 - Tombol Remove menghapus produk (BUG-002)', async ({ page }) => {
    test.fail(true, 'BUG-002: tombol Remove tidak berfungsi pada problem_user');

    await login(page, data.problemUser.username, data.problemUser.password);
    await tambahProduk(page, data.produk.backpack);
    await hapusProduk(page, data.produk.backpack);

    // Seharusnya badge cart hilang setelah produk dihapus
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toBeHidden();
  });

});
