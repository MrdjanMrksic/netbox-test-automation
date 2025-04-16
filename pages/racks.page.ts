import { BASE_URI } from "../data/constants";
import BasePage from "./base.page";

class RacksPage extends BasePage {
    public get addRackButton() {
        return $(`//a[@type='button'][normalize-space()='Add']`);
    }

    public get rackSearchBar() {
        return $(`#quicksearch`)
    }

    public get deleteRackButton() {
        return $(`.btn.btn-red`)
    }

    public get confirmDeleteButton() {
        return $(`.btn.btn-danger`)
    }

    public get rackDeletedMessage() {
        return $(`//div[@class='toast-header text-bg-success']`)
    }

    public get siteNameInRackDetails(){
        return $('//th[normalize-space(text())="Site"]/following-sibling::td/a')
    }

    public get siteIdString(){
        return $(`//code[@class='d-block text-muted bg-transparent px-0']`)
    }

    async openRackPosition(position: number){
        const siteId = (await this.siteNameInRackDetails.getAttribute('href')).match(/\/dcim\/sites\/(\d+)\//)?.[1] ?? null;
        const rackId = await this.siteIdString.getText().then(text => text.match(/\d+/)[0]);
        browser.url(BASE_URI + `/dcim/devices/add/?site=${siteId}&location=&rack=${rackId}&face=front&position=${position}`)
    }

    async rackFromTable(rackName: string) {
        return $(`//a[normalize-space()='${rackName}']`)
    }

    async devicePosition(position: number) {
        return $(`//svg//a[${position}]/rect`);
    }

    async getSiteId() {
        const siteId = (await this.siteNameInRackDetails.getAttribute('href')).match(/\/dcim\/sites\/(\d+)\//)?.[1] ?? null;
        return siteId;
    }
}
export default new RacksPage(); 