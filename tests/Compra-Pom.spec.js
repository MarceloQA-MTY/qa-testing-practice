import { test, expect} from '@playwright/test';
import { CompraPage } from '../pages/CompraPage.js';

test ('Carrito con POM', async ({ page }) => {

    const comprapage = new CompraPage(page);

    await comprapage.goto();
    await comprapage.compra('marcelo', 'mexico', 'monterrey', '1578964477661578', 'abril', '2028');

    await expect(comprapage.complete).toBeVisible();

});

