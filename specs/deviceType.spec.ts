import { USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import loginPage from '../pages/login.page';
import deviceTypePage from '../pages/deviceTypes.page'
import addNewDeviceTypePage from '../pages/createNewDeviceType.page'
import utilities from '../support/utilities';


before(async () => {
    await loginPage.open();
    loginPage.login(USER_INFO.USERNAME, USER_INFO.PASSWORD)
});

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //var deviceTypeName = utilities.generateRandomString(10,0);
        var deviceTypeName = `test-delete`;
        await landingPage.devicesTab.click();
        await landingPage.deviceTypes.click();
        await deviceTypePage.addDeviceTypeButton.click();
        await addNewDeviceTypePage.fillOutAddNewDeviceTypeForm(deviceTypeName);
        await addNewDeviceTypePage.createButton.click();
        await expect(addNewDeviceTypePage.deviceTypeCreatedMessage).toBeExisting();

        //delete
        await landingPage.deviceTypes.click();
        await deviceTypePage.deviceSearchBar.setValue(deviceTypeName);
        (await deviceTypePage.deviceTypeFromTable(deviceTypeName)).click();
        await deviceTypePage.deleteDeviceTypeButton.click()
        await deviceTypePage.confirmDeleteButton.click();
        await expect(deviceTypePage.deviceTypeDeletedMessage).toBeExisting();
    })
})