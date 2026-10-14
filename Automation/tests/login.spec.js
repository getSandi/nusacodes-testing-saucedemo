const { test, expect } = require('@playwright/test');
const data = require('../data/data.json');

test.describe('LOGIN', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC-LOGIN-001 - Login valid', async ({ page }) => {
    await page.locator('[data-test="username"]').fill(data.standardUser.username);
    await page.locator('[data-test="password"]').fill(data.standardUser.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
  });

  test('TC-LOGIN-002 - Username tidak valid', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill(data.standardUser.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('do not match any user');
  });

  test('TC-LOGIN-003 - Password tidak valid', async ({ page }) => {
    await page.locator('[data-test="username"]').fill(data.standardUser.username);
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('do not match any user');
  });

  test('TC-LOGIN-004 - Username kosong', async ({ page }) => {
    await page.locator('[data-test="password"]').fill(data.standardUser.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });

  test('TC-LOGIN-005 - Password kosong', async ({ page }) => {
    await page.locator('[data-test="username"]').fill(data.standardUser.username);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('Password is required');
  });

  test('TC-LOGIN-006 - Akun terkunci', async ({ page }) => {
    await page.locator('[data-test="username"]').fill(data.lockedUser.username);
    await page.locator('[data-test="password"]').fill(data.lockedUser.password);
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
  });

});
