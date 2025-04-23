import { getMessageData } from '../messageData.js';

describe('getMessageData', () => {
  /** @type {jest.SpyInstance} */
  let mathRandomSpy;

  beforeEach(() => {
    // Store the original Math.random implementation
    mathRandomSpy = jest.spyOn(Math, 'random');
  });

  afterEach(() => {
    // Restore the original Math.random implementation
    mathRandomSpy.mockRestore();
  });

  it('should return a success message object when Math.random > 0.5', () => {
    // Mock Math.random to return 0.6 (greater than 0.5)
    mathRandomSpy.mockReturnValue(0.6);

    const result = getMessageData();

    // Type assertion to handle union type
    expect(result).toHaveProperty('message');
    if ('message' in result) {
      expect(result.message).toBe('Success');
    }
    expect(result).not.toHaveProperty('error');
  });

  it('should return an error message object when Math.random <= 0.5', () => {
    // Mock Math.random to return 0.5 (equal to 0.5)
    mathRandomSpy.mockReturnValue(0.5);

    const result = getMessageData();

    // Type assertion to handle union type
    expect(result).toHaveProperty('error');
    if ('error' in result) {
      expect(result.error).toBe('Error');
    }
    expect(result).not.toHaveProperty('message');
  });
});
