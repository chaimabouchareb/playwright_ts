import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async checkout(firstName: string, lastName: string, postalCode: string) {
    await this.page.locator('#checkout').click();
    await this.page.locator('#first-name').fill(firstName);
    await this.page.locator('#last-name').fill(lastName);
    await this.page.locator('#postal-code').fill(postalCode);
    await this.page.locator('#continue').click();
    await this.page.locator('#finish').click();
  }
}