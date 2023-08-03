import{_ as a,X as e,Y as i,Z as n,a1 as t,$ as p,a2 as c,C as l}from"./framework-0b23a550.js";const o={},u={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"源码连续地址",-1),r={href:"https://github.com/lojzes/css_mm_4e",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="过度" tabindex="-1"><a class="header-anchor" href="#过度" aria-hidden="true">#</a> 过度</h2><p>//TODO</p><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2><p>CSS 还提供了一种创建动画的机制，而且功能更丰富。CSS 过渡只能把一系列 CSS 属性从一个状态变到另一个状态。CSS 动画则能把一系列 CSS 属性从一个状态变到另一个状态，再变到第三个状态，然后一直这么变下去。此外，还能重播动画访客把鼠标移到动画上时暂停动画，甚至在动画结束时还能倒播动画。 CSS 动画比过渡复杂一些，不过有个额外的好处:无需触发就能开始播放动画。我们可以在:hover 状态中添加动画，当鼠标移到元素上时开始播放，也可以在加载页面时开始播放动画。访客初次访问网站时，可以使用这种动画效果，把访客的注意力吸引到横幅或徽标上。</p><p>创建动画的过程分成以下两步: 定义动画。 设置关键帧，列出要变化的 CSS 属性 把动画应用到元素上 定义好动画之后，可以把动画应用到页面中任意个元素上。而且，可以分别为每个元素设置时序、延迟和其他动画属性。因此，在页面中可以多次使用设置稍微不同的同一个动画。</p><h3 id="定义动画" tabindex="-1"><a class="header-anchor" href="#定义动画" aria-hidden="true">#</a> 定义动画</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* aniColor 动画名称 */</span>
<span class="token atrule"><span class="token rule">@keyframes</span> aniColor</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> aniColor</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* 动画播放到50% 时，显示蓝色 */</span>
  <span class="token selector">50%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> aniColor</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* 动画播放到20% 到 90% 之间显示蓝色 */</span>
  <span class="token selector">20%,
  90%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*动画播放到20%时，显示蓝色，40% 时，显示橘黄色，60%时显示蓝色，80%时，显示橘黄色  */</span>
<span class="token atrule"><span class="token rule">@keyframes</span> aniColor</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">20%,
  60%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">40%,
  80%</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用动画" tabindex="-1"><a class="header-anchor" href="#使用动画" aria-hidden="true">#</a> 使用动画</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.ani</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px black solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.ani:hover</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> aniColor 2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一个元素可以使用多个动画" tabindex="-1"><a class="header-anchor" href="#一个元素可以使用多个动画" aria-hidden="true">#</a> 一个元素可以使用多个动画</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">animation-name</span><span class="token punctuation">:</span> fadeIn<span class="token punctuation">,</span> blink<span class="token punctuation">;</span>
<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">,</span> 3s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置动画的时序" tabindex="-1"><a class="header-anchor" href="#设置动画的时序" aria-hidden="true">#</a> 设置动画的时序</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.ani:hover</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> aniColor 2s<span class="token punctuation">;</span>
  <span class="token comment">/* 动画时序 */</span>
  <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="延迟动画" tabindex="-1"><a class="header-anchor" href="#延迟动画" aria-hidden="true">#</a> 延迟动画</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.ani:hover</span> <span class="token punctuation">{</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> aniColor 2s<span class="token punctuation">;</span>
  <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
  <span class="token comment">/* 延迟动画 */</span>
  <span class="token property">animation-delay</span><span class="token punctuation">:</span> 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动画播放次数" tabindex="-1"><a class="header-anchor" href="#动画播放次数" aria-hidden="true">#</a> 动画播放次数</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.ani:hover</span><span class="token punctuation">{</span>
       <span class="token property">animation</span><span class="token punctuation">:</span> aniColor 2s<span class="token punctuation">;</span>
       <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in<span class="token punctuation">;</span>
       <span class="token property">animation-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
       <span class="token comment">/* 动画播放3次， infinite 无限次*/</span>
       <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>




<span class="token comment">/* 播放两次 第二次倒着播放 */</span>
 <span class="token selector">.ani:hover</span><span class="token punctuation">{</span>
       <span class="token property">animation</span><span class="token punctuation">:</span> aniColor 2s<span class="token punctuation">;</span>
       <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
       <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果多次运行动画之后想回到最初的状态，把运行次数设为奇数，并把animation-direction属性的值设为alternate。</p></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
    <span class="token selector">.ani:hover</span><span class="token punctuation">{</span>
       <span class="token property">animation</span><span class="token punctuation">:</span> aniColor 2s<span class="token punctuation">;</span>
       <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>
       <span class="token comment">/* 动画显示结束的样子 */</span>
       <span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> forwards<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="animation-简写" tabindex="-1"><a class="header-anchor" href="#animation-简写" aria-hidden="true">#</a> animation 简写</h3><h3 id="暂停动画" tabindex="-1"><a class="header-anchor" href="#暂停动画" aria-hidden="true">#</a> 暂停动画</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">fade:hover</span> <span class="token punctuation">{</span>
<span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function k(m,b){const s=l("ExternalLinkIcon");return e(),i("div",null,[n("div",u,[d,n("p",null,[n("a",r,[t("https://github.com/lojzes/css_mm_4e"),p(s)])])]),v])}const g=a(o,[["render",k],["__file","css动画.html.vue"]]);export{g as default};
