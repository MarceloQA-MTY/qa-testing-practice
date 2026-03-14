// @ts-check
import { test, expect } from '@playwright/test';

test('la página principal carga correctamente', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  await expect(page).toHaveTitle(/STORE/);
  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
});

test('login con credenciales válidas', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  // Abre el modal de login
  await page.getByRole('link', { name: 'Log in' }).click();

  // Espera que el modal sea visible
  await expect(page.locator('#logInModal')).toBeVisible();

  // Llena las credenciales
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').fill('admin');

  // Envía el formulario
  await page.getByRole('button', { name: 'Log in' }).click();

  // Valida que el usuario está logueado
  await expect(page.locator('#nameofuser')).toBeVisible({ timeout: 5000 });
});

test('login con contraseña incorrecta', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.locator('#logInModal')).toBeVisible();

  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').fill('contraseña_incorrecta');

  await page.getByRole('button', { name: 'Log in' }).click();

  // Demoblaze muestra un alert en este caso
  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Wrong');
    await dialog.accept();
  });
});

test(`login con campos vacios`,   async ({ page }) => {
    await page.goto(`https://www.demoblaze.com`);

    await page.locator(`#login2`).click();
    await page.locator(`#loginusername`).fill(``);
    await page.locator(`#loginpassword`).fill(``);
    await page.getByRole(`button`, {name:`Log in`}).click();

    page.on(`dialog`, async dialog => {
        await dialog.accept();
    });

});