module.exports = {
  //check if type of the variable is symbol.
  isSymbol: function(arg) {
    if (typeof(arg) !== 'symbol'){
      console.log(`check.isSymbol():\nvariable ${arg} type is ${typeof(arg)}, not symbol`)
      return false
    }
    return true
  }
}
