class MyInfoPage{

    selectorsList() {
        const selectors = {
            firstNameField: ".orangehrm-firstname",
            lastNameField: ".orangehrm-lastname",
            employeeId: ".oxd-grid-3:nth-child(1) .oxd-grid-item--gutters:nth-child(1) .oxd-input--active",
            otherId: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
            driversLicenseNumber: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
            licenseExpireDate: ".oxd-grid-item--gutters+ .oxd-grid-item--gutters .oxd-date-input .oxd-input--active",
            dateCloseButton: ".--close",
            submitButton: ".orangehrm-vertical-padding .orangehrm-left-space",
            nationality: ".orangehrm-vertical-padding .oxd-grid-item--gutters:nth-child(1) .oxd-select-text-input",
            maritalStatus: ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text",
            birthId: ".oxd-grid-item--gutters:nth-child(1) .oxd-date-input .oxd-input--active",
            genderId: ":nth-child(5) > :nth-child(2) > :nth-child(2)",
            bloodType: ".orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text",
            testField: ".orangehrm-custom-fields .oxd-input--active",
            submitButtonTwo: ".orangehrm-custom-fields .oxd-form-actions",

        }

        return selectors

    }

    fillPersonalDetails(firstName, lastName, employeeId, otherId, driverLicense) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().employeeId).clear().type(employeeId)
        cy.get(this.selectorsList().otherId).clear().type(otherId)
        cy.get(this.selectorsList().driversLicenseNumber).clear().type(driverLicense)
        cy.get(this.selectorsList().licenseExpireDate).clear().type('2024-10-21')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().nationality).click()
        cy.get(':nth-child(28) > span').click()
        cy.get(this.selectorsList().maritalStatus).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.selectorsList().birthId).clear().type('1979-07-05')
        cy.get(this.selectorsList().genderId).click()
        cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click
        
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    /*fillCustomFields() {
        //cy.get(selectorsList.bloodType).click()
        //cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        ///cy.get(selectorsList.testField).clear().type('ABCDE')
        ///cy.get(selectorsList.submitButtonTwo).click({force: true})
        ///cy.get('body').should('contain', 'Successfully Saved')
    }
        */

    
}

export default MyInfoPage