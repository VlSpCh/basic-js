const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || typeof position === "string" || position > this.chain.length - 1) {
      this.chain = [];
      throw Error();
    }
    this.chain.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this  
  },
  finishChain() {
    let result = this.chain.reduce((accum, item, i) => {
      accum += `( ${item} )`;
      if (i < this.chain.length - 1) accum += "~~";
      return accum;
    }, '');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
