import BasePage from "./base.page";

class DeviceTypes extends BasePage{
    public get addDeviceTypeButton(){
        return $(`//a[@type='button'][normalize-space()='Add']`);
    }
}

export default new DeviceTypes();