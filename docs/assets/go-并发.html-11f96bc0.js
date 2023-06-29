import{_ as e,X as o,Y as p,Z as n,a1 as a,$ as t,a2 as c,C as i}from"./framework-b6ea3384.js";const l={},u={class:"hint-container info"},r=n("p",{class:"hint-container-title"},"参考",-1),d={href:"https://chai2010.cn/advanced-go-programming-book/ch1-basic/ch1-05-mem.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/lojzes/go-study-base/blob/master/src/mysql/mysql.go",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="mutex" tabindex="-1"><a class="header-anchor" href="#mutex" aria-hidden="true">#</a> Mutex</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> Total <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	sync<span class="token punctuation">.</span>Mutex
	value <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">worker</span><span class="token punctuation">(</span>wg <span class="token operator">*</span>sync<span class="token punctuation">.</span>WaitGroup<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">defer</span> wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		Total<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		Total<span class="token punctuation">.</span>value <span class="token operator">+=</span> i
		Total<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wg<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>wg<span class="token punctuation">)</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>Total<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(b,f){const s=i("ExternalLinkIcon");return o(),p("div",null,[n("div",u,[r,n("p",null,[n("a",d,[a("Go语言高级编程"),t(s)])]),n("p",null,[n("a",k,[a("源码地址"),t(s)])])]),v])}const _=e(l,[["render",m],["__file","go-并发.html.vue"]]);export{_ as default};
