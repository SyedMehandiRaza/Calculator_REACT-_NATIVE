import { OPERATORS } from "../constants/Button"

export const calculateResult = (input) => {
  if (!input) return "";

  try {
    const lastChar = input[input.length - 1];

    if (OPERATORS.includes(lastChar)) {
      return "Error";
    }

    for (let i = 0; i < input.length - 1; i++) {
      if (
        OPERATORS.includes(input[i]) &&
        OPERATORS.includes(input[i + 1])
      ) {
        return "Error";
      }
    }
    const cleanedInput = input.replace(/\b0+(\d)/g, "$1");
    const result = eval(cleanedInput);
    return result.toString();
  } catch (error) {
    return "Error";
  }
};