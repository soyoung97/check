//check if type of the variable is string.
module.exports = {
  isStr: function(arg) {
    if (typeof(arg) !== 'string'){
      console.log(`check.isStr():\nvariable ${arg} type is ${typeof(arg)}, not string`)
      return false
    }
    return true
  }
}
