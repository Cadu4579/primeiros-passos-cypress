
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage =  new DashBoardPage()

describe('Login Orange HRM Tests', () => {

 it('Login fail', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password) 
      loginPage.checkAccessInvalid()
   })

   it('Login Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) 
    dashboardPage.checkDashboardPage()
 })

  })
  