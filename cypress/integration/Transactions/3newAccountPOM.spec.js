import LoginPage from "../../page-objects/login-page";
import NewAccountPage from "../../page-objects/new-account-page";
import MenuPage from "../../page-objects/menu-page";
import BankAccountsPage from "../../page-objects/bank-accounts-page";

describe('Open New Account', function(){
   
it('Should Log in', function () {

const lp = new LoginPage();

lp.visit();
lp.fillUser(Cypress.env('olduser'));
lp.fillPass(Cypress.env('oldpass'));
lp.submit();

     
});

it('Should Open New Account', function () {

    const mp = new MenuPage();
    const bap = new BankAccountsPage();
    const nap = new NewAccountPage();

 mp.bankaccounts(); 
 bap.create();
 nap.fillBank(Cypress.env('bank'));
 nap.fillRouting(Cypress.env('rout'));
 nap.fillAccount(Cypress.env('acc'));
 nap.save();
 cy.contains(Cypress.env('bank')).should('be.visible');
  
});

     
})

  
 
  


  
  

