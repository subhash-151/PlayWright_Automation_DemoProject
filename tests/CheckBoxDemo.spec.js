import{test, expect} from '@playwright/test'
import { aborted } from 'node:util'

test('ChecBoxDemo', async({page}) =>{

       //open url
         await page.goto("https://www.techlistic.com/p/selenium-practice-form.html", {waitUntil: 'domcontentloaded'})


         //locate the checkbox
         const utfcheckbox=page.locator("#tool-0");
         const seleniumcheckbox=page.locator("#tool-1");
         const seleniumwebdrivercheckbox=page.locator("#tool-2");

         //verify UTF checkbox is selected
         //await expect.soft(utfcheckbox).toBeChecked()

         //verify selenium checkbox is checked
        //await expect(seleniumcheckbox).toBeChecked()

        //verify selenium webdriver checkbox is checked
        //await expect.soft(seleniumwebdrivercheckbox).not.toBeChecked()

        //store all checkbox in an array
        //this will help us use loops instead of repeating code
          

        const checkboxes=[utfcheckbox, seleniumcheckbox, seleniumwebdrivercheckbox];

        //for loop-select all checkboxes

        for(const checkbox of checkboxes)
            {

            //select the checkbox
            await checkbox.check()

            //verify the checkbox is checked
            await expect(checkbox).toBeChecked()


            //for loop + if condition - uncheck checkboxes

            for(const checkbox of checkboxes){

                await checkbox.isChecked() //true or false

                //if condition
                //only uncheck if the checkbox is checked

                if(isChecked){

                    await checkbox.uncheck()
                }

                //verify the checkbox is not checked
                await expect(checkbox).not.toBeChecked()
            }

            await page.waitForTimeout(3000);

        }


       



})