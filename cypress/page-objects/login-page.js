
class LoginPage {

visit(){
    cy.visit('/signin')
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

submit(){
    const button = cy.get('[data-test="signin-submit"]')
    button.click()
}

next(){
    const button = cy.get('[data-test="user-onboarding-next"]')
    button.click()
}

}

export default LoginPage