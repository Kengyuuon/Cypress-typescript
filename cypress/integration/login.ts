import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import {RemovePrd} from "./pages/removeprd"
import {CheckoutPrd} from "./pages/checkoutprd"


let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let removeprd = new RemovePrd()
let checkoutprd = new CheckoutPrd()
const URL = 'https://www.saucedemo.com/'

it('Test LOGIN', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Test Sauce Demo Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Test Sauce Demo Invalid username', () => {
    loginPage.login(URL,'invalid_user','secret_sauce')
    loginPage.assertLoginFail()
})

it('Test Sauce Demo Can remove Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    removeprd.clickAddtoCart()
    removeprd.clickCart()
    cy.wait(1500)
    removeprd.clickRemoveprd()
    cy.wait(1500)
})
it('Test Sauce Demo Can Checkout Sauce labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    checkoutprd.clickAddtoCart()
    checkoutprd.clickCart()
    checkoutprd.clickCheckout()
    checkoutprd.inputFirstName('Fisrt Name')
    checkoutprd.inputLastName('Last Name')
    checkoutprd.inputPostalCode('98765')
    checkoutprd.clickContinue()
    checkoutprd.clickFinish()
   

})
