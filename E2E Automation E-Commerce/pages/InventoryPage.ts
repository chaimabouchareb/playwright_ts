import { Page } from "@playwright/test";
export class InventoryPage {
    constructor(private page: Page) {}
    async addFirstItemToCart() {
        await this.page.locator('.inventory_item').first().locator('button').click();
    }
    async goToCart() {
        await this.page.locator('.shopping_cart_link').click();
    }
}