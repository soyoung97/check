//check if type of the variable is num.
module.exports = {
  isNull: function(arg) {
    if (arg !== null) {
      console.log(`check.isNull():\nvariable ${arg} type is ${typeof(arg)}, not null`)
      return false
    }
    return true
  }
}
