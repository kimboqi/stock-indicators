## Functions

<dl>
<dt><a href="#OBV">OBV(ticks)</a> ⇒ <code>Array</code></dt>
<dd><p>计算obv指标</p>
</dd>
<dt><a href="#MACD">MACD(ticks)</a> ⇒ <code>Object</code></dt>
<dd><p>计算macd指标,快速和慢速移动平均线的周期分别取12和26</p>
</dd>
<dt><a href="#KDJ">KDJ(ticks)</a> ⇒ <code>Object</code></dt>
<dd><p>计算kdj指标,rsv的周期为9日</p>
</dd>
<dt><a href="#BOLL">BOLL(ticks)</a> ⇒ <code>Object</code></dt>
<dd><p>计算boll指标,ma的周期为20日</p>
</dd>
<dt><a href="#RSI">RSI(ticks)</a> ⇒ <code>Object</code></dt>
<dd><p>计算rsi指标,分别返回以6日，12日，24日为参考基期的RSI值</p>
</dd>
</dl>

<a name="OBV"></a>

## OBV(ticks) ⇒ <code>Array</code>
计算obv指标

**Kind**: global function  
**Returns**: <code>Array</code> - obvs  

| Param | Type | Description |
| --- | --- | --- |
| ticks | <code>Array</code> | ticks为二维数组类型，其中内层数组第一个值为收盘价，第二个值为成交量 |

<a name="MACD"></a>

## MACD(ticks) ⇒ <code>Object</code>
计算macd指标,快速和慢速移动平均线的周期分别取12和26

**Kind**: global function  
**Returns**: <code>Object</code> - 返回一个包含diffs deas bars属性的对象,每个属性对应的类型为{Array[Number]}  

| Param | Type | Description |
| --- | --- | --- |
| ticks | <code>Array</code> | 一维数组类型，每个元素为tick的收盘价格 |

<a name="KDJ"></a>

## KDJ(ticks) ⇒ <code>Object</code>
计算kdj指标,rsv的周期为9日

**Kind**: global function  
**Returns**: <code>Object</code> - 返回一个包含k d j属性的对象,每个属性对应的类型为{Array[Number]}  

| Param | Type | Description |
| --- | --- | --- |
| ticks | <code>Array</code> | 二维数组类型，其中内层数组包含三个元素值，第一个值表示当前Tick的最高价格，第二个表示当前Tick的最低价格，第三个表示当前Tick的收盘价格 |

<a name="BOLL"></a>

## BOLL(ticks) ⇒ <code>Object</code>
计算boll指标,ma的周期为20日

**Kind**: global function  
**Returns**: <code>Object</code> - 返回一个包含upper mid lower属性的对象,每个属性对应的类型为{Array[Number]}  

| Param | Type | Description |
| --- | --- | --- |
| ticks | <code>Array</code> | 一维数组类型，每个元素为当前Tick的收盘价格 |

<a name="RSI"></a>

## RSI(ticks) ⇒ <code>Object</code>
计算rsi指标,分别返回以6日，12日，24日为参考基期的RSI值

**Kind**: global function  
**Returns**: <code>Object</code> - 返回一个包含rsi6 rsi12 rsi24属性的对象,每个属性对应的类型为{Array[Number]}  

| Param | Type | Description |
| --- | --- | --- |
| ticks | <code>Array</code> | 一维数组类型，每个元素为当前Tick的收盘价格 |

