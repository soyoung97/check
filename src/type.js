module.exports = {
  type: function(...args){
    let correctType = null;
    let failed_msg = '';
    args.some((arg, i) => {
      if (i === 0) { // initialize correctType.
        if (arg == null) {
          correctType = null;
        }
        else {
          correctType = arg.constructor;
        }
      }
      if (arg == null) { // arg is null or undefined
        if (correctType !== arg) {
          failed_msg = `Type checking failed.\n\n${correctType}\n\n!==\n\nnull|undefined`
          return true;
        }
      }
      else {
        if (arg.constructor !== correctType) {
          failed_msg = `Type checking failed.\n\n${correctType}\n\n!==\n\n${arg.constructor}`
          return true;
        }
      }
    }
    )
    if (failed_msg !== '') {
      throw failed_msg
    }
    else {
      console.log(`Type checking succeded. \nType = ${correctType}`)
    }
    return;
  }
}
