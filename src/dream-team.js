const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false}
  let names = members.filter(a => (typeof a === 'string'));
  return names.map(a => (a.trim()[0].toUpperCase())).sort().join('');
};
