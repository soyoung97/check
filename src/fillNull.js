module.exports = {
  fillNull: function(obj, toFill, showLog=true) {
    // isDict(): check if object type is dictonary, without being null or undefined.
    function isDict(o){
      return (o == null || o.constructor !== Object) ? false : true
    }
    function fillInside(o, toFill) {
      Object.keys(o).forEach(key => {
        if (isDict(o[key])) {
          o[key] = fillInside(o[key], toFill)
        }
        else if (o[key] === null) {
          o[key] = toFill
        }
      })
      return o
    }
    if (isDict(obj)) {
      return fillInside(obj, toFill)
    }
    else {
      if (showLog){
      console.log(`object is ${obj}. The object has to be instanceOf object to execute fillNull`)
      }
      return "Execution Failed"
    }
  }
}
