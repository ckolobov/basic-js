const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = false;
  if (Array.isArray(members)) {
    result = members.reduce((acc, val) => {
      if (typeof val === 'string') {
        acc.push(val.trim()[0].toUpperCase());
      }
      return acc;
    }, []).sort().join('');
  }
  return result;
};
