var Indicator = require('./indicator.js');

describe('obv test', function(){
  console.log(Indicator.OBV([[0, 1], [2, 3]]));
});

describe('macd test', function(){
  console.log(Indicator.OBV([1, 3]));
});
