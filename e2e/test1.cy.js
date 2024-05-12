it('Google Search', function(){


})

it('Google Search' , () => {
    
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('ashish gupta northern trust {Enter}')
    //cy.contains('Google Search').click()    
}
)