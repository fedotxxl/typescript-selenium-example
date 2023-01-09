import {ButtonComp, findBy, WebComponent} from "../lib";
import {WebElementPromise} from "selenium-webdriver";
import {PhoneInput} from "../components/PhoneInput";

export class LoginForm extends WebComponent {

    @findBy('span.input-group')
    input$: PhoneInput

    @findBy('button[type=button]')
    submit$: ButtonComp

    constructor(element: WebElementPromise, selector: string) {
        super(element, selector);
    }

}
