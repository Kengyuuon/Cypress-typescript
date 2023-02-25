export class CheckoutPrd{
    btn_addCart = '#add-to-cart-sauce-labs-backpack'
    btn_cart = '#shopping_cart_container'
    first_name = '#first-name'
    last_name = '#last-name' 
    btn_checkout = '#checkout'
    postal_code = '#postal-code'
    btn_continue = '#continue'
    btn_finish = '#finish'
    

    inputFirstName(first: string){
        cy.get(this.first_name).type(first)
    }
    inputLastName(last: string){
        cy.get(this.last_name).type(last)
    }
    inputFirstName2(first: string){
        cy.get(this.first_name).type(first)
    }
    inputLastName2(last: string){
        cy.get(this.last_name).type(last)
    }
    clickAddtoCart(){
        cy.get(this.btn_addCart).click()
    }
    clickCart(){
        cy.get(this.btn_cart).click()
    }
    clickCheckout(){
        cy.get(this.btn_checkout).click()
    }
    inputPostalCode(postal: string){
        cy.get(this.postal_code).type(postal)
    }
    clickContinue(){
        cy.get(this.btn_continue).click()
    }
    clickFinish(){
        cy.get(this.btn_finish).click()
    }
}