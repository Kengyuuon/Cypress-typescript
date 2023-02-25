export class RemovePrd{
    btn_addCart = '#add-to-cart-sauce-labs-backpack'
    btn_cart = '#shopping_cart_container'
    btn_remove = '#remove-sauce-labs-backpack'
    first_name = '#first-name'
    last_name = '#last-name' 
    

    inputFirstName(first: string){
        cy.get(this.first_name).type(first)
    }
    inputLastName(last: string){
        cy.get(this.last_name).type(last)
    }
    inputFirstNames(first: string){
        cy.get(this.first_name).type(first)
    }
    inputLastNames(last: string){
        cy.get(this.last_name).type(last)
    }
 
    clickAddtoCart(){
        cy.get(this.btn_addCart).click()
    }
    clickCart(){
        cy.get(this.btn_cart).click()
    }
    clickRemoveprd(){
        cy.get(this.btn_remove).click()
    }

    
}