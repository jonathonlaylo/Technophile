const extend = require('./extend');

function Tablet(x, y) {
}

Tablet.prototype.touch = function(x,y){
  return {
    x : x,
    y : y
  };
};

module.exports = Tablet;