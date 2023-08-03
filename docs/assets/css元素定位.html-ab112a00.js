import{_ as e,X as a,Y as i,Z as n,a1 as t,$ as c,a2 as l,C as o}from"./framework-0b23a550.js";const d={},p={class:"hint-container tip"},r=n("p",{class:"hint-container-title"},"源码连续地址",-1),u={href:"https://github.com/lojzes/css_mm_4e",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="定位-position" tabindex="-1"><a class="header-anchor" href="#定位-position" aria-hidden="true">#</a> 定位 position</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">header h1</span> <span class="token punctuation">{</span>
  <span class="token comment">/*
    relative : 相对于自身，移动元素时，原来的位置会留空
    absolute  :脱离文档流,相对于最近的祖辈（父辈）元素定位
    fixed ：脱离文档流
    sticky
    static :常规定位，不使用
    */</span>
  <span class="token property">position</span><span class="token punctuation">:</span> static<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>不要试图在一个样式中同时使用 float 属性和静态定位 (下面会讲到)或相对定位之外的定位类型。float 属性与绝对定位和固定定位不能同时应用到一个元素上。</p></div><div class="hint-container warning"><p class="hint-container-title">设置高度时，要多注意</p><p>定位的元素也有第 7 章“计算盒子的真实宽度和高度”一节提到的问题，因此设置元素的高度时要小心。除了高度既定的图形，<u><em><strong>页面中任何元素的高度都无法确定</strong></em></u>。如果把一个侧边栏的高度设为 200 像素，但是在里面放了好多文本和图片，导致高度超过了 200 像素，那么内容会从侧边栏中溢出。即便你确定所设的高度能放得下内容，访客也有可能增大浏览器的字号，把文本变大，导致溢出。此外，如果在样式中指定宽度和高度，而元素里的内容太宽或太高，会出现奇怪的事情。</p></div><h3 id="绝对定位-absolute" tabindex="-1"><a class="header-anchor" href="#绝对定位-absolute" aria-hidden="true">#</a> 绝对定位 absolute</h3><p>使用绝对定位在页面中放置元素时，元素的具体位置取决于外层元素的定位方式。下面简要说明有关规则:</p><ul><li>如果绝对定位一个标签，而且那个标签<u>没有使用绝对定位、相对定位或固定定位的另一个标签中</u>，其位置<u>相对于浏览器窗口</u>而定。</li><li>如果标签在使用<u>绝对定位、相对定位或固定定位</u>的另一个标签中，其位置相<u>对于那个元素的边界而定</u></li></ul><h3 id="相对定位-relative" tabindex="-1"><a class="header-anchor" href="#相对定位-relative" aria-hidden="true">#</a> 相对定位 relative</h3><p>相对定位更好的使用方式是，<u>为嵌套的标签创建新的定位上下文</u>。例如，在本节开头那个例子中，<code>&lt;h1&gt;</code>标签是<code>&lt;img&gt;</code>标签的祖辈。把<code>&lt;h1&gt;</code>标签的定位方式设为 relative 之后，绝对定位的<code>&lt;img&gt;</code>标签相对于<code>&lt;h1&gt;</code>标签的四边而言，而不是相对于浏览器窗口。相应的 CSS 如下所示:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token selector">h1 img</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> o<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>因为通常只使用相对定位创建新的定位上下文，所以甚至无需设置上下左右的距离。上例中，<code>&lt;h1&gt;</code>标签的样式中有position: relative，但是没有设置left、top.right和bottom属性。</p></div><h3 id="叠放元素-z-index-实现" tabindex="-1"><a class="header-anchor" href="#叠放元素-z-index-实现" aria-hidden="true">#</a> 叠放元素（z-index 实现）</h3><p>使用绝对定位时，会有叠放问题，可以通过 <code>z-index</code> 控制叠放顺序</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 值越大，越在上 */</span>
<span class="token property">z-index</span><span class="token punctuation">:</span> 1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐藏、显示元素" tabindex="-1"><a class="header-anchor" href="#隐藏、显示元素" aria-hidden="true">#</a> 隐藏、显示元素</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* hidden 消失，但是页面会留空 */</span>
<span class="token property">visibility</span><span class="token punctuation">:</span>visible

<span class="token comment">/* block    完全消失，页面不会留空*/</span>
<span class="token property">display</span><span class="token punctuation">:</span>none

<span class="token comment">/* 透明度 1：显示  0：完全透明不显示*/</span>
<span class="token property">opacity</span><span class="token punctuation">:</span>0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function m(h,b){const s=o("ExternalLinkIcon");return a(),i("div",null,[n("div",p,[r,n("p",null,[n("a",u,[t("https://github.com/lojzes/css_mm_4e"),c(s)])])]),v])}const g=e(d,[["render",m],["__file","css元素定位.html.vue"]]);export{g as default};
