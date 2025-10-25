const { NotImplementedError } = require('../lib');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  if (disksNumber === 1) {
    turns++;
  } else {
    const result = calculateHanoi(disksNumber - 1, turnsSpeed);
    turns += result.turns;
    turns++;
    turns+= result.turns;
  }
  return {
    turns: turns,
    seconds: Math.trunc(turns / (turnsSpeed / 3600)),
  };
}

module.exports = {
  calculateHanoi
};
