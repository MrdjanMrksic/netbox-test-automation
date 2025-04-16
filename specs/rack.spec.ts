import { USER_INFO } from '../data/constants';
import landingPage from '../pages/landing.page';
import loginPage from '../pages/login.page';
import createNewRackPage from '../pages/createNewRack.page'
import racksPage from '../pages/racks.page';
import utilities from '../support/utilities';


before(async () => {
    await loginPage.open();
    loginPage.login(USER_INFO.USERNAME, USER_INFO.PASSWORD)
});

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        var rackName = utilities.generateRandomString(10, 0);
        await landingPage.racksTab.click();
        await landingPage.racks.click();
        await racksPage.addRackButton.click();
        await createNewRackPage.fillOutAddNewRackForm(rackName);
        await createNewRackPage.createButton.click();
        await expect(createNewRackPage.rackCreatedMessage).toBeExisting();

        //delete
        await landingPage.racks.click();
        await racksPage.rackSearchBar.setValue(rackName);
        (await racksPage.rackFromTable(rackName)).click()
        await racksPage.deleteRackButton.click();
        await racksPage.confirmDeleteButton.click();
        await expect(racksPage.rackDeletedMessage).toBeExisting();

    })
})