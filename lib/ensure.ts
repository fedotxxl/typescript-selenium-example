import { WebElementPromise } from 'selenium-webdriver';
import { WebComponent, ButtonComp, TextInput } from './';

class WebComponentEnsurer {
  constructor(private component: WebComponent) {
  }

  public async textIs(expected: string) {
    const text = await this.component.getText();

    if (expected.trim() !== text.trim()) {
      throw new Error(`Element ${this.component.selector} text is '${text}'. Expected value is '${expected}'`);
    }
  }

  public async isVisible() {
    if (!await this.component.isDisplayed()) {
      throw new Error(`Element ${this.component.selector} is visible`);
    }
  }

  public async isNotVisible() {
    if (await this.component.isDisplayed()) {
      throw new Error(`Element ${this.component.selector} is visible`);
    }
  }
}

class ButtonEnsurer extends WebComponentEnsurer {
  protected button: ButtonComp;
  constructor(button: ButtonComp) {
    super(button);
    this.button = button;
  }

  public async isNotDisabled() {
    if (await this.button.isDisabled()) {
      throw new Error(`Button ${this.button.selector} is disabled`);
    }
  }
}

class TextInputEnsurer extends WebComponentEnsurer {
  constructor(element: TextInput) {
    super(element);
  }
}

export function ensure(component: ButtonComp): ButtonEnsurer;
export function ensure(component: TextInput): TextInputEnsurer;
export function ensure(component: WebComponent): WebComponentEnsurer;
export function ensure(component: WebComponent | ButtonComp): any {
    if (component instanceof ButtonComp) {
        return new ButtonEnsurer(component);
    } else if (component instanceof WebComponent) {
        return new WebComponentEnsurer(component);
    }
}
