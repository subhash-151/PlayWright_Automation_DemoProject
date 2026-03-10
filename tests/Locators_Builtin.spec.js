import { test, expect } from '@playwright/test';

test('Built-in locators-sauceDemo', async ({ page }) => 
    {
            //open sauce demo
            await page.goto('https://www.saucedemo.com/');

            //enter username 
            await page.getByPlaceholder('Username').fill('standard_user')

            //enter password
            await page.getByPlaceholder('Password').fill('secret_sauce')

            //click login button
            await page.getByRole('button', { name: 'Login' }).click()   

            //assertion

            await expect(page).toHaveURL(/inventory.html/)

            //getByText locator-verify product visibility on inventory page
            await expect(page.getByText('Products')).toBeVisible()  

            //getByrole()
            await expect(page.getByRole('heading', { name: 'Add to cart' }))..first().click()//verify add to cart button visibility 

    })  