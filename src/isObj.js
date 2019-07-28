//check if type of the variable is object
module.exports = {
  isObj: function(arg, showNull=false) {
    if (typeOf(arg) !== 'object'){
      console.log(`check.isObj():\nvariable ${arg} type is ${typeof(arg)}, not Object`)
      return false
    }
    if (arg === null && showNull === true) {
      console.log(`check.isObj():\nvariable type is object, but it is null`)
    }
    return true
  }
}
