/**
 * @jest-environment jsdom
 */
import { getHelloWorld } from '../main.js';

describe('getHelloWorld', () => {
  it('should return the string "Hello World"', () => {
    const expected = 'Hello World';
    const result = getHelloWorld();
    expect(result).toBe(expected);
  });
});
