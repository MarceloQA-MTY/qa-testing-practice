export class LoginPage {
  constructor(page) {
    this.page = page;
    this.btnLogin = page.locator('#login2');
    this.inputUsername = page.locator('#loginusername');
    this.inputPassword = page.locator('#loginpassword');
    this.btnSubmit = page.getByRole('button', { name: 'Log in' });
    this.welcomeMsg = page.locator('#nameofuser');
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com');
  }

  async login(username, password) {
    await this.btnLogin.click();
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password);
    await this.btnSubmit.click();
  }
}
