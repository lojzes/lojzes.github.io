import{_ as a,X as t,Y as p,Z as n,a1 as e,$ as i,a2 as l,C as c}from"./framework-b6ea3384.js";const o="/assets/float-2-53436a5b.png",u="/assets/float-1-78f47be2.png",d={},r={class:"hint-container info"},v=n("p",{class:"hint-container-title"},"源码连续地址",-1),k={href:"https://github.com/lojzes/css_mm_4e",target:"_blank",rel:"noopener noreferrer"},m=l('<h2 id="基于浮动的布局" tabindex="-1"><a class="header-anchor" href="#基于浮动的布局" aria-hidden="true">#</a> 基于浮动的布局</h2><h3 id="文档顺序" tabindex="-1"><a class="header-anchor" href="#文档顺序" aria-hidden="true">#</a> 文档顺序</h3><div class="hint-container tip"><p class="hint-container-title">基于浮动的布局</p><p>用float布局，需要注意正常文档的顺序,如下所示</p></div><p><img src="'+o+`" alt="" loading="lazy"></p><h3 id="使用box-sizing属性避免浮动的元素下坠" tabindex="-1"><a class="header-anchor" href="#使用box-sizing属性避免浮动的元素下坠" aria-hidden="true">#</a> 使用box-sizing属性避免浮动的元素下坠</h3><p>浮动下坠的罪魁祸首是浏览器计算屏幕上元素真实宽度的古怪方式。例如，把元素的宽度设为100像素，可是浏览器会绘制成122像素宽，因为还为元素添加了10像素左右内边距和1像素边框。幸好有一个CSS属性能规避这个头疼的问题 (也不用计算了)。</p><ul><li>CSS的box-sizing属性用于告诉Web浏览器，使用其他模型计算元素在屏幕上的真实宽度。这个属性的值是下面三个之一:</li><li>content-box是浏览器的正常模型:元素在屏幕上的宽度等于左右边框的宽度加上左右内边距，再加上CSS的width属性值</li><li>box-sizing: content-box;</li><li>padding-box告诉浏览器把左右内边距算在内。也就是说，元素的显示宽度等于CSS的width属性值加上左右内边距。不包含元素周围的边框。box-sizing: padding-box;</li><li>border-box把内边距、边框和CSS的width属性都算在内。一般来说，使用这个值最好。设为这个值时，计算变简单了，而且能避免浮动下坠问题。使用百分比设置分栏宽度，但是使用像素值设置边框宽度和内边距时，尤其适合使用这个值。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* reset browser styles */</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ol</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> decimal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 1.4em<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> square<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 清除浮动 */</span>
<span class="token selector">.clear:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clear</span> <span class="token punctuation">{</span>
  <span class="token property">zoom</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>93<span class="token punctuation">,</span> 43<span class="token punctuation">,</span> 78<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>
    right<span class="token punctuation">,</span>
    <span class="token function">rgb</span><span class="token punctuation">(</span>93<span class="token punctuation">,</span> 43<span class="token punctuation">,</span> 78<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">rgb</span><span class="token punctuation">(</span>8<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 50<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token property">padding-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">nav</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>25<span class="token punctuation">,</span> 25<span class="token punctuation">,</span> 25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav li</span> <span class="token punctuation">{</span>
  <span class="token comment">/* float: left; */</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav a</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 1px dashed <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.75<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav li:last-of-type a</span> <span class="token punctuation">{</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">nav a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>93<span class="token punctuation">,</span> 43<span class="token punctuation">,</span> 78<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">aside h2</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.3em<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">aside h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.1em<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">aside p,
aside li</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.75em<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main h2</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.main p</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">footer</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 10px 30px 10px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>204<span class="token punctuation">,</span> 204<span class="token punctuation">,</span> 204<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">footer a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* add tutorial styles below here */</span>
<span class="token selector">.sidebar1</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 20px 0 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 20px 0 20px<span class="token punctuation">;</span>
  <span class="token property">border-left</span><span class="token punctuation">:</span> dashed 1px <span class="token function">rgb</span><span class="token punctuation">(</span>153<span class="token punctuation">,</span> 153<span class="token punctuation">,</span> 153<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> dashed 1px <span class="token function">rgb</span><span class="token punctuation">(</span>153<span class="token punctuation">,</span> 153<span class="token punctuation">,</span> 153<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar2</span> <span class="token punctuation">{</span>
  <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0 10px 0 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">footer</span> <span class="token punctuation">{</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">nav ul,
header h1,
footer p,
.contentWrapper</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageWrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>About The Book<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CSS Properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CSS Tips<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>CSS Gotchas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Contact Us<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>CSS: The Missing Manual<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contentWrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- first sidebar goes here --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sidebar1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Sidebar 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante quis
            felis fringilla condimentum. Aenean orci ante, venenatis non
            adipiscing vitae, fringilla et neque. In pharetra, eros imperdiet
            luctus imperdiet, nunc sem pharetra mi, vel faucibus elit risus id
            tortor.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Secondary Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante quis
            felis fringilla condimentum.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Secondary Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante quis
            felis fringilla condimentum.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- main content goes here --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Article Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante quis
            felis fringilla condimentum. Aenean orci ante, venenatis non
            adipiscing vitae, fringilla et neque. In pharetra, eros imperdiet
            luctus imperdiet, nunc sem pharetra mi, vel faucibus elit risus id
            tortor. Suspendisse vitae quam lorem, in tempus velit. Sed vitae
            ante quis felis fringilla condimentum.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Aenean orci ante, venenatis non adipiscing vitae, fringilla et
            neque. In pharetra, eros imperdiet luctus imperdiet, nunc sem
            pharetra mi, vel faucibus elit risus id tortor.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante quis
            felis fringilla condimentum. Aenean orci ante, venenatis non
            adipiscing vitae, fringilla et neque. In pharetra, eros imperdiet
            luctus imperdiet, nunc sem pharetra mi, vel faucibus elit risus id
            tortor. Suspendisse vitae quam lorem, in tempus velit. Sed vitae
            ante quis felis fringilla condimentum.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Subheading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante quis
            felis fringilla condimentum. Aenean orci ante, venenatis non
            adipiscing vitae, fringilla et neque. In pharetra, eros imperdiet
            luctus imperdiet, nunc sem pharetra mi, vel faucibus elit risus id
            tortor. Suspendisse vitae quam lorem, in tempus velit. Sed vitae
            ante quis felis fringilla condimentum.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Subheading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante quis
            felis fringilla condimentum. Aenean orci ante, venenatis non
            adipiscing vitae, fringilla et neque. In pharetra, eros imperdiet
            luctus imperdiet, nunc sem pharetra mi, vel faucibus elit risus id
            tortor. Suspendisse vitae quam lorem, in tempus velit. Sed vitae
            ante quis felis fringilla condimentum. Aenean orci ante, venenatis
            non adipiscing vitae, fringilla et neque. In pharetra, eros
            imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus elit
            risus id tortor. Suspendisse vitae quam lorem, in tempus velit. Sed
            vitae ante quis felis fringilla condimentum. Aenean orci ante,
            venenatis non adipiscing vitae, fringilla et neque. In pharetra,
            eros imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus
            elit risus id tortor. Suspendisse vitae quam lorem, in tempus velit.
            Sed vitae ante quis felis fringilla condimentum. Aenean orci ante,
            venenatis non adipiscing vitae, fringilla et neque. In pharetra,
            eros imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus
            elit risus id tor
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- second sidebar goes here --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sidebar2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Sidebar 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Aenean orci ante<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Venenatis non adipiscing vita<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Fringilla et neque<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Aenean orci ante<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Venenatis non adipiscing vita<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Fringilla et neque<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Suspendisse vitae quam lorem, in tempus velit. Sed vitae ante quis
            felis fringilla condimentum. Aenean orci ante, venenatis non
            adipiscing vitae, fringilla et neque. In pharetra, eros imperdiet
            luctus imperdiet, nunc sem pharetra mi, vel faucibus elit risus id
            tortor.Suspendisse vitae quam lorem, in tempus velit.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
            Sed vitae ante quis felis fringilla condimentum. Aenean orci ante,
            venenatis non adipiscing vitae, fringilla et neque. In pharetra,
            eros imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus
            elit risus id tortor.Suspendisse vitae quam lorem, in tempus velit.
            Sed vitae ante quis felis fringilla condimentum. Aenean orci ante,
            venenatis non adipiscing vitae, fringilla et neque. In pharetra,
            eros imperdiet luctus imperdiet, nunc sem pharetra mi, vel faucibus
            elit risus id tortor.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
          Copyright 2015, Greek Text Generator, Inc. Suspendisse vitae quam
          lorem, in tempus velit. Sed vitae ante quis felis fringilla
          condimentum. Aenean orci ante, venenatis non adipiscing vitae,
          fringilla et neque. In pharetra, eros imperdiet luctus imperdiet, nunc
          sem pharetra mi, vel faucibus elit risus id tortor.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Contact: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mailto:nobody@nowhere.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>e-mail@here.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面效果</p><p><img src="`+u+'" alt="" loading="lazy"></p>',11);function b(g,h){const s=c("ExternalLinkIcon");return t(),p("div",null,[n("div",r,[v,n("p",null,[n("a",k,[e("https://github.com/lojzes/css_mm_4e"),i(s)])])]),m])}const q=a(d,[["render",b],["__file","css布局.html.vue"]]);export{q as default};
