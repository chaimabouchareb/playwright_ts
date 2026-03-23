import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { checkoutData } from '../utils/test_data';

test('User can complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addFirstItemToCart();
  await inventoryPage.goToCart();

  await checkoutPage.checkout(
    checkoutData.validUser.firstName,
    checkoutData.validUser.lastName,
    checkoutData.validUser.postalCode
  );

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});