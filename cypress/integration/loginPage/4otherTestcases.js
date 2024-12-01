//import { cred } from cypress

it('Verify the messages for invalid logins.', function () {

    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        var password = cred.password1
        var reg_email2 = cred.reg_email2
        //valid email and invalid password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        cy.get('.error_notify').should('have.text', 'Please re-enter your password. The password you entered is incorrect. Forgot your password? Request a new one.')
        //invalid email and invalid password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email2, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        cy.get('.error_notify').should('have.text', 'The email or password you entered is incorrect')
    })
})

it('Verify if the data in the password field is visible as bullet signs.', function () {

    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.get('#password').should('have.attr', 'type', 'password')
    })
})

it('Verify if the password is visible to the user after clicking on the show password button.', function () {

    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.get('.field-icon > .fa').click({ force: true })
        cy.get('#password').should('have.attr', 'type', 'text')
    })

})

it('Verify if the Enter key of the keyboard is working correctly on the login page.', function () {

    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').type(`{enter}`, { force: true })
        cy.url().should('be.equal', 'https://testvillage.letsventure.com/feed')
        cy.get('.jss19').click()
        cy.get(':nth-child(5) > .MuiListItemText-root > .MuiTypography-root > span').click()
    })

})
