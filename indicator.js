var Indicator = (function(){
  /*
   * 计算obv指标
   * @param tradeDataTicks {Array[Array[closePrice, volume]]}
   * @return indicators {Array[float]}
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
    return indicators;
  };
  return {
    "OBV": obv
  };
})();

if (module) {
  module.exports = Indicator;
}
