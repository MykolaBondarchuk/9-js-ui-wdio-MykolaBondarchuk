
import { expect } from 'chai'
import { ProductDetails } from '../../pages/productsDetailes';
import { Checkout } from '../../pages/checkout';

describe('Cart', function () {

    it('can add item', function () {
        ProductDetails.open('/rubber-ducks-c-1/red-duck-p-3')
        ProductDetails.addToCart()
        Checkout.open()
    })

    
})

export class CheckOutPage extends BasePage {
    // private path:string = '/checkout';
    constructor(path:string){ 
        super(path);
    }

    public open();

        // super();

}


export const checkout = new CheckOutPage()