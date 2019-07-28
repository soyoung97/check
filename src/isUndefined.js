//check if type of the variable is Undefined.
module.exports = {
  isUndefined: function(arg) {
    if (typeOf(arg) !== 'undefined'){
      console.log(`check.isUndefined():\nvariable ${arg} type is ${typeof(arg)}, not undefined`)
      return false
    }
    return true
  }
}
