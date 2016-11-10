var Indicator = (function(){
  /*
   * 计算obv指标
   * @param tradeDataTicks {Array[Array[closePrice, volume]]}
   * @return obvs {Array[float]}
   */
  var obv = function (tradeDataTicks) {
    var lastTick,
        indicators = [],
        length = tradeDataTicks.length;
    for (var i = 0; i < length; i++) {
      var value = 0, curTick = tradeDataTicks[i];
      if (i != 0) {
        var lastObvValue = indicators[i-1];
        if (curTick[0] >= lastTick[0]) {
          value = lastObvValue + curTick[1];
        } else {
          value = lastObvValue - curTick[1];
        }
      }
      indicators.push(value);
      lastTick = curTick;
    }
    return obvs;
  };

  var ema = function (lastEma, closePrice, days) {
    return (lastEma * (days - 1) + closePrice * 2) / (days + 1);
  };

  var dea = function (lastDea, curDiff) {
    return (lastDea * 8 + curDiff * 2) / 10;
  };

  var macd = function (ticks) {
    var ema12 = [], ema26 = [], diffs = [], deas = [], bars = [];
    for(var i = 0; i < ticks.length; i++ ) {
      var c = ticks[i];
      if (i == 0) {
        ema12.push(c);
        ema26.push(c);
        deas.push(0);
      } else {
        ema12.push(ema(emas12[i-1], c, 12));
        ema26.push(ema(emas26[i-1], c, 26));
      }
      diffs.push(ema12[i] - ema26[i]);
      if (i != 0 ) {
        deas.push(dea(deas[i-1], diffs[i]));
      }
      bars.push(diffs[i]-deas[i]);
    }
    return diffs, deas, bars;
  };
  return {
    "OBV": obv,
    "MACD": macd
  };
})();

if (module) {
  module.exports = Indicator;
}
