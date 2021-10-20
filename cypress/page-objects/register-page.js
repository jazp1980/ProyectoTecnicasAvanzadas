class RegisterPage {

    visit(){
        cy.visit('/signin')
    }
    
    fillFirstName(first){
        const field = cy.get('#firstName')
        field.clear()
        field.type(first)
        return this
    }
    
    fillLastName(last){
        const field = cy.get('#lastName')
        field.clear()
        field.type(last)
        return this
    }

    fillUser(user){
        const field = cy.get('#username')
        field.clear()
        field.type(user)
        return this
    }
    
    fillPass(pass){
        const field = cy.get('#password')
        field.clear()
        field.type(pass)
        return this
    }


    fillConfirmPass(pass){
        const field = cy.get('#confirmPassword')
        field.clear()
        field.type(pass)
        return this
    }
    
    signup(){
        const button = cy.get('[data-test="signup"]')
        button.click()
    }
    
    submit(){
        const button = cy.get('[data-test="signup-submit"]')
        button.click()
    }

    }
    
    export default RegisterPage