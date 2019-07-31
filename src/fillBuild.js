var fill = require('./fill');
var fillNull = require('./fillNull');
var fillUndefined = require('./fillUndefined');

module.exports = {
  fill: fill.fill,
  fillNull: fillNull.fillNull,
  fillUndefined: fillUndefined.fillUndefined
};
