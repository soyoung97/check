const print = require('../src/print.js').print;

function testPrint() {
  const int1 = 1234;
  const int2 = 4567;
  const str1 = "string for test1"
  const str2 = "string for test2"
  console.log("Testing for debugPrint function starting..")
  print(
    int1,
    int2,
    Number(10),
    Number(3.14),
    100033,
    "somethingString",
    str1,
    str2
  );
  print("MYMY")
  print(33 === 44)
  print(11 === 11)
  const sy = '11'
  const ga = '11'
  print(sy === ga)
}

testPrint();
// TODO: needs assertion
