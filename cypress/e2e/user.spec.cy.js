
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

const selectorsList = {
  
  
  
  
  
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


    it.only('Login Success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

      dashboardPage.checkDashboardPage()

      menuPage.accessMyInfo()
      
    
    
    
    cy.get(selectorsList.firstNameField).clear().type('FirstName')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    cy.get(selectorsList.employeeId).clear().type('EmployeeId')
    cy.get(selectorsList.otherId).clear().type('OtherId')
    cy.get(selectorsList.driversLicenseNumber).clear().type('Driver License')
    cy.get(selectorsList.licenseExpireDate).clear().type('2024-10-21')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.nationality).click()
    cy.get(':nth-child(28) > span').click()
    cy.get(selectorsList.maritalStatus).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.birthId).clear().type('1979-07-05')
    cy.get(selectorsList.genderId).click()
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label').click
    cy.get(selectorsList.submitButton).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.bloodType).click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    ///cy.get(selectorsList.testField).clear().type('ABCDE')
    ///cy.get(selectorsList.submitButtonTwo).click({force: true})
    ///cy.get('body').should('contain', 'Successfully Saved')


  })
  
  it('Login fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   
   })
  
  })
  