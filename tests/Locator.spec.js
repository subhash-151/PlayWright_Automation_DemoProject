import { test, expect } from '@playwright/test';

test('Locator', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    // locate username input
    const userNameInput = page.locator('#user-name');
    await userNameInput.fill('standard_user');
    //await page fill('#user-name', 'standard_user'); // alternative way to fill input

    // locate password input
    const passwordInput = page.locator('#password');
    await passwordInput.fill('secret_sauce');

    // locate login button and click
    const loginButton = page.locator('#login-button');
    await loginButton.click();

    //verify successful login
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');

    const productNames = page.locator('.title')
    await expect(productNames).toBeVisible()//verify web element visibility

})