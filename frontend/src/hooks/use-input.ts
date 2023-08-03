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
