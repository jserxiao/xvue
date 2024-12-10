export const isObject = (obj: unknown): boolean =>
  Object.prototype.toString.call(obj) === "[object Object]";
