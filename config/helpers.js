// ----------------------
// helpers.js
// ----------------------

var path = require('path');

var ROOT_PATH = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT_PATH].concat(args));
}

exports.root = root;
