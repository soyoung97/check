//check if type of the variable is function.
module.exports = {
  isFunc: function(arg) {
    if (typeOf(arg) !== 'function'){
      console.log(`check.isFunc():\nvariable ${arg} type is ${typeof(arg)}, not function`)
    }
  }
}
