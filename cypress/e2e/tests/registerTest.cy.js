import { registerPage } from "../../Pages/registerPage"
const registerObj = new registerPage();
import registerData from "../../fixtures/registerData.json";
describe(' Test Automation For Registration Page',() => {

    it('Enter User Registration Details',() => {
        registerObj.openUrl();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephone(registerData.telephone);
        registerObj.enterPassword(registerData.password);
        registerObj.selectCheckbox();
        registerObj.submitButton();
    })
})