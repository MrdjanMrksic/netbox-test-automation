import { BASE_URI } from "../data/constants";

export default class BasePage{
    public open(path: String){
        return browser.url(BASE_URI + path)
    }
}