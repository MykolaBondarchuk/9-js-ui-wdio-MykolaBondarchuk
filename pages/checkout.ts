import { CheckOutPage } from "../test/specs/checkout"
import { BasePage } from "./base"

export class CheckoutPage extends BasePage {
    open() {
       super.open('/checkout')
    }
}
 

export const Checkout = new CheckoutPage()