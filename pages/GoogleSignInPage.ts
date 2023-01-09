import { TextInput, ButtonComp, Browser, Page, findBy, elementIsVisible, pageHasLoaded } from '../lib';
import { HomePage } from './';
import config from '../config';

export class GoogleSignInPage extends Page {
  constructor(browser: Browser) {
    super(browser);
  }

  @findBy('#identifierId')
  public Email: TextInput;

  @findBy('#identifierNext')
  public ConfirmEmail: ButtonComp;

  @findBy('input[type="password"]')
  public Password: TextInput;

  @findBy('#passwordNext')
  public ConfirmPassword: ButtonComp;

  public loadCondition() {
    return elementIsVisible(() => this.Email);
  }

  public async signInAsDarthVader() {
    return this.signInAs('darthvader.fider@gmail.com', process.env.DARTHVADER_PASSWORD!);
  }

  public async signInAs(email: string, password: string) {
    await this.Email.type(email);
    await this.ConfirmEmail.click();
    await this.browser.wait(elementIsVisible(() => this.Password));
    await this.Password.type(password);
    await this.ConfirmPassword.click();
    await this.browser.wait(pageHasLoaded(HomePage));
  }
}
