import { test, expect} from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';

test ('Register con POM', async ({ page }) =>{
    const registro = new RegisterPage(page);

    await registro.goto();
    await registro.register('prueba11@ssmail.com', 'Prueba', 'password', 'pedro', 'lopez', 'lap', 'mmaa 123', 'sonora', 'sonora', '441122', '8787878787');

    await expect(registro.complete).toBeVisible();
});