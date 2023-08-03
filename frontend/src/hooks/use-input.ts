import { ChangeEvent, useReducer } from "react";
import { InputActionType } from "../models/inputAction";
import { InputState } from "../models/inputState.interface";
import { Action } from "../shared/models/action.interface";

const initialInputState: InputState = {
  text: "",
  hasBeenTouched: false,
};

const inputReducer = (state: InputState, action: Action<InputActionType>) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        text: action.value,
      };
    case "BLUR":
      return {
        ...state,
        hasBeenTouched: true,
      };
    case "CLEAR":
      return {
        ...state,
        text: "",
      };
    default:
      return initialInputState;
  }
};

const useInput = (validateValue: (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const isValid = validateValue(inputState.text);
  const hasError = !isValid && inputState.hasBeenTouched;

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "CLEAR" });
  };

  return {
    value: inputState.text,
    isValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
