export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.btnSingupLogin = page.getByRole('link', { name: 'Signup / Login'});
        this.btnsignup = page.locator('[data-qa= "signup-button"]');
        this.inputEmail = page.locator('[data-qa= "signup-email"]');
        this.name = page.locator('[data-qa= "signup-name"]');
        this.title = page.locator('#id_gender1');
        this.password = page.locator('[data-qa= "password"]');
        this.day = page.locator('#days');
        this.month = page.locator('#months');
        this.year = page.locator('#years');
        this.fstname = page.locator('[data-qa= "first_name"]');
        this.lstname = page.locator('[data-qa= "last_name"]');
        this.company = page.locator('[data-qa= "company"]');
        this.address = page.locator('[data-qa= "address"]');
        this.county = page.locator('[data-qa= "country"]');
        this.state = page.locator('[data-qa= "state"]');
        this.city = page.locator('[data-qa= "city"]');
        this.zipcode = page.locator('[data-qa= "zipcode"]');
        this.mobile = page.locator('[data-qa= "mobile_number"]');
        this.create = page.locator('[data-qa= "create-account"]');
        this.btncontinue = page.locator('[data-qa= "continue-button"]');
        this.complete = page.getByText(`Account Created!`);
    }
    
    async goto () {
        await this.page.goto('/');
    } 

    async register(email, name, password, firstname, lastname, company, address, state, city, zipcode, mobile) {
        await this.btnSingupLogin.click();
        await this.name.fill(name);
        await this.inputEmail.fill(email);
        await this.btnsignup.click();
        await this.title.click();
        await this.password.fill(password);
        await this.day.selectOption('15');
        await this.month.selectOption('March');
        await this.year.selectOption('1995');
        await this.fstname.fill(firstname);
        await this.lstname.fill(lastname);
        await this.company.fill(company);
        await this.address.fill(address);
        await this.county.selectOption('United States');
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipcode.fill(zipcode);
        await this.mobile.fill(mobile);
        await this.create.click();
        
        
    }
}