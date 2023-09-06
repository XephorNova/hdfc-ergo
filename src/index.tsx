import ERGO from './ERGO';
import useControlWebView from './hooks/controlWebview';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export { ERGO, useControlWebView };
