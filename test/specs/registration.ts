import * as assert from 'assert';

describe('User', function () {
it('can register', function () {
browser.url('/create_account')
const registrationForm = $('#box-create-account')
registrationForm.$('input=[name="firstname"]').setValue('Test2')
registrationForm.$('input=[name="lastname"]').setValue('Test2')
const countrySelect = registrationForm.$('select[name="country_code"]')
countrySelect.selectByVisibleText('Ukraine')

const email = `test${new Date().getTime() /1000}@test.com`
registrationForm.$('input=[name="email"]').setValue('test@test.com')
registrationForm.$('input=[name="phone"]').setValue('+380444711111')

registrationForm.$('input=[name="pasword"]').setValue(email)
registrationForm.$('input=[name="confirmedPassword"]').setValue(email)

registrationForm.$('button[name="create_account"]').click()

browser.pause(20000)

const alert = $('#notices .alert-success')
assert(alert.isDisplayed(), `Expected success to be visible after registration`)

const alertText = alert.getText()
const expectedText = 'Your customer account has been created'
assert(alertText.includes(expectedText),
     'Alert text: "${alertText}" to match expected "${expectedText}", after successful registration')

})
})