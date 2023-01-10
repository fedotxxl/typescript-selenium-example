import { ISuiteCallbackContext } from 'mocha';

export const specification = (name: string, callback: (this: ISuiteCallbackContext) => void) => {
  return describe(`Specification: ${name}`, callback);
};

export const when = (condition: string, callback: () => void) => {
 return callback();
};

export const then = (condition: string, callback: () => void) => {
 return callback()
};

export const action = before;
