import { LoginPageUI } from '../interfaces/login.interface';
import { BasePage } from '../../common/basePage';
export class LoginPage extends BasePage {
    constructor() {
        super();
    }
    gotoLoginPage() {
        cy.log('Go to Login Page');
        this.gotoURL('http://176.62.203.178/');
    }
    inputUserName(username: string) {
        cy.log('Input The Username');
        this.type(LoginPageUI.EMAIL_INPUT, username);
    }
    inputPassword(password: string) {
        cy.log('Input The Password');
        this.type(LoginPageUI.PASSWORD_INPUT, password);
    }
    clickLoginButton() {
        cy.log('Click Login Button');
        this.click(LoginPageUI.LOGIN_BUTTON);
    }
}
