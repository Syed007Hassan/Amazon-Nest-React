export const INPUT_ACTION_CHANGE = "CHANGE";
export const INPUT_ACTION_CLEAR = "CLEAR";
export const INPUT_ACTION_BLUR = "BLUR";

export type InputActionType =
  | typeof INPUT_ACTION_CHANGE
  | typeof INPUT_ACTION_CLEAR
  | typeof INPUT_ACTION_BLUR;
