/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */
/**
 * Check whether one number is greater than a given number
 * @param {number} value
 * @param {number} threshold
 * @returns boolean
 */

const isGreaterThan = function(value, threshold) {
    let Message = false;
    if (value>threshold) {
        Message = true;
    }
    return Message;
}
export default isGreaterThan;