// using literal strings instead of numbers so that it's easier to inspect
// debugger events

export enum TrackOpTypes {
  GET = "get",
  HAS = "has",
  ITERATE = "iterate"
}

export enum TriggerOpTypes {
  SET = "set",
  ADD = "add",
  DELETE = "delete",
  CLEAR = "clear"
}

export enum ReactiveFlags {
  SKIP = "__x_skip",
  IS_REACTIVE = "__x_isReactive",
  IS_READONLY = "__x_isReadonly",
  IS_SHALLOW = "__x_isShallow",
  RAW = "__x_raw",
  IS_REF = "__x_isRef"
}
