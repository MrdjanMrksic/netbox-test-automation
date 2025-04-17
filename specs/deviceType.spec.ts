import { DEVICE_TYPE_NAME, USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import loginPage from '../pages/login.page';
import deviceTypePage from '../pages/deviceTypes.page'
import addNewDeviceTypePage from '../pages/createNewDeviceType.page'
import allureReporter from '@wdio/allure-reporter';


before(async () => {
    await loginPage.open();
    loginPage.login(USER_INFO.USERNAME, USER_INFO.PASSWORD)
});

describe('Device type tests', () => {
    it('Validate create device type functionality', async () => {
        allureReporter.addFeature('Registration');
        allureReporter.addSeverity('critical');
        allureReporter.addDescription('Check that user can successfully create a device type', 'Description');

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
    });

    it('Validate delete device type functionality', async () => {
        allureReporter.startStep('Attempting to delete the newly created device type');
        await landingPage.deviceTypes.click();
        await deviceTypePage.deviceSearchBar.setValue(DEVICE_TYPE_NAME);
        (await deviceTypePage.deviceTypeFromTable(DEVICE_TYPE_NAME)).click();
        await deviceTypePage.deleteDeviceTypeButton.click()
        await deviceTypePage.confirmDeleteButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(deviceTypePage.deviceTypeDeletedMessage).toBeExisting();
        allureReporter.endStep();
    })
})