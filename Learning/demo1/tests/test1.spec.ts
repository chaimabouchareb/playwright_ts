import {test,expect} from "@playwright/test"


//fixure is a global variable, examples: a page, a browser
/*
sync -> the code execute the stetement one after one in order
async -> the following will be execute and wont wait for the first step to finish
await -> wait for step 1 to be executed and then launch step 2
only in async nature we use await
async --> every statement is returning a promise
worker is one single browser instance
locators - identifies the elements in the page
DOM - document object model - API provided by the browser, when the page is loaded, the browser creates a DOM structure

*/
test("has title", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    await   expect(page).toHaveTitle("Demo Web Shop");

})