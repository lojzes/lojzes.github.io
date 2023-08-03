import{_ as n,X as e,Y as s,a2 as a}from"./framework-0b23a550.js";const i={},t=a(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  -S 是 --save 的简写，表示 安装在 dependencies 能打包到生产环境内</span>
<span class="token comment">#  -D 是 -dev 的简写，表示 安装在 devDependencies 不能打包到生产环境内</span>

<span class="token function">npm</span> i element-ui <span class="token parameter variable">-S</span> 


<span class="token comment"># 在 main.js 入口文件内 导入</span>

<span class="token function">import</span> ElementUI from <span class="token string">&#39;element-ui&#39;</span><span class="token punctuation">;</span>
<span class="token function">import</span> <span class="token string">&#39;element-ui/lib/theme-chalk/index.css&#39;</span><span class="token punctuation">;</span>
Vue.use<span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[t];function l(d,o){return e(),s("div",null,c)}const p=n(i,[["render",l],["__file","基础.html.vue"]]);export{p as default};
