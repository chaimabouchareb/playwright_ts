import { test, expect, Locator } from "@playwright/test";
test("Single select dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //1. select option from the dropdown (4 ways)
  //await page.locator('#country').selectOption({'india'}); //visible text
  //await page.locator('#country').selectOption({value:'UK'}); //by using value attribute
  //await page.locator('#country').selectOption({label:'UK'}); //by using label
  //await page.locator('#country').selectOption({index:3}); //by using index

  //2. check number of options in the dropdown(count)
  const dropdownOptions: Locator = page.locator("#country>option");
  await expect(dropdownOptions).toHaveCount(10);

  //3. check an option present in the dropdown
  const optionText: string[] = (await dropdownOptions.allTextContents()).map(
    (text) => text.trim(),
  ); //capture all the text of every option and store it in an array
  //console.log(optionText);
  expect(optionText).toContain("France"); //check if the array contains France
  //4. printing options from the dropdown
  for (const option of optionText) {
    console.log(option);
  }
  await page.waitForTimeout(5000);
});
