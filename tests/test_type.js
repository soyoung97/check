const check = require('../src/compareType.js');

function func1(f) {}
function func2(f) {}
class Person {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}
const str1 = 'str1';
const str2 = 'str2';
const str3 = 'str3';
const num1 = 1;
const num2 = 2;

const array1 = [1, 2, 3, '3jkjlkfda'];
const array2 = [5, 6, 7, 8, 9];
const obj1 = {'string': 32, 'string1': 33};
const obj2 = { 1: 2, 4: 5 };
const p = new Person();
const p1 = new Person();
const null_val = null;
const null_val1 = null;
const undefined_val = undefined;
const undefined_val1 = undefined;

console.assert(check.compareType(p, p1) === true);
console.assert(check.compareType(array1, array2) === true);
console.assert(check.compareType(str1, str2) === true)
console.assert(check.compareType(str1, str2, str3) === true);
console.assert(check.compareType(num1, num2) === true);
console.assert(check.compareType(obj1, obj2) === true);
console.assert(check.compareType(func1, func2) === true);
console.assert(check.compareType(str1) === true);

console.assert(check.compareType(str1, num1) === false);
console.assert(check.compareType(p, array1) === false);
console.assert(check.compareType(func1, num2) === false);
console.assert(check.compareType(obj1, obj2, str1) === false);
console.assert(check.compareType(str1, str2, num1) === false);
console.assert(check.compareType(obj1, array1) === false);

console.assert(check.compareType(str1, null_val) === false);
console.assert(check.compareType(str1, str2, null_val) === false);
console.assert(check.compareType(str1, undefined_val) === false);
console.assert(check.compareType(str1, undefined_val, undefined_val1) === false);
console.assert(check.compareType(null_val, null_val1) === true);
console.assert(check.compareType(undefined_val, undefined_val1) === true);