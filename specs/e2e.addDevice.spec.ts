import { DEVICE_STATUS, DEVICE_TYPE_NAME, RACK_NAME, USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import deviceTypePage from '../pages/deviceTypes.page'
import addNewDeviceTypePage from '../pages/createNewDeviceType.page'
import registrationPage from '../pages/registration.page';
import racksPage from '../pages/racks.page';
import createNewRackPage from '../pages/createNewRack.page';
import loginPage from '../pages/login.page';
import addDevicePage from '../pages/addDevice.page';
import devicePage from '../pages/device.page';


before(async () => {
    // await Lo.open();
    // await registrationPage.register(USER_INFO.USERNAME, USER_INFO.PASSWORD);
    // await expect(landingPage.welcomeElement).toBeExisting();
    await loginPage.open();
    loginPage.login(USER_INFO.USERNAME, USER_INFO.PASSWORD)
});

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //add device type
        await landingPage.devicesTab.click();
        await landingPage.deviceTypes.click();
        await deviceTypePage.addDeviceTypeButton.click();
        await addNewDeviceTypePage.fillOutAddNewDeviceTypeForm(DEVICE_TYPE_NAME);
        await addNewDeviceTypePage.createButton.click();
        await expect(addNewDeviceTypePage.deviceTypeCreatedMessage).toBeExisting();

        //add new rack
        await landingPage.racksTab.click();
        await landingPage.racks.click();
        await racksPage.addRackButton.click();
        await createNewRackPage.fillOutAddNewRackForm(RACK_NAME);
        await createNewRackPage.createButton.click();
        await expect(createNewRackPage.rackCreatedMessage).toBeExisting();

        //add device
        await racksPage.openRackPosition(36);
        await addDevicePage.fillOutAddDeviceForm(DEVICE_TYPE_NAME);
        await addDevicePage.createButton.click();
        await expect(await addDevicePage.successMessage).toBeExisting();

        //make device deletable
        await devicePage.editButton.click();
        await (await devicePage.statusField(DEVICE_STATUS.ACTIVE)).click();
        await (await devicePage.statusDropdownMenu).setValue(DEVICE_STATUS.DECOMMISSIONING);
        await devicePage.statusDropdownMenu.setValue(DEVICE_STATUS.DECOMMISSIONING);
        await (await devicePage.statusFromList(DEVICE_STATUS.DECOMMISSIONING)).waitForClickable();
        await (await devicePage.statusFromList(DEVICE_STATUS.DECOMMISSIONING)).click();
        await devicePage.saveButton.click();

        //delete device
        await devicePage.deleteButton.click();
        await devicePage.confirmDelete.click();
        await expect(await devicePage.successMessage).toBeExisting();

        //delete rack
        await landingPage.racksTab.click();
        await landingPage.racks.click();
        await racksPage.rackSearchBar.setValue(RACK_NAME);
        (await racksPage.rackFromTable(RACK_NAME)).click()
        await racksPage.deleteRackButton.click();
        await racksPage.confirmDeleteButton.click();
        await expect(racksPage.rackDeletedMessage).toBeExisting();

        //delete device type
        await landingPage.devicesTab.click();
        await landingPage.deviceTypes.click();
        await deviceTypePage.deviceSearchBar.setValue(DEVICE_TYPE_NAME);
        (await deviceTypePage.deviceTypeFromTable(DEVICE_TYPE_NAME)).click();
        await deviceTypePage.deleteDeviceTypeButton.click()
        await deviceTypePage.confirmDeleteButton.click();
        await expect(deviceTypePage.deviceTypeDeletedMessage).toBeExisting();
    })
})