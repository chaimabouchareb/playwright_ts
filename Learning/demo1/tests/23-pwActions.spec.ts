import { test, expect, Locator } from "@playwright/test";

test("Test input Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const textBox: Locator = page.locator("#name");
  await expect(textBox).toBeVisible();
  await expect(textBox).toBeEnabled();
  const maxLength: string | null = await textBox.getAttribute("maxlength"); //returns value of maxlength attributes of the element
  expect(maxLength).toBe("15");
  await textBox.fill("John canedy"); //write in the name field john canedy
  //console.log("first name:", await textBox.textContent()); //return empty
  console.log("first name:", await textBox.inputValue());
  await page.waitForTimeout(1000);
});

test.only("Radio button action", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const maleRadio: Locator = page.locator("#male");
  await expect(maleRadio).toBeVisible();
  await expect(maleRadio).toBeEnabled();
  expect(await maleRadio.isChecked()).toBe(false); //it will return true or false
  await maleRadio.check();
  expect(await maleRadio.isChecked()).toBe(true);
  await expect(maleRadio).toBeChecked();

  await page.waitForTimeout(3000);
});

test.only("checkbox actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //1. select specific checkbox(sunday) using getByLabel and assert
  const sundayCheckbox: Locator = page.getByLabel("Sunday");
  await sundayCheckbox.check();
  await expect(sundayCheckbox).toBeChecked();
  //2. capture all checkboxes()
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const checkBoxes: Locator[] = days.map((index) => page.getByLabel(index)); //index is variable that will walk through the days table
  expect(checkBoxes.length).toBe(7);
  await page.waitForTimeout(3000);

  //3. Select all checkboxes and assert each is checked
  for (const checkbox of checkBoxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
  await page.waitForTimeout(3000);

  //4. uncheck the last 4 checkboxes
  for (const checkbox of checkBoxes.slice(-3)) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }
  await page.waitForTimeout(3000);

  //5. toggle checkboxes, if checked then uncheck and if unchecked then check, assert state flipped
  for (const checkbox of checkBoxes) {
    if (await checkbox.isChecked()) {
      //only if unchecked
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    } else {
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    }
  }
  await page.waitForTimeout(3000);

  //6. Select randomly checkboxes
  const indexes: number[] = [1, 3, 6];
  for (const i of indexes) {
    await checkBoxes[i].check();
    await expect(checkBoxes[i]).toBeChecked();
  }
  await page.waitForTimeout(3000);

  //7. select the check based on the value
  const weekname: string = "Friday";
  for (const label of days) {
    if (label.toLowerCase() === weekname.toLowerCase()) {
      const checkbox: Locator = page.getByLabel(label);
      checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }
  await page.waitForTimeout(3000);
});
