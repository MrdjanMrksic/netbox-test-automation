import BasePage from "./base.page";

class UserMenu extends BasePage{
    public get logoutButton () {
        return $(`//a[normalize-space()="Log Out"]`);
    }
}

export default new UserMenu();