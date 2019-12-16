export class BasePage{
    private path:string

    constructor(path:string){
        this.path=path;
    }

    public open() {
            browser.url(this.path);
        }
}