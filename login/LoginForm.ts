import {ButtonComp, ByTestId, findBy, findByTestId, WebComponent} from "../lib";
import {By, WebElementPromise} from "selenium-webdriver";
import {PhoneInput} from "../components/PhoneInput";

export class LoginForm extends WebComponent {

    @findBy('span.input-group')
    input$: PhoneInput

    // @findBy('button[type=button]')
    // submit$: ButtonComp

    // @findBy('[data-testid=LoginFormContent_button]')
    // submit$: ButtonComp

    // @findBy('LoginFormContent_button', {by: ByTestId})
    // submit$: ButtonComp

    @findByTestId('LoginFormContent_button')
    submit$: ButtonComp

    constructor(element: WebElementPromise, selector: string) {
        super(element, selector);
    }

}
