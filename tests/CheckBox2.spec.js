import { test, expect } from '@playwright/test'
import { aborted } from 'node:util'

test('ChecBoxDemo', async ({ page }) => {

    //open url
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html", { waitUntil: 'domcontentloaded' })

    page.locator()






})