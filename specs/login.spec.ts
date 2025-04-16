import AllureReporter from '@wdio/allure-reporter';
import { USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import loginPage from '../pages/login.page';
import userMenu from '../pages/userMenu.page';


before(async () => {
    await loginPage.open();
});

describe('Login tests', () => {
    it('Validate login functionality using invalid login info', async () => {
        AllureReporter.addFeature('Login');
        AllureReporter.addSeverity('critical');
        AllureReporter.addDescription('Check that user cannot log in with incorrect credentials', 'Description');

        AllureReporter.startStep('Attempting to login with invalid credentials');
        loginPage.login(USER_INFO.INCORRECT_USERNAME, USER_INFO.PASSWORD)
        AllureReporter.endStep();
        AllureReporter.startStep('Validating danger message is shown');
        await expect(landingPage.dangerMessage).toBeExisting();
        AllureReporter.endStep();
    });

    it.skip('Validate login functionality using valid login info', async () => {
        AllureReporter.addFeature('Login');
        AllureReporter.addSeverity('critical');
        AllureReporter.addDescription('Check that user cannot log in with incorrect credentials', 'Description');

        AllureReporter.startStep('Attempting to login with valid credentials');
        loginPage.login(USER_INFO.USERNAME, USER_INFO.PASSWORD)
        AllureReporter.endStep();

        AllureReporter.startStep('Validating success message is shown');
        await expect(landingPage.successMessage).toBeExisting();
        AllureReporter.endStep();
    });
}
)