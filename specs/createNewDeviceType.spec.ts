import { LOGIN_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import loginPage from '../pages/login.page';
import deviceTypePage from '../pages/deviceTypes.page'
import addNewDeviceTypePage from '../pages/createNewDeviceType.page'


before(async () => {
    await loginPage.open();
    loginPage.login(LOGIN_INFO.USERNAME, LOGIN_INFO.PASSWORD)
});

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await landingPage.devicesTab.click();
        await landingPage.deviceTypes.click();
        await deviceTypePage.addDeviceTypeButton.click();
        await addNewDeviceTypePage.fillOutAddNewDeviceTypeForm();
        await addNewDeviceTypePage.createButton.click();
        await expect(addNewDeviceTypePage.deviceTypeCreatedMessage).toBeExisting();
        
    })
})