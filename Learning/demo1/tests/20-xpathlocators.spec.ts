import{test,expect,Locator} from "@playwright/test";
test("xpath demo", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    //1. absolute xpath
    //when using abs xpath we have to add another / so it should // at the beginning

    const logo1:Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[4]/div[3]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/a[1]/img[1]");
    //const logo1:Locator = page.locator("xapth=/html[1]/body[1]/div[4]/div[1]/div[4]/div[3]/div[1]/div[1]/div[3]/div[4]/div[1]/div[1]/a[1]/img[1]");
    await expect(logo1).toBeVisible();

    //2. relative xpath
    const logo2:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(logo2).toBeVisible();

    //3. contains to capture multiple elements
    const products:Locator = page.locator("//h2/a[contains(@href,'computer')]");
    const productsCount:number = await products.count();
    console.log("num of computer related products:",productsCount);
    expect(productsCount).toBeGreaterThan(0); //no need for await bc we comparing numbers
    //console.log(await products.textContent()); //error playwright is confused which element to select
    console.log("First computer:",await products.first().textContent());
    console.log("Last computer:",await products.last().textContent());
    console.log("Nth computer:",await products.nth(3).textContent());

    //text()
    const reglink:Locator=page.locator("//a[text()='Register']");
    await expect(reglink).toBeVisible();

    //last()
    const lastItem:Locator=page.locator("//div[@class='column follow-us']//ul/li[last()]");
    await expect(lastItem).toBeVisible();
    console.log("text", await lastItem.textContent());
    
    //position()
    const positionItem:Locator=page.locator("//div[@class='column follow-us']//ul/li[position()=3]");
    await expect(positionItem).toBeVisible();
    console.log("Text content of potional element:", await positionItem.textContent());


})