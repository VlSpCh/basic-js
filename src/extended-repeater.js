const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = str === null ? `null` : str;
  let result = ``;
  let addition = ``;
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : '+';
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  if (options.addition !== undefined) {
    for (let i1 = 0; i1 < additionRepeatTimes; i1++) {
      if (options.addition === null) {
        addition += 'null'
      } else {
        addition += options.addition.toString()
      }
      if (i1 + 1 != additionRepeatTimes) {
        addition += additionSeparator
      }
    }
  }

  for (let i2 = 0; i2 < repeatTimes; i2++) {
    result += string.toString() + addition;
    if (i2 + 1 != repeatTimes) {
      result += separator
    }
  }

  return result
}
  