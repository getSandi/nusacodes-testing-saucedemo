const { test, expect } = require('@playwright/test');
const data = require('../data/data.json');
const { login, tambahProduk } = require('../helpers/helper');

test.describe('PRODUK', () => {

  test.beforeEach(async ({ page }) => {
    await login(page, data.standardUser.username, data.standardUser.password);
  });

  test('TC-PROD-001 - Menampilkan daftar produk', async ({ page }) => {
    await expect(page.locator('[data-test="inventory-item"]')).not.toHaveCount(0);
  });

  test('TC-PROD-002 - Menampilkan nama produk', async ({ page }) => {
    const nama = await page.locator('[data-test="inventory-item-name"]').allTextContents();
    expect(nama.length).toBeGreaterThan(0);
  });

  test('TC-PROD-003 - Menampilkan harga produk', async ({ page }) => {
    const harga = await page.locator('[data-test="inventory-item-price"]').allTextContents();
    expect(harga.length).toBeGreaterThan(0);
  });

  test('TC-PROD-005 - Membuka detail produk', async ({ page }) => {
    await page.locator('[data-test="inventory-item-name"]', { hasText: 'Sauce Labs Backpack' }).click();

    await expect(page).toHaveURL(/inventory-item/);
    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
  });

  test('TC-PROD-006 - Menambahkan produk ke cart', async ({ page }) => {
    await tambahProduk(page, data.produk.backpack);

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  });

});

test.describe('PRODUK (problem_user)', () => {

  // BUG-001 masih Open, jjadi test ini DIHARAPKAN gagal.
  // test.fail() membuat Playwright menganggap test ini "lulus" selama bug masih ada.
  // Kalau bug sudah diperbaiki, test ini akan error -> hapus baris test.fail().
  test('TC-PROD-004 - Gambar produk sesuai (BUG-001)', async ({ page }) => {
    test.fail(true, 'BUG-001: semua gambar produk sama pada problem_user');

    await login(page, data.problemUser.username, data.problemUser.password);

    const gambar = await page.locator('.inventory_item_img img').evaluateAll(
      (daftar) => daftar.map((img) => img.getAttribute('src'))
    );

    expect(new Set(gambar).size).toBe(gambar.length);
  });

});

test.describe('SORTING', () => {

  test.beforeEach(async ({ page }) => {
    await login(page, data.standardUser.username, data.standardUser.password);
  });

  test('TC-SORT-001 - Nama A-Z', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('az');

    const nama = await page.locator('[data-test="inventory-item-name"]').allTextContents();
    expect(nama).toEqual([...nama].sort());
  });

  test('TC-SORT-002 - Nama Z-A', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('za');

    const nama = await page.locator('[data-test="inventory-item-name"]').allTextContents();
    expect(nama).toEqual([...nama].sort().reverse());
  });

  test('TC-SORT-003 - Harga rendah ke tinggi', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

    const teks = await page.locator('[data-test="inventory-item-price"]').allTextContents();
    // Ubah "$29.99" menjadi angka 29.99
    const harga = teks.map((t) => parseFloat(t.replace('$', '')));
    expect(harga).toEqual([...harga].sort((a, b) => a - b));
  });

  test('TC-SORT-004 - Harga tinggi ke rendah', async ({ page }) => {
    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');

    const teks = await page.locator('[data-test="inventory-item-price"]').allTextContents();
    const harga = teks.map((t) => parseFloat(t.replace('$', '')));
    expect(harga).toEqual([...harga].sort((a, b) => b - a));
  });

});
