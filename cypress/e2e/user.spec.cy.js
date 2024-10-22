
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashBoardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

    it('User Info Update - Success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

      dashboardPage.checkDashboardPage()

      menuPage.accessMyInfo()

      myInfoPage.fillPersonalDetails(chance.first(), chance.last(), 'employeeId', 'otherId', 'driverLicense', '2024-10-21', '1979-07-05')
      myInfoPage.saveForm()

  })

  })
  