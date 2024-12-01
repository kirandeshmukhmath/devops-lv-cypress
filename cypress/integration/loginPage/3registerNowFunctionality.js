// <reference types="cypress" />

it('Verify the Register Now functionality if the button is clickable.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.join-now-link').click({ force: true })
})

it('Verify if after clicking on the Register now it is taking the user to Join user Page.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.join-now-link').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join')
})

it('Verify if the Join user page has two options to Sign up as Investor and Startup.', function () {

    cy.visit('https://testvillage.letsventure.com/signin')
    cy.get('.join-now-link').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join')
    cy.get('.investor-signup-btn > .btn-lable').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/investor')
    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn > .btn-lable').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/startup')
})
