import{test, expect} from "@playwright/test"
 test('Input Demo', async ({page}) => {

    //increase the timeouts only for this test case
    test.setTimeout(60000)
    //open the application and wait only for DOM content to load
    //open url
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html", {waitUntil: 'domcontentloaded'})
 
        //locate first name input box

        const firstNameInput = page.locator("//input[@name='firstname']")
           
        //input  box is visible or not
        await expect(firstNameInput).toBeVisible()

        //input box is empty or not
        await expect(firstNameInput).toBeEmpty()

        //input box is enabled or not
        await expect(firstNameInput).toBeEnabled()

        //input box is editable or not
        await expect(firstNameInput).toBeEditable()

        //fill the input box
        await firstNameInput.fill("subhash")       

        await page.waitForTimeout(5000)
           

    


 })