export class LoginPage {
    constructor(page) {
        this.page = page;
        this.btnSignupLogin = page.getByRole('link', { name: 'Signup / Login'});
        this.inputEmail = page.locator('[data-qa= "login-email"]');
        this.inputPassword = page.locator('[data-qa = "login-password"]');
        this.btnLogin = page.getByRole('button', { name: 'Login'});
        this.loggedInUser = page.locator('a:has-text("Logged in as")');
    }
    
    async goto () {
        await this.page.goto('/');
    }

    async login(email, Password) {
        await this.btnSignupLogin.click();
        await this.inputEmail.waitFor({ state: 'visible' });
        await this.inputEmail.fill(email);
        await this.inputPassword.fill(Password);
        await this.btnLogin.click();
    }
}