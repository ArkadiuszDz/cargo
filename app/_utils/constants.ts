export enum ResponseCodes {
  NotFound = 404
};

export const VALUE_IN_PARENTHESES_REGEX = /\(([^()]*)\)/g;

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/ships';