module.exports = {
  print: require('./src/debugPrint.js').debugPrint,
  fill: require('./src/fill.js').fill,
  fillNull: require('./src/fillNull.js').fillNull,
  fillUndefined: require('./src/fillUndefined.js').fillUndefined,
  isBigInt: require('./src/isBigInt.js').isBigInt,
  isBool: require('./src/isBool.js').isBool,
  isFunc: require('./src/isFunc.js').isFunc,
  isNull: require('./src/isNull.js').isNull,
  isNum: require('./src/isNum.js').isNum,
  isObj: require('./src/isObj.js').isObj,
  isStr: require('./src/isStr.js').isStr,
  isSymbol: require('./src/isSymbol.js').isSymbol,
  isUndefined: require('./src/isUndefined.js').isUndefined,
  type: require('./src/type.js').type
};
