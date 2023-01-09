import 'reflect-metadata';
import {By} from "selenium-webdriver";

export const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export function findBy(selector: string, byProvider?: (selector: string) => By) {
    return (target: any, propertyKey: string) => {
        const type = Reflect.getMetadata('design:type', target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                const container = (this as any).element || ((this as any).browser);
                const promise = container.findElement((byProvider || By.css)(selector));

                return new type(promise, selector);
            },
        });
    };
}
