import { HomePageUI } from '../interfaces/home.interface';
import { BasePage } from '../../common/basePage';
export class HomePage extends BasePage {
    constructor() {
        super();
    }
    verifyLogoShouldBeVisible() {
        cy.log('Verify Logo is visible');
        this.shouldVisible(HomePageUI.LOGO);
    }
}
