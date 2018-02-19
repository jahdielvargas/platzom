'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }
  if (str == reverse(str)) {
    return minMay(str);
  }
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }
  if (str.toLowerCase().startsWith("z")) {
    translation += "pe";
  }
  var length = str.length;
  if (length >= 10) {
    var before = translation.slice(0, Math.round(length / 2));
    var after = translation.slice(Math.round(length / 2));
    translation = before + '-' + after;
  }
  return translation;
}