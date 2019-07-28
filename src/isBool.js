//check if type of the variable is boolean.
module.exports = {
  isBool: function(arg) {
    if (typeOf(arg) !== 'boolean'){
      console.log(`check.isBool():\nvariable ${arg} type is ${typeof(arg)}, not boolean`)
      return false
    }
    return true
  }
}
