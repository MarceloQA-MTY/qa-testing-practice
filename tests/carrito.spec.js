import { test, expect } from '@playwright/test';

test(`agregar producto al carrito`, async ({ page }) => {
  // 1. abrir la página
  await page.goto(`https://www.demoblaze.com`);

  // 2. hacer clic en un producto
  await page.getByRole(`link`, { name: `Samsung galaxy s6` }).click();
  

  // 3. hacer clic en "Add to cart"
  await page.getByText('Add to cart').click();

  // 4. ir al carrito
  await page.locator('#cartur').click();

  await expect(page.locator(`td`).getByText(`Samsung galaxy s6`)).toBeVisible();
  

});