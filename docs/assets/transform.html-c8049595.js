import{_ as e,X as p,Y as c,Z as n,a1 as a,$ as t,a2 as o,C as i}from"./framework-b6ea3384.js";const l="/assets/rotate-1-e475d024.png",r="/assets/scale-1-4cb79135.png",u="/assets/transform-origin-9984309e.png",d={},v={class:"hint-container info"},m=n("p",{class:"hint-container-title"},"源码连续地址",-1),k={href:"https://github.com/lojzes/css_mm_4e",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"css 变型，使用的都是 transform",-1),h={class:"hint-container tip"},f=n("p",{class:"hint-container-title"},"动画设计、例子",-1),g={href:"https://westciv.com/tools/3Dtransforms/index.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://3dtransforms.desandro.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://davidwalsh.name/css-flip",target:"_blank",rel:"noopener noreferrer"},y=o(`<h2 id="旋转角度" tabindex="-1"><a class="header-anchor" href="#旋转角度" aria-hidden="true">#</a> 旋转角度</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 角度整数 顺时针旋转  负数逆时针旋转 */</span>
<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>90deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+`" alt="" loading="lazy"></p><h2 id="缩放" tabindex="-1"><a class="header-anchor" href="#缩放" aria-hidden="true">#</a> 缩放</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 缩放原来的2倍  0：隐藏 */</span>
<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 宽缩小原来的2倍，高度是原理的2倍 */</span>
<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">,</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 使用横向scalX scalY 方向函数 */</span>
<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 上下左右 对倒 */</span>
<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>-1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 下面两个，看效果 */</span>
<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>-1<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">,</span> -1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="" loading="lazy"></p><h2 id="平移" tabindex="-1"><a class="header-anchor" href="#平移" aria-hidden="true">#</a> 平移</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* translate 向水平方向移动 向纵向平移 */</span>
<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>20px<span class="token punctuation">,</span> 20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 使用函数 translateY translateX*/</span>
<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="倾斜" tabindex="-1"><a class="header-anchor" href="#倾斜" aria-hidden="true">#</a> 倾斜</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 横向 纵向  同时倾斜 */</span>

<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>25deg<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 25deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.trans1:hover</span> <span class="token punctuation">{</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>25deg<span class="token punctuation">,</span> 10deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="圆点" tabindex="-1"><a class="header-anchor" href="#圆点" aria-hidden="true">#</a> 圆点</h2><p>正常情况下，变形元素时，Web 浏览器以元素的中心点作为变形的原点。例如，旋转元素时，浏览器绕着元素的中心点旋转元素 (如图 10-7 左边) 。不过，CSS 允许使用 transform-origin 属性修改变形原点。这个属性与 background-position 属性 (参见第 8 章“定位背景图”一节)类似，可以使用关键字、像素绝对值，以及 em 和百分比相对值</p><p><img src="`+u+`" alt="" loading="lazy"></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 第二张图 */</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>

<span class="token comment">/* 第三张图 */</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> right bottom<span class="token punctuation">;</span>
<span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>transform-origin 属性对只使用 translate 函数移动的元素没有效果</p></div>`,15);function w(z,Y){const s=i("ExternalLinkIcon");return p(),c("div",null,[n("div",v,[m,n("p",null,[n("a",k,[a("https://github.com/lojzes/css_mm_4e"),t(s)])])]),b,n("div",h,[f,n("p",null,[n("a",g,[a("https://westciv.com/tools/3Dtransforms/index.html"),t(s)])]),n("p",null,[n("a",_,[a("https://3dtransforms.desandro.com/"),t(s)])]),n("p",null,[n("a",x,[a("https://davidwalsh.name/css-flip"),t(s)])])]),y])}const V=e(d,[["render",w],["__file","transform.html.vue"]]);export{V as default};
