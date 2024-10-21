
import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

const selectorsList = {
  usernameField: "[name= 'username']",
  passwordField: "[name= 'password']",
  loginButton: "[type= 'submit']",
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role= 'alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: ".orangehrm-firstname",
  lastNameField: ".orangehrm-lastname",
  employeeId: ".oxd-grid-3:nth-child(1) .oxd-grid-item--gutters:nth-child(1) .oxd-input--active",
  otherId: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
  driversLicenseNumber: ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
  licenseExpireDate: ".oxd-grid-item--gutters+ .oxd-grid-item--gutters .oxd-date-input .oxd-input--active",
  dateCloseButton: ".--close",
  nationality: ":nth-child(27) > span",
  submitButton: ".orangehrm-vertical-padding .orangehrm-left-space"


}


    it.only('Login Success', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstName')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    cy.get(selectorsList.employeeId).clear().type('EmployeeId')
    cy.get(selectorsList.otherId).clear().type('OtherId')
    cy.get(selectorsList.driversLicenseNumber).clear().type('Driver License')
    cy.get(selectorsList.licenseExpireDate).clear().type('2024-10-21')
    cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.nationality).should()
    cy.get(selectorsList.submitButton).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

  })
  
  it('Login fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   
   })
  
  })
  