export class CompraPage {
    constructor(page) {
        this.page = page;
        this.Btnprod = page.getByRole('link', { name: 'Samsung galaxy s6' });
        this.Addcar = page.getByText('Add to cart');
        this.cart = page.locator('#cartur');
        this.Btncompra = page.getByRole('button', { name: 'Purchase' });
        this.Btnpurchase = page.getByRole('button', { name:'Place Order' });
        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.card = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.complete = page.getByText(`Thank you for your purchase!`);
    }

    async goto() {
        await this.page.goto('https://www.demoblaze.com');
    }

    async compra(name, country, city, card, month, year) {
        await this.Btnprod.click();
        await this.Addcar.click();
        await this.cart.click();
        await this.Btnpurchase.click();
        await this.name.fill(name);
        await this.country.fill(country);
        await this.city.fill(city);
        await this.card.fill(card);
        await this.month.fill(month);
        await this.year.fill(year);
        await this.Btncompra.click();
    }
}