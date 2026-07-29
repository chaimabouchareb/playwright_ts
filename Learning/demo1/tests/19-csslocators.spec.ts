/*
tag with id tag#id #id
tage with class tag.class .class
tag any attribute tag[attribute=value]
tag with class and attribute tag.class[attribute=value]
page.locator(css/xpath)
*/
import{test,expect,Locator} from "@playwright/test"

test("Verify css locators", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    // tag#id or #id
    //const serachbox:Locator = page.locator("input#small-searchterms");
    //await searchbox.fill("Simple computer");
    /*
    await expect(page.locator("input#small-searchterms")).toBeVisible();
    await page.locator("input#small-searchterms").fill("Simple Computer");
        await page.locator("#small-searchterms").fill("Simple Computer");

    //tag.class
    await page.locator("input.search-box-text").fill("Simple Computer");
    await page.locator(".search-box-text").fill("Simple Computer");
    
   
    //tag[attribute=value]
    await page.locator("input[name=q]").fill("Simple Computer");
    await page.locator("[name='q']").fill("Simple Computer");
    */
   //tag with class and attribute tag.class[attribute=value]

    await page.locator("input.search-box-text[name=q]").fill("Simple Computer");
    await page.waitForTimeout(2000);



})


