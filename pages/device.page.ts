import { DEVICE_STATUS } from "../data/constants";
import utilities from "../support/utilities";
import BasePage from "./base.page";

class Device extends BasePage{
    public get editButton(){
        return $(`//a[normalize-space()='Edit']`);
    }

    public get deleteButton(){
        return $(`//a[normalize-space()='Delete']`);
    }

    public get confirmDelete(){
        return $(`//button[normalize-space()='Delete']`);
    }

    public get statusDropdownMenu(){
        return $(`#id_status-ts-control`);
    }

    async statusField(status: any){
        return $(`//div[normalize-space()='${status}']`);
    }

    async statusFromList(status: string){
        return $(`//span[normalize-space()='${status}']`)
    }

    public get decomisioningStatus(){
        return $(`#id_status-opt-7`)
    }

    public get saveButton(){
        return $(`//button[normalize-space()='Save']`)
    }

    public get successMessage(){
        return $(`//div[@class='toast-header text-bg-success']`)
    }
    
}

export default new Device();