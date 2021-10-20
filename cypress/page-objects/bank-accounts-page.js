class BankAccountsPage {

   delete(){

    const button = cy.get('[data-test="bankaccount-delete"]').first()
    button.click()
    
   }
      
    create(){
        const button = cy.get('[data-test="bankaccount-new"]')
        button.click()
    
    }

}
    
    export default BankAccountsPage