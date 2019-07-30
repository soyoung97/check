//check if type of the variable is the named type.
module.exports = {
  isSymbol: function (arg, showLog = true) {
    if (typeof (arg) !== 'symbol') {
      if (showLog) {
        console.log(`check.isSymbol():\nvariable ${arg} type is ${typeof (arg)}, not symbol`)
      }
      return false
    }
    return true
  },
  isBigInt: function (arg, showLog = true) {
    if (typeof (arg) !== 'bigint') {
      if (showLog) {
        console.log(`check.isBigInt():\nvariable ${arg} type is ${typeof (arg)}, not BigInt`)
      }
      return false
    }
    return true
  },
  isNull: function (arg, showLog = true) {
    if (arg !== null) {
      if (showLog) {
        console.log(`check.isNull():\nvariable ${arg} type is ${typeof (arg)}, not null`)
      }
      return false
    }
    return true
  },
  isNum: function (arg, showLog = true) {
    if (typeof (arg) !== 'number') {
      if (showLog) {
        console.log(`check.isNum():\nvariable ${arg} type is ${typeof (arg)}, not number`)
      }
      return false
    }
    return true
  },
  isObj: function (arg, showLog = true, allowNull = true) {
    if (typeof (arg) !== 'object') {
      if (showLog) {
        console.log(`check.isObj():\nvariable ${arg} type is ${typeof (arg)}, not Object`)
      }
      return false
    }
    if (arg === null) {
      if (showLog) {
        console.log(`check.isObj():\nvariable type is object, but it is null`)
      }
      return allowNull
    }
    return true
  },
  isStr: function (arg, showLog = true) {
    if (typeof (arg) !== 'string') {
      if (showLog) {
        console.log(`check.isStr():\nvariable ${arg} type is ${typeof (arg)}, not string`)
      }
      return false
    }
    return true
  },
  isUndefined: function (arg, showLog = true) {
    if (typeof (arg) !== 'undefined') {
      if (showLog) {
        console.log(`check.isUndefined():\nvariable ${arg} type is ${typeof (arg)}, not undefined`)
      }
      return false
    }
    return true
  },
  isBool: function (arg, showLog = true) {
    if (typeof (arg) !== 'boolean') {
      if (showLog) {
        console.log(`check.isBool():\nvariable ${arg} type is ${typeof (arg)}, not boolean`)
      }
      return false
    }
    return true
  },
  isFunc: function (arg, showLog = true) {
    if (typeof (arg) !== 'function') {
      if (showLog) {
        console.log(`check.isFunc():\nvariable ${arg} type is ${typeof (arg)}, not function`)
      }
      return false
    }
    return true
  },
};