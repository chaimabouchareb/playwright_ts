import {test,expect,Locator} from "@playwright/test"
test("xpath axes demo",async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    //1. self axis - select <td> element that contains "Germany"
    const germanyCell: Locator = page.locator("//td[text()='Germany']/self::td");
    await expect(germanyCell).toHaveText("Germany"); //promise
    //2. parent axis - get parent <tr> of the "germany" cell
    const parentRow:Locator=page.locator("//td[text()='Germany']/parent::tr");
    await expect(parentRow).toContainText("Maria Anders");
    console.log(await parentRow.textContent());
    //3. Child axis - Get all <td> children of the second <tr> in the table
    const childElement:Locator=page.locator("//table[@id='customers']//tr[2]/child::td");
    await expect(childElement).toHaveCount(3);

    //4. ancestor axis - Get ancestor <table> of the Germany cell
    const table:Locator=page.locator("//td[text()='Germany']/ancestor::table")
    await expect(table).toHaveAttribute('id','customers');


    //5. descendant axis - Get all <td> elements under the table
    const allTds:Locator = page.locator("//table[@id='customers']/descendant::td");
    await expect(allTds).toHaveCount(18);


    //6. following axis - Get the <td> that comes after "Germany" in document order
    const followingCell:Locator=page.locator("//td[normalize-space()='Germany']/following-sibling::td[1]");
    await expect(followingCell).toHaveText("Centro comercial Moctezuma");


    //7. following-sibling axis - Get <td> to the right of "Germany"
    const rightSiblings:Locator=page.locator("//td[normalize-space()='Germany']/following-sibling::td");
    await expect(rightSiblings).toHaveCount(1);
})