var Indicator = (function(){
  /**
   * 计算obv指标
   *
   * @method obv
   * @param {Array[Array[Number, Number]]} ticks
   * ticks为二维数组类型，其中内层数组第一个值为收盘价，第二个值为成交量
   * @return {Array[number]} obvs
   */
  var obv = function (ticks) {
    var lastTick, obvs = [], length = ticks.length;
    for (var i = 0; i < length; i++) {
      var value = 0, curTick = ticks[i];
      if (i != 0) {
        var lastObvValue = obvs[i-1];
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
        ema12.push(ema(ema12[i-1], c, 12));
        ema26.push(ema(ema26[i-1], c, 26));
      }
      diffs.push(ema12[i] - ema26[i]);
      if (i != 0) {
        deas.push(dea(deas[i-1], diffs[i]));
      }
      bars.push((diffs[i]-deas[i]) * 2);
    }
    return {diffs: diffs, deas: deas, bars: bars};
  };

  var getMaxHighAndMinLow = function (ticks) {
    var maxHigh = ticks[0][0], minLow = ticks[0][1];
    for (var i = 0; i < ticks.length; i++) {
      var t = ticks[i], high = t[0], low = t[1];
      if (high > maxHigh) {
        maxHigh = high;
      }
      if (low < minLow) {
        minLow = low;
      }
    }
    return [maxHigh, minLow];
  };

  /**
   *
   * 计算kdj指标,rsv的周期为9日
   *
   * @method kdj
   * @param {Array[Array[Number, Number, Number]]} ticks
   * 二维数组类型，其中内层数组包含三个元素值，第一个值表示当前Tick的最高价格，第二个表示当前Tick的最低价格，第三个表示当前Tick的收盘价格
   * @return {Object} 返回一个包含k d j属性的对象,每个属性对应的类型为{Array[Number]}
   */
  var kdj = function (ticks) {
    var nineDaysTicks = [], days = 9, rsvs = [];
    var ks = [], ds = [], js = [];
    var lastK, lastD, curK, curD;
    var maxAndMin, max, min;
    for (var i = 0; i < ticks.length; i++) {
      var t = ticks[i], close = t[2];
      nineDaysTicks.push(t);
      maxAndMin = getMaxHighAndMinLow(nineDaysTicks);
      max = maxAndMin[0];
      min = maxAndMin[1];
      if (max == min) {
        rsvs.push(0);
      } else {
        rsvs.push((close - min) / (max - min) * 100);
      }
      if (nineDaysTicks.length == days) {
        nineDaysTicks.shift();
      }
      if (i == 0) {
        lastK = lastD = rsvs[i];
      }
      curK = 2 / 3 * lastK + 1 / 3 * rsvs[i];
      ks.push(curK);
      lastK = curK;

      curD = 2 / 3 * lastD + 1 / 3 * curK;
      ds.push(curD);
      lastD = curD;

      js.push(3 * curK - 2 * curD);
    }
    return {"k": ks, "d": ds, "j": js};
  };
  return {
    "OBV": obv,
    "MACD": macd,
    "KDJ": kdj
  };
})();

if (module) {
  module.exports = Indicator;
}
