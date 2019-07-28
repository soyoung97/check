//check if type of the variable is num.
module.exports = {
  isNum: function(arg) {
    if (typeOf(arg) !== 'number'){
      console.log(`check.isNum():\nvariable ${arg} type is ${typeof(arg)}, not number`)
      return false
    }
    return true
  }
}
