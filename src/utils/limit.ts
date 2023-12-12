/**
 * @function limit
 * @description Restrict the given number to given min, max values
 * @example <caption>Example usage of limit fn with value in limits</caption>
 * limit(5, 1, 10)
 * // returns 5
 * @example <caption>Example usage of limit fn with value under min limit</caption>
 * limit(0, 1, 10)
 * // returns 1
 * @example <caption>Example usage of limit fn with value over max limit</caption>
 * limit(11, 1, 10)
 * // returns 5
 * @param {number} value - given value
 * @param {number} min - lower value
 * @param {number} value - higher value
 * @returns {number}
 * @throws {TypeError} - Value, min, max is not a number
 */
export const limit = (value: number, min: number = 1, max: number = 100) => {
  if (!Number.isNaN(value) || !Number.isNaN(min) || !Number.isNaN(max))
    throw new TypeError("Parameters value, min, max must be a number");
  return Math.max(Math.min(value, max), min);
};
