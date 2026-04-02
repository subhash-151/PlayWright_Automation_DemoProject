import { test, expect } from '@playwright/test';

test('soft assertion test', async ({ page }) => {
    
    //open url
    await page.goto("https://www.saucedemo.com/")

     /////////////////Hard Assertion///////////

    //verify page title
   // await expect(page).toHaveTitle('Swag Labs123')

    //verify page url
    //await expect(page).toHaveURL('https://www.saucedemo.com/')

    //////////////////Soft Assertion///////////

  
    await expect.soft(page).toHaveTitle('Swag Labs')
    await expect.soft(page).toHaveURL('https://www.saucedemo.com/')

     const usernameInput = page.locator('#user-name');
    const passwordInput = page.locator('#password');
    const loginButton = page.locator('#login-button');

});