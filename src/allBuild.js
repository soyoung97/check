var compareType = require('./compareType');
var fill = require('./fill');
var fillNull = require('./fillNull');
var fillUndefined = require('./fillUndefined');
var isType = require('./isType');
var print = require('./print');

module.exports = {
  compareTypeShow: compareType.compareTypeShow,
  compareType: compareType.compareType,
  fill: fill.fill,
  fillNull: fillNull.fillNull,
  fillUndefined: fillUndefined.fillUndefined,
  isSymbol: isType.isSymbol,
  isBigInt: isType.isBigInt,
  isNull: isType.isNull,
  isNum: isType.isNum,
  isObj: isType.isObj,
  isStr: isType.isStr,
  isUndefined: isType.isUndefined,
  isBool: isType.isBool,
  isFunc: isType.isFunc,
  print: print.print
};
