import { test, expect } from "@playwright/test";

/* ======================================================
    Playwright Locator Filters 

    1.Verify "Add to cart" for Product 2   
    2.Count items not having "Out of stock"
    3.Find items with "In stock"
    4.Verify elements using data-testid
    5.Count all elements with test ids
    6.Find "Say goodbye" button for John
    7.Find "Say hello" button for Mary
    8.Find "Subscribe" buttons using multiple conditions
    9.Find "details" buttons for done tasks
    10.Verify stock status counts
======================================================*/

test.beforeEach(async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/filters_practice.html");
});
/*test.afterAll(async ({ page }) => {
  await page.close()
});
*/
test('1. Verify "Add to cart" for Product 2', async ({ page }) => {
  const productButton2 = page
    .getByRole("listitem")
    .filter({ hasText: "Product 2" })
    .getByRole("button", { name: "Add to cart" });
    await expect(productButton2).toBeVisible();
    await productButton2.click();
});

test('2. Count items not having "Out of stock"', async ({ page }) => {
  /*const inStockitems = page.getByRole('listitem').filter({hasNotText: 'Out of stock'})
    await expect(inStockitems).not.toHaveCount(2);
    */
  const inStockitems = page
    .locator(".card")
    .nth(1)
    .getByRole("listitem")
    .filter({ hasNotText: "Out of stock" });
  await expect(inStockitems).toHaveCount(3);
});
