const CustomError = require("../extensions/custom-error");

const getSeasonFromMonth = (monthNumber) => {
  if (typeof monthNumber !== 'number' || monthNumber < 0 || monthNumber > 11) {
    throw new Error('Wrong month!');
  }
  const seasons = ['winter','winter','spring','spring','spring','summer','summer','summer','autumn','autumn','autumn','winter'];
  return seasons[monthNumber];
}

const isDateObj = (obj) => {
  let result = false;
  if (obj instanceof Date) {
    if (Object.keys(obj).length === 0) {
      result = true;
    }
  }
  return result;
}

module.exports = function getSeason(date) {
  let result = 'Unable to determine the time of year!';
  if (date) {
    if (isDateObj(date)) {
      result = getSeasonFromMonth(date.getMonth());
    } else {
      throw new Error('passed argument is not instance of Date')
    }
  }
  return result;
};
