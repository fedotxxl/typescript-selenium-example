import 'reflect-metadata';
import {By} from "selenium-webdriver";

export const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function findBy(
    selector: string,
    config?: {
        by?: (selector: string) => By,
    }
) {
    return (target: any, propertyKey: string) => {
        const type = Reflect.getMetadata('design:type', target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                const container = (this as any).element || ((this as any).browser);
                const promise = container.findElement((config?.by || By.css)(selector));

                return new type(promise, selector);
            },
        });
    };
}

export function findByTestId(selector: string) {
    return findBy(selector, {by: ByTestId})
}

export function ByTestId(testId: string): By {
    return By.css("[data-testid=" + testId + "]")
}