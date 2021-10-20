class NewAccountPage {

   
    fillBank(bank){
        const field = cy.get('#bankaccount-bankName-input')
        field.clear()
        field.type(bank)
        return this
    }
    
    fillRouting(routing){
        const field = cy.get('#bankaccount-routingNumber-input')
        field.clear()
        field.type(routing)
        return this
    }

    fillAccount(acc){
        const field = cy.get('#bankaccount-accountNumber-input')
        field.clear()
        field.type(acc)
        return this
    }

    save(){
        const button = cy.get('[data-test="bankaccount-submit"]')
        button.click()
    }

     done(){
        const button = cy.get('[data-test="user-onboarding-next"]')
        button.click()
    }
    
    getRandomAccountRouting(min, max) {
        return Math.trunc(Math.random() * (max - min) + min);
      }

    }
    
    export default NewAccountPage