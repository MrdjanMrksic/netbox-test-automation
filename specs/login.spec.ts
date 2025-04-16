import { USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import loginPage from '../pages/login.page';


before(async () => {
    await loginPage.open();
});

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        loginPage.login(USER_INFO.USERNAME, USER_INFO.PASSWORD)
        await expect(landingPage.welcomeElement).toBeExisting();
    })
})