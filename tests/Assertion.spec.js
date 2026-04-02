import { test, expect } from '@playwright/test';

test('assertion test', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/"); 

    // Page assertions
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    // Locators
    const usernameInput = page.locator('#user-name');
    const passwordInput = page.locator('#password');
    const loginButton = page.locator('#login-button');

    // Visibility
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(loginButton).toBeVisible();

    // Enabled + Editable
    await expect(usernameInput).toBeEnabled();
    await expect(passwordInput).toBeEnabled();
    await expect(loginButton).toBeEnabled();

    await expect(usernameInput).toBeEditable();
    await expect(passwordInput).toBeEditable();

    // Fill + value assertions
    await usernameInput.fill('standard_user');
    await expect(usernameInput).toHaveValue('standard_user');

    await passwordInput.fill('secret_sauce');
    await expect(passwordInput).toHaveValue('secret_sauce');

    await loginButton.click();

    // After login
    await expect(page).toHaveURL(/inventory/);

    const productTitle = page.locator('.title');

    await expect(productTitle).toBeVisible();
    await expect(productTitle).toHaveText('Products');
    //await expect(productTitle).toContainText('prod');

    // ✅ FIXED: added await
    await expect(usernameInput).toHaveAttribute('placeholder', 'Username');
    await expect(passwordInput).toHaveAttribute('placeholder', 'Password');
    await expect(loginButton).toHaveAttribute('type', 'submit');

    // Class assertion
    await expect(productTitle).toHaveClass('title');

    // ✅ FIXED: correct attribute check instead of toHaveId
    const cartIcon = page.locator('.shopping_cart_container');
    await expect(cartIcon).toHaveAttribute('id', 'shopping_cart_container');

    // Count assertion
    const productItems = page.locator('.inventory_item_name');
    await expect(productItems).toHaveCount(6);

    // Screenshot assertion
    const sauceLabBagPack = page.getByAltText('Sauce Labs Backpack');
    await expect(sauceLabBagPack).toHaveScreenshot('bagPack.png');

    // Page screenshot
    await expect(page).toHaveScreenshot({
        mask: [page.locator('.shopping_cart_badge')],
    });
});




