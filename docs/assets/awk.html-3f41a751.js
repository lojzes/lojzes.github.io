import{_ as n,X as s,Y as a,a2 as e}from"./framework-0b23a550.js";const i={},l=e(`<h2 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> AWK</h2><blockquote><p>AWK 是一种处理文本文件的语言，是一个强大的文本分析工具。 之所以叫 AWK 是因为其取了三位创始人 Alfred Aho，Peter Weinberger, 和 Brian Kernighan 的 Family Name 的首字符。</p></blockquote><blockquote><p>$1 表示第一列 $2 表示第二列 一次类推 <br> $0 表示整行 $NF 最后一列</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># ll | awk &#39;{print $1}&#39;</span>
total
-rw-r--r--.
-rw-r--r--.
-rw-r--r--.
-rw-------.
-rw-------.
-rw-r--r--.
-rw-r--r--.


<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># ll | awk &#39;{print $NF}&#39;</span>
<span class="token number">56</span>
<span class="token number">1</span>.txt
<span class="token number">2</span>.txt
<span class="token number">3</span>.txt
anaconda-ks.cfg
original-ks.cfg
settings.zip
test.sh


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择行-nr-1-选择第一行" tabindex="-1"><a class="header-anchor" href="#选择行-nr-1-选择第一行" aria-hidden="true">#</a> 选择行 $NR==1 选择第一行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># awk  &#39;NR==1&#39; /etc/passwd | awk -F &quot;:&quot; -vOFS=@ &#39;{print $NF,$1,$2,$3}&#39; </span>
/bin/bash@root@x@0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="指定分割符-默认空格" tabindex="-1"><a class="header-anchor" href="#指定分割符-默认空格" aria-hidden="true">#</a> 指定分割符（默认空格）</h3><p>指定分割符 通过 -F 指定</p><p>举例 -F “.” 以. 为分割符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># ll | awk &#39;{print $NF}&#39; | awk -F &quot;.&quot; &#39;{print $1}&#39;</span>
<span class="token number">56</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
anaconda-ks
original-ks
settings
<span class="token builtin class-name">test</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出分隔符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># awk -F &quot;:&quot; -vOFS=&quot;@@&quot; &#39;{print $NF,$1,$2,$3,$3}&#39; /etc/passwd | head -4</span>
/bin/bash@@root@@x@@0@@0
/sbin/nologin@@bin@@x@@1@@1
/sbin/nologin@@daemon@@x@@2@@2
/sbin/nologin@@adm@@x@@3@@3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[l];function r(c,t){return s(),a("div",null,d)}const u=n(i,[["render",r],["__file","awk.html.vue"]]);export{u as default};
