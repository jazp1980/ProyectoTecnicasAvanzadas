class HomePage {

   
    fillComment(comment){
        const field = cy.get('#transaction-comment-input-Tu9tYdDt7aQc')
        field.clear()
        field.type(comment)
        cy.get('#transaction-comment-input-Tu9tYdDt7aQc').type('{enter}');
        return this
    }
   
    transaction(){

        const button = cy.get('[data-test="transaction-item-Tu9tYdDt7aQc"]')
        button.click({force: true})
    }
    
       like(){

        const button = cy.get('[data-test="transaction-like-button-Tu9tYdDt7aQc"]')
        button.click({force: true})

       }
 

    }
    
    export default HomePage