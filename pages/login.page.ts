import BasePage from "./base.page";

class LoginPage extends BasePage{
    public get inputUsername () {
        return $('#id_username');
    }

    public get inputPassword () {
        return $('#id_password');
    }

   public get registerButton(){
        return $(`//a[normalize-space()='Click here']`)
    }

    public get signInButton(){
        return $(`//button[@type='submit']`)
    }

    async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.signInButton.click();
    }

    public open () {
        return super.open('/login/?next=/');
    }
    
}

export default new LoginPage();