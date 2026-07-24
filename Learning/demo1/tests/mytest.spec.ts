import {test,expect} from "@playwright/test";

//Syntax:
/*
test("title",()=>{

//step1
//step2
//step3
    
})

*/

//fixture - global variable  : page, browser


test("Verify page title",async ({page})=>{

   await page.goto("https://demowebshop.tricentis.com/"); 
   
   //let url:string=await page.url();
   
   console.log("URL:",await page.url());

   await expect(page).toHaveURL(/tricentis/); 

})







