import { VALUE_IN_PARENTHESES_REGEX } from "./constants";

export const extractSubstring = (text: string, regex: RegExp) => {
  if (typeof text !== 'string' || !(regex instanceof RegExp)) {
    return '';
  }
  return text.match(regex);
};


export const getCountryOfOrigin = (shipowner: string) => {
  let result = '';
  const substring = extractSubstring(shipowner, VALUE_IN_PARENTHESES_REGEX);

  if (substring) {
    result = substring[0].replace(/[()]/gi, '');
  }
  return result;
};
