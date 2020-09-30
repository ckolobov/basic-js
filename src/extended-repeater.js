const CustomError = require("../extensions/custom-error");

const repeatStr = (str, times, separator) => {
  const arr = new Array(times);
  return arr.fill(str).join(separator);
}

module.exports = function repeater(str,
  {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|'
  }) {
    let result = String(str);

    if (addition !== undefined) {
      result += repeatStr(String(addition), additionRepeatTimes, additionSeparator);
    }

    if (repeatTimes) {
      result = repeatStr(result, repeatTimes, separator);
    }

    return result;
};
