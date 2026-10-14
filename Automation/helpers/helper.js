async function login(page, username, password) {
  await page.goto('/');
  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();
}

async function tambahProduk(page, idProduk) {
  await page.locator(`[data-test="add-to-cart-${idProduk}"]`).click();
}

async function hapusProduk(page, idProduk) {
  await page.locator(`[data-test="remove-${idProduk}"]`).click();
}

async function bukaCart(page) {
  await page.locator('[data-test="shopping-cart-link"]').click();
}

async function isiDataCheckout(page, firstName, lastName, postalCode) {
  await page.locator('[data-test="firstName"]').fill(firstName);
  await page.locator('[data-test="lastName"]').fill(lastName);
  await page.locator('[data-test="postalCode"]').fill(postalCode);
}


async function logout(page) {
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
}

module.exports = { login, tambahProduk, hapusProduk, bukaCart, isiDataCheckout, logout };
