var Indicator = (function(){
  /*
   * 交易行情的数据结构
   */
  var tradeDataTick = function() {
    this.code = "";
    this.openPrice = 0;
    this.highPrice = 0;
    this.closePrice = 0;
    this.lowPrice = 0;
    this.volume = 0;
    this.amount = 0;
    this.createdAt = null;
  };

  /*
   * 指标类
   * @param createdAt {Date}
   */
  var indicator = function(createdAt) {
    this.value = 0;
    this.createdAt = createdAt;
  };

  /*
   * 计算obv指标
   * @param tradeDataTicks {Array[TradeDataTick]}
   * @return indicators {Array[Indicator]}
   */
  var obv = function (tradeDataTicks) {
    var lastTick,
    indicators = [],
    length = tradeDataTicks.length;
    for (var i = 0; i < length; i++) {
      var curTick = tradeDataTicks[i];
      var ind = new Indicator(curTick.createdAt);
      if (i != 0) {
        var lastObvValue = indicators[i-1].value;
        if (curTick.closePrice >= lastTick.closePrice) {
          ind.value = lastObvValue + curTick.volume;
        } else {
          ind.value = lastObvValue - curTick.volume;
        }
      }
      indicators.push(ind);
      lastTick = curTick;
    }
    return indicators;
  };
  return {
    "TradeDataTick": tradeDataTick,
    "Indicator": indicator,
    "OBV": obv
  };
})();

if (module) {
  module.exports = Indicator;
}
