import { getCountryOfOrigin } from '../app/_utils/helpers.ts';

describe('Testing the function for extracting country name', () => {
  it('should return country name', () => {
    const country = getCountryOfOrigin("OOCL (Hong Kong)");
    expect(country).toBe("Hong Kong");
  });

  it('should return an empty string', () => {
    const country = getCountryOfOrigin("Mitsui O.S.K. Lines");
    expect(country).toBe("");
  });

  it('should return an empty string when no input value is provided', () => {
    const country = getCountryOfOrigin();
    expect(country).toBe("");
  });

  it('should return an empty string when provided wrong type of input value', () => {
    const country = getCountryOfOrigin(null);
    expect(country).toBe("");
  });
});