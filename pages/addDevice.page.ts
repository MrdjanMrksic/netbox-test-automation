import utilities from "../support/utilities";
import BasePage from "./base.page";

class AddDevice extends BasePage{
    public get deviceRoleDropdownMenu(){
        return $(`#id_role-ts-control`);
    }

    public get deviceTypeSearchBar(){
        return $(`#id_device_type-ts-control`);
    }

    public get createButton(){
        return $(`//button[@name='_create']`);
    }

    public get successMessage(){
        return $(`//div[@class='toast-header text-bg-success']`);
    }

    async selectRandomDeviceRole(num: number) {
        return $(`#id_role-opt-${num}`).click();
    }
    async deviceTypeFromList(deviceTypeName: string){
        return $(`//span[normalize-space()='${deviceTypeName}']`);
    }

    async fillOutAddDeviceForm(deviceType: string) {
            await this.deviceRoleDropdownMenu.click();
            await this.selectRandomDeviceRole(Math.ceil(utilities.generateRandomNumberZeroToTen() / 2));
            await this.deviceTypeSearchBar.click();
            await this.deviceTypeSearchBar.setValue(deviceType);
            await (await this.deviceTypeFromList(deviceType)).click();
        }
    
}

export default new AddDevice();