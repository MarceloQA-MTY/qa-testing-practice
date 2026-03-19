import { test, expect } from '@playwright/test';

test(`flujo completo de compra`, async ({ page }) => {
  // 1. abrir la página
  await page.goto(`https://www.demoblaze.com`);
  

  // 2. seleccionar producto
  await page.getByRole(`link`, { name: `Samsung galaxy s6` }).click();

  // 3. agregar al carrito
  await page.getByText('Add to cart').click();

  // 4. ir al carrito
  await page.locator('#cartur').click();

  // 5. abrir Place Order
  await page.getByRole(`button`, { name: `Place Order` }).click();
  

  // 6. llenar el formulario
  await page.locator(`#name`).fill(`Marcelo`);
  await page.locator(`#country`).fill(`Mexico`);
  await page.locator(`#city`).fill(`Monterrey`);
  await page.locator(`#card`).fill(`1578996633221144`);
  await page.locator(`#month`).fill(`abril`);
  await page.locator(`#year`).fill(`2028`);

  // 7. hacer clic en Purchase
  await page.getByRole(`button`, { name: `Purchase` }).click();

  // 8. verificar confirmación
  await expect(page.getByText(`Thank you for your purchase!`)).toBeVisible();
  

});