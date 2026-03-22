import { test, expect} from '@playwright/test';
import { CarritoPage} from '../pages/CarritoPage.js';

test ('Compra con POM', async ({ page }) => {
   const carritopage = new CarritoPage(page);
   
   await carritopage.goto();
   await carritopage.compra();

   await expect(carritopage.complete).toBeVisible();
});