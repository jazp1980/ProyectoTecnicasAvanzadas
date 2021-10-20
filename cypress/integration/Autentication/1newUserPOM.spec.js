import RegisterPage from "../../page-objects/register-page";

describe('Create User', function(){
            
      it('Should Register', function () {

            const rp = new RegisterPage();
            rp.visit('/signin');
            rp.signup();
            rp.fillFirstName(Cypress.env('newUserfirstName'));
            rp.fillLastName(Cypress.env('newUserlastName'));
            rp.fillUser(Cypress.env('newuser'));
            rp.fillPass(Cypress.env('newpass'));
            rp.fillConfirmPass(Cypress.env('newpass'));
            rp.submit();
         });


  })



  