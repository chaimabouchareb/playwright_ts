import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../utils/test_data';
test('User can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
    users.standard.username,
    users.standard.password
  );

    // Assert that the user is redirected to the dashboard or home page after login
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});