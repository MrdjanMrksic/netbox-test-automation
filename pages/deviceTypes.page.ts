import BasePage from "./base.page";

class DeviceTypes extends BasePage{
    public get addDeviceTypeButton(){
        return $(`//a[@type='button'][normalize-space()='Add']`);
    }

    public get deviceSearchBar(){
        return $(`#quicksearch`)
    }

    public get deleteDeviceTypeButton(){
        return $(`.btn.btn-red`)
    }

    public get confirmDeleteButton(){
        return $(`.btn.btn-danger`)
    }

    public get deviceTypeDeletedMessage() {
        return $(`//div[@class='toast-header text-bg-success']`)
    }

    async deviceTypeFromTable(deviceTypeName: string){
        return $(`//a[normalize-space()='${deviceTypeName}']`)
    }
}

export default new DeviceTypes();