import { test, expect, Locator } from "@playwright/test";

test("verify locators", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app.html");


  //getByRole for interactive elements
  const projectLink: Locator = page.getByRole('link', { name: "Projects" });
  await expect(projectLink).toBeVisible();

  const findButton = page.getByRole('button',{name : 'Sign In'});
  await expect(findButton).toBeVisible();
  await findButton.click();

  /*const findRadio = page.getByRole('radio',{name:'Free plan'});
  await expect(findRadio).toBeVisible();*/

  //getByText use it for span, div aka non interactive elements
  const title = page.getByText('Welcome, John! 👋');
  await expect(title).toBeVisible();

  //getByLabel;
  /*const firstName = page.getByLabel('First Name')
  await expect(firstName).toBeVisible();
  await firstName.fill("chai");*/
  await expect(page.getByLabel("First Name")).toBeVisible();
  await page.getByLabel("First Name").fill("chai");


  //getByPlaceholder
  /*
  const searchField = page.getByPlaceholder('Search tests ...');
  await expect(searchField).toBeVisible();
  await searchField.fill("Locators");
*/

  //getByAltText useful for images
  await expect(page.getByAltText('Playwright logo')).toBeVisible();


  //getByTitle, we need to have title attribute
  const totalRunsBox = page.getByTitle('Total test run');
  await expect(totalRunsBox).toContainText('4,821');


  //getByTestId
  const proPlanButton = page.getByTestId('add-to-cart-starter');
  await expect(proPlanButton).

});
