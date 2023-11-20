/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */
/**
 * get length of a collection and check whether it is empty or not
 * @param {Array} collection
 * @returns boolean
 */
const checkCollectionHasElements = function (collection) {
  let Message = true;
  if (collection.length > 0 == true) {
    Message = false;
  }
  return Message;
};
export default checkCollectionHasElements;
