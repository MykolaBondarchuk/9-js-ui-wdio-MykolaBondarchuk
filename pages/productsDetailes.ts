import { BasePage } from "./base";

export class ProductDetailsPage extends BasePage {
   
    addToCart() {
        $('button[name="add_cart_product"]').click()
        browser.pause(3000);
    }
}

export const ProductDetails = new ProductDetailsPage()

// export const ProductDetails = new ProductDetailsPage()