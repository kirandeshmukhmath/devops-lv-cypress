
describe('Functional Test Cases', function () {
    it('Verify if the signup button is taking the user to sign up page', function () {
        cy.visit('https://testvillage.letsventure.com/')
        cy.get('.signup').click({ force: true })
        cy.url().should('be.equal', 'https://testvillage.letsventure.com/join')

    })
    it('Verify if the user can see options to sign up on the platform as an ‘Investor and also Startup’.', function () {
        cy.visit('https://testvillage.letsventure.com/join')
        cy.get('.investor-text-uppercase').should('be.visible')
        cy.get('.investor-signup-btn > .btn-lable').should('be.visible')
        cy.get('.startup-text-uppercase').should('be.visible')
        cy.get('.startup-signup-btn > .btn-lable').should('be.visible')
        cy.url().should('be.equal', 'https://testvillage.letsventure.com/join')

    })
    it('Verify if the sign up as Investor button is taking the user to the Lets Invest page where the user can see the Information about how the platform works.', function () {
        cy.visit('https://testvillage.letsventure.com/join')
        cy.get('.investor-signup-btn > .btn-lable').click({ force: true })
        cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/investor')

    })

    it('Verify if the Information provided on the Let’s Invest page is proper and readable.', function () {
        cy.visit('https://testvillage.letsventure.com/join/investor')
        cy.get('.welcome-container').should('be.visible')
        cy.get('.new-footer').should('be.visible')

    })


    it('Verify if the ‘Let’s Invest Together’ button is taking the user to the Personal Details page.', function () {
        cy.visit('https://testvillage.letsventure.com/join/investor')
        cy.get('.signup-btn').click({ force: true })
        cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/investor/preferences1')
    })

    it('Verify if all the Fields on the page are mandatory and have an asterisk sign.', function () {
        cy.get(':nth-child(1) > :nth-child(1) > .edit__profile_label-title > .text-mandatory').should('be.visible')
        cy.get(':nth-child(2) > .edit__profile_label-title > .text-mandatory').should('be.visible')
        cy.get(':nth-child(3) > .edit__profile_label-title > .text-mandatory').should('be.visible')
        cy.get('.text-danger').should('be.visible')
        cy.get(':nth-child(5) > .edit__profile_label-title > .text-mandatory').should('be.visible')
        cy.get(':nth-child(6) > .edit__profile_label-title > .text-mandatory').should('be.visible')
        cy.get(':nth-child(7) > .edit__profile_label-title > .text-mandatory').should('be.visible')
        cy.get(':nth-child(8) > :nth-child(1) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    })

    it('Verify if all the fields have a placeholder.', function () {

        cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
        cy.get('.PhoneInputInput').invoke('attr', 'placeholder').should('contain', 'Enter phone number')
        cy.get('#react-select-2--value').invoke('text').then((text) => {
            expect(text.trim()).equal('Enter the Contry Name');
        })
        cy.get('#react-select-3--value').invoke('text').then((text) => {
            expect(text.trim()).equal('Enter the City');
        })
    })

    it('Verify if after clicking on the ‘Continue to Investment profile’ all the Empty fields are showing error msgs and also a toaster to fill in all the mandatory fields.', function () {
        cy.get('.continue-btn').click({ force: true })
        cy.get(':nth-child(1) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
            expect(text.trim()).equal('First Name is required');
        })
        cy.get(':nth-child(2) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
            expect(text.trim()).equal('Last Name is required');
        })
        cy.get(':nth-child(3) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
            expect(text.trim()).equal('Email ID is required');
        })
        cy.get('.edit__profile_form-radio > .text-danger').invoke('text').then((text) => {
            expect(text.trim()).equal('Gender is required');
        })
        cy.get(':nth-child(5) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
            expect(text.trim()).equal('Country of Citizenship is required');
        })
        cy.get(':nth-child(6) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
            expect(text.trim()).equal('Linkedin URL is required');
        })
        cy.get(':nth-child(7) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
            expect(text.trim()).equal('City is required');
        })
        cy.get(':nth-child(8) > :nth-child(2) > .text-danger').invoke('text').then((text) => {
            expect(text.trim()).equal('Phone number is required');
        })
        cy.get('.d-flex > .text-danger').invoke('text').then((text) => {
            expect(text.trim()).equal('captcha is required');

        })

    })
})


it('Verify if after filling all the fields user can proceed further to ‘verify the number with the otp and then to the Investment Profile page', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type('firstname', { force: true })
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type('lastname', { force: true })
    cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type('firstlast@gmail.com', { force: true })
    cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get('#react-select-96--value').type('India')
    cy.wait(3000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get(':nth-child(8) > .edit__profile_form-item > .Select').type('Bangalore')
    cy.wait(3000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "Bangalore, India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
        cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').type('ABCDE1234')
        cy.focused().tab()
        cy.get('.edit__profile_form-item > .text-danger').should('be.visible')
        cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').type('A')
        cy.focused().tab()
        cy.get(':nth-child(7) > .edit__profile_form-item > .edit__profile_input').type('https://www.linkedin.com/in/ab86193/', { force: true })
        cy.get('.PhoneInputInput').type('8147357822')
        //cy.get('.continue-btn').click({ force: true })

    })
})


it('Verify if the first name and the last name are taking at least three alphabets.', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type('f', { force: true })
    cy.focused().tab()
    cy.get(':nth-child(1) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('First Name must be atleast three characters');
    })
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type('fi', { force: true })
    cy.focused().tab()
    cy.get(':nth-child(1) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('First Name must be atleast three characters');
    })

    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type('f', { force: true })
    cy.focused().tab()
    cy.get(':nth-child(2) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Last Name must be atleast three characters');
    })
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type('i', { force: true })
    cy.focused().tab()
    cy.get(':nth-child(2) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Last Name must be atleast three characters');
    })

})



const emails = (val) => {
    var email = "";
    var possible = "abcd@.gh";
    for (var i = 0; i < val; i++) {
        email += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return email;
}


const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

for (let index = 0; index < 10; index++) {
    const TestEmail = emails(10)
    const EmailState = validateEmail(TestEmail)
    it("EmailTest -" + TestEmail + " - " + EmailState, () => {
        cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
        cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type(TestEmail)
        cy.focused().tab();
        if (!EmailState) {
            cy.get(':nth-child(3) > .edit__profile_form-item > .text-danger').should('be.visible');
        } else {
            cy.get(':nth-child(3) > .edit__profile_form-item > .text-danger').should('not.be.visible');
        }
    })
}

it('Verify if the Gender Radio button is selectable and the user can select only one at a time.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check('male')
    cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').should('be.checked')
    cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check('female')
    cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').should('be.checked')

})

it('Verify if the type to search is falling when the user is clicking on the country of citizenship field.', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type('firstname', { force: true })
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type('lastname', { force: true })
    cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type('firstlast@gmail.com', { force: true })
    cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get('#react-select-96--value').click({ force: true })
    cy.get('.Select-noresults').invoke('text').then((text) => {
        expect(text.trim()).equal('Type to search');

    })
})

it('Verify if the country is coming below with the typed initial letter when the user starts typing.', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type('firstname', { force: true })
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type('lastname', { force: true })
    cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type('firstlast@gmail.com', { force: true })
    cy.get(':nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get('#react-select-96--value').type('I')
    cy.wait(3000)
    cy.get('.Select-menu').invoke('text').then((text) => {
        expect(text.trim()).equal('IndiaIndonesiaIranIrelandIsraelItaly');

    })
})


it('Verify if the country coming below is selectable.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get("#react-select-2--value").type("India")
    cy.wait(3000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get('.Select-value').invoke('text').then((text) => {
        expect(text.trim()).equal('India');

    })
})

it('Verify if the user choosing is India then the PAN field is coming as a mandatory field and with Asterisk sign and with the place holder.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get("#react-select-2--value").type("India")
    cy.wait(3000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get('.Select-value').invoke('text').then((text) => {
        expect(text.trim()).equal('India');

    })
    cy.get(':nth-child(6) > .edit__profile_label-title').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').should('be.visible')


})

it('Verify if the error msg comes when the user fills the wrong PAN and goes when the PAN is correct.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get("#react-select-2--value").type("India")
    cy.wait(3000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get('.Select-value').invoke('text').then((text) => {
        expect(text.trim()).equal('India');

    })
    cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').type('ABCDE1234')
    cy.focused().tab()
    cy.get('.edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Invalid PAN Number');
    })
    cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').type('A')
    cy.focused().tab()
    cy.get(':nth-child(6) > .edit__profile_form-item > .text-danger').should('not.exist')
    cy.focused().tab()
    cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').type('A')
    cy.focused().tab()
    cy.get(':nth-child(6) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Invalid PAN Number');
    })

})

it('Verify if the TAX Id comes as a mandatory field with an asterisk sign and with the placeholder, when the user selects a country other than India.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get("#react-select-2--value").type("Israel")
    cy.wait(3000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "Israel") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_label-title').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_label-title > .text-mandatory').should('be.visible')
})

it('Verify if the error msg comes when the user fills the TAX Id with less than 9 digits and goes when the TAX Id is correct.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get("#react-select-2--value").type('Indonesia')
    cy.wait(3000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "Indonesia") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })

    cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').type('12-34568')
    cy.focused().tab()
    cy.get(':nth-child(6) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Tax ID/SSN Number is a required field with minimum 9 digit');
    })
    cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').clear().type('12-345689')
    cy.focused().tab()
    cy.get(':nth-child(6) > .edit__profile_form-item > .text-danger').should('not.exist')


})

it('Verify if the error msg comes when the user fills the TAX Id with less than 9 digits and goes when the TAX Id is correct.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get("#react-select-2--value").type('Indonesia')
    cy.wait(3000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "Indonesia") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })

    cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').type('12-34568')
    cy.focused().tab()
    cy.get(':nth-child(6) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Tax ID/SSN Number is a required field with minimum 9 digit');
    })
    cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').clear().type('12-345689')
    cy.focused().tab()
    cy.get(':nth-child(6) > .edit__profile_form-item > .text-danger').should('not.exist')


})
it('Verify if the Linkedin field is taking a valid LinkedIn URL and giving an error msg when the LinkedIn URL is wrong.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(6) > .edit__profile_form-item').type('https://www.linkedin.com/in/')
    cy.focused().tab()
    cy.get('.edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Linkedin URL is Invalid');
    })
    cy.get(':nth-child(6) > .edit__profile_form-item').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
    cy.focused().tab()
    cy.get('.edit__profile_form-item > .text-danger').should('not.exist')

})
it('Verify if the ‘type to search’ is falling when the user is clicking on the ‘city’ field.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get('#react-select-3--value').click({ force: true })
    cy.get('.Select-noresults').invoke('text').then((text) => {
        expect(text.trim()).equal('Type to search');
    })

})
it('Verify if the city is coming below with the typed initial letter when the user starts typing.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get('#react-select-3--value').type('B')
    cy.wait(3000)
    cy.get('.Select-menu').invoke('text').then((text) => {
        expect(text.trim()).equal('Bagalkot, IndiaBakersfield, USABaltimore, USABangalore, IndiaBareilly, IndiaBelgaum, IndiaBellevue, USABerkeley, USABhilai Nagar, IndiaBhopal, IndiaBhubaneswar, IndiaBikaner, IndiaBoston, USABuffalo, USABulandshahr, India');
    })

})
it('Verify if the city coming below is selectable.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get("#react-select-3--value").type('Bangalore')
    cy.wait(4000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "Bangalore, India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get('.Select-value').invoke('text').then((text) => {
        expect(text.trim()).equal('Bangalore, India');
    })


})
it('Verify if the Country code is selectable from the dropdown and also changes when the user manually types the number.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get('.PhoneInputCountrySelect').select('India')
    cy.get('.startup_small_message').invoke('text').then((text) => {
        expect(text.trim()).equal('Please enter the number with respective country code.');
    })
    cy.get('.PhoneInputInput').type('+81')

    cy.get('.PhoneInputCountrySelect').invoke('show').and('have.value', 'JP')

})


it('Verify if the invalid number error msg is coming when the user is giving the wrong number and turns into valid when the number is correct.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get('.PhoneInputInput').type('1234')
    cy.get('#error_text').invoke('text').then((text) => {
        expect(text.trim()).equal('Invalid phone number');
    })
    cy.get('.PhoneInputInput').clear().type('9986354254')
    cy.get('#success_text').invoke('text').then((text) => {
        expect(text.trim()).equal('Phone number is valid');
    })
})

it('Verify if the user is not able to proceed further if the captcha is not checked.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(1) > .edit__profile_form-item').type('annvin')
    cy.get(':nth-child(2) > .edit_profile_form-item > .edit_profile_input').type('vincent')
    cy.get(':nth-child(3) > .edit_profile_form-item > .edit_profile_input').type('vincentannvin@gmail.com')
    cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
    cy.get("#react-select-96--value").type('India')
    cy.wait(4000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get(':nth-child(6) > .edit_profile_form-item > .edit_profile_input').clear().type('BQIPV9280L')
    cy.focused().tab()
    cy.get(':nth-child(7) > .edit_profile_form-item > .edit_profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
    cy.focused().tab()
    cy.get(".Select-placeholder").type('Bangalore')
    cy.wait(4000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "Bangalore, India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get('.PhoneInputInput').clear().type('9986354254')
    cy.get('.continue-btn').click({ force: true })
    cy.get('.d-flex > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('captcha is required');
    })
})
it('Verify if the Captcha is expiring after some time.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(1) > .edit__profile_form-item').type('annvin')
    cy.get(':nth-child(2) > .edit_profile_form-item > .edit_profile_input').type('vincent')
    cy.get(':nth-child(3) > .edit_profile_form-item > .edit_profile_input').type('vincentannvin@gmail.com')
    cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
    cy.get("#react-select-96--value").type('India')
    cy.wait(4000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get(':nth-child(6) > .edit_profile_form-item > .edit_profile_input').clear().type('BQIPV9280L')
    cy.focused().tab()
    cy.get(':nth-child(7) > .edit_profile_form-item > .edit_profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
    cy.focused().tab()
    cy.get(".Select-placeholder").type('Bangalore')
    cy.wait(4000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "Bangalore, India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get('.PhoneInputInput').clear().type('9986354254')
    cy.wait(100000)
    cy.get('.continue-btn').click({ force: true })

})
it('Verify if the OTP is coming to the number and email that the user has given while registering.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
    cy.get(':nth-child(1) > .edit__profile_form-item').type('annvin')
    cy.get(':nth-child(2) > .edit_profile_form-item > .edit_profile_input').type('vincent')
    cy.get(':nth-child(3) > .edit_profile_form-item > .edit_profile_input').type('vincentannvin@gmail.com')
    cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
    cy.get("#react-select-96--value").type('India')
    cy.wait(4000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get(':nth-child(6) > .edit_profile_form-item > .edit_profile_input').clear().type('BQIPV9280L')
    cy.focused().tab()
    cy.get(':nth-child(7) > .edit_profile_form-item > .edit_profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
    cy.focused().tab()
    cy.get(".Select-placeholder").type('Bangalore')
    cy.wait(4000)
    cy.get(".Select-menu").each(($e1, index, $list) => {

        if ($e1.text() === "Bangalore, India") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.get('.PhoneInputInput').clear().type('9986354254')
    cy.wait(60000)
    cy.get('.continue-btn').click({ force: true })

})
it('Verify if the Verify OTP popup is coming after filling all the fields and clicking on the continue button'
    , function () {
        cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
        cy.get(':nth-child(1) > .edit__profile_form-item').type('annvin')
        cy.get(':nth-child(2) > .edit_profile_form-item > .edit_profile_input').type('vincent')
        cy.get(':nth-child(3) > .edit_profile_form-item > .edit_profile_input').type('vincentannvin@gmail.com')
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
        cy.get("#react-select-96--value").type('India')
        cy.wait(4000)
        cy.get(".Select-menu").each(($e1, index, $list) => {

            if ($e1.text() === "India") {

                cy.wrap($e1).invoke('show')
                cy.wrap($e1).click()
            }
        })
        cy.get(':nth-child(6) > .edit_profile_form-item > .edit_profile_input').clear().type('BQIPV9280L')
        cy.focused().tab()
        cy.get(':nth-child(7) > .edit_profile_form-item > .edit_profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
        cy.focused().tab()
        cy.get(".Select-placeholder").type('Bangalore')
        cy.wait(4000)
        cy.get(".Select-menu").each(($e1, index, $list) => {

            if ($e1.text() === "Bangalore, India") {

                cy.wrap($e1).invoke('show')
                cy.wrap($e1).click()
            }
        })
        cy.get('.PhoneInputInput').clear().type('9986354254')
        cy.wait(60000)
        cy.get('.continue-btn').click({ force: true })
        cy.get('.modal-body').should('be.visible')

    })
//06/06/2022

it('Verify if the Resend OTP is working. '
    , function () {

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        console.log(makeid());

        function emails() {
            var email = "";
            var possible = "abchdjsksbin";
            for (var i = 0; i < 5; i++) {
                email += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return email + '@gmail.com';
        }

        cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
        cy.get(':nth-child(1) > .edit__profile_form-item').type('Kiran01')
        cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type(makeid())
        cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type(emails())
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
        cy.get(':nth-child(5) > .edit__profile_form-item > .Select > .Select-control').type('India')
        cy.wait(4000)
        cy.get(".Select-menu").each(($e1, index, $list) => {

            if ($e1.text() === "India") {

                cy.wrap($e1).invoke('show')
                cy.wrap($e1).click()
            }
        })
        cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').clear().type('BQIPV9280L')
        cy.focused().tab()
        cy.get(':nth-child(7) > .edit__profile_form-item > .edit__profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
        cy.focused().tab()
        cy.get(".Select-placeholder").type('Bangalore')
        cy.wait(4000)
        cy.get(".Select-menu").each(($e1, index, $list) => {

            if ($e1.text() === "Bangalore, India") {

                cy.wrap($e1).invoke('show')
                cy.wrap($e1).click()
            }
        })
        cy.get('.PhoneInputInput').clear().type('8147357822')
        //cy.get('.PhoneInputInput').clear().type('8509202901')
        cy.wait(60000)
        cy.get('.continue-btn').click({ force: true })
        cy.get('.form-group > .form-control').type('0000');
        cy.get('.text-center.modal-inner-title > a').click({ force: true })
    })

it('Verify if the user is not able to proceed if user is giving wrong OTP.'
    , function () {
        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        console.log(makeid());

        function emails() {
            var email = "";
            var possible = "abchdjsksbin";
            for (var i = 0; i < 5; i++) {
                email += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return email + '@gmail.com';
        }

        cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
        cy.get(':nth-child(1) > .edit__profile_form-item').type('Kiran01')
        cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type(makeid())
        cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type(emails())
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
        cy.get(':nth-child(5) > .edit__profile_form-item > .Select > .Select-control').type('India')
        cy.wait(4000)
        cy.get(".Select-menu").each(($e1, index, $list) => {

            if ($e1.text() === "India") {

                cy.wrap($e1).invoke('show')
                cy.wrap($e1).click()
            }
        })
        cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').clear().type('BQIPV9280L')
        cy.focused().tab()
        cy.get(':nth-child(7) > .edit__profile_form-item > .edit__profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
        cy.focused().tab()
        cy.get(".Select-placeholder").type('Bangalore')
        cy.wait(4000)
        cy.get(".Select-menu").each(($e1, index, $list) => {

            if ($e1.text() === "Bangalore, India") {

                cy.wrap($e1).invoke('show')
                cy.wrap($e1).click()
            }
        })
        cy.get('.PhoneInputInput').clear().type('8147357822')
        //cy.get('.PhoneInputInput').clear().type('8509202901')
        cy.wait(60000)
        cy.get('.continue-btn').click({ force: true })
        cy.get('.form-group > .form-control').type('0000');
        cy.get('.pt-2 > .continue-btn').click({ force: true })
    })

it('Verify if the user is able to proceed if giving correct OTP.'
    , function () {

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        console.log(makeid());

        function emails() {
            var email = "";
            var possible = "abchdjsksbin";
            for (var i = 0; i < 5; i++) {
                email += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return email + '@gmail.com';
        }

        cy.fixture('cred.json').then((cred) => {
            var accountid = cred.accountID
            var token = cred.Token
            var url = cred.URLs
            const accountSid = cred.accountID;
            const authToken = cred.Token;
            cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
            cy.get(':nth-child(1) > .edit__profile_form-item').type('kkkkk')
            cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type(makeid())
            cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type(emails())
            cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
            cy.get(':nth-child(5) > .edit__profile_form-item > .Select > .Select-control').type('India')
            cy.wait(4000)
            cy.get(".Select-menu").each(($e1, index, $list) => {

                if ($e1.text() === "India") {

                    cy.wrap($e1).invoke('show')
                    cy.wrap($e1).click()
                }
            })
            cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').clear().type('BQIPV9280L')
            cy.focused().tab()
            cy.get(':nth-child(7) > .edit__profile_form-item > .edit__profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
            cy.focused().tab()
            cy.get(".Select-placeholder").type('Bangalore')
            cy.wait(4000)
            cy.get(".Select-menu").each(($e1, index, $list) => {

                if ($e1.text() === "Bangalore, India") {

                    cy.wrap($e1).invoke('show')
                    cy.wrap($e1).click()
                }
            })
            cy.get('.PhoneInputInput').clear().type('+18509202901')
            cy.get('.PhoneInputInput').clear().type('8509202901')
            cy.wait(60000)
            cy.get('.continue-btn').click({ force: true })

            cy.request({
                method: 'GET',
                url: cred.URLs,
                auth: {
                    username: accountSid,
                    password: authToken,
                    AuthMethod: 'BasicAuth',
                }
            })
                .its('body').then((res) => {
                    cy.wait(4000) //wait for SMS
                    const otpcode = res.messages[0].body.substring(0, 6)
                    cy.wait(4000)
                    cy.get('.form-group > .form-control').type(otpcode);
                    cy.get('.pt-2 > .continue-btn').click({ force: true })
                    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/investor/preferences2')
                })


        })
    });
//cy.get('.continue-btn').click({ force: true })
//cy.get('.modal-body').should('be.visible')


//const client = require('twilio')(accountSid, authToken);

it('Verify if the user is landing on the Investment Profile page.'
    , function () {

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        console.log(makeid());

        function emails() {
            var email = "";
            var possible = "abchdjsksbin";
            for (var i = 0; i < 5; i++) {
                email += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return email + '@gmail.com';
        }

        cy.fixture('cred.json').then((cred) => {
            var accountid = cred.accountID
            var token = cred.Token
            var url = cred.URLs
            const accountSid = cred.accountID;
            const authToken = cred.Token;
            cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
            cy.get(':nth-child(1) > .edit__profile_form-item').type('Kiran111110')
            cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type(makeid())
            cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type(emails())
            cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
            cy.get(':nth-child(5) > .edit__profile_form-item > .Select > .Select-control').type('India')
            cy.wait(4000)
            cy.get(".Select-menu").each(($e1, index, $list) => {

                if ($e1.text() === "India") {

                    cy.wrap($e1).invoke('show')
                    cy.wrap($e1).click()
                }
            })
            cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').clear().type('BQIPV9280L')
            cy.focused().tab()
            cy.get(':nth-child(7) > .edit__profile_form-item > .edit__profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
            cy.focused().tab()
            cy.get(".Select-placeholder").type('Bangalore')
            cy.wait(4000)
            cy.get(".Select-menu").each(($e1, index, $list) => {

                if ($e1.text() === "Bangalore, India") {

                    cy.wrap($e1).invoke('show')
                    cy.wrap($e1).click()
                }
            })
            cy.get('.PhoneInputInput').clear().type('+18509202901')
            cy.get('.PhoneInputInput').clear().type('8509202901')
            cy.wait(60000)
            cy.get('.continue-btn').click({ force: true })

            cy.request({
                method: 'GET',
                url: cred.URLs,
                auth: {
                    username: accountSid,
                    password: authToken,
                    AuthMethod: 'BasicAuth',
                }
            })
                .its('body').then((res) => {
                    cy.wait(4000) //wait for SMS
                    const otpcode = res.messages[0].body.substring(0, 6)
                    cy.get('.form-group > .form-control').type(otpcode);
                    cy.get('.pt-2 > .continue-btn').click({ force: true })
                    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/investor/preferences2')
                })


        });
    })

it('Verify if all the Fields on the page are mandatory and have an asterisk sign.', function () {
    cy.visit('https://testvillage.letsventure.com/join/investor/preferences2')
    cy.get(':nth-child(1) > :nth-child(1) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title > .text-danger').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title > .text-danger').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title > .text-danger').should('be.visible')
    cy.get('.edit-form-row.w-100 > :nth-child(1) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get('.d-flex > .text-danger').should('be.visible')
})

it('Verify if all the fields have placeholder', function () {

    cy.get('.css-1492t68').invoke('text').then((text) => {
        expect(text.trim()).equal('Select Your Profile');
    })

})

it('Verify if after clicking on the ‘Continue to Personalize Your Profile’ all the Empty fields are showing error msgs and also a toaster to fill in all the mandatory fields.', function () {

    cy.get('.continue-btn').click({ force: true })
    cy.get('.edit-form-react-select > :nth-child(1) > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('This field is required');
    })
    cy.get(':nth-child(2) > .edit__profile_form-radio > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('This field is required');
    })
    //cy.get(':nth-child(3) > .edit__profile_form-radio > .text-danger').invoke('text').then((text) => {
    //expect(text.trim()).equal('This field is required');

    cy.get('.edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('This field is required');
    })
    cy.get(':nth-child(5) > .edit__profile_form-radio > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('This field is required');
    })
    cy.get('.edit-form-row.w-100 > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('This field is required');
    })
    cy.get('.edit__profile_form-checkbox > div.text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('This field is required');
    })
})

it('Verify if the OTP is Expiring after two mins.'
    , function () {

        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        console.log(makeid());

        function emails() {
            var email = "";
            var possible = "abchdjsksbin";
            for (var i = 0; i < 5; i++) {
                email += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return email + '@gmail.com';
        }

        cy.fixture('cred.json').then((cred) => {
            var accountid = cred.accountID
            var token = cred.Token
            var url = cred.URLs
            const accountSid = cred.accountID;
            const authToken = cred.Token;
            cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
            cy.get(':nth-child(1) > .edit__profile_form-item').type('Kira1n0')
            cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type(makeid())
            cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type(emails())
            cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
            cy.get(':nth-child(5) > .edit__profile_form-item > .Select > .Select-control').type('India')
            cy.wait(4000)
            cy.get(".Select-menu").each(($e1, index, $list) => {

                if ($e1.text() === "India") {

                    cy.wrap($e1).invoke('show')
                    cy.wrap($e1).click()
                }
            })
            cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').clear().type('BQIPV9280L')
            cy.focused().tab()
            cy.get(':nth-child(7) > .edit__profile_form-item > .edit__profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
            cy.focused().tab()
            cy.get(".Select-placeholder").type('Bangalore')
            cy.wait(4000)
            cy.get(".Select-menu").each(($e1, index, $list) => {

                if ($e1.text() === "Bangalore, India") {

                    cy.wrap($e1).invoke('show')
                    cy.wrap($e1).click()
                }
            })
            cy.get('.PhoneInputInput').clear().type('+18509202901')
            cy.get('.PhoneInputInput').clear().type('8509202901')
            cy.wait(60000)
            cy.get('.continue-btn').click({ force: true })
            cy.wait(121000)

            cy.request({
                method: 'GET',
                url: cred.URLs,
                auth: {
                    username: accountSid,
                    password: authToken,
                    AuthMethod: 'BasicAuth',
                }
            })
                .its('body').then((res) => {
                    cy.wait(4000) //wait for SMS
                    const otpcode = res.messages[0].body.substring(0, 6)
                    cy.get('.form-group > .form-control').type(otpcode);
                    cy.get('.pt-2 > .continue-btn').click({ force: true })
                    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/investor/preferences2')
                })


        });
    })

it('Verify if the dropdown is falling when the user is clicking on the "Best Describes You".', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences2')
    cy.get('.material-icons').click({ force: true })
    cy.get('.css-11unzgr').should('be.visible')


})

it('Verify if the Options are coming when the user is clicking on the "Best Describes you".', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences2')
    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-0 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('Business Owner');
    });
    cy.get('#react-select-2-option-1 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('Professional');
    });
    cy.get('#react-select-2-option-2 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('VC & PE Professional');
    });
    cy.get('#react-select-2-option-3 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('VC & PE Fund');
    });
    cy.get('#react-select-2-option-4 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('Angel Network');
    });
    cy.get('#react-select-2-option-5 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('Family Office');
    });
    cy.get('#react-select-2-option-6 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('Startup Founder');
    });
    cy.get('#react-select-2-option-7 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('Accelerator/Incubator');
    });
    cy.get('#react-select-2-option-8 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('Student');
    });
    cy.get('#react-select-2-option-9 > div').invoke('text').then((text) => {
        expect(text.trim()).equal('Other');
    });


})

it('Verify if the Radio buttons and check boxes are selectable ', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences2')
    cy.get(':nth-child(2) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    //clicking 'yes' radio button in the 'Have you angel invested before? ' field 
    //How do you invest today, How many angel investment have you made
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(3) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(4) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(5) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(3) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(3) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(3) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(3) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    //clicking 'No' radio button in the 'Have you angel invested before? ' field 
    cy.get(':nth-child(2) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    //How did you hear about LetsVenture? 
    cy.get(':nth-child(5) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(5) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(3) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(5) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    //Help us understand your experience better:
    cy.get(':nth-child(2) > .edit__profile_form-checkbox > .d-flex > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
    cy.get(':nth-child(3) > .edit__profile_form-checkbox > .d-flex > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
    cy.get(':nth-child(4) > .edit__profile_form-checkbox > .d-flex > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
    cy.get(':nth-child(5) > .edit__profile_form-checkbox > .d-flex > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
    cy.get(':nth-child(7) > .edit-form-row > .edit__profile_form-checkbox > .d-flex > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()

})

it('Verify if more questions(2 more) are coming when the user is selecting the yes option in the Have you Angel Invested Before?.', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences2')

    cy.get(':nth-child(2) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(3) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(4) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(5) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(3) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(3) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(3) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(3) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })


})

it('Verify if questions are hiding when the user is selecting NO option in the Have you Angel Invested Before?.', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences2')
    cy.get(':nth-child(2) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
    cy.get(':nth-child(3) > .edit__profile_form-radio > .MuiFormGroup-root').should('not.exist')
    cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(4) > .MuiFormControlLabel-root > .MuiTypography-root').should('not.exist')

})


it('(45) Verify if the user is able to land on the NON SEBI Page if he is select and (46) Verify the Message for NON SEBI Passed user:-"Sorry, you currently do no meet the SEBI AIF criteria to invest in startups" ', function () {

    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    console.log(makeid());

    function emails() {
        var email = "";
        var possible = "abchdjsksbin";
        for (var i = 0; i < 5; i++) {
            email += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return email + '@gmail.com';
    }

    cy.fixture('cred.json').then((cred) => {
        var accountid = cred.accountID
        var token = cred.Token
        var url = cred.URLs
        const accountSid = cred.accountID;
        const authToken = cred.Token;
        cy.visit('https://testvillage.letsventure.com/join/investor/preferences1')
        cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type(makeid())
        cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type(makeid())
        cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type(emails())
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
        cy.get(':nth-child(5) > .edit__profile_form-item > .Select > .Select-control').type('India')
        cy.wait(4000)
        cy.get(".Select-menu").each(($e1, index, $list) => {

            if ($e1.text() === "India") {

                cy.wrap($e1).invoke('show')
                cy.wrap($e1).click()
            }
        })
        cy.get(':nth-child(6) > .edit__profile_form-item > .edit__profile_input').clear().type('BQIPV9280L')
        cy.focused().tab()
        cy.get(':nth-child(7) > .edit__profile_form-item > .edit__profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
        cy.focused().tab()
        cy.get(".Select-placeholder").type('Bangalore')
        cy.wait(4000)
        cy.get(".Select-menu").each(($e1, index, $list) => {

            if ($e1.text() === "Bangalore, India") {

                cy.wrap($e1).invoke('show')
                cy.wrap($e1).click()
            }
        })
        cy.get('.PhoneInputInput').clear().type('+18509202901')
        cy.get('.PhoneInputInput').clear().type('8509202901')
        cy.wait(60000)
        cy.get('.continue-btn').click({ force: true })

        cy.request({
            method: 'GET',
            url: cred.URLs,
            auth: {
                username: accountSid,
                password: authToken,
                AuthMethod: 'BasicAuth',
            }
        })
            .its('body').then((res) => {
                cy.wait(4000) //wait for SMS
                const otpcode = res.messages[0].body.substring(0, 6)
                cy.get('.form-group > .form-control').type(otpcode);
                cy.get('.pt-2 > .continue-btn').click({ force: true })
                cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/investor/preferences2')
            })




        cy.get('.material-icons').click({ force: true })
        cy.get('#react-select-2-option-9 > div').click({ force: true })
        cy.get(':nth-child(2) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
        cy.get('.edit__profile_input').type('10')
        cy.get(':nth-child(4) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
        cy.get(':nth-child(5) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
        cy.get(':nth-child(5) > .edit__profile_form-checkbox > .d-flex > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
        cy.get(':nth-child(7) > .edit-form-row > .edit__profile_form-checkbox > .d-flex > .MuiButtonBase-root > .MuiIconButton-label > .jss4').check()
        cy.get('.continue-btn').click({ force: true })
        cy.get('.modal-body').should('be.visible')

        cy.get('.alert').invoke('text').then((text) => {
            expect(text.trim()).equal('Sorry, you currently do no meet the SEBI AIF criteria to invest in startups');
        });

    })

})

it('(47)(48)Verify if the Questions are same for Below Options which comes when the user clicks on the "Best Describes you" Dropdown', function () {

    cy.visit('https://testvillage.letsventure.com/join/investor/preferences2')
    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-0 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Have you angel invested before? *');
    });
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Do you have assets worth over INR 2 cr apart from your primary residence? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit-form-row.w-100').should('be.visible')
    cy.get(':nth-child(7) > .edit-form-row > .edit__profile_form-checkbox > .d-flex').should('be.visible')
    cy.get('.edit-form-row.w-100 > :nth-child(1) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Help us understand your experience better:*');
    })

    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-1 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Have you angel invested before? *');
    });
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Do you have assets worth over INR 2 cr apart from your primary residence? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit-form-row.w-100').should('be.visible')
    cy.get(':nth-child(7) > .edit-form-row > .edit__profile_form-checkbox > .d-flex').should('be.visible')
    cy.get('.edit-form-row.w-100 > :nth-child(1) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Help us understand your experience better:*');
    })
    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-2 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Have you angel invested before? *');
    });
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Do you have assets worth over INR 2 cr apart from your primary residence? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit-form-row.w-100').should('be.visible')
    cy.get(':nth-child(7) > .edit-form-row > .edit__profile_form-checkbox > .d-flex').should('be.visible')
    cy.get('.edit-form-row.w-100 > :nth-child(1) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Help us understand your experience better:*');
    })


    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-3 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Name of the institution *');
    })
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Designation');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Website');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Do you have assets worth over INR 10 cr? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(6)').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How many angel investments have you made? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(7)').should('be.visible')
    cy.get(':nth-child(7) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(8)').should('be.visible')
    cy.get(':nth-child(8) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit__profile_form-checkbox > .d-flex').should('be.visible')


    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-4 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Name of the institution *');
    })
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Designation');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Website');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Do you have assets worth over INR 10 cr? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(6)').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How many angel investments have you made? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(7)').should('be.visible')
    cy.get(':nth-child(7) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(8)').should('be.visible')
    cy.get(':nth-child(8) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit__profile_form-checkbox > .d-flex').should('be.visible')

    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-5 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Name of the institution *');
    })
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Designation');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Website');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Do you have assets worth over INR 10 cr? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(6)').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Have you angel invested before? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(7)').should('be.visible')
    cy.get(':nth-child(7) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(8)').should('be.visible')
    cy.get(':nth-child(8) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit__profile_form-checkbox > .d-flex').should('be.visible')

    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-6 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Have you angel invested before? *');
    });
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Do you have assets worth over INR 2 cr apart from your primary residence? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit-form-row.w-100').should('be.visible')
    cy.get(':nth-child(7) > .edit-form-row > .edit__profile_form-checkbox > .d-flex').should('be.visible')
    cy.get('.edit-form-row.w-100 > :nth-child(1) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Help us understand your experience better:*');
    })

    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-7 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Name of the institution *');
    })
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Designation');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Website');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How many angel investments have you made? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(6)').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(7)').should('be.visible')
    cy.get(':nth-child(7) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit__profile_form-checkbox > .d-flex').should('be.visible')


    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-8 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Have you angel invested before? *');
    });
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Do you have assets worth over INR 2 cr apart from your primary residence? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit-form-row.w-100').should('be.visible')
    cy.get(':nth-child(7) > .edit-form-row > .edit__profile_form-checkbox > .d-flex').should('be.visible')
    cy.get('.edit-form-row.w-100 > :nth-child(1) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Help us understand your experience better:*');
    })
    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-9 > div').click({ force: true })
    cy.get('form > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Have you angel invested before? *');
    });
    cy.get('form > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('What is your investment budget for the year? (In INR) *');
    })
    cy.get('form > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Do you have assets worth over INR 2 cr apart from your primary residence? *');
    })
    cy.get('form > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('How did you hear about LetsVenture? *');
    })
    cy.get('.edit-form-row.w-100').should('be.visible')
    cy.get(':nth-child(7) > .edit-form-row > .edit__profile_form-checkbox > .d-flex').should('be.visible')
    cy.get('.edit-form-row.w-100 > :nth-child(1) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Help us understand your experience better:*');
    })
})