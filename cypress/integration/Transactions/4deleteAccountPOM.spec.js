import LoginPage from "../../page-objects/login-page";
import MenuPage from "../../page-objects/menu-page";
import BankAccountsPage from "../../page-objects/bank-accounts-page";

describe('Delete Account', function(){
   
it('Should Log in', function () {

const lp = new LoginPage();

lp.visit();
lp.fillUser(Cypress.env('olduser'));
lp.fillPass(Cypress.env('oldpass'));
lp.submit();

     
});

it('Should Delete Account', function () {

    const mp = new MenuPage();
    const bap = new BankAccountsPage();

 mp.bankaccounts(); 
 bap.delete();
 cy.contains('(Deleted)').should('be.visible');
  
});

     
})

  
 
  


  
  

