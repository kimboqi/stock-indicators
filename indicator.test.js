var Indicator = require('./indicator.js');

describe('obv test', function(){
  console.log(Indicator.OBV([[11.94, 9300], [13.13, 3600], [14.44, 2000]]));
});

describe('macd test', function(){
  console.log(Indicator.MACD([11.94, 13.13, 14.44]));
});
