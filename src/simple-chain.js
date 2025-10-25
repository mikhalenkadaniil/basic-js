const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`);
    return chainMaker;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 0 || position > this.chain.length) {
      this.chain = [];
      return "You can\'t remove incorrect link!";
    }
    this.chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const bufferChain = [...this.chain];
    this.chain = [];
    return `( ${bufferChain.join(' )~~( ')} )`;
  },
};

module.exports = {
  chainMaker,
};
