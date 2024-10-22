class loginPage {
    selectorsList() {
        const selectors = {
            usernameField: "input+ .oxd-form-row .oxd-input--active",
            passwordField: ".oxd-form-row+ .oxd-form-row .oxd-input--active",
            loginButton: "[type= 'submit']",
            wrongCredentialAlert: ".oxd-alert--error",
        }

        return selectors
    }


    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default loginPage