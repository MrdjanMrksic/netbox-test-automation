import { DEVICE_STATUS, DEVICE_TYPE_NAME, RACK_NAME, USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import deviceTypePage from '../pages/deviceTypes.page'
import addNewDeviceTypePage from '../pages/createNewDeviceType.page'
import racksPage from '../pages/racks.page';
import createNewRackPage from '../pages/createNewRack.page';
import loginPage from '../pages/login.page';
import addDevicePage from '../pages/addDevice.page';
import devicePage from '../pages/device.page';
import allureReporter from '@wdio/allure-reporter';

before(async () => {
    await loginPage.open();
    loginPage.login(USER_INFO.USERNAME, USER_INFO.PASSWORD)
});

describe('e2e test, Add device to rack', () => {
    it('Validate adding a device of a newly created device type to the newly created rack', async () => {
        allureReporter.addFeature('e2e test - Add device to rack');
        allureReporter.addSeverity('critical');
        allureReporter.addDescription('Check that user can successfully create a device type and rack, and add a device to the rack', 'Description');
    
        //add device type
        allureReporter.startStep('Attempting to navigate to device type creation form');
        await landingPage.devicesTab.click();
        await landingPage.deviceTypes.click();
        await deviceTypePage.addDeviceTypeButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Attempting to create a new device type');
        await addNewDeviceTypePage.fillOutAddNewDeviceTypeForm(DEVICE_TYPE_NAME);
        await addNewDeviceTypePage.createButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(addNewDeviceTypePage.deviceTypeCreatedMessage).toBeExisting();
        allureReporter.endStep();

        //add new rack
        allureReporter.startStep('Attempting to navigate to rack creation form');
        await landingPage.racksTab.click();
        await landingPage.racks.click();
        await racksPage.addRackButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Attempting to create a new rack');
        await createNewRackPage.fillOutAddNewRackForm(RACK_NAME);
        await createNewRackPage.createButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(createNewRackPage.rackCreatedMessage).toBeExisting();
        allureReporter.endStep();

        //add device
        allureReporter.startStep('Attempting to open a rack position');
        await racksPage.openRackPosition(36);
        allureReporter.endStep();

        allureReporter.startStep('Attempting to create a new device');
        await addDevicePage.fillOutAddDeviceForm(DEVICE_TYPE_NAME);
        await addDevicePage.createButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(addDevicePage.successMessage).toBeExisting();
        allureReporter.endStep();
        
        //TEST TEARDOWN
        //make device deletable
        allureReporter.startStep('Attempting to change the status of the device to decommissioning');
        await devicePage.editButton.click();
        (await devicePage.statusField(DEVICE_STATUS.ACTIVE)).click();
        await devicePage.statusDropdownMenu.setValue(DEVICE_STATUS.DECOMMISSIONING);
        await devicePage.statusDropdownMenu.setValue(DEVICE_STATUS.DECOMMISSIONING);
        await (await devicePage.statusFromList(DEVICE_STATUS.DECOMMISSIONING)).waitForClickable();
        await (await devicePage.statusFromList(DEVICE_STATUS.DECOMMISSIONING)).click();
        await devicePage.saveButton.click();
        allureReporter.endStep();

        //delete device
        allureReporter.startStep('Attempting to delete device');
        await devicePage.deleteButton.click();
        await devicePage.confirmDelete.click();
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(devicePage.successMessage).toBeExisting();
        allureReporter.endStep();

        //delete rack
        allureReporter.startStep('Attempting to delete rack');
        await landingPage.racksTab.click();
        await landingPage.racks.click();
        await racksPage.rackSearchBar.setValue(RACK_NAME);
        await (await racksPage.rackFromTable(RACK_NAME)).click()
        await racksPage.deleteRackButton.click();
        await racksPage.confirmDeleteButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(racksPage.rackDeletedMessage).toBeExisting();
        allureReporter.endStep();


        //delete device type
        allureReporter.startStep('Attempting to delete device type');
        await landingPage.devicesTab.click();
        await landingPage.deviceTypes.click();
        await deviceTypePage.deviceSearchBar.setValue(DEVICE_TYPE_NAME);
        await (await deviceTypePage.deviceTypeFromTable(DEVICE_TYPE_NAME)).click();
        await deviceTypePage.deleteDeviceTypeButton.click()
        await deviceTypePage.confirmDeleteButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(deviceTypePage.deviceTypeDeletedMessage).toBeExisting();
        allureReporter.endStep();
    })
})