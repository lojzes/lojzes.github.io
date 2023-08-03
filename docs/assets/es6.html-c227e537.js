import{_ as a,X as e,Y as i,Z as n,a1 as l,$ as c,a2 as o,C as t}from"./framework-0b23a550.js";const m={},d={class:"hint-container tip"},p=n("p",{class:"hint-container-title"},"参考",-1),v={href:"https://github.com/lojzes/web-study/tree/main/js/es6",target:"_blank",rel:"noopener noreferrer"},r=o(`<h2 id="let-和-const" tabindex="-1"><a class="header-anchor" href="#let-和-const" aria-hidden="true">#</a> let 和 const</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//   var 是变量提升：自动向外定义</span>
 <span class="token comment">//  console.log(a);</span>
 <span class="token comment">//  var a = 10;</span>

 <span class="token comment">// let 不能重复定义</span>

 <span class="token comment">// let.1 提示在变量实例化之前不能使用</span>
 <span class="token comment">// console.log(b);</span>
 <span class="token comment">// let b = 10;</span>

 <span class="token comment">// let.2 块级变量</span>

 <span class="token comment">// if(1===1){</span>
 <span class="token comment">// let c = 0;</span>
 <span class="token comment">// }</span>

 <span class="token comment">// // 报 c is not defined</span>
 <span class="token comment">// console.log(c);</span>

 <span class="token comment">// 经常用在for 循环上</span>

 <span class="token comment">//  for(let i = 0;i &lt; 10 ; i ++){</span>
 <span class="token comment">//   console.log(i);</span>
 <span class="token comment">//  }</span>

 <span class="token comment">// let.3 不会污染全局变量</span>
 <span class="token comment">//  let RegExp = 0</span>
 <span class="token comment">//  console.log(RegExp);</span>

 <span class="token comment">//  console.log(window.RegExp);</span>

 <span class="token comment">// const 拥有let 的特性，并且经常用于定义变量，一旦定义，就不能修改</span>

 <span class="token comment">// const person = {</span>
 <span class="token comment">//   name:&#39;lojzes&#39;</span>
 <span class="token comment">// }</span>

 <span class="token comment">// person.name = &#39;lyy&#39;</span>
 <span class="token comment">// console.log(person.name );</span>
 <span class="token comment">// 但是不能</span>

 <span class="token comment">// Uncaught TypeError: Assignment to constant variable.</span>
 <span class="token comment">// person = {</span>
 <span class="token comment">//   age:20</span>
 <span class="token comment">// }</span>

 <span class="token comment">// 可以这样</span>
 <span class="token comment">// person.age = 30</span>

 <span class="token comment">// console.log(person.age);</span>
 <span class="token comment">// console.log(person);</span>

 <span class="token comment">// 建议，一般使用 const,如果涉及修改变量，则使用let</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 模板字符串</span>

  <span class="token comment">// let name = &#39;lojzes&#39;</span>
  <span class="token comment">// let age = 30</span>

  <span class="token comment">// const str = \`</span>

  <span class="token comment">// 我是 \${name} , 今年 \${age} 岁</span>

  <span class="token comment">// \`</span>
  <span class="token comment">// console.log(str);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  函数</span>
  <span class="token comment">//  函数默认值</span>

  <span class="token comment">// function add (a,b){</span>
  <span class="token comment">//   //  es5 写法</span>
  <span class="token comment">//   a = a || 10</span>
  <span class="token comment">//   b = b || 20;</span>

  <span class="token comment">// return a + b</span>
  <span class="token comment">// }</span>

  <span class="token comment">//  es6 写法</span>
  <span class="token comment">// function add (a = 10,b = 20){</span>
  <span class="token comment">//   return </span>
  <span class="token comment">// }</span>

  <span class="token comment">// console.log(add());</span>

  <span class="token comment">// 剩余参数</span>
  <span class="token comment">// es5 在函数内有一个参数对象 arguments 对象</span>
  <span class="token comment">// function add(... args){</span>
  <span class="token comment">// 循环 1</span>
  <span class="token comment">// for(let i of args){</span>
  <span class="token comment">//   console.log(i)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// 循环 2</span>
  <span class="token comment">// args.forEach(element =&gt; {</span>
  <span class="token comment">//   console.log(element);</span>
  <span class="token comment">// });</span>
  <span class="token comment">// }</span>

  <span class="token comment">// add(1,2,3,4)</span>

  <span class="token comment">// ... 也可以表示扩展运算符</span>
  <span class="token comment">// ... 扩展运算符 是数组内的每项，拆分给函数</span>
  <span class="token comment">//</span>
  <span class="token comment">// const max = Math.max(10,100)</span>
  <span class="token comment">// console.log(max);</span>
  <span class="token comment">//  const arrr = [10,100]</span>
  <span class="token comment">//  console.log(Math.max(...arrr));</span>

  <span class="token comment">// 箭头函数</span>
  <span class="token comment">// function(){} 等价于 （）=&gt;{}</span>

  <span class="token comment">// const add = (a,b) =&gt; {</span>
  <span class="token comment">//   return a + b</span>
  <span class="token comment">// }</span>

  <span class="token comment">// console.log(add(10,10));</span>

  <span class="token comment">// const add = a =&gt; {</span>
  <span class="token comment">//   return a + 10</span>
  <span class="token comment">// }</span>

  <span class="token comment">// console.log(add(10,10));</span>

  <span class="token comment">// const add = a =&gt; (a + 10)</span>
  <span class="token comment">// console.log(add(10,10));</span>

  <span class="token comment">// const add = a =&gt; a</span>
  <span class="token comment">// console.log(add(10));</span>

  <span class="token comment">// 返回对象时，要加上小括号</span>
  <span class="token comment">// const getObj = ()=&gt;({id:1,name:&#39;lojzes&#39;})</span>
  <span class="token comment">// console.log(getObj());</span>

  <span class="token comment">// 箭头函数注意事项：</span>
  <span class="token comment">// 1. 没有作用域链，通常this 向上找，</span>
  <span class="token comment">// 2. 没有 arguments 对象</span>
  <span class="token comment">// 3. 不能使用 new ,即 箭头函数不是一个对象，仅是一个表达式，或者是一个语法糖</span>

  <span class="token comment">// const Person = ()=&gt;{}</span>
  <span class="token comment">// let p = new Person()</span>

  <span class="token comment">// const Person = function(){}</span>
  <span class="token comment">// let p = new Person()</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解构" tabindex="-1"><a class="header-anchor" href="#解构" aria-hidden="true">#</a> 解构</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 解构 针对 数组和对象</span>

  <span class="token comment">// const person = {</span>
  <span class="token comment">//   name:&#39;lojze&#39;,</span>
  <span class="token comment">//   address:{</span>
  <span class="token comment">//     id: 1</span>
  <span class="token comment">//   },</span>
  <span class="token comment">//   sex:[],</span>
  <span class="token comment">//   age:function(){</span>

  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>
  <span class="token comment">// const {name,address,sex,age} = person</span>
  <span class="token comment">// console.log(name,address,sex,age);</span>

  <span class="token comment">// const arr = [1,2,3]</span>
  <span class="token comment">// const [a,b,c] = arr</span>

  <span class="token comment">// console.log(a,b,c);</span>


  <span class="token comment">// 多维数组</span>
  <span class="token comment">// const arr = [1,[1],3]</span>
  <span class="token comment">// const [a,[b],c] = arr</span>

  <span class="token comment">// console.log(a,b,c);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="定义对象简写" tabindex="-1"><a class="header-anchor" href="#定义对象简写" aria-hidden="true">#</a> 定义对象简写</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义对象赋值简写</span>

  <span class="token comment">// const name = &#39;lojzes&#39;</span>
  <span class="token comment">// const age = 30</span>

  <span class="token comment">// // 当属性名称与变量名称相同时，可以把变量省略</span>
  <span class="token comment">// const person = {</span>
  <span class="token comment">//   name,  //  等价于 name:name</span>
  <span class="token comment">//   age,   //  等价于 age:age</span>
  <span class="token comment">//   setName(){  // 等价于 setName:functuion(){}</span>

  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>

  <span class="token comment">// console.log(person);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展对象" tabindex="-1"><a class="header-anchor" href="#扩展对象" aria-hidden="true">#</a> 扩展对象</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 扩展对象</span>
  <span class="token comment">// const person ={}</span>
  <span class="token comment">// person.age = 30</span>

  <span class="token comment">//  </span>
  <span class="token comment">// person[&#39;abc&#39; + 123] = function(){</span>
  <span class="token comment">// console.log(this)</span>
  <span class="token comment">// }</span>

  <span class="token comment">// console.log(person);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象方法" tabindex="-1"><a class="header-anchor" href="#对象方法" aria-hidden="true">#</a> 对象方法</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// 对象方法 </span>

  <span class="token comment">// is 比较 类型和值</span>
  <span class="token comment">// console.log(NaN === NaN);  // false</span>
  <span class="token comment">//  </span>
  <span class="token comment">// console.log(Object.is(NaN,NaN));</span>

  <span class="token comment">//  assgin 浅拷贝 对象合并</span>
  <span class="token comment">// Object.assign(target,...obj})</span>
  <span class="token comment">// const newObj = Object.assign({},{a:1},{b:2})</span>
  <span class="token comment">// console.log(newObj)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol-函数" tabindex="-1"><a class="header-anchor" href="#symbol-函数" aria-hidden="true">#</a> Symbol 函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// Symbol</span>
  <span class="token comment">// 定义的变量独无二</span>

  <span class="token comment">// const name = Symbol(&#39;name&#39;)</span>
  <span class="token comment">// const name2 = Symbol(&#39;name&#39;)</span>

  <span class="token comment">// console.log(name === name2);//false</span>

  <span class="token comment">// 最大用处 ，定义对象私有属性 ，但是无法遍历， Object.keys() 返回空</span>

  <span class="token comment">// const name = Symbol(&#39;name&#39;)</span>
  <span class="token comment">// const person = {}</span>

  <span class="token comment">// person[name] = &#39;lojzes&#39;</span>
  <span class="token comment">// 必须是[] 取值 不能用点</span>
  <span class="token comment">// console.log(person[name]);</span>

  <span class="token comment">// 获取 Symbol 的属性</span>

  <span class="token comment">// let  a = Object.getOwnPropertySymbols(person)</span>
  <span class="token comment">// let a = Reflect.ownKeys(person)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 数据类型</span>
  <span class="token comment">//  set 不重复 有序</span>
  <span class="token comment">// const set = new Set()</span>
  <span class="token comment">// // 添加</span>
  <span class="token comment">// set.add(1)</span>
  <span class="token comment">// set.add(1)</span>
  <span class="token comment">// set.add(&#39;1&#39;)</span>
  <span class="token comment">// set.add(&#39;2&#39;)</span>
  <span class="token comment">// set.add([&#39;a&#39;,&#39;b&#39;,&#39;c&#39;])</span>
  <span class="token comment">// 删除</span>
  <span class="token comment">// set.delete(1)</span>
  <span class="token comment">// //</span>
  <span class="token comment">// set.has(1)</span>

  <span class="token comment">// console.log(set)</span>
  <span class="token comment">// console.log(set.has(1));</span>

  <span class="token comment">// 遍历, set 类型变量，key 和 val 相等</span>
  <span class="token comment">// set.forEach((val,key)=&gt;{</span>
  <span class="token comment">//   console.log(val);</span>
  <span class="token comment">// })</span>

  <span class="token comment">//  数组转set</span>
  <span class="token comment">// const s = new Set([1,2,3])</span>
  <span class="token comment">// console.log(s);</span>
  <span class="token comment">// // set 转 数组</span>
  <span class="token comment">// const arr = [...s]</span>
  <span class="token comment">// console.log(arr);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// map  key 任意类型且有序</span>

  <span class="token comment">// const map = new Map()</span>

  <span class="token comment">// map.set(&#39;name&#39;,&#39;张三&#39;)</span>
  <span class="token comment">// map.set(&#39;age&#39;,20)</span>

  <span class="token comment">// console.log(map.has(&#39;name&#39;));</span>

  <span class="token comment">// console.log(map.get(&#39;name&#39;));</span>

  <span class="token comment">// console.log(map.delete(&#39;name&#39;));</span>
  <span class="token comment">// console.log(map);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Array 方法  from   of</span>

  <span class="token comment">// const a = Array.of(1,2,3,4)</span>
  <span class="token comment">// console.log(a);</span>

  <span class="token comment">//  from 可以将伪数组转换为真数组</span>
  <span class="token comment">//  示例： 比如获取 ul 下面的li ,转换为数组</span>
  <span class="token comment">//  Array.from(&#39;获取li对象&#39;)</span>

  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// 向尾部插入</span>
  a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
  a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span>
  a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  <span class="token comment">// 从头插入</span>
  a<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
  <span class="token comment">// 删除并返回第一个元素</span>
  a<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 删除最后一个元素，并返回</span>
  <span class="token comment">// a.pop()</span>
  <span class="token comment">// console.log(a)</span>

  <span class="token comment">// 找出第一个符合条件的元素</span>
  <span class="token comment">// const el = a.find((a)=&gt;(a &lt; 0))</span>
  <span class="token comment">// console.log(el);</span>

  <span class="token comment">// const index = a.findIndex((a)=&gt;(a &lt; 0))</span>
  <span class="token comment">// console.log(index);</span>

  <span class="token comment">// 遍历</span>
  <span class="token comment">// console.log(a.keys());</span>
  <span class="token comment">// // 遍历index</span>
  <span class="token comment">// for(let index of a.keys()){</span>
  <span class="token comment">// console.log(index);</span>
  <span class="token comment">// }</span>
  <span class="token comment">// // 变量 value</span>
  <span class="token comment">// for(let ele of a.values()){</span>
  <span class="token comment">// console.log(ele);</span>
  <span class="token comment">// }</span>
  <span class="token comment">//</span>

  <span class="token comment">// for(let [index,value] of a.entries()){</span>
  <span class="token comment">// console.log(index , value);</span>
  <span class="token comment">// }</span>

  <span class="token comment">//  是否包含 : 包含返回 true 不包含返回 false</span>
  <span class="token comment">// console.log(a.includes(1));</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Promise</span>
  <span class="token comment">//  提供异步编程能力，有三个状态  pending(执行中)  resolve(成功)  rejected(失败)</span>
  <span class="token comment">// 成功与失败会保存到 Promise 容器内，同 then 获取结果</span>

  <span class="token comment">// const pro = new Promise(function (resolve, rejected) {</span>
  <span class="token comment">//   // 模拟后端数据</span>
  <span class="token comment">//   let obj = {}</span>

  <span class="token comment">//   setTimeout(() =&gt; {</span>
  <span class="token comment">//     obj = {</span>
  <span class="token comment">//       code: 201,</span>
  <span class="token comment">//       msg: &#39;成功&#39;,</span>
  <span class="token comment">//       data: {</span>
  <span class="token comment">//         id: 1,</span>
  <span class="token comment">//         name: &#39;lojzes&#39;</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//     //</span>
  <span class="token comment">//     if (obj.code === 200) {</span>
  <span class="token comment">//       resolve(obj)</span>
  <span class="token comment">//     } else {</span>
  <span class="token comment">//       rejected(&#39;失败&#39;)</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   }, 5000)</span>
  <span class="token comment">// })</span>

  <span class="token comment">// pro.then((success) =&gt; {</span>
  <span class="token comment">//   // 成功返回</span>
  <span class="token comment">//   console.log(success)</span>
  <span class="token comment">// }, (error) =&gt; {</span>
  <span class="token comment">//   // 失败返回</span>
  <span class="token comment">//   console.log(error);</span>
  <span class="token comment">// })</span>

  <span class="token comment">// 一般使用</span>

  <span class="token comment">// function request(timeOut) {</span>
  <span class="token comment">//   return new Promise(function (resolve, rejected) {</span>
  <span class="token comment">//     let obj = {}</span>
  <span class="token comment">//     setTimeout(() =&gt; {</span>
  <span class="token comment">//       obj = {</span>
  <span class="token comment">//         code: 201,</span>
  <span class="token comment">//         msg: &#39;成功&#39;,</span>
  <span class="token comment">//         data: {</span>
  <span class="token comment">//           id: 1,</span>
  <span class="token comment">//           name: &#39;lojzes&#39;</span>
  <span class="token comment">//         }</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//       //</span>
  <span class="token comment">//       if (obj.code === 200) {</span>
  <span class="token comment">//         resolve(obj)</span>
  <span class="token comment">//       } else {</span>
  <span class="token comment">//         rejected(&#39;失败&#39;)</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//     }, timeOut)</span>
  <span class="token comment">//   });</span>
  <span class="token comment">// }</span>
  <span class="token comment">// </span>
  <span class="token comment">// request(5000).then((success) =&gt; {</span>
  <span class="token comment">//   // 成功返回</span>
  <span class="token comment">//   console.log(success)</span>
  <span class="token comment">// }, (error) =&gt; {</span>
  <span class="token comment">//   // 失败返回</span>
  <span class="token comment">//   console.log(error);</span>
  <span class="token comment">// })</span>

  <span class="token comment">// request(5000).then((success) =&gt; {</span>
  <span class="token comment">//   // 成功返回</span>
  <span class="token comment">//   console.log(success)</span>
  <span class="token comment">// }).catch((err)=&gt;{</span>
  <span class="token comment">//   console.log(err);</span>
  <span class="token comment">// })</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> async</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  async  把函数转换为 promise </span>
  <span class="token comment">//  await 只能在 async 内部使用</span>
  <span class="token comment">// async function add(){</span>
  <span class="token comment">//    return await &#39;hello world&#39;</span>
  <span class="token comment">// }</span>

  <span class="token comment">// async function add(){</span>
  <span class="token comment">//    throw new Error(&#39;出错了&#39;)</span>
  <span class="token comment">// }</span>

  <span class="token comment">// 只要一个await 失败，后面都不执行，可以通过 try catch 解决</span>
  <span class="token comment">// async function add(){</span>
  <span class="token comment">//    await Promise.reject(&#39;失败&#39;)</span>
  <span class="token comment">//    await Promise.resolve(&#39;成功&#39;)</span>
  <span class="token comment">// }</span>

  <span class="token comment">// async function add() {</span>
  <span class="token comment">//   try {</span>
  <span class="token comment">//     await Promise.reject(&#39;失败&#39;)</span>
  <span class="token comment">//   } catch (error) {</span>
  <span class="token comment">//   }</span>
  <span class="token comment">//   return Promise.resolve(&#39;成功&#39;)</span>
  <span class="token comment">// }</span>

  <span class="token comment">// add().then(success =&gt; console.log(success)).catch(err =&gt; console.log(err))</span>
  <span class="token comment">//.finaly{//不管成功还是失败，都会执行}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  class</span>
  <span class="token comment">//  es5 定义类</span>

  <span class="token comment">// function Person(name,age){</span>
  <span class="token comment">//   this.name = name</span>
  <span class="token comment">//   this.age = age</span>
  <span class="token comment">// }</span>

  <span class="token comment">//   //  添加方法</span>
  <span class="token comment">// Person.prototype.sayName = function(){</span>
  <span class="token comment">//   console.log(this.name)</span>
  <span class="token comment">// }</span>

  <span class="token comment">// Person.prototype.sayAge = function(){</span>
  <span class="token comment">//   console.log(this.age)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// let person = new Person(&#39;lojzes&#39;,30)</span>

  <span class="token comment">// console.log(person)</span>

  <span class="token comment">// person.sayName()</span>
  <span class="token comment">// person.sayAge()</span>

  <span class="token comment">// es6</span>
  <span class="token comment">// class Person{</span>

  <span class="token comment">//    constructor(name,age){</span>
  <span class="token comment">//       this.name = name</span>
  <span class="token comment">//       this.age = age</span>
  <span class="token comment">//    }</span>

  <span class="token comment">//    sayName(){</span>
  <span class="token comment">//       console.log(this.name);</span>
  <span class="token comment">//    }</span>

  <span class="token comment">// }</span>
  <span class="token comment">// // 添加方法</span>
  <span class="token comment">// Object.assign(Person.prototype,{</span>
  <span class="token comment">//   sayAge(){</span>
  <span class="token comment">//     console.log(this.age);</span>
  <span class="token comment">//    }</span>
  <span class="token comment">// })</span>

  <span class="token comment">// const peron = new Person(&#39;lojzes&#39;,30)</span>
  <span class="token comment">// console.log(peron);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">//  继承</span>
  <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">sayAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span><span class="token punctuation">{</span>

   <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age<span class="token punctuation">,</span>color</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color
   <span class="token punctuation">}</span>
   <span class="token function">sayColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">&#39;小黄&#39;</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token string">&#39;黄色&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h3><p>导出：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;lojzes&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">30</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;hello &#39;</span> <span class="token operator">+</span> name
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">address</span><span class="token operator">:</span><span class="token string">&#39;beijing&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 默认导出只能是有一个</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> obj

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> es6 module <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token comment">// script  type=&quot;module&quot;&gt;</span>

    <span class="token comment">// import obj,{name,age,sayName} from &#39;./js/sys.js&#39;</span>
    <span class="token comment">// console.log(name, age);</span>

    <span class="token comment">// console.log(sayName());</span>
    <span class="token comment">// console.log(obj);</span>

    <span class="token comment">// 导出所有</span>
    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span>  obj <span class="token keyword">from</span> <span class="token string">&#39;./js/sys.js&#39;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function u(b,k){const s=t("ExternalLinkIcon");return e(),i("div",null,[n("div",d,[p,n("p",null,[n("a",v,[l(" 源码 "),c(s)])])]),r])}const h=a(m,[["render",u],["__file","es6.html.vue"]]);export{h as default};
