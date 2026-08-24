import { test, expect } from "@playwright/test";

test("Multi select dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //1. select option from the dropdown
  //   await page.locator("#colors").selectOption(['Red', 'Blue', 'Green']); //using visible text
  //   await page.locator("#colors").selectOption(['red', 'blue', 'green']); //using value attribute
  //   await page.locator("#colors").selectOption([{label:'Red'}]); //using label attribute
  //   await page.locator("#colors").selectOption({ index: 4 }); //using index
  //2. check number of options in the dropdown(count)
  const options = page.locator("#colors>option");
  await expect(options).toHaveCount(await options.count());

  //3. check an option present in the dropdown
  //   await expect(page.locator('#color')).toContainText('Green');
  const optionText: string[] = (await options.allTextContents()).map((text) => text.trim());
  console.log(optionText)
  expect(optionText).toContain('Green');

  //4. printing options from the dropdown
  //   const optionTexts = await options.allTextContents();
  //   console.log('Dropdown options:', optionTexts.join(', '));
for(const option of optionText){
    console.log(option);
}
  await page.waitForTimeout(5000);
});
