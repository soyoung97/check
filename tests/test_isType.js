const check = require('../src/isType.js');
const str = 'sample_string';
const num = 1;
const obj = [1, 2, 3, '3jkjlkfda'];
const symbol = Symbol();
const func = (arg) => {
  return arg + 1
};
const bigint = BigInt(3333);
const null_value = null;
const undefined_value = undefined;
const bool = false;

console.assert(check.isSymbol(str, showLog = false) === false);
console.assert(check.isSymbol(num, showLog = false) === false);
console.assert(check.isSymbol(obj, showLog = false) === false);
console.assert(check.isSymbol(symbol, showLog = false) === true);
console.assert(check.isSymbol(func, showLog = false) === false);
console.assert(check.isSymbol(bigint, showLog = false) === false);
console.assert(check.isSymbol(null_value, showLog = false) === false);
console.assert(check.isSymbol(undefined_value, showLog = false) === false);
console.assert(check.isSymbol(bool, showLog = false) === false);

console.assert(check.isBigInt(str, showLog = false) === false);
console.assert(check.isBigInt(num, showLog = false) === false);
console.assert(check.isBigInt(obj, showLog = false) === false);
console.assert(check.isBigInt(symbol, showLog = false) === false);
console.assert(check.isBigInt(func, showLog = false) === false);
console.assert(check.isBigInt(bigint, showLog = false) === true);
console.assert(check.isBigInt(null_value, showLog = false) === false);
console.assert(check.isBigInt(undefined_value, showLog = false) === false);
console.assert(check.isBigInt(bool, showLog = false) === false);

console.assert(check.isNull(str, showLog = false) === false);
console.assert(check.isNull(num, showLog = false) === false);
console.assert(check.isNull(obj, showLog = false) === false);
console.assert(check.isNull(symbol, showLog = false) === false);
console.assert(check.isNull(func, showLog = false) === false);
console.assert(check.isNull(bigint, showLog = false) === false);
console.assert(check.isNull(null_value, showLog = false) === true);
console.assert(check.isNull(undefined_value, showLog = false) === false);
console.assert(check.isNull(bool, showLog = false) === false);

console.assert(check.isNum(str, showLog = false) === false);
console.assert(check.isNum(num, showLog = false) === true);
console.assert(check.isNum(obj, showLog = false) === false);
console.assert(check.isNum(symbol, showLog = false) === false);
console.assert(check.isNum(func, showLog = false) === false);
console.assert(check.isNum(bigint, showLog = false) === false);
console.assert(check.isNum(null_value, showLog = false) === false);
console.assert(check.isNum(undefined_value, showLog = false) === false);
console.assert(check.isNum(bool, showLog = false) === false);

console.assert(check.isObj(str, showLog = false) === false);
console.assert(check.isObj(num, showLog = false) === false);
console.assert(check.isObj(obj, showLog = false) === true);
console.assert(check.isObj(symbol, showLog = false) === false);
console.assert(check.isObj(func, showLog = false) === false);
console.assert(check.isObj(bigint, showLog = false) === false);
console.assert(check.isObj(null_value, showLog = false, allowNull = false) === false);
console.assert(check.isObj(null_value, showLog = false, allowNull = true) === true);
console.assert(check.isObj(undefined_value, showLog = false) === false);
console.assert(check.isObj(bool, showLog = false) === false);

console.assert(check.isStr(str, showLog = false) === true);
console.assert(check.isStr(num, showLog = false) === false);
console.assert(check.isStr(obj, showLog = false) === false);
console.assert(check.isStr(symbol, showLog = false) === false);
console.assert(check.isStr(func, showLog = false) === false);
console.assert(check.isStr(bigint, showLog = false) === false);
console.assert(check.isStr(null_value, showLog = false) === false);
console.assert(check.isStr(undefined_value, showLog = false) === false);
console.assert(check.isStr(bool, showLog = false) === false);

console.assert(check.isUndefined(str, showLog = false) === false);
console.assert(check.isUndefined(num, showLog = false) === false);
console.assert(check.isUndefined(obj, showLog = false) === false);
console.assert(check.isUndefined(symbol, showLog = false) === false);
console.assert(check.isUndefined(func, showLog = false) === false);
console.assert(check.isUndefined(bigint, showLog = false) === false);
console.assert(check.isUndefined(null_value, showLog = false) === false);
console.assert(check.isUndefined(undefined_value, showLog = false) === true);
console.assert(check.isUndefined(bool, showLog = false) === false);

console.assert(check.isBool(str, showLog = false) === false);
console.assert(check.isBool(num, showLog = false) === false);
console.assert(check.isBool(obj, showLog = false) === false);
console.assert(check.isBool(symbol, showLog = false) === false);
console.assert(check.isBool(func, showLog = false) === false);
console.assert(check.isBool(bigint, showLog = false) === false);
console.assert(check.isBool(null_value, showLog = false) === false);
console.assert(check.isBool(undefined_value, showLog = false) === false);
console.assert(check.isBool(bool, showLog = false) === true);

console.assert(check.isFunc(str, showLog = false) === false);
console.assert(check.isFunc(num, showLog = false) === false);
console.assert(check.isFunc(obj, showLog = false) === false);
console.assert(check.isFunc(symbol, showLog = false) === false);
console.assert(check.isFunc(func, showLog = false) === true);
console.assert(check.isFunc(bigint, showLog = false) === false);
console.assert(check.isFunc(null_value, showLog = false) === false);
console.assert(check.isFunc(undefined_value, showLog = false) === false);
console.assert(check.isFunc(bool, showLog = false) === false);

