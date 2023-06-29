import{_ as n,X as s,Y as a,a2 as e}from"./framework-b6ea3384.js";const t="/assets/7-96efc1ad.png",p="/assets/8-fca110d7.png",o="/assets/9-5e22c38c.png",i={},c=e('<div class="hint-container info"><p class="hint-container-title">参考</p></div><h2 id="批量操作" tabindex="-1"><a class="header-anchor" href="#批量操作" aria-hidden="true">#</a> 批量操作</h2><p><img src="'+t+`" alt="" loading="lazy"></p><h2 id="matchall-查询" tabindex="-1"><a class="header-anchor" href="#matchall-查询" aria-hidden="true">#</a> matchAll 查询</h2><h1 id="默认情况下-es一次展示10条" tabindex="-1"><a class="header-anchor" href="#默认情况下-es一次展示10条" aria-hidden="true">#</a> 默认情况下，es一次展示10条</h1><p>GET persons/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> match</h2><p><img src="`+p+'" alt="" loading="lazy"></p><h2 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询" aria-hidden="true">#</a> 模糊查询</h2><p><img src="'+o+`" alt="" loading="lazy"></p><p>GET persons/_search</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;wildcard&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;北*&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意： 不要在查询内容前面加通配符，否则会全表查询</p><h2 id="范围查询" tabindex="-1"><a class="header-anchor" href="#范围查询" aria-hidden="true">#</a> 范围查询</h2><p>GET persons/_search</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[c];function r(u,d){return s(),a("div",null,l)}const m=n(i,[["render",r],["__file","es高级.html.vue"]]);export{m as default};
