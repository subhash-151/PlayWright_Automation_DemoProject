import { test, expect } from '@playwright/test';

test('Locator', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // locate username input
    const userNameInput = page.locator('#user-name');
    await userNameInput.fill('standard_user');

    // locate password input
    const passwordInput = page.locator('#password');
    await passwordInput.fill('secret_sauce');

    // locate login button and click
    const loginButton = page.locator('#login-button');
    await loginButton.click();

    // verify successful login
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');

    // verify product section is visible
    const productTitle = page.locator('.title');
    await expect(productTitle).toBeVisible();

    // find list of all products
    const products = page.locator('.inventory_item_name');

    // count products
    const count = await products.count();
    console.log('Total number of products:', count);

    // loop through each product and print the product name
    for (let i = 0; i < count; i++) {
        const name = await products.nth(i).textContent();
        console.log(name);
    }

});