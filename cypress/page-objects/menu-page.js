class MenuPage {

   
   
    bankaccounts(){
        const button = cy.get('[data-test="sidenav-bankaccounts"]')
        button.click()
    }
    
    newtxn(){
        const button = cy.get('[data-test="nav-top-new-transaction"]')
        button.click()
       
    }

    
    home(){
        const button = cy.get('[data-test="sidenav-home"]')
        button.click()
    }
    
}
    
    export default MenuPage