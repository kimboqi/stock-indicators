var Indicator = (function(){
  /**
   * 计算obv指标
   *
   * @method obv
   * @param {Array[Array[Number, Number]]} ticks
   * ticks为二维数组类型，其中内层数组第一个值为收盘价格，第二个值为成交量
   * @return {Array[number]} obvs
   */
  var obv = function (ticks) {
    var lastTick, obvs = [], length = ticks.length;
    for (var i = 0; i < length; i++) {
      var value = 0, curTick = ticks[i];
      if (i != 0) {
        var lastObvValue = ticks[i-1];
        if (curTick[0] >= lastTick[0]) {
          value = lastObvValue + curTick[1];
        } else {
          value = lastObvValue - curTick[1];
        }
      }
      obvs.push(value);
      lastTick = curTick;
    }
    return obvs;
  };

  var ema = function (lastEma, closePrice, units) {
    return (lastEma * (units - 1) + closePrice * 2) / (units + 1);
  };

  var dea = function (lastDea, curDiff) {
    return (lastDea * 8 + curDiff * 2) / 10;
  };

  /**
   *
   * 计算macd指标,快速和慢速移动平均线的周期分别取12和26
   *
   * @method macd
   * @param {Array[Number]} ticks
   * 一维数组类型，每个元素为tick的收盘价格
   * @return {Object} 返回一个包含diffs deas bars属性的对象,每个属性对应的类型为{Array[Number]}
   */
  var macd = function (ticks) {
    var ema12 = [], ema26 = [], diffs = [], deas = [], bars = [];
    for(var i = 0; i < ticks.length; i++) {
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
      if (i != 0) {
        deas.push(dea(deas[i-1], diffs[i]));
      }
      bars.push(diffs[i]-deas[i]);
    }
    return {diffs: diffs, deas: deas, bars: bars};
  };
  return {
    "OBV": obv,
    "MACD": macd
  };
})();

if (module) {
  module.exports = Indicator;
}
