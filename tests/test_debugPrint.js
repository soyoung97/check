const debugPrint = require('../src/debugPrint.js').debugPrint;

function testDebug() {
  const int1 = 1234;
  const int2 = 4567;
  const str1 = "string for test1"
  const str2 = "string for test2"
  console.log("Testing for debugPrint function starting..")
  debugPrint(
    int1,
    int2,
    Number(10),
    Number(3.14),
    100033,
    "somethingString",
    str1,
    str2
  );
}

testDebug();
// TODO: needs assertion
