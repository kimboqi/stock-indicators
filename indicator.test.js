var Indicator = require('./indicator.js');
// //江苏银行
// describe('obv test', function(){
//   console.log(Indicator.OBV([[11.94, 9300], [13.13, 3600], [14.44, 2000]]));
// });

// var testArray = [9.03, 9.93, 10.92, 12.01, 11.46, 12.19];
// describe('macd test', function(){
//   console.log(Indicator.MACD(testArray));
// });

// testArray = [[9.03, 7.52, 9.03], [9.93, 9.93, 9.93], [10.92, 10.92, 10.92], [12.01, 11.20, 12.01], [11.80, 11.28, 11.46], [12.49, 11.38, 12.19]];
// describe('kdj test', function(){
//   console.log(Indicator.KDJ(testArray));
// });

// testArray = [9.03, 9.93, 10.92, 12.01, 11.46, 12.19, 12.68, 12.39, 13.53, 14.36, 14.26, 13.71, 13.66, 13.24, 13.03, 13.14, 12.68, 12.37, 12.12, 12.18, 12.2, 12.38, 12.01, 11.81, 11.59];
// describe('boll test', function(){
//   console.log(Indicator.BOLL(testArray));
// });


testArray = [9.03, 9.03, 10.92, 12.01, 11.46, 12.19, 12.68];
describe('rsi test', function(){
  console.log(Indicator.RSI(testArray));
});
