//check if type of the variable is bigint.
module.exports = {
  isBigInt: function(arg) {
    if (typeOf(arg) !== 'bigint'){
      console.log(`check.isBigInt():\nvariable ${arg} type is ${typeof(arg)}, not BigInt`)
    }
  }
}
