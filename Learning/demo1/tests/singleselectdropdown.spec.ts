import {test, expect, Locator} from "@playwright/test";
test("Single select dropdown", async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  //await page.locator('#country').selectOption({'india'}); //visible option
  //await page.locator('#country').selectOption({value:'UK'}); //visible option
  //await page.locator('#country').selectOption({label:'UK'}); //visible option
  await page.locator('#country').selectOption({index:3}); //visible option
  await page.waitForTimeout(5000);
})