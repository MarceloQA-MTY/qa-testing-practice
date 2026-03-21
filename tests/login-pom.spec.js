import { test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test (`login con POM`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(`admin`, `admin`);

    await expect(loginPage.welcomeMsg).toBeVisible();
});
