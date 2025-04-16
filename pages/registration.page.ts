import BasePage from "./base.page";

class RegistrationPage extends BasePage{
    public get inputUsername () {
        return $('#id_username');
    }

    public get inputPassword () {
        return $('#id_password');
    }

    public get getSubmitButton(){
        return $(`//button[@type='submit']`)
    }

    public get homePageButton(){
       return $(`//a[normalize-space()='Home Page']`);
    }

    public async register(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.getSubmitButton.click();
    }

    public open () {
        return super.open('/plugins/demo/login/');
    }
    
}

export default new RegistrationPage();