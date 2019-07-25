const check = require('../src/type.js');
const debugPrint = require('../src/debugPrint.js').debugPrint;

function Func1(f) {}
function Func2(f) {}
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

const obj = [1, 2, 3, '3jkjlkfda'];
const jjj = { 1: 2, 4: 5 };
var p = new Person();
var p1 = new Person();
check.type(p, p1);
check.type(str1, str2);
check.type(str1, str2, str3);
check.type(num1, num2);

console.log("Testing for test_type END")
