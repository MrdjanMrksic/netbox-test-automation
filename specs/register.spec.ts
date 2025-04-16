import allureReporter from '@wdio/allure-reporter';
import { REGISTER_INFO, USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import registrationPage from '../pages/registration.page';


beforeEach(async () => {
    await registrationPage.open();
});

describe('Register tests', () => {
    it('Validate registration functionality using invalid registration info', async () => {
        allureReporter.addFeature('Registration');
        allureReporter.addSeverity('critical');
        allureReporter.addDescription('Check that user cannot register with username that are already in use', 'Description');

        allureReporter.startStep('Attempting to register with already registered username');
        await registrationPage.register(USER_INFO.USERNAME, USER_INFO.PASSWORD);
        allureReporter.endStep();

        allureReporter.startStep('Validate danger message is shown');
        await expect(registrationPage.homePageButton).toBeExisting();
        allureReporter.endStep();
    });

    it('Validate registration functionality using valid registration info', async () => {
        allureReporter.addFeature('Registration');
        allureReporter.addSeverity('critical');
        allureReporter.addDescription('Check that user can successfully register with correct credentials', 'Description');

        allureReporter.startStep('Attempting to register with valid credentials');
        await registrationPage.register(REGISTER_INFO.USERNAME, REGISTER_INFO.PASSWORD);
        allureReporter.endStep();

        allureReporter.startStep('Validate success message is shown');
        await expect(landingPage.successMessage).toBeExisting();
        allureReporter.endStep();
    });
});