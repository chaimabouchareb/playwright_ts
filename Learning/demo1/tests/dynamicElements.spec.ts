import {test,expect,Locator} from '@playwright/test';
test("verify dynamic elements", async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

//xpath
/*
    for(let i=1;i<=5;i++){
        let button:Locator=page.locator('//button[text()="STOP" or text()="START"]');
        //let button:Locator=page.locator('//button[@name="start"]');
        //let button:Locator=page.locator('//button[@name="start" or @name="stop"]');
        //let button:Locator=page.locator('//button[contain(@name,"st")]');
        //let button:Locator=page.locator('//button[starts-with(@name,"st")]');
        await button.click();
        console.log("click n°",i);
        await page.waitForTimeout(2000);
    }
})
*/

//using CSS
    for(let i=1;i<=5;i++){
        let button:Locator=page.locator('button[name="start"], button[name="stop"]');
        await button.click();
        console.log("click n°",i);
        await page.waitForTimeout(2000);
    }


    //using playwright methodes
    for(let i=1;i<=5;i++){
        let button:Locator=page.getByRole('button', {name: /START|STOP/}); // "/" for regular exp
        await button.click();
        console.log("click n°",i);
        await page.waitForTimeout(2000);
    }
})