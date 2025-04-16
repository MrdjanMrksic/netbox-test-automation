import { DEVICE_TYPE_NAME, USER_INFO } from '../data/constants';
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
        await landingPage.devicesTab.click();
        await landingPage.deviceTypes.click();
        await deviceTypePage.addDeviceTypeButton.click();
        await addNewDeviceTypePage.fillOutAddNewDeviceTypeForm(DEVICE_TYPE_NAME);
        await addNewDeviceTypePage.createButton.click();
        await expect(addNewDeviceTypePage.deviceTypeCreatedMessage).toBeExisting();

        //delete
        await landingPage.deviceTypes.click();
        await deviceTypePage.deviceSearchBar.setValue(DEVICE_TYPE_NAME);
        (await deviceTypePage.deviceTypeFromTable(DEVICE_TYPE_NAME)).click();
        await deviceTypePage.deleteDeviceTypeButton.click()
        await deviceTypePage.confirmDeleteButton.click();
        await expect(deviceTypePage.deviceTypeDeletedMessage).toBeExisting();
    })
})