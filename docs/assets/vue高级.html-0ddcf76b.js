import{_ as n,X as s,Y as a,a2 as t}from"./framework-b6ea3384.js";const p={},e=t(`<h2 id="mixin-混入" tabindex="-1"><a class="header-anchor" href="#mixin-混入" aria-hidden="true">#</a> mixin 混入</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1.混入的data , methods 优先级 没有data ,methods 优先级高</span>
<span class="token comment">// 2.生命周期函数也可以混入，混入的生命周期函数先执行</span>
<span class="token comment">// 3 mixin 的作用域，相当于局部变量，在哪使用，就在哪定义    \`mixins\` 引用 </span>


<span class="token comment">// 定义混入</span>
  <span class="token keyword">const</span> mixin <span class="token operator">=</span><span class="token punctuation">{</span>

  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">item</span> <span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
       <span class="token comment">// item: 10</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mixins</span><span class="token operator">:</span><span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div&gt;{{item}}&lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// item: 10</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div&gt;{{item}}&lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token comment">// 定义全局混入，默认会注入到每个组件内，不需要再 使用 \`mixins[]\` 引用，即可使用</span>
app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      &lt;div&gt;{{item}}&lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 自定义属性</span>
  <span class="token comment">// 优先级同上</span>
  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 自定义属性：不在data ,及任何地方</span>
    <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div&gt;{{this.$options.item}}&lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// </span>
  app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token number">100</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>


  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 自定义属性：不在data ,及任何地方</span>
    <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div&gt;{{this.$options.item}}&lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// </span>
  app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token number">100</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token comment">// 改变默认混入的优先级</span>
   <span class="token comment">// parent 混入的值  child 原来app的值</span>
   <span class="token comment">// 调整优先级，先返回 mixin 数据</span>
 app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>optionMergeStrategies<span class="token punctuation">.</span><span class="token function-variable function">item</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">parent<span class="token punctuation">,</span> child<span class="token punctuation">,</span> vm</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> parent <span class="token operator">||</span> child
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
         &lt;input v-focus/&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 全局指令，在挂载完成后，会吧 dom 元素，传递到方法内</span>
  app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
   <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 局部组件</span>
  <span class="token keyword">const</span> directives <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">directives</span><span class="token operator">:</span> directives<span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
         &lt;input v-focus/&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 自定义指令的生命周期方法</span>

   <span class="token comment">// 局部组件</span>
  <span class="token comment">// 局部组件</span>
  <span class="token keyword">const</span> directives <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">focus</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">beforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span>
        el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// 页面重新渲染</span>
      <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;beforeUpdate&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;updated&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">beforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;即将销毁&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">unmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;已经销毁&quot;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token comment">// 自定义指令传参</span>
<span class="token comment">// 自定义指令传参</span>
  <span class="token keyword">const</span> directives <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pos</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> bindings<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">updated</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> bindings<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">directives</span><span class="token operator">:</span> directives<span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div  v-pos=&quot;400&quot; class=&quot;header&quot;&gt;
               &lt;input/&gt;
          &lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 方法简写 全局组件， toto 局部组件</span>

 <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// directives: directives,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div  v-pos=&quot;400&quot; class=&quot;header&quot;&gt;
               &lt;input/&gt;
          &lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;pos&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> bindings<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 自定义组件绑定属性</span>
<span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// directives: directives,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div  v-pos:left=&quot;400&quot; class=&quot;header&quot;&gt;
               &lt;input/&gt;
          &lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;pos&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> bindings</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">[</span>bindings<span class="token punctuation">.</span>arg<span class="token punctuation">]</span> <span class="token operator">=</span> bindings<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="传送门-teleport" tabindex="-1"><a class="header-anchor" href="#传送门-teleport" aria-hidden="true">#</a> 传送门 teleport</h2><p>蒙层实现</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token comment">/* 蒙层实现 */</span>
    <span class="token selector">.mask</span><span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
        <span class="token property">opacity</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span>

// 显示蒙层内的内容
        <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> aliceblue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>盒子左右上下居中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> <span class="token selector">.c</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
       <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
       <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
       <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
       <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
       <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token property">background</span><span class="token punctuation">:</span> paleturquoise<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>teleport</code> 传送门，<code>to</code> 挂载到 某个<code> dom</code> 元素上</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
         <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>isShow <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isShow
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div class=&quot;c&quot;&gt;
            &lt;button @click=&quot;handleClick&quot;&gt;点击&lt;/button&gt;
          &lt;teleport to=&quot;body&quot;&gt;
            &lt;div class=&quot;mask&quot; v-show=&quot;isShow&quot;&gt;{{msg}}&lt;/div&gt;
          &lt;/teleport&gt;
          &lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="render-函数" tabindex="-1"><a class="header-anchor" href="#render-函数" aria-hidden="true">#</a> render 函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
 <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;my-title :val=&quot;4&quot;&gt;
            hello world
        &lt;/my-title&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-title&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;val&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>

      <span class="token comment">// 返回的是虚拟 dom</span>
      <span class="token comment">// 第一个参数是渲染的dom 节点，第二个参数为 dom 节点的属性， 第三个参数是默认插槽</span>

      <span class="token comment">// 执行流程： template -&gt; render-&gt; h&gt; 虚拟dom（js 对象） -&gt; 真实对象 -&gt; 展示到页面上</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>val<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">// template 底层也是被转换为 render 函数</span>


    <span class="token comment">//  template:\`</span>
    <span class="token comment">//       &lt;h1 v-if = &quot;val === 1&quot;&gt;&lt;slot/&gt;&lt;/h1&gt;</span>
    <span class="token comment">//       &lt;h2 v-if = &quot;val === 2&quot;&gt;&lt;slot/&gt;&lt;/h2&gt;</span>
    <span class="token comment">//       &lt;h3 v-if = &quot;val === 3&quot;&gt;&lt;slot/&gt;&lt;/h3&gt;</span>
    <span class="token comment">//       &lt;h4 v-if = &quot;val === 4&quot;&gt;&lt;slot/&gt;&lt;/h4&gt;</span>
    <span class="token comment">//       &lt;h5 v-if = &quot;val === 5&quot;&gt;&lt;slot/&gt;&lt;/h5&gt;</span>
    <span class="token comment">//       \`</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义插件</span>
  <span class="token keyword">const</span> myPlugIns <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 插件使用时执行</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// app 根实例 options 使用插件时，传递的参数</span>
      <span class="token comment">// 扩展值</span>
      <span class="token comment">// 扩展指令</span>
      app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 扩展属性值</span>
      app<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
      <span class="token comment">// 扩展 mixin</span>
      app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mixin&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 扩展全局属性</span>
      app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$addr <span class="token operator">=</span> <span class="token string">&#39;beijing&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;my-title/&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-title&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$addr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;input v-focus/&gt;
          &lt;div&gt;{{age}}&lt;/div&gt;
          </span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>myPlugIns<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lojzes&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用mixin-和-插件实现-参数校验" tabindex="-1"><a class="header-anchor" href="#使用mixin-和-插件实现-参数校验" aria-hidden="true">#</a> 使用mixin 和 插件实现 参数校验</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用插件 实现参数校验</span>
  <span class="token keyword">const</span> myPlugIns <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 插件使用时执行</span>
    <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      app<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>validators<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>validators<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token comment">// 使用 watch 监控值的变化</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">const</span> result <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lojzes&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">validators</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> age <span class="token operator">&gt;</span> <span class="token number">25</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;太年轻&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> name<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">5</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;name 太短了&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 定义全局mixin</span>
  <span class="token comment">// app.mixin({</span>
  <span class="token comment">//   created() {</span>
  <span class="token comment">//       for(let key in this.$options.validators){</span>
  <span class="token comment">//          const item = this.$options.validators[key]</span>
  <span class="token comment">//          // 使用 watch 监控值的变化</span>
  <span class="token comment">//          this.$watch(key,(value)=&gt;{</span>
  <span class="token comment">//                const result = item.validator(value)</span>
  <span class="token comment">//                if(!result){</span>
  <span class="token comment">//                  console.log(item.msg)</span>
  <span class="token comment">//                }  </span>
  <span class="token comment">//          })</span>
  <span class="token comment">//       }</span>
  <span class="token comment">//  },</span>
  <span class="token comment">// })</span>

  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>myPlugIns<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;lojzes&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[e];function o(c,l){return s(),a("div",null,i)}const r=n(p,[["render",o],["__file","vue高级.html.vue"]]);export{r as default};
