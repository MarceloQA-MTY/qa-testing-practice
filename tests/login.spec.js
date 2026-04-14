import {test, expect} from '@playwright/test';
import {  LoginPage } from '../pages/LoginPage.js';

test ('Login con POM', async ({ page}) =>{
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('misael.crz153@hotmail.com', 'password');
    
    await expect(loginPage.loggedInUser).toBeVisible();
});