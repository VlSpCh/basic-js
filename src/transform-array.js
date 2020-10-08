const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformedArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-prev') {
      if (i > 0) {
        transformedArray.pop();
      }
    } else if (arr[i] === '--discard-next') {
      if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
        i += 2;
      } else {
        i += 1;
      }
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        transformedArray = [...transformedArray, arr[i + 1]];
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0) transformedArray = [...transformedArray, arr[i - 1]];
    } else {
      transformedArray = [...transformedArray, arr[i]];
    }
  }
  return transformedArray;
};
