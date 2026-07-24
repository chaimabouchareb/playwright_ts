/*

Locator - Identifies the element on the page.
DOM - Document Object Model
DOM  is an API Interface provided by browser.

1) page.getByAltText() to locate an element, usually image, by its text alternative.
2) page.getByText() to locate by text content.(Non interactive elements)
3) page.getByRole() to locate by explicit and implicit accessibility attributes.
4) page.getByLabel() to locate a form control by associated label's text.
5) page.getByPlaceholder() to locate an input by placeholder.

6) page.getByTitle() to locate an element by its title attribute.
7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/
import {test,expect} from "@playwright/test"
test("verify playwright locators", async ({page})=>{
  await page.goto("https://demowebshop.tricentis.com/");
  await expect(page).toHaveTitle("Demo Web Shop");

  //getByRole
  //await expect(page.getByText(/welcome\s+To\s+Our\s+Store/i)).toBeVisible();
  await page.getByRole("link", {name:'Register'}).click();
  await expect(page.getByRole("heading",{name:'Register'})).toBeVisible();
  

  //getByLabel
  await page.getByLabel('First name').fill("chaima");
  await page.getByLabel('Last name').fill("bc");
  await page.getByLabel('Email').fill("chaimabc@gmail.com");

  //getByPlaceholder

  await page.getByPlaceholder('Placeholder')

})
