import { LoginPage } from '../support/pages/actions/login.po';
import { HomePage } from '../support/pages/actions/home.po';
import { Constant } from '../support/common/constanst';
const loginPage = new LoginPage();
const homePage = new HomePage();
const username = Constant.PROVIDER_ACCOUNT;
const password = Constant.PROVIDER_PASSWORD;
describe('Login Test With Cypress', () => {
  context('Login with valid username and password', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('Login Page', () => {
      loginPage.gotoLoginPage();
      loginPage.inputUserName(username);
      loginPage.inputPassword(password);
      loginPage.clickLoginButton();
      homePage.verifyLogoShouldBeVisible();
    });
  });
});
