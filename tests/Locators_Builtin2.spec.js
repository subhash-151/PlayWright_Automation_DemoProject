import { test, expect } from '@playwright/test';

test('Built-in locators-practice', async ({ page }) => {

//getByplaceholder-open sauce demo

await page.goto('https://practice.expandtesting.com/login')

//getBylabel- enter username
await page.getByLabel('Username').fill('practice')

//getBylabel- enter password
await page.getByLabel('Password').fill('SuperSecretPassword!')  

//getByrole- click login button
await page.getByRole('button', { name: 'Login' }).click()

//assertion
await expect(page.getByText('you logged into a secure area!')).toBeVisible() //verify login success message 

//getByrole- home link
await page.getByRole('link', { name: 'Home' }).click() //click home link
})