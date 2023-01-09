import {Browser, elementIsVisible, findBy, Page, WaitCondition} from '../lib';
import {LoginForm} from "./LoginForm";
import {config} from "../config";

export class LoginPage extends Page {

    @findBy('form')
    form$: LoginForm;

    constructor(browser: Browser) {
        super(browser);
        this.setUrl(`${config.baseUrl}/login`);
    }

    loadCondition(): WaitCondition {
        return elementIsVisible(() => this.form$);
    }

}
