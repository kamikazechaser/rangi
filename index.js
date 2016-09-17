/*
 * Rangi
 * A Dead Simple Terminal Color Module
 *
 * Author: Mohammed Sohail <sohailsameja@gmail.com>
 * License: MIT
 */

"use strict";

var util = require('util');

/* ANSI escape codes to standard output using node.js util module
 *
 * https://nodejs.org/api/util.html#util_customizing_util_inspect_colors
 * https://en.wikipedia.org/wiki/ANSI_escape_code#Example_of_use_in_shell_scripting
 */

function mix(color, spec) {
  var aec = util.inspect.colors[color];
  return "\u001b[" + aec[0] + "m" + spec + "\u001b[" + aec[1] + "m";
}

// Rangi function

function rangi() {
  var returnValue = {};
  Object.keys(util.inspect.colors).forEach(function (color) {
    returnValue[color] = function (spec) {
      return mix(color, spec);
    };
  });
  return returnValue;
}

module.exports = rangi();