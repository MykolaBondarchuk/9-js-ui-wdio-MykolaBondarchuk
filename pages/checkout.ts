import { BasePage } from "./base";

export class CheckOutPage extends BasePage {
    // private path:string = '/checkout';
    constructor(path:string){
        super(path);
    }

    public open();

        // super();

}


export const checkout = new CheckOutPage()