import { DEVICE_TYPE_NAME } from "../data/constants";
import utilities from "../support/utilities";
import BasePage from "./base.page";

class CreateNewDeviceTypePage extends BasePage{
    public get manufacturerDropdownMenu(){
        return $(`#id_manufacturer-ts-control`)
    }

    public get modelInputBox(){
        return $(`#id_model`)
    }

    public get slugInputBox(){
        return $(`#id_slug`)
    }

    public get heightInputBox(){
        return $(`#id_u_height`);
    }

    public get createButton(){
        return $('[name="_create"]');
    }

    public get deviceTypeCreatedMessage(){
        return $(`//div[@class='toast-header text-bg-success']`)
    }

    async selectRandomManufacturer(num: number){
       return $(`#id_manufacturer-opt-${num}`).click();
    }


    async fillOutAddNewDeviceTypeForm(deviceTypeName: string){
        await this.manufacturerDropdownMenu.click();
        await this.selectRandomManufacturer(Math.ceil(utilities.generateRandomNumberZeroToTen()/2));
        await this.modelInputBox.setValue(deviceTypeName);
        await this.slugInputBox.setValue(utilities.generateRandomString(15,0));
        await this.heightInputBox.setValue(utilities.generateRandomNumberZeroToTen() * 0.5);
    }

}

export default new CreateNewDeviceTypePage();