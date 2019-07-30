//check if type of the variable is bigint.
module.exports = {
  isBigInt: function(arg) {
    if (typeof(arg) !== 'bigint'){
      console.log(`check.isBigInt():\nvariable ${arg} type is ${typeof(arg)}, not BigInt`)
      return false
    }
    return true
  }
}
