import { RACK_NAME, USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import loginPage from '../pages/login.page';
import createNewRackPage from '../pages/createNewRack.page'
import racksPage from '../pages/racks.page';
import allureReporter from '@wdio/allure-reporter';

before(async () => {
    await loginPage.open();
    loginPage.login(USER_INFO.USERNAME, USER_INFO.PASSWORD)
});

describe('Racks tests', () => {
    it('Validate create rack functionality', async () => {
        allureReporter.addFeature('Registration');
        allureReporter.addSeverity('critical');
        allureReporter.addDescription('Check that user can successfully create a new rack', 'Description');

        allureReporter.startStep('Attempting to navigate to rack creation form');
        landingPage.racksTab.click();
        landingPage.racks.click();
        racksPage.addRackButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Attempting to create a new rack');
        await createNewRackPage.fillOutAddNewRackForm(RACK_NAME);
        createNewRackPage.createButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(createNewRackPage.rackCreatedMessage).toBeExisting();
        allureReporter.endStep();

        allureReporter.startStep('Attempting to delete the newly created rack');
        landingPage.racks.click();
        await racksPage.rackSearchBar.setValue(RACK_NAME);
        (await racksPage.rackFromTable(RACK_NAME)).click();
        racksPage.deleteRackButton.click();
        racksPage.confirmDeleteButton.click();
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(racksPage.rackDeletedMessage).toBeExisting();
        allureReporter.endStep();
    });
});