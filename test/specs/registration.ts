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
       


       browser.debug();

    })
})