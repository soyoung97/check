module.exports = {
  fill: function(obj, replaceValue, toFill) {
    // isDict(): check if object type is dictonary, without being null or undefined.
    function isDict(o){
      return (obj == 'null' || obj.constructor !== Object) ? false : true
    }
    function fillInside(o, replaceValue, toFill){
      Object.keys(o).forEach(key => {
        if (isDict(o[key])) {
          o[key] = fillInside(o)
        }
        else if (o[key] === replaceValue) {
          o[key] = toFill
        }
      })
      return o
    }
    if (isDict(obj)){
      return fillInside(obj, toFill)
    }
    else {
      console.log(`object is ${obj}. The object has to be instanceOf object to execute fill`)
    }
  }
}
