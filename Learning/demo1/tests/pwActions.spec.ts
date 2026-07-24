import{test,expect,Locator} from "@playwright/test"


test('Test input Actions',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const textBox:Locator=page.locator('#name');
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();
    const maxLength:string | null = await textBox.getAttribute("maxlength"); //returns value of maxlength attributes of the element
    expect(maxLength).toBe('15');
    await textBox.fill("John canedy"); //write in the name field john canedy
    //console.log("first name:", await textBox.textContent()); //return empty
    console.log("first name:", await textBox.inputValue());
    await page.waitForTimeout(1000);

});


test.only('Radio button action',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleRadio:Locator=page.locator('#male');
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false); //it will return true or false
    await maleRadio.check();
    expect(await maleRadio.isChecked()).toBe(true);
    await expect(maleRadio).toBeChecked();

    await page.waitForTimeout(1000);

});

test.only('checkbox actions', async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  //1. select specific checkbox(sunday) using getByLabel and assert
  const sundayCheckbox: Locator = page.getByLabel("Sunday");
  await sundayCheckbox.check();
  await expect(sundayCheckbox).toBeChecked();
  //2. capture all checkboxes()
  const days:string[]=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const checkBoxes:Locator[] = days.map(index=>page.getByLabel(index));
  expect(checkBoxes.length).toBe(7);
  //3. Select all checkboxes and assert each is checked
  for(const checkbox of checkBoxes)
  {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
  await page.waitForTimeout(1000);
});