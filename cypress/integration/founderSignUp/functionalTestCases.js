
it('Verify if the signup button is taking the user to sign up page', function () {

    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/startup')

})

it('Verify if the user can see options to sign up on the platform as an Investor and also Startup.', function () {

    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.investor-text-uppercase').should('be.visible')
    cy.get('.startup-text-uppercase').should('be.visible')
    cy.get('.investor-signup-btn').should('be.visible')
    cy.get('.startup-signup-btn').should('be.visible')
    cy.get('.investor-signup-btn > .btn-lable').should('be.visible')
    cy.get('.startup-signup-btn > .btn-lable').should('be.visible')

})

it('Verify if the sign up as Investor button is taking the user to the Lets Build Together page where the user can see the Information about how the platform works.', function () {

    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/startup')
    cy.get('.font-weight-bold').should('be.visible')
    cy.get('.col-md-18').should('be.visible')
    cy.get('.welcome-content').should('be.visible')
    cy.get('.signup-btn').should('be.visible')
    cy.get('.my-3').should('be.visible')

})

it('Verify if the Information provided on the Lets Build Together page is proper and readable.', function () {

    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/startup')
    cy.get('.font-weight-bold').invoke('text').then((text) => {
        expect(text.trim()).equal('Thank you for choosing LetsVenture as a partner in your journey towards raising funds for your startup.');
    })

    cy.get('.col-sm-22').invoke('text').then((text) => {
        expect(text.trim()).equal("LetsVenture uses the SEBI-registered Angel Fund AIF structure so all your investors can come in as one entity on the cap table. If you have some external investors already they can be easily grouped here as well.LetsVenture is a sector agnostic platformWe invest across POC/Beta/Early Stage startups and our ticket sizes range from $100,000 to $1MAs an LV Portfolio Startup you will get access to strategic next round investors, access to capital and mentorship from founder-investors, business connects and access to our LV Startup Kit which will assist you to scale your startup."
        );
    })

    cy.get('.my-3').invoke('text').then((text) => {
        expect(text.trim()).equal("To begin your journey we request you to fill the form which should take you around 2-3 minutes to complete.")
    })
})

it('Verify if the Lets Build Together button is taking the user to the Personal Details page.', function () {

    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/startup')
    cy.get('.signup-btn').click({ force: true })
    cy.url().should('be.equal', 'https://testvillage.letsventure.com/join/startup')
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').should('be.visible')

})

it('Verify if all the Fields on the page are mandatory and have an asterisk sign except Referred by.', function () {
    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn').click({ force: true })
    cy.get('.signup-btn').click({ force: true })
    cy.get('.row > :nth-child(1) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get('.text-danger').should('be.visible')
    cy.get(':nth-child(4) > :nth-child(1) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title > .text-mandatory').should('be.visible')

})
it('Verify if all the fields have a placeholder.', function () {
    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn').click({ force: true })
    cy.get('.signup-btn').click({ force: true })
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').invoke('attr', 'placeholder').should('contain', 'Enter your name')
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').invoke('attr', 'placeholder').should('contain', 'Enter email id')
    cy.get('.PhoneInputInput').invoke('attr', 'placeholder').should('contain', 'Enter phone number')
    cy.get(':nth-child(5) > .edit__profile_form-item > .edit__profile_input').invoke('attr', 'placeholder').should('contain', 'Enter linkedin URL')
    cy.get('.css-1hwfws3').invoke('text').then((text) => {
        expect(text.trim()).equal('Referred by');
    })

})
it('Verify if after clicking on the ‘Continue to Startup Details’ all the Empty fields are showing error msgs and also a toaster to fill in all the mandatory fields.', function () {
    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn').click({ force: true })
    cy.get('.signup-btn').click({ force: true })
    cy.get('.continue-btn').click({ force: true })
    cy.get('.edit__profile_form-radio > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Gender is required');
    })

})
it('Verify if the Your name cant be left empty.', function () {
    cy.visit('https://testvillage.letsventure.com/join')
    cy.get('.startup-signup-btn').click({ force: true })
    cy.get('.signup-btn').click({ force: true })
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type(`{enter}`)
    cy.focused().tab()
    cy.get('.edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Name is required');
    })
})
//Verify if the Email field is giving an error msg when the user is giving the wrong email id.
const emails = (val) => {
    var email = "";
    var possible = "abcd@.gh";
    for (var i = 0; i < val; i++) {
        email += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return email;
}


const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return re.test(email);
}

for (let index = 0; index < 10; index++) {
    const TestEmail = emails(10)
    const EmailState = validateEmail(TestEmail)
    it("EmailTest -" + TestEmail + " - " + EmailState, () => {
        cy.visit('https://testvillage.letsventure.com/join')
        cy.get('.startup-signup-btn').click({ force: true })
        cy.get('.signup-btn').click({ force: true })
        cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type(TestEmail)
        cy.focused().tab();
        if (!EmailState) {
            cy.get('.edit__profile_form-item > .text-danger').should('be.visible');

        } else {
            cy.get('.edit__profile_form-item > .text-danger').should('not.be.visible');
        }
    })
}


it('Verify if the user is selecting the any of the option in the Referred by section the Referrer name field is coming.', function () {
    cy.visit('https://testvillage.letsventure.com/join/startup')
    cy.get('.signup-btn').click({ force: true })
    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-0 > div').click({ force: true })
    cy.get('.css-1hwfws3').invoke('text').then((text) => {
        expect(text.trim()).equal('LV Team Member');
    })

})

it('Verify if the User is able to enter the referrer name in the field. ', function () {
    cy.visit('https://testvillage.letsventure.com/join/startup')
    cy.get('.signup-btn').click({ force: true })
    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-0 > div').click({ force: true })
    cy.get('.css-1hwfws3').invoke('text').then((text) => {
        expect(text.trim()).equal('LV Team Member');
    })
    cy.get(':nth-child(7) > .edit__profile_form-item > .edit__profile_input').type('Kiran')

})


it('Verify if the Are you a Single Founder Radio button is selectable and the user can select only one at a time.', function () {

    cy.get(':nth-child(8) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(8) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').should('not.be.checked')
    cy.get(':nth-child(8) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(8) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').should('not.be.checked')

})


it('Verify if the user is able to see no other option when the user is selecting the yes option in the  Are you a Single Founder', function () {

    cy.get(':nth-child(8) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(8) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').should('not.be.checked')
    cy.get(':nth-child(9) > .edit__profile_label-title').should('not.exist')
    cy.get(':nth-child(10) > .edit__profile_label-title').should('not.exist')
    cy.get(':nth-child(11) > .edit__profile_label-title').should('not.exist')
    cy.get('.row > :nth-child(12)').should('not.exist')
})

it('Verify if the question are coming when the user is selecting the NO in the Are you a single founder', function () {

    cy.get(':nth-child(8) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(8) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').should('not.be.checked')
    cy.get(':nth-child(9) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Second founder name *');
    })
    cy.get(':nth-child(11) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Second founder linkedin URL *');
    })
    cy.get(':nth-child(12) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Second founder Gender *');
    })
    cy.get(':nth-child(10) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Second founder email ID *');
    })
})




it('Verify if All the fields are mandatory for the second founder.', function () {

    cy.get(':nth-child(9) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(10) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(11) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(12) > .edit__profile_label-title > .text-danger').should('be.visible')
})

it('Verify if all the fields for second founder have place holder.', function () {

    cy.get(':nth-child(9) > .edit__profile_form-item > .edit__profile_input').invoke('attr', 'placeholder').should('contain', 'Name of the second founder')
    cy.get(':nth-child(10) > .edit__profile_form-item > .edit__profile_input').invoke('attr', 'placeholder').should('contain', 'Email of the second founder')
    cy.get(':nth-child(11) > .edit__profile_form-item > .edit__profile_input').invoke('attr', 'placeholder').should('contain', 'Enter the linkedin URL for second founder')
})


it('Verify if the Second Fonder name cant be left empty.', function () {

    cy.get(':nth-child(9) > .edit__profile_form-item > .edit__profile_input').click({ force: true })
    cy.get(':nth-child(10) > .edit__profile_form-item > .edit__profile_input').click({ force: true })
    cy.focused().tab()
    cy.wait(1000)
    cy.get(':nth-child(9) > .edit__profile_form-item > .text-danger').should('be.visible')
})

it('Verify if the Second Fonder name Email field is giving an error msg when the user is giving the wrong email id.', function () {

    cy.get(':nth-child(10) > .edit__profile_form-item > .edit__profile_input').type('abc')
    cy.get(':nth-child(9) > .edit__profile_form-item > .edit__profile_input').click({ force: true })

    cy.get(':nth-child(10) > .edit__profile_form-item > .text-danger').should('be.visible')

})


it('Verify if the Second Fonder name Gender Radio button is selectable and the user can select only one at a time.', function () {

    cy.get(':nth-child(12) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(12) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').should('not.be.checked')
    cy.get(':nth-child(12) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(2) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get(':nth-child(12) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').should('not.be.checked')
})

it('Verify if the Second Fonder name Linkedin field is taking a valid LinkedIn URL and giving an error msg when the LinkedIn URL is wrong.', function () {

    cy.get(':nth-child(11) > .edit__profile_form-item > .edit__profile_input').type('https://www.')
    cy.get(':nth-child(11) > .edit__profile_form-item > .text-danger').should('be.visible')
    cy.wait(1000)
    cy.get(':nth-child(11) > .edit__profile_form-item > .edit__profile_input').type('linkedin.com/in/kiran-deshmukhmath-a8ab86193/')


})


it('Verify if after filling all the fields are user is able to proceed to next page "Startup Details", Verify if all the fields are mandatory in the Startup details page, Verify if all the fields have place holder in the Startup details page , Verify if the Name of the Startup cant be left empty, .', function () {

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

    cy.visit('https://testvillage.letsventure.com/join/startup')
    cy.get('.signup-btn').click({ force: true })
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type(makeid())
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type(emails())
    cy.get(':nth-child(3) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get('.PhoneInputInput').type('+18509202901')
    cy.get('.PhoneInputInput').type('8509202901')
    cy.get(':nth-child(5) > .edit__profile_form-item > .edit__profile_input').type('linkedin.com/in/kiran-deshmukhmath-a8ab86193/')
    cy.get('.material-icons').click({ force: true })
    cy.get('#react-select-2-option-0 > div').click({ force: true })
    cy.get(':nth-child(7) > .edit__profile_form-item > .edit__profile_input').type(makeid())
    cy.get(':nth-child(8) > .edit__profile_form-radio > .MuiFormGroup-root > :nth-child(1) > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4').click({ force: true })
    cy.get('.continue-btn').click({ force: true })
    cy.get(':nth-child(1) > .edit__profile_label-title').invoke('text').then((text) => {
        expect(text.trim()).equal('Name of Startup *');
    })

    //Verify if all the fields are mandatory in the Startup details page
    cy.get(':nth-child(1) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(2) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(3) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(4) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(5) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(7) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(8) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    cy.get(':nth-child(9) > .edit__profile_label-title > .text-mandatory').should('be.visible')

    //Verify if all the fields have place holder in the Startup details page
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').invoke('attr', 'placeholder').should('contain', 'Enter the name of your Startup')
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').invoke('attr', 'placeholder').should('contain', 'Enter the registered name of your startup')
    cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').invoke('attr', 'placeholder').should('contain', 'Enter website URL')
    cy.get(':nth-child(4) > .edit-form-react-select > :nth-child(1) > .css-10nd86i > .css-ncr59z > .css-1hwfws3 > .css-1492t68').invoke('text').then((text) => {
        expect(text.trim()).equal('Select Sectors');
    })
    cy.get(':nth-child(5) > .edit-form-react-select > :nth-child(1) > .css-10nd86i > .css-ncr59z > .css-1hwfws3 > .css-1492t68').invoke('text').then((text) => {
        expect(text.trim()).equal('Select stage');
    })

    cy.get('.react-datepicker-my').invoke('attr', 'placeholder').should('contain', 'MM/YYY')
    cy.get(':nth-child(7) > .edit-form-react-select > :nth-child(1) > .css-10nd86i > .css-ncr59z > .css-1hwfws3 > .css-1492t68').invoke('text').then((text) => {
        expect(text.trim()).equal('Select city');
    })

    cy.get('.edit-textarea').invoke('attr', 'placeholder').should('contain', 'Enter details here')

    //Verify if the Name of the Startup can't be left empty.
    cy.wait(5000)
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').click({ force: true })
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').click({ force: true })
    cy.get('.edit__profile_form-item > .text-danger').should('be.visible')


    //Verify if the Registered Name of the Startup can't be left empty.
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').click({ force: true })
    cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').click({ force: true })

    //Verify if the Startup Website URL can't be left empty.
    //cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').click({ force: true })
    cy.get(':nth-child(4) > .edit-form-react-select > :nth-child(1) > .css-10nd86i > .css-ncr59z > .css-1wy0on6 > .css-1ep9fjw > .material-icons').click({ force: true })
    cy.get(':nth-child(3) > .edit__profile_form-item > .text-danger').invoke('text').then((text) => {
        expect(text.trim()).equal('Startup Website url is required');
    })

    //Verify if the dropdown is falling when the user is clicking on the Sector of the Startup field.
    cy.get('#react-select-3-option-1 > div').should('be.visible')
    cy.get('#react-select-3-option-0 > div').should('be.visible')
    cy.get('#react-select-3-option-6 > div').should('be.visible')
    //Verify if the user can type the sectors and also find the sector with the typed initials 
    cy.get('.css-150cv2z > .css-1hwfws3').type('Accounting')
    cy.wait(3000)
    cy.get(".css-11unzgr").each(($e1, index, $list) => {
        //Verify if the Options are selectable in the dropdown.
        if ($e1.text() === "Accounting") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    //Verify if the particular Options are hiding when the user is clicking on the cross button next to selected sectors.

    cy.get('.css-1q05en1 > div > .material-icons').click({ force: true })
    cy.get('.css-150cv2z > .css-1hwfws3').should('not.have.value', 'Accounting')

    //Verify if the all Options are hiding when the user is clicking on the cross button in the sector field.
    cy.get('.css-11unzgr').should('not.exist')

    //Verify if option is not available then user can see "no option" tag.

    cy.get('.css-150cv2z > .css-1hwfws3').type('Annnn')
    cy.get('.css-1gl4k7y').invoke('text').then((text) => {
        expect(text.trim()).equal('No Options');
    })
    //Verify if the option in the dropdown are scrollable.
    cy.get('.css-150cv2z > .css-1hwfws3').type('A')
    cy.wait(3000)
    cy.get('.css-11unzgr').scrollTo('bottom')

    //Verify if the dropdown is falling when the user is clicking on the Stage of the Startup field.

    cy.get(':nth-child(5) > .edit-form-react-select > :nth-child(1) > .css-10nd86i > .css-ncr59z > .css-1wy0on6 > .css-1ep9fjw > .material-icons').click({ force: true })
    cy.get('.css-11unzgr').should('be.visible')

    //Verify if the user can type the Stage and also find the Stage with the typed initials 
    cy.get('.css-150cv2z > .css-1hwfws3').type('I')
    cy.wait(3000)
    cy.get(".css-11unzgr").each(($e1, index, $list) => {

        if ($e1.text() === "Idea Stage") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })

    //Verify if the selected option is hiding if the user is selecting the other option in the dropdown

    cy.get('.css-150cv2z > .css-1hwfws3').type('Beta Launched')
    cy.wait(3000)
    cy.get(".css-11unzgr").each(($e1, index, $list) => {

        if ($e1.text() === "Beta Lauched") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.wait(4000)
    cy.get(".css-11unzgr").should('not.have.value', 'Beta Launched')
    //Verify if the Options are selectable in the dropdown.
    cy.get('.css-150cv2z > .css-1hwfws3').clear().type('B')
    cy.wait(3000)
    cy.get('#react-select-4-option-2').each(($e1, index, $list) => {

        if ($e1.text() === "Beta Lauched") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click({ force: true })
        }
    })
    cy.wait(4000)
    cy.get('#react-select-4-option-2').click({ force: true })
    cy.get(".css-150cv2z > .css-1hwfws3").invoke('text').then((text) => {
        expect(text.trim()).equal('Beta Launched');
    })
    //Verify if the text field is coming if the user is selecting the option other than the idea stage in the stage of startup question.
    cy.get(':nth-child(7) > .edit__profile_form-textarea > .edit-textarea-wrapper > .edit-textarea').should('be.visible')
    cy.get(':nth-child(10) > .edit__profile_form-textarea > .edit-textarea-wrapper > .edit-textarea').should('be.visible')
    //verify if the traction text box is also mandatory.
    cy.get(':nth-child(7) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    //Verify if the user can fill the traction
    cy.get(':nth-child(7) > .edit__profile_form-textarea > .edit-textarea-wrapper > .edit-textarea').type('abcdefghijk')
    //Verify if it is taking only 100 characters.
    cy.get(':nth-child(7) > .edit__profile_form-textarea > .edit-textarea-wrapper > .edit-textarea').clear().type('jnA9X5sOxZJ4a2zJFFMp0KtxlfOi36ES38pMKNkYXanPbXevLBepx5pSYdusS4yTQGUKreQEcUwIYULIRgIhNhtHqWjPBkeoKMml1234567890103209382181208184028870128')
    cy.get('.edit-textarea-wrapper').invoke('text').then((text) => {
        expect(text.trim()).equal('jnA9X5sOxZJ4a2zJFFMp0KtxlfOi36ES38pMKNkYXanPbXevLBepx5pSYdusS4yTQGUKreQEcUwIYULIRgIhNhtHqWjPBkeoKMml0 Characters  100 Characters');
    })

    //Verify if the founding date field can't be left empty
    cy.get('.react-datepicker-my').should('be.visible')
    cy.get(':nth-child(6) > .edit__profile_label-title > .text-mandatory').should('be.visible')

    //verify if the user is able to select date in the calendar 
    cy.get('.react-datepicker-my').type('06/2022')
    cy.wait(3000)
    cy.get('.react-datepicker').each(($e1, index, $list) => {

        if ($e1.text() === "06/2022") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click({ force: true })
        }
    })
    //Verify if the user is able to select previous date in the calendar 
    cy.get('.react-datepicker-my').clear().type('05/2022')
    cy.wait(3000)
    cy.get('.react-datepicker').each(($e1, index, $list) => {

        if ($e1.text() === "05/2022") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click({ force: true })
        }
    })
    //Verify if the ‘type to search’ is falling when the user is clicking on the ‘city’ field.
    cy.get(':nth-child(8) > .edit-form-react-select > :nth-child(1) > .css-10nd86i > .css-ncr59z > .css-1wy0on6 > .css-1ep9fjw > .material-icons').click({ force: true })
    cy.get('.css-11unzgr').should('be.visible')
    //Verify if the city is coming below with the typed initial letter when the user starts typing.
    cy.get('.css-150cv2z > .css-1hwfws3').type('A')
    cy.wait(3000)
    cy.get("#react-select-5-option-0").each(($e1, index, $list) => {

        if ($e1.text() === "Abohar") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    //Verify if the city coming below is selectable.
    cy.get('.css-150cv2z > .css-1hwfws3').type('Adilabad')
    cy.wait(3000)
    cy.get("#react-select-5-option-1").each(($e1, index, $list) => {

        if ($e1.text() === "Adilabad") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    //Verify if the options in the Dropdown are scrollable.
    cy.get('.css-150cv2z > .css-1hwfws3').type('A')
    cy.wait(3000)
    cy.get('.css-11unzgr').scrollTo('bottom')
    //verify if the tell us what you are building is also mandatory.
    cy.get(':nth-child(10) > .edit__profile_label-title > .text-mandatory').should('be.visible')
    //Verify if the user can fill the tell us what you are building
    cy.get(':nth-child(10) > .edit__profile_form-textarea > .edit-textarea-wrapper > .edit-textarea').type('abcdef', { force: true })
    //Verify if tell us what you are building is taking only 100 characters.
    cy.get(':nth-child(10) > .edit__profile_form-textarea > .edit-textarea-wrapper > .edit-textarea').clear().type('jnA9X5sOxZJ4a2zJFFMp0KtxlfOi36ES38pMKNkYXanPbXevLBepx5pSYdusS4yTQGUKreQEcUwIYULIRgIhNhtHqWjPBkeoKMml1234567890103209382181208184028870128', { force: true })
    cy.get('.edit-textarea-wrapper').invoke('text').then((text) => {
        expect(text.trim()).equal('jnA9X5sOxZJ4a2zJFFMp0KtxlfOi36ES38pMKNkYXanPbXevLBepx5pSYdusS4yTQGUKreQEcUwIYULIRgIhNhtHqWjPBkeoKMml0 Characters  jnA9X5sOxZJ4a2zJFFMp0KtxlfOi36ES38pMKNkYXanPbXevLBepx5pSYdusS4yTQGUKreQEcUwIYULIRgIhNhtHqWjPBkeoKMml0 Characters');
    })
        /
        //Verify if option is not available then user can see "no option" tag.
        cy.get(':nth-child(5) > .edit-form-react-select > :nth-child(1) > .css-10nd86i > .css-ncr59z > .css-1hwfws3').type('Annnn')
    cy.get('.css-1gl4k7y').invoke('text').then((text) => {
        expect(text.trim()).equal('No Options');
    })

    //Verify if the user is not able to proceed further if the captcha is not checked.
    cy.get('.continue-btn').click({ force: true })
    cy.get('.text-danger').should('be.visible')
    //Verify if after filling all the field the user is able to land on thank you page. 
    cy.get(':nth-child(1) > .edit__profile_form-item > .edit__profile_input').type('nykaa')
    cy.get(':nth-child(2) > .edit__profile_form-item > .edit__profile_input').type('nykaa')
    cy.get(':nth-child(3) > .edit__profile_form-item > .edit__profile_input').type('https://www.linkedin.com/in/annvin-vincent-076731196/')
    cy.get(':nth-child(4) > .edit-form-react-select > :nth-child(1) > .css-10nd86i > .css-ncr59z > .css-1wy0on6 > .css-1ep9fjw > .material-icons').click({ force: true })
    cy.get('.css-1492t68').type('Accounting')
    cy.wait(3000)
    cy.get("#react-select-3-option-0").each(($e1, index, $list) => {

        if ($e1.text() === "Accounting") {

            cy.wrap($e1).invoke('show')
            cy.wrap($e1).click()
        }
    })
    cy.contains('Upload').click()
    cy.get('input[type=file]').selectFile('cypress/fixtures/pg4-sample-conference-paper.pdf', { force: true })
    cy.wait(50000)
    cy.get('.continue-btn').click({ force: true })

    //Verify if after filling all the field the user is able to land on thank you page. 
    cy.wait(20000)
    cy.get('.welcome_content_container').should('be.visible')
    //Verify the text on the Thank you page is proper.
    cy.get('.col-md-24').should('be.visible')


})


