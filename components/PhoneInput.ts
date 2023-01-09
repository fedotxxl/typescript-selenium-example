import {findBy, TextInput, WebComponent} from "../lib";
import {WebElementPromise} from "selenium-webdriver";

export class PhoneInput extends WebComponent {

    @findBy('input.form-control')
    public input$: TextInput;

    constructor(element: WebElementPromise, selector: string) {
        super(element, selector);
    }

    async typePhone(phone: string) {
        await this.input$.type(phone)
    }

}
