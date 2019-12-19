import * as faker from 'faker';

import * as assert from 'assert';

describe('User', function() {
    it('can register', function() {
       browser.url(`/create_account`)
       $('input[name="firstname"]').setValue('Test')
       $('input[name="lastname"]').setValue('Test')
       const countrySelect = $('select[name="country_code"]')
       countrySelect.selectByVisibleText('Ukraine')

       const randomEmail = faker.internet.email();
       const phone = faker.phone.phoneNumberFormat();
       console.log(phone);

       $(".row input[name='email']").setValue(randomEmail)
       $('input[name="phone"]').setValue(phone)
       $(".row input[name='password']").setValue(randomEmail)
       $('input[name="confirmed_password"]').setValue(randomEmail)
       $("button[name='create_account']").click()

       browser.pause(2000)

       const alert = $('#notices .alert-success')

       assert(alert.isDisplayed(), `Expected success alert`)

       const alertText = alert.getText()
       const expectedText = 'Your customer account has been created.'
       assert(alertText.includes(expectedText),
        `Alert text "${alertText}" to match: "${expectedText}" because it is understandable`); 
    
    })

    

it.only('Can contact us', function() {
        browser.url(`/customer-service-s-0`)

        const emailForContact = faker.internet.email();
        $('input[name="name"]').setValue(emailForContact)
        $("[name='contact_form'] [name='email']").setValue(emailForContact)
        $('input[name="subject"]').setValue(emailForContact)
        $('textarea[name="message"]').setValue('test')
        $('button[name="send"]').click()
        browser.pause(3000)

        const alert = $('div[class="alert alert-success"]');

        assert(alert.isDisplayed(), `Expected success alert`)

        const alertText = alert.getText()
        const expectedText = `Your email has successfully been sent`
        assert(alertText.includes(expectedText),
        `Alert text "${alertText}" to match: "${expectedText}" because it is clear`);

    })


})
    