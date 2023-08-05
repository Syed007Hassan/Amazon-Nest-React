import { LengthOptions } from "./options/length";

export const validateLength = (
  text: string,
  options: LengthOptions
): boolean => {
  const textLength = text.trim().length;

  if (options && options.min && textLength < options.min) {
    return false;
  }
  if (options && options.max && textLength > options.max) {
    return false;
  }

  return true;
};

export const validateNameLength = (name: string): boolean => {
  return validateLength(name, { min: 2, max: 20 });
};

export const validatePasswordLength = (password: string): boolean => {
  return validateLength(password, { min: 6, max: 20 });
};
