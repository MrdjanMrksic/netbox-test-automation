import BasePage from "./base.page";

class LandingPage extends BasePage {
    public get loginButton() {
        return $(`//a[@type='button'][normalize-space()='Log In']`)
    }

    public get devicesTab() {
        return $(`//span[normalize-space()='Devices']`)
    }

    public get racksTab() {
        return $(`//span[normalize-space()='Racks']`);
    }

    public get deviceTypes() {
        return $(`//a[normalize-space()='Device Types']`)
    }

    public get racks() {
        return $(`//a[contains(text(),'Racks')]`);
    }

    public get successMessage() {
        return $(`//span[normalize-space()='Welcome!']`);
    }

    public get dangerMessage() {
        return $(`//div[@class='toast-header text-bg-danger']`)
    }
    public get infoMessage() {
        return $(`//div[@class='toast-header text-bg-info']`);
    }

    async userMenu(username: string) {
        return $(`//*[contains(text(),'${username}')]`)
    }

    public open() {
        return super.open('');
    }

}

export default new LandingPage();