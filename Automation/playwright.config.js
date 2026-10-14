const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Alamat website. Di test cukup tulis page.goto('/')
  use: {
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
  },

  // Laporan: tampil di terminal + file HTML
  reporter: [['list'], ['html', { open: 'never' }]],

  // Hanya pakai Chromium supaya simpel
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
