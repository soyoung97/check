//check if type of the variable is symbol.
module.exports = {
  isSymbol: function(arg) {
    if (typeOf(arg) !== 'symbol'){
      console.log(`check.isSymbol():\nvariable ${arg} type is ${typeof(arg)}, not symbol`)
    }
  }
}
