const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (typeof email === 'string') {
    const splittedEmail = email.split('@');
    return splittedEmail[splittedEmail.length - 1];
  }
  return false;
}

module.exports = {
  getEmailDomain
};
