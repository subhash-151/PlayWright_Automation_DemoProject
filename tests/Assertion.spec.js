import { test, expect } from '@playwright/test';

test('assertion test', async ({ page }) => {

    // Open Google page
    await page.goto("https://www.saucedemo.com/"); 

    //1.page level assertions
    await expect(page).toHaveTitle('Swag Labs')
    
    //verify page url
    await expect(page).toHaveURL('https://www.saucedemo.com/')

    //elements states assertions
    const usernameInput=await page.locator('#user-name');
    const passwordInput=await page.locator('#password');
    const loginButton=await page.locator('#login-button');


    //text & value assertions
    await usernameInput.fill('standard_user');
    
    await expect(usernameInput).toHaveValue('standard_user');

    await passwordInput.fill('secret_sauce');
    await expect(passwordInput).toHaveValue('secret_sauce');

        await loginButton.click();

});