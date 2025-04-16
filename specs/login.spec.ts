import allureReporter from '@wdio/allure-reporter';
import { USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import loginPage from '../pages/login.page';


before(async () => {
    await loginPage.open();
});

describe('Login tests', () => {
    it('Validate login functionality using invalid login info', async () => {
        allureReporter.addFeature('Login');
        allureReporter.addSeverity('critical');
        allureReporter.addDescription('Check that user cannot log in with incorrect credentials', 'Description');

        allureReporter.startStep('Attempting to login with invalid credentials');
        loginPage.login(USER_INFO.INCORRECT_USERNAME, USER_INFO.PASSWORD)
        allureReporter.endStep();
        
        allureReporter.startStep('Validating danger message is shown');
        await expect(landingPage.dangerMessage).toBeExisting();
        allureReporter.endStep();
    });

    it.skip('Validate login functionality using valid login info', async () => {
        allureReporter.addFeature('Login');
        allureReporter.addSeverity('critical');
        allureReporter.addDescription('Check that user can successfully log in with correct credentials', 'Description');

        allureReporter.startStep('Attempting to login with valid credentials');
        loginPage.login(USER_INFO.USERNAME, USER_INFO.PASSWORD)
        allureReporter.endStep();

        allureReporter.startStep('Validating success message is shown');
        await expect(landingPage.successMessage).toBeExisting();
        allureReporter.endStep();
    });
}
)