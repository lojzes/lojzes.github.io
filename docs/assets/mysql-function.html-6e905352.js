import{_ as a,X as t,Y as r,Z as e,a1 as s,$ as o,a2 as c,C as d}from"./framework-0b23a550.js";const i={},h={class:"hint-container info"},l=e("p",{class:"hint-container-title"},"参考",-1),N={href:"https://juejin.cn/post/6844903977830580231",target:"_blank",rel:"noopener noreferrer"},_=c(`<h2 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h2><p>聚合函数是平时比较常用的一类函数，这里列举如下：</p><pre><code>COUNT(col)   统计查询结果的行数
MIN(col)   查询指定列的最小值
MAX(col)   查询指定列的最大值
SUM(col)   求和，返回指定列的总和
AVG(col)   求平均值，返回指定列数据的平均值
</code></pre><h2 id="数值型函数" tabindex="-1"><a class="header-anchor" href="#数值型函数" aria-hidden="true">#</a> 数值型函数</h2><pre><code>ROUND(x,y)   返回参数x的四舍五入的有y位小数的值 
TRUNCATE(x,y)   返回数字x截短为y位小数的结果 
</code></pre><h2 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数" aria-hidden="true">#</a> 字符串函数</h2><pre><code>LENGTH(s)   计算字符串长度函数，返回字符串的字节长度
CONCAT(s1,s2...,sn)   合并字符串函数，返回结果为连接参数产生的字符串，参数可以是一个或多个 

LOWER(str)   将字符串中的字母转换为小写
UPPER(str)   将字符串中的字母转换为大写 

TRIM(str)   删除字符串左右两侧的空格 

REPLACE   字符串替换函数，返回替换后的新字符串
SUBSTRING   截取字符串，返回从指定位置开始的指定长度的字符换 
</code></pre><h2 id="日期和时间函数" tabindex="-1"><a class="header-anchor" href="#日期和时间函数" aria-hidden="true">#</a> 日期和时间函数</h2><h2 id="流程控制函数" tabindex="-1"><a class="header-anchor" href="#流程控制函数" aria-hidden="true">#</a> 流程控制函数</h2><pre><code>IF(test,t,f)   如果test是真，返回t；否则返回f

IFNULL(arg1,arg2)   如果arg1不是空，返回arg1，否则返回arg2 

NULLIF(arg1,arg2)   如果arg1=arg2返回NULL；否则返回arg1

CASE WHEN[test1] THEN [result1]...ELSE [default] END   
如果testN是真，则返回resultN，否则返回default

CASE [test] WHEN[val1] THEN [result]...ELSE [default]END   
如果test和valN相等，则返回resultN，否则返回default
</code></pre>`,10);function f(u,p){const n=d("ExternalLinkIcon");return t(),r("div",null,[e("div",h,[l,e("p",null,[e("a",N,[s(" MySQL常用函数介绍 "),o(n)])])]),_])}const x=a(i,[["render",f],["__file","mysql-function.html.vue"]]);export{x as default};
