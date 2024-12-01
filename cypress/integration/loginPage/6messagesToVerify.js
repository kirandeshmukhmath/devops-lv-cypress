
it('Verify the messages for invalid logins 33,34.', function () {

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

it('When the email id is not registered and user is doing forgot password', function () {

    cy.fixture('cred.json').then((cred) => {

        var reg_email2 = cred.reg_email2
        var emailid37 = cred.emailid37
        //valid email and invalid password
        cy.visit('https://testvillage.letsventure.com/forgot_password')
        cy.get('#email').type(cred.emailid37, { force: true })
        cy.wait(40000)
        cy.get('.btn').click({ force: true })
        cy.get('.alert > p').invoke('text').then((text) => {
            expect(text.trim()).equal('This email id is not registered on LetsVenture. Please check your email address')
        })
    })
})

it('When the fields are left empty', function () {

    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
    cy.get('#email').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
})

it('When the account is locked due to 5 invalid attempts', function () {

    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        var reg_email2 = cred.reg_email2
        var password = cred.password1

        //valid email and invalid password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        //invalid email and invalid password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        //invalid email and invalid password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        cy.visit('https://testvillage.letsventure.com/signin')
        //invalid email and invalid password
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        //invalid email and invalid password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        //invalid email and invalid password
        cy.visit('https://testvillage.letsventure.com/signin')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.get('#password').type(cred.password1, { force: true })
        cy.get('.custom_sign_in').find('#sign_in_submit').click({ force: true })
        cy.get('.alert').find('.error_notify').invoke('text').then((text) => {
            expect(text.trim()).equal('We have temporarily locked your account because of 5 failed login attempts. Please Click here and we will send you link to unlock your account')
            cy.wait(2000)
        })
    })
})

it('When the password reset link has been sent successfully', function () {
    cy.fixture('cred.json').then((cred) => {
        var re_email = cred.reg_email
        var password = cred.password
        var reg_email2 = cred.reg_email2
        var password = cred.password1
        cy.visit('https://testvillage.letsventure.com/forgot_password')
        cy.get('#email').type(cred.reg_email, { force: true })
        cy.wait(40000)
        cy.get('.btn').click({ force: true })
        cy.get('.alert > p').invoke('text').then((text) => {
            expect(text.trim()).equal('Check your mail! A password reset link has been shared.');
        })
    })
})

it('when the user is not approved but user has is registered', function () {
    cy.fixture('cred.json').then((cred) => {

        var em3 = cred.email4
        var password = cred.password1
        cy.visit('https://testvillage.letsventure.com/forgot_password')
        cy.get('#email').type(cred.email4, { force: true })
        cy.wait(60000)
        cy.get('.btn').click({ force: true })
        cy.get('.alert > p').invoke('text').then((text) => {
            expect(text.trim()).equal('Your application is under review by the LV team');
        })
    })
})

it('When the user is onboarded but password is not created', function () {
    cy.fixture('cred.json').then((cred) => {

        var em3 = cred.email5
        var password = cred.password1
        cy.visit('https://testvillage.letsventure.com/forgot_password')
        cy.get('#email').type(cred.email5, { force: true })
        cy.wait(60000)
        cy.get('.btn').click({ force: true })
        cy.get('.alert > p').invoke('text').then((text) => {
            expect(text.trim()).equal('Your account is not validated, please login using link sent to you in your registered Email');
        })

    })
})


