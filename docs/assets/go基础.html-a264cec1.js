import{_ as n,X as s,Y as a,a2 as t}from"./framework-0b23a550.js";const e={},p=t(`<h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>go 字符串是 unicode 字符，使用 utf-8 编码</p><h3 id="编码、解码" tabindex="-1"><a class="header-anchor" href="#编码、解码" aria-hidden="true">#</a> 编码、解码</h3><p>打印 unicode、utf-8 编码</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 字节长度</span>
	<span class="token comment">//fmt.Println(len(s))</span>
	<span class="token comment">// rune 相当于go 中的char</span>
	<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;YES你好世界!&quot;</span> <span class="token comment">// 默认UTF-8  一个中文 占3个字节</span>
	<span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> s <span class="token punctuation">{</span> <span class="token comment">// v 是rune unicode、utf-8 编码</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;(%d %X)\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span><span class="token number">0</span> <span class="token number">59</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">45</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">2</span> <span class="token number">53</span><span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">3</span> 4F60<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">6</span> 597D<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">9</span> 4E16<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">12</span> 754C<span class="token punctuation">)</span>
<span class="token punctuation">(</span><span class="token number">15</span> <span class="token number">21</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打印字节长度" tabindex="-1"><a class="header-anchor" href="#打印字节长度" aria-hidden="true">#</a> 打印字节长度</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>	<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;YES你好世界!&quot;</span> <span class="token comment">// 默认UTF-8  一个中文 占3个字节</span>
	<span class="token comment">// 字节长度</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打印字节</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><p>utf-8 编码 一个汉字占用 3 个字节</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">89</span> <span class="token number">69</span> <span class="token number">83</span> <span class="token number">228</span> <span class="token number">189</span> <span class="token number">160</span> <span class="token number">229</span> <span class="token number">165</span> <span class="token number">189</span> <span class="token number">228</span> <span class="token number">184</span> <span class="token number">150</span> <span class="token number">231</span> <span class="token number">149</span> <span class="token number">140</span> <span class="token number">33</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="字符串和字节相互转换" tabindex="-1"><a class="header-anchor" href="#字符串和字节相互转换" aria-hidden="true">#</a> 字符串和字节相互转换</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code> <span class="token comment">// 字符串 转字节</span>
	<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
  <span class="token comment">// 字节转 字符串</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rune-字符串长度" tabindex="-1"><a class="header-anchor" href="#rune-字符串长度" aria-hidden="true">#</a> Rune 字符串长度</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>	<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;YES你好世界!&quot;</span> <span class="token comment">// 默认UTF-8  一个中文 占3个字节</span>
	<span class="token comment">// 字符串转Rune后的长度:字符长度</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>utf8<span class="token punctuation">.</span><span class="token function">RuneCountInString</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编码解码" tabindex="-1"><a class="header-anchor" href="#编码解码" aria-hidden="true">#</a> 编码解码</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">&quot;YES你好世界!&quot;</span> <span class="token comment">// 默认UTF-8  一个中文 占3个字节</span>
	b<span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	
	<span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">{</span>
		<span class="token comment">// 解码</span>
		r<span class="token punctuation">,</span>size<span class="token operator">:=</span> utf8<span class="token punctuation">.</span><span class="token function">DecodeRune</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c  %v\\n&quot;</span><span class="token punctuation">,</span>r<span class="token punctuation">,</span>size<span class="token punctuation">)</span>
		b <span class="token operator">=</span> b<span class="token punctuation">[</span>size<span class="token punctuation">:</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 编码</span>
	r <span class="token operator">:=</span> <span class="token char">&#39;好&#39;</span>
	buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
	utf8<span class="token punctuation">.</span><span class="token function">EncodeRune</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> r<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Y  <span class="token number">1</span>
E  <span class="token number">1</span>
S  <span class="token number">1</span>
你  <span class="token number">3</span>
好  <span class="token number">3</span>
世  <span class="token number">3</span>
界  <span class="token number">3</span>
<span class="token operator">!</span>  <span class="token number">1</span>
<span class="token punctuation">[</span><span class="token number">229</span> <span class="token number">165</span> <span class="token number">189</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="int-float-string-相互转换" tabindex="-1"><a class="header-anchor" href="#int-float-string-相互转换" aria-hidden="true">#</a> int float string 相互转换</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// string 转 int</span>
	i<span class="token punctuation">,</span>err <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// int 转 string</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// 101 字符串  10进制  32 位</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strconv<span class="token punctuation">.</span><span class="token function">ParseInt</span><span class="token punctuation">(</span><span class="token string">&quot;101&quot;</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// 101.01 字符串转 float</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strconv<span class="token punctuation">.</span><span class="token function">ParseFloat</span><span class="token punctuation">(</span><span class="token string">&quot;101.01&quot;</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// float 转 string</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>strconv<span class="token punctuation">.</span><span class="token function">FormatFloat</span><span class="token punctuation">(</span><span class="token number">101.01</span><span class="token punctuation">,</span><span class="token char">&#39;f&#39;</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="io" tabindex="-1"><a class="header-anchor" href="#io" aria-hidden="true">#</a> io</h2><h3 id="控制台输入" tabindex="-1"><a class="header-anchor" href="#控制台输入" aria-hidden="true">#</a> 控制台输入</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;bufio&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;请输入...&quot;</span><span class="token punctuation">)</span>
	 <span class="token keyword">var</span> a <span class="token builtin">string</span>

	<span class="token keyword">for</span> <span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;输入的内容为 %s\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 读取一行</span>
	fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;输入的内容为 %s\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	
	<span class="token comment">// 使用scanner</span>
	scanner <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewScanner</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
	<span class="token keyword">for</span> scanner<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		s <span class="token operator">:=</span> scanner<span class="token punctuation">.</span><span class="token function">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 使用reader</span>
	r <span class="token operator">:=</span> bufio<span class="token punctuation">.</span><span class="token function">NewReader</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>Stdin<span class="token punctuation">)</span>
	<span class="token keyword">if</span> r<span class="token punctuation">,</span> <span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">ReadRune</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;%v&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","go基础.html.vue"]]);export{r as default};
