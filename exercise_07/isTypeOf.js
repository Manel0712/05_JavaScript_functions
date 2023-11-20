/**
 * #7 :: Exprot JS function "isTypeOf" to check if type of value matches type received as argument
 * hint :: array should be treated in a different way. Use Array.isArray() to check it
 * doc :: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * input: 'string' | 'number' | 'boolean' | 'array' (value)
 * input: boolean (type)
 * output:
 */
/**
 * @param {string | number | boolean | array} value
 * @param {string | number | boolean | array} type
 * @returns {boolean}
 */
function isTypeOf(value, type) {
  let result = Array.isArray(value);
  if (type === "string") {
    result = typeof value === "string";
  }
  if (type === "number") {
    result = typeof value === "number";
  }
  if (type === "boolean") {
    result = typeof value === "boolean";
  }
  return result;
}
export default isTypeOf;
