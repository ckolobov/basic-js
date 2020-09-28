const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActivityValue = parseFloat(sampleActivity);
  let result = false;
  if (typeof sampleActivity === 'string' &&
      !isNaN(sampleActivityValue) &&
      sampleActivityValue > 0 &&
      sampleActivityValue < MODERN_ACTIVITY) {
    result = Math.abs(Math.ceil(Math.log(sampleActivityValue / MODERN_ACTIVITY) * HALF_LIFE_PERIOD / Math.log(2)));
  }
  return result;
};
