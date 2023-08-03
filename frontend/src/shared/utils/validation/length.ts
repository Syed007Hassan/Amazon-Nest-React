import { LengthOptions } from "./options/length";

export const validateLength = (
  text: string,
  options: LengthOptions
): boolean => {
  const textLength = text.trim().length;

  if (options.min && options.max) {
    return textLength >= options.min && textLength <= options.max;
  } else if (options.min) {
    return textLength >= options.min;
  } else if (options.max) {
    return textLength <= options.max;
  } else {
    return true;
  }
};
