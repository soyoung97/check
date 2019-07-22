var fs = require('fs');

function get_line(latestStack, callback) {
  var data = fs.readFileSync(latestStack.getFileName(), 'utf8');
  var lines = data.split('\n');

  if (+latestStack.getLineNumber() - 1 > lines.length) {
    throw new Error('File end reached without finding line');
  }

  var line = lines.slice(+latestStack.getLineNumber() - 1).join('\n');
  var argPart = line.slice(latestStack.getColumnNumber() - 1);

  var startIdx = argPart.indexOf('(');
  var leftParen = 1;
  var endIdx = startIdx;

  while (leftParen > 0) {
    endIdx++;
    if (argPart[endIdx] === '(') {
      leftParen++;
    } else if (argPart[endIdx] === ')') {
      leftParen--;
    }
  }
  var argNames = argPart.slice(startIdx + 1, endIdx).split(/\s*,\s*/);

  callback(null, line.split('\n')[0], argNames);
}

function check(...args) {
  var checkobj = new Error();

  Error.prepareStackTrace = function(err, stack) {
    return stack;
  };
  Error.captureStackTrace(checkobj, check);

  latestStack = checkobj.stack[0];

  get_line(latestStack, function(err, line, argNames) {
    console.log('========= The Amazing Library: Check.js =========');
    console.log(`Requested line: ${line.trim()}`);

    argNames.forEach((e, i) => {
      console.log(`${e}: ${args[i]}`);
    });

    console.log('=================================================');
  });
}

module.exports.debugPrint = check;
