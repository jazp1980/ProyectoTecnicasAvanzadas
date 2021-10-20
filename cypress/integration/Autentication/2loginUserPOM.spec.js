import LoginPage from "../../page-objects/login-page";

describe('Login User', function(){
   
           
       it('Should Log in', function () {
         
         const lp = new LoginPage();
         lp.visit();
         lp.fillUser(Cypress.env('olduser'));
         lp.fillPass(Cypress.env('oldpass'));
         lp.submit();
         cy.url().should('eq', 'http://localhost:3000/');
         
       });

              
    })