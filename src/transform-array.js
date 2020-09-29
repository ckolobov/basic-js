const CustomError = require("../extensions/custom-error");

const countElements = (cur, ind, arr) => {
  let result = 1;
  if ((ind > 0 && arr[ind - 1] === '--discard-next') ||
      cur === '--discard-next' ||
      cur === '--discard-prev' ||
      cur === '--double-next' ||
      cur === '--double-prev'
    ) {
    result = 0;
  } else if (ind > 0 && arr[ind - 1] === '--double-next') {
    result += 1;
  }
  if (ind + 1 < arr.length && arr[ind + 1] === '--discard-prev'){
    result -= 1;
  } else if (ind + 1 < arr.length && arr[ind + 1] === '--double-prev' && result > 0) {
    result += 1;
  }
  return result;
}

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error('Argument is not an Array!');
  }
  const result = [];
  const countElementsArr = arr.map(countElements);
  for (let i = 0; i < arr.length; i++) {
    if (countElementsArr[i] > 0) {
      for (let j = 1; j <= countElementsArr[i]; j++) {
        result.push(arr[i]);
      }
    }
  }
  return result;
};
