const { test, expect } = require('@playwright/test'); 

// importing two things: test function to create a test & expect for assertion

test('open Google page & check title', async ({ page }) => {

    // Open Google page
    await page.goto("https://www.google.com/");

    // Get and print page title
    const pageTitle = await page.title();
    console.log("Page title is: " + pageTitle);

    // Validate title contains "Google"
    await expect(page).toHaveTitle(/Google/);

    // Get and print page URL
    const pageUrl = page.url();
    console.log("Page URL is: " + pageUrl);

});