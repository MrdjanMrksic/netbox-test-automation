import { USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import registrationPage from '../pages/registration.page';
import utilities from '../support/utilities';


before(async () => {
    await registrationPage.open();
});

describe('Register tests', () => {
    it('Validate registration functionality using valid info', async () => {
        await registrationPage.register(USER_INFO.USERNAME, USER_INFO.PASSWORD);
        await expect(landingPage.welcomeElement).toBeExisting();
    })
})