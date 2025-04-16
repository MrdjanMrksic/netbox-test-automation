import utilities from "../support/utilities";
import BasePage from "./base.page"

class CreateNewRackPage extends BasePage {
    public get siteDropdownMenu() {
        return $(`#id_site-ts-control`)
    }

    public get nameInputBox() {
        return $(`#id_name`)
    }

    public get createButton() {
        return $('[name="_create"]');
    }

    async selectRandomSite(num: number) {
        return $(`#id_site-opt-${num}`).click();
    }

    public get rackCreatedMessage() {
        return $(`//div[@class='toast-header text-bg-success']`)
    }

    async fillOutAddNewRackForm(rackName: string) {
        await this.siteDropdownMenu.click();
        await this.selectRandomSite(Math.ceil(utilities.generateRandomNumberZeroToTen() / 2));
        await this.nameInputBox.setValue(rackName);
    }
}

export default new CreateNewRackPage();