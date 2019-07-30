const a = require('../src/fill.js');
const b = require('../src/fillNull.js');
const c = require('../src/fillUndefined.js');

test_1 = {'key1': null, 'key2': 'val2', 'key3': { 'key3-1': null, 'key3-2': 'val3-2' }}
test_2 = {'key1': undefined, 'key2': 'val2', 'key3': { 'key3-1': undefined, 'key3-2': 'val3-2' }}
test_3 = {'key1': 'target', 'key2': 'val2', 'key3': { 'key3-1': 'target', 'key3-2': 'val3-2' }}
random_str = "random_string that is not an dictionary object"
null_val = null

result = {'key1': 'result', 'key2': 'val2', 'key3': { 'key3-1': 'result', 'key3-2': 'val3-2' }}

console.assert(JSON.stringify(a.fill(test_1, 'target', 'result', showLog=false)) === JSON.stringify(test_1))
console.assert(JSON.stringify(a.fill(test_2, 'target', 'result', showLog=false)) === JSON.stringify(test_2))
console.assert(JSON.stringify(a.fill(test_3, 'target', 'result', showLog=false)) === JSON.stringify(result))
console.assert(a.fill(random_str, 'target', 'result', showLog=false) === "Execution Failed")
console.assert(a.fill(null_val, 'target', 'result', showLog=false) === "Execution Failed")

console.assert(JSON.stringify(b.fillNull(test_1, 'result'), showLog=false) === JSON.stringify(result))
console.assert(JSON.stringify(b.fillNull(test_2, 'result'), showLog=false) === JSON.stringify(test_2))
console.assert(JSON.stringify(b.fillNull(test_3, 'result'), showLog=false) === JSON.stringify(test_3))
console.assert(b.fillNull(random_str, 'result', showLog=false) === "Execution Failed")
console.assert(b.fillNull(null_val, 'result', showLog=false) === "Execution Failed")

console.assert(JSON.stringify(c.fillUndefined(test_1, 'result'), showLog=false) === JSON.stringify(test_1))
console.assert(JSON.stringify(c.fillUndefined(test_2, 'result'), showLog=false) === JSON.stringify(result))
console.assert(JSON.stringify(c.fillUndefined(test_3, 'result'), showLog=false) === JSON.stringify(test_3))
console.assert(c.fillUndefined(random_str, 'result', showLog=false) === "Execution Failed")
console.assert(c.fillUndefined(null_val, 'result', showLog=false) === "Execution Failed")
