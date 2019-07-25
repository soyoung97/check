const isTrue = require('../src/isTrue.js').isTrue;

function testIsTrue() {
  isTrue(11 === 33)
  isTrue(22 === 22)
  isTrue('44' === '44')
  isTrue('str1' === 'str2')
  isTrue('str10' !== 'str4')
}

testIsTrue();
