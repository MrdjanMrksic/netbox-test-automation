import landingPage from '../pages/landing.page';
import registrationPage from '../pages/registration.page';
import utilities from '../support/utilities';


before(async () => {
    await registrationPage.open();
});

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //await registrationPage.register(utilities.generateRandomString(10,0), utilities.generateRandomString(7,1));
        await registrationPage.register("VitezKoja", "Mlata!1");
        await expect(landingPage.welcomeElement).toBeExisting();
    })
})