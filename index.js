module.exports = {};

module.exports.stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('String length must be between 1 and 10');
  }
  return string.length;
};

module.exports.reverseString = (string) => {
  return string.split('').reverse().join('');
};

module.exports.capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
