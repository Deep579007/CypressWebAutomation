export class registerPage {

    WebLocators={
           
        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telePhone: "#input-telephone",
        password: "#input-password",
        confirmPassword: "#input-confirm",
        checkBox: "input[type='checkbox']",
        submitButton: "input[type='submit']",
    }
    openUrl(){
        cy.visit(Cypress.env('URL'));
    }

    enterFirstName (Fname){
        cy.get(this.WebLocators.firstName).type(Fname)
    }
    enterLastName (Lname){
        cy.get(this.WebLocators.lastName).type(Lname)
    }
    enterEmail (Email){
        cy.get(this.WebLocators.email).type(Email)
    }
    enterTelephone (Tphone){
        cy.get(this.WebLocators.telePhone).type(Tphone)
    }
    enterPassword (Password){
        cy.get(this.WebLocators.password).type(Password)
        cy.get(this.WebLocators.confirmPassword).type(Password)
    }
    selectCheckbox (){
        cy.get(this.WebLocators.checkBox).check()
    }
    submitButton (){
        cy.get(this.WebLocators.submitButton).click()
    }

}