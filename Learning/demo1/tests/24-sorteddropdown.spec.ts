import { test, expect, Locator } from "@playwright/test";
test("Sorted dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const animalOption:Locator = page.locator('#animals>option');
  console.log(animalOption.allTextContents());

  await page.waitForTimeout(5000);
});
