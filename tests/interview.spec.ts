import {test, expect} from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://demo.evinced.com/');
    await page.locator("a.search-btn").click();
    await page.waitForTimeout(5000);
    expect(page.url(), 'https://demo.evinced.com/');
});