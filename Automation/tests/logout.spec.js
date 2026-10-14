const { test, expect } = require('@playwright/test');
const data = require('../data/data.json');
const { login, logout } = require('../helpers/helper');

test.describe('LOGOUT', () => {

  test.beforeEach(async ({ page }) => {
    await login(page, data.standardUser.username, data.standardUser.password);
    await logout(page);
  });

  test('TC-LOGOUT-001 - Logout dari aplikasi', async ({ page }) => {
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

  test('TC-LOGOUT-002 - Kembali ke halaman login', async ({ page }) => {
    await expect(page).not.toHaveURL(/inventory/);
    await expect(page.locator('[data-test="username"]')).toBeVisible();
  });

  test('TC-LOGOUT-003 - Tidak bisa akses halaman tanpa login', async ({ page }) => {
    await page.goto('/inventory.html');

    await expect(page.locator('[data-test="error"]')).toContainText('when you are logged in');
  });

});
