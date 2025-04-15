import BasePage from "./base.page";

class LandingPage extends BasePage{
   public get loginButton(){
        return $(`//a[@type='button'][normalize-space()='Log In']`)
    }

    public get devicesTab(){
        return $(`//span[normalize-space()='Devices']`)
    }

    public get racksTab(){
        return $(`//span[normalize-space()='Racks']`);
    }

    public get deviceTypes(){
        return $(`//a[normalize-space()='Device Types']`)
    }

    public get racks(){
        return $(`//a[normalize-space()='Racks']`);
    }

    public get welcomeElement(){
        return $(`//span[normalize-space()='Welcome!']`);
    }

    public open () {
        return super.open('');
    }
    
}

export default new LandingPage();