export class CarritoPage {
    constructor(page) {
        this.page = page;
        this.Btnprod = page.getByRole('link', { name: 'Samsung galaxy s6' });
        this.Addcar = page.getByText('Add to cart');
        this.cart = page.locator('#cartur');
        this.complete = page.locator('td').getByText('Samsung galaxy s6');
    }

    async goto() {
        await this.page.goto('https://www.demoblaze.com');
    }

    async compra(){
        await this.Btnprod.click();
        await this.Addcar.click();
        await this.cart.click();
        

    }
}