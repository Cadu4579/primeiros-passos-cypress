class loginPage {
    selectorsList() {
        const selectors = {
            usernameField: "input+ .oxd-form-row .oxd-input--active",
            passwordField: ".oxd-form-row+ .oxd-form-row .oxd-input--active",
            loginButton: "[type= 'submit']",
            wrongCredentialAlert: "[role= 'alert']",
        }

        return selectors
    }


    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type('Admin')
        cy.get(this.selectorsList().passwordField).type('admin123')
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default loginPage