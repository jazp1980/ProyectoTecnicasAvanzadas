import LoginPage from "../../page-objects/login-page";
import MenuPage from "../../page-objects/menu-page";
import NewTransactionPage from "../../page-objects/new-transaction-page";

describe('Register New Transaction', function(){
   
it('Should Log in', function () {

const lp = new LoginPage();

lp.visit();
lp.fillUser(Cypress.env('olduser'));
lp.fillPass(Cypress.env('oldpass'));
lp.submit();

     
});

it('Should Register New Transaction', function () {

 const mp = new MenuPage();
 const ntp = new NewTransactionPage();
   
 mp.newtxn(); 
 ntp.fillContact(Cypress.env('contact'));
 ntp.contact();
 ntp.fillAmount(Cypress.env('amount'));
 ntp.fillNote(Cypress.env('note'));
 ntp.request();
 cy.contains('Return To Transactions').should('be.visible');
  
});

     
})

  
 
  


  
  

