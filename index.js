/*
 * Rangi
 * A Dead Simple Terminal Color Module
 *
 * Author: Mohammed Sohail <sohailsameja@gmail.com>
 * License: MIT
 */

"use strict";

const util = require("util");

function mix(color, spec) {
  const style = util.inspect.colors[color];
  return `\u001b[${style[0]}m${spec}\u001b[${style[1]}m`;
}

function rangi() {
  const returnValue = {};
  Object.keys(util.inspect.colors).forEach(function (color) {
    returnValue[color] = function (spec) {
      return mix(color, spec);
    };
  });
  return returnValue;
}

module.exports = rangi();
