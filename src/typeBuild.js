var compareType = require('./compareType');
var isType = require('./isType');

module.exports = {
  compareTypeShow: compareType.compareTypeShow,
  compareType: compareType.compareType,
  isSymbol: isType.isSymbol,
  isBigInt: isType.isBigInt,
  isNull: isType.isNull,
  isNum: isType.isNum,
  isObj: isType.isObj,
  isStr: isType.isStr,
  isUndefined: isType.isUndefined,
  isBool: isType.isBool,
  isFunc: isType.isFunc
};
