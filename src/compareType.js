module.exports = {
  compareTypeShow: function (...args) {
    let beforeType = getType(args[0]);
    let failed_msg = '';
    function getType(o) {
      if (o == null) {
        return o;
      }
      else {
        return o.constructor;
      }
    }
    args.some((arg, i) => {
        if (arg == null) { // arg is null or undefined
          if (beforeType !== arg) {
            failed_msg = `Type checking failed for ${i}th parameter. \n\n${beforeType}\n\n!==\n\nnull|undefined`
            return false; // return true to break the some loop
          }
        } else {
          if (arg.constructor !== beforeType) {
            failed_msg = `Type checking failed for ${i}th parameter. \n\n${beforeType}\n\n!==\n\n${arg.constructor}`
            return false;
          }
        }
      }
    );
    if (failed_msg !== '') {
      console.log(failed_msg);
      return false;
    } else {
      console.log(`Type checking succeded. \nType = ${beforeType}`);
      return true;
    }
  },
  compareType: function (...args) {
    let beforeType = getType(args[0]);
    let failed = false;
    function getType(o) {
      if (o == null) {
        return o;
      }
      else {
        return o.constructor;
      }
    }
    args.some((arg) => {
        if (arg == null) { // arg is null or undefined
          if (beforeType !== arg) {
            failed = true;
            return failed; // return true to break the some loop
          }
        } else {
          if (arg.constructor !== beforeType) {
            failed = true;
            return failed;
          }
        }
      }
    );
    if (failed) {
      return false;
    } else {
      return true;
    }
  }
}
