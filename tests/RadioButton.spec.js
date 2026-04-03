import{test, expect} from "@playwright/test"
 test('RadioButtonDemo', async ({page}) => {

  //increase the timeouts only for this test case
    test.setTimeout(60000)

    //open the application and wait only for DOM content to load
    //open url
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html", {waitUntil: 'domcontentloaded'})
   
    //loacate the radio button
      const year3radioButton = page.locator("//input[@value='3']")

      //select radio button year 3
      await year3radioButton.check()

        //verify the radio button is checked or not
        await expect(year3radioButton).toBeChecked()
        
        //verify if radio button is checked

        await expect( year3radioButton.isChecked()).toBeTruthy()



        await page.waitForTimeout(5000)




 })