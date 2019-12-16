export class ProductDetails {
    private path:string = '/ProductDetails';
    

    public open() {
        browser.url(this.path);
    }
}


// export const ProductDetails = new ProductDetailsPage()