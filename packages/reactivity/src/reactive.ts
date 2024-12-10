import { reactivehandlers } from "./baseHandlers";
import { ReactiveFlags } from "./constants";

const reactiveMap = new WeakMap();
export const isReadonly = (target: any): boolean =>
  !!(target && target[ReactiveFlags.IS_READONLY]);
export const reactive = (target: object): any => {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, reactivehandlers, reactiveMap);
};

const createReactiveObject = (
  target: object,
  isReadonly: boolean,
  handlers: any,
  proxyMap: WeakMap<object, any>
): any => {
  if (isReadonly) {
    return target;
  }
  const proxy = new Proxy(target, handlers);
  proxyMap.set(target, proxy);
  return proxy;
};
