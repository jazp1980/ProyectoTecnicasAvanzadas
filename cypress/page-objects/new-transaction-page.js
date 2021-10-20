class NewTransactionPage {

   
    fillContact(contact){
        const field = cy.get('#user-list-search-input')
        field.clear()
        field.type(contact)
        return this
    }
    
    fillAmount(amount){
        const field = cy.get('#amount')
        field.clear()
        field.type(amount)
        return this
    }

    fillNote(note){
        const field = cy.get('#transaction-create-description-input')
        field.clear()
        field.type(note)
        return this
    }
     
     contact(){
        const button = cy.get('[data-test="users-list"]').first()
        button.click()
    }
    
    request(){
        const button = cy.get('[data-test="transaction-create-submit-request"]')
        button.click()
        
    }
    
    }
    
    export default NewTransactionPage