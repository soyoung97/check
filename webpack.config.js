var optionToEntry = {
  all: 'allBuild.js',
  type: 'typeBuild.js',
  fill: 'fillBuild.js',
  print: 'print.js'
};

module.exports = env => {
  var newEnv = env || { opt: 'all' };
  return {
    mode: 'development',
    entry: './src/' + optionToEntry[newEnv.opt || 'all'],
    output: {
      path: __dirname,
      filename: 'app.js',
      // library: 'Check',
      libraryTarget: 'commonjs'
    },
    target: 'node'
  };
};
