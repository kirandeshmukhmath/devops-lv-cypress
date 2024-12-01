// <reference types="cypress" />


it('Verify if a user will be able to log in with a valid username and valid password', function () {
    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        cy.visit('https://testvillage.letsventure.com/signin')
        // Sign in page will be diplayed
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        //logging out now
        cy.get('.jss19').click()
        cy.get(':nth-child(5) > .MuiListItemText-root > .MuiTypography-root > span').click()
    })

})

it('Verify if a user cannot log in with a valid username and an invalid password.', function () {
    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password1
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        cy.get('.error_notify').should('have.text', 'Please re-enter your password. The password you entered is incorrect. Forgot your password? Request a new one.')


    })
})

it('Verify if a user cannot log in with an invalid username and a valid password', function () {
    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email2
        var password = cred.password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email2, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        cy.get('.error_notify').should('have.text', 'The email or password you entered is incorrect')
    })
})

it('Verify the login page for both, when the field is blank and the Sign-in button is clicked', function () {

    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
    cy.get('#email').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
})


























