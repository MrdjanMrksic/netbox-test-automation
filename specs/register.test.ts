import RegistrationPage from '../pages/registration.page'


before(async () => {
    await RegistrationPage.open();
});

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        // Note that we'll be using for all intents and purposes before() and beforeEach() methods
        // Using those methods to set up tests is a better practice and more abstract and scallable.
        // This is just an example test case

        const welcomeElement = $(`//span[normalize-space()='Welcome!123']`)
        await RegistrationPage.register('VitezKoja', 'Mlata!1');
        await expect(welcomeElement).toBeExisting();
    })
})