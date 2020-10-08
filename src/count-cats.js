const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cats = 0;
  for (let i1 = 0; i1 < backyard.length; i1++) {
    for (let i2 of backyard[i1]) {
      if (/^\^\^$/.test(i2) == true) {
        cats++
      }
    }
  } return cats
}
