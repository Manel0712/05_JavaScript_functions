/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */
/**
 * Calculates the words in one string;
 * @param {string} sentence
 * @returns number
 */
const getTotalWordsFromString = function (sentence) {
    const numberWords = sentence.split(/\s+/);
    return numberWords.filter((word)=>word.length>0).length;
}
export default getTotalWordsFromString;