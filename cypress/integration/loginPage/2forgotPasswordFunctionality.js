//5

it('Verify the ‘Forgot Password’ functionality.', function () {
    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password1
        cy.visit('https://testvillage.letsventure.com/signin')
        // Sign in page will be diplayed
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.btn-align').click({ force: true })
        cy.url().should('be.equal', 'https://testvillage.letsventure.com/forgot_password')

    })
})
//6
it('Verify the message if the user is not registered on the platform.', function () {

    cy.visit('https://testvillage.letsventure.com/forgot_password')
    //forgot password page is displayed
    cy.get('#email').type('hello@gmail.com', { force: true })
    cy.wait(50000)
    cy.get('.btn').click({ force: true })
    cy.get('.alert > p').invoke('text').then((text) => {
        expect(text.trim()).equal('This email id is not registered on LetsVenture. Please check your email address')
    })

})

//7
it('Verify the message if the user is registered on the platform but not Approved by the LV admins.', function () {

    cy.visit('https://testvillage.letsventure.com/forgot_password')

    //forgot password page is displayed
    cy.get('#email').type('kirandeshmukhmath39@gmail.com', { force: true })
    cy.wait(40000)
    cy.get('.btn').click({ force: true })
    cy.get('.alert > p').invoke('text').then((text) => {
        expect(text.trim()).equal('Your application is under review by the LV team');
    })

})

//8
it('Verify if after giving valid email the reset password link has to came to the users email id', function () {

    cy.visit('https://testvillage.letsventure.com/forgot_password')

    //forgot password page is displayed
    cy.get('#email').type('kirandeshmukhmath@gmail.com', { force: true })
    cy.wait(40000)
    cy.get('.btn').click({ force: true })
    cy.get('.alert > p').invoke('text').then((text) => {
        expect(text.trim()).equal('Check your mail! A password reset link has been shared.');
    })

})


it('Verify if a user can log in with a new password only after he/she has changed the password.', function () {
    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        cy.url().should('be.equal', 'https://testvillage.letsventure.com/feed')
    })
})
