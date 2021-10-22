import LoginPage from "../../page-objects/login-page";
import MenuPage from "../../page-objects/menu-page";
import HomePage from "../../page-objects/home-page";

describe('Register New Transaction Comment', function(){
   
it('Should Log in', function () {

const lp = new LoginPage();

lp.visit();
lp.fillUser(Cypress.env('olduser'));
lp.fillPass(Cypress.env('oldpass'));
lp.submit();

     
});

it('Should Register New Transaction Comment', function () {

 const mp = new MenuPage();
 const hp = new HomePage();
 mp.home();
 cy.contains('Everyone').should('be.visible');
 hp.transaction();
 hp.like();
 hp.fillComment('Gracias por la transaccion');
 cy.contains('Comments').should('be.visible');

});

     
})

  
 
  


  
  

