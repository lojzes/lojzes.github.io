import{_ as n,X as s,Y as a,a2 as t}from"./framework-b6ea3384.js";const p={},e=t(`<h2 id="compositionapi" tabindex="-1"><a class="header-anchor" href="#compositionapi" aria-hidden="true">#</a> compositionAPI</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
   <span class="token comment">// conpsAPI vue3 新提供的语法</span>
   <span class="token comment">// 在实例创建之前 执行</span>
   <span class="token comment">// 所以不嫩使用this,不能调用外部实例的方法</span>
   <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">msg</span> <span class="token operator">:</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">,</span>
           <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
             <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
           <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
     
   <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          &lt;div @click=&quot;handleClick&quot;&gt;{{msg}}&lt;/div&gt;
     </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>

 <span class="token comment">// 然后挂载</span>
 <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token comment">// ref reactive</span>
    <span class="token comment">// ref 原理，通过 proxy 对数据进行封装，当数据变化时，触发模板等内容的更新</span>
    <span class="token comment">// ref 只能处理基础类型 string number </span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
      <span class="token comment">// proxy dell 变成 proxy({value : &#39;dell&#39;}) 这样的响应式引用</span>
      <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;dell&#39;</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        msg<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;lojzes&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        msg
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div&gt;{{msg}}&lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token comment">// ref reactive</span>
    <span class="token comment">// ref 原理，通过 proxy 对数据进行封装，当数据变化时，触发模板等内容的更新</span>
    <span class="token comment">// ref 只能处理基础类型 string number </span>
    
    <span class="token comment">//reactive 处理非基础数据 对象和数组</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
      <span class="token comment">// proxy name 变成 proxy({value : &#39;dell&#39;}) 这样的响应式引用</span>
      <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;dell&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lojzes&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        obj
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div&gt;{{obj.name}}&lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> readonly</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span>readonly<span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
      <span class="token comment">// proxy name 变成 proxy({value : &#39;dell&#39;}) 这样的响应式引用</span>
      <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;dell&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 只读数据，不能修改</span>
      <span class="token keyword">let</span> objCopy <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lojzes&#39;</span><span class="token punctuation">;</span>
        objCopy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lyy&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">,</span>objCopy
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div&gt;{{obj.name}}&lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
 <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span>readonly<span class="token punctuation">,</span>toRefs<span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
      <span class="token comment">// proxy name 变成 proxy({value : &#39;dell&#39;}) 这样的响应式引用</span>
      <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;dell&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lojzes&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span>

      <span class="token comment">// 对象结构时，如果要支持响应式，必须 toRefs</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div&gt;{{name}}&lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> readonly<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> toRef <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
      <span class="token comment">// proxy name 变成 proxy({value : &#39;dell&#39;}) 这样的响应式引用</span>
      <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dell&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 对象结构时，如果要支持响应式，必须 toRefs</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
      <span class="token comment">// 对象解构时，没有的属性处理方法</span>
      <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lojzes&#39;</span>
        age<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">30</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name<span class="token punctuation">,</span> age
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h2><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> slots</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> readonly<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> toRef <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
      <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dell&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;child&gt;parent&lt;/child&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

   app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>

    <span class="token comment">// template:\`</span>
    <span class="token comment">//   &lt;div&gt;hell world&lt;/div&gt;</span>
    <span class="token comment">// \`,</span>
   
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">,</span>slots<span class="token punctuation">,</span>emit <span class="token punctuation">}</span> <span class="token operator">=</span> context<span class="token punctuation">;</span>
      <span class="token comment">// attrs Non Pos</span>
      <span class="token comment">// slots 插槽</span>
      <span class="token comment">// emit 向外触发事件</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

   <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> emit</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> readonly<span class="token punctuation">,</span> toRefs<span class="token punctuation">,</span> toRef <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
      <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;dell&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name<span class="token punctuation">,</span> handleChange
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;child @change=&#39;handleChange&#39;&gt;parent&lt;/child&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      &lt;div @click=&#39;handleClick&#39;&gt;hell world&lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>

    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> h <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">,</span> slots<span class="token punctuation">,</span> emit <span class="token punctuation">}</span> <span class="token operator">=</span> context<span class="token punctuation">;</span>

      <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span><span class="token punctuation">{</span>
        handleClick
      <span class="token punctuation">}</span>

      <span class="token comment">// attrs Non Pos</span>
      <span class="token comment">// slots 插槽</span>
      <span class="token comment">// emit 向外触发事件</span>
      <span class="token comment">// return ()=&gt;h(&#39;div&#39;,{},slots.default())</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="demo-实现todo-list" tabindex="-1"><a class="header-anchor" href="#demo-实现todo-list" aria-hidden="true">#</a> demo 实现todo list</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// </span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
      <span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">function</span> <span class="token function">handleInput</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        inputValue<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span>
      <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
         inputValue<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        inputValue<span class="token punctuation">,</span> list<span class="token punctuation">,</span> handleSubmit<span class="token punctuation">,</span>handleInput
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div&gt;
            &lt;input :value=&quot;inputValue&quot; @input=&quot;handleInput&quot;/&gt;
            &lt;button @click=&quot;handleSubmit&quot;&gt;提交&lt;/button&gt;
            &lt;/div&gt;

            &lt;ul&gt;
               &lt;li  v-for=&quot;(item,index) in list&quot; :key=&quot;index&quot;&gt;{{item}}&lt;/li&gt;
            &lt;/ul&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码优化</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> 
  <span class="token comment">// list 相关</span>
  <span class="token keyword">function</span> <span class="token function">listEffective</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">addList</span><span class="token punctuation">(</span><span class="token parameter">inputValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      list<span class="token punctuation">,</span> addList
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token comment">// input相关</span>
  <span class="token function-variable function">inputEffective</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>
    <span class="token keyword">const</span> inputValue <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">function</span> <span class="token function">handleInput</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      inputValue<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      inputValue<span class="token punctuation">,</span> handleInput
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
   <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// conpsAPI vue3 新提供的语法</span>
      <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token keyword">const</span> <span class="token punctuation">{</span>list<span class="token punctuation">,</span> addList<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">listEffective</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>inputValue<span class="token punctuation">,</span> handleInput<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">inputEffective</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          list<span class="token punctuation">,</span>inputValue<span class="token punctuation">,</span>addList<span class="token punctuation">,</span>handleInput
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div&gt;
            &lt;input :value=&quot;inputValue&quot; @input=&quot;handleInput&quot;/&gt;
            &lt;button @click=&quot;()=&gt;{addList(inputValue);inputValue = &#39;&#39;}&quot;&gt;提交&lt;/button&gt;
            &lt;/div&gt;

            &lt;ul&gt;
               &lt;li  v-for=&quot;(item,index) in list&quot; :key=&quot;index&quot;&gt;{{item}}&lt;/li&gt;
            &lt;/ul&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 然后挂载</span>
    <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span>computed<span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> countAddFive <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">5</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        count<span class="token punctuation">.</span>value <span class="token operator">=</span>  count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        count<span class="token punctuation">,</span>handleClick<span class="token punctuation">,</span>countAddFive
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div @click=&quot;handleClick&quot;&gt;
              {{count}} -----{{countAddFive}}
           &lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>get set 方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> countAddFive <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">5</span>

          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// countAddFive 值改变时，会调用</span>
          <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            count<span class="token punctuation">.</span>value <span class="token operator">=</span> param <span class="token operator">-</span> <span class="token number">5</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        countAddFive<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">100</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>

      <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        count<span class="token punctuation">.</span>value <span class="token operator">=</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        count<span class="token punctuation">,</span> handleClick<span class="token punctuation">,</span> countAddFive
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div @click=&quot;handleClick&quot;&gt;
              {{count}} -----{{countAddFive}}
           &lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>obj reactive</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> countAddFive <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
        <span class="token punctuation">{</span>
          <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> obj<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">5</span>

          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// countAddFive 值改变时，会调用</span>
          <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            obj<span class="token punctuation">.</span>count <span class="token operator">=</span> param <span class="token operator">-</span> <span class="token number">5</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        countAddFive<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">100</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>

      <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>count <span class="token operator">=</span> obj<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">,</span> handleClick<span class="token punctuation">,</span> countAddFive
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div @click=&quot;handleClick&quot;&gt;
              {{obj.count}} -----{{countAddFive}}
           &lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

      <span class="token function">watch</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">,</span> preValue</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">,</span> preValue<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div&gt;
            name &lt;input v-model=&quot;name&quot;/&gt;
           &lt;/div&gt;
           &lt;div&gt;
              {{name}}
           &lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>reactive 方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>reactive<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> nameObj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>nameObj<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">currentValue<span class="token punctuation">,</span> preName</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">,</span> preName<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        nameObj
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
           &lt;div&gt;
            name &lt;input v-model=&quot;nameObj.name&quot;/&gt;
           &lt;/div&gt;
           &lt;div&gt;
              {{nameObj.name}}
           &lt;/div&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监听多个值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> nameObj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">eName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nameObj<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nameObj<span class="token punctuation">.</span>eName<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>currentValue<span class="token punctuation">,</span> currentEname<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>preValue<span class="token punctuation">,</span> preEname<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">,</span> preValue<span class="token punctuation">,</span> <span class="token string">&quot;------&quot;</span><span class="token punctuation">,</span> currentEname<span class="token punctuation">,</span> preEname<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        nameObj
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;div&gt;
      name &lt;input v-model=&quot;nameObj.name&quot;/&gt;
     &lt;/div&gt;
     &lt;div&gt;
        {{nameObj.name}}
     &lt;/div&gt;

     &lt;div&gt;
      eName &lt;input v-model=&quot;nameObj.eName&quot;/&gt;
     &lt;/div&gt;
     &lt;div&gt;
         {{nameObj.eName}}
     &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect" aria-hidden="true">#</a> watchEffect</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> watchEffect <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> nameObj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">eName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nameObj<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nameObj<span class="token punctuation">.</span>eName<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>currentValue<span class="token punctuation">,</span> currentEname<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>preValue<span class="token punctuation">,</span> preEname<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">,</span> preValue<span class="token punctuation">,</span> <span class="token string">&quot;------&quot;</span><span class="token punctuation">,</span> currentEname<span class="token punctuation">,</span> preEname<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// watchEffect 关联的数据立即执行</span>
      <span class="token comment">//watchEffect 只能获取到当前值</span>
      <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;watchEffect&#39;</span><span class="token punctuation">,</span> nameObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        nameObj
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;div&gt;
      name &lt;input v-model=&quot;nameObj.name&quot;/&gt;
     &lt;/div&gt;
     &lt;div&gt;
        {{nameObj.name}}
     &lt;/div&gt;

     &lt;div&gt;
      eName &lt;input v-model=&quot;nameObj.eName&quot;/&gt;
     &lt;/div&gt;
     &lt;div&gt;
         {{nameObj.eName}}
     &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取消监听" tabindex="-1"><a class="header-anchor" href="#取消监听" aria-hidden="true">#</a> 取消监听</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> watchEffect <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> nameObj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">eName</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nameObj<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> nameObj<span class="token punctuation">.</span>eName<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>currentValue<span class="token punctuation">,</span> currentEname<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>preValue<span class="token punctuation">,</span> preEname<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">,</span> preValue<span class="token punctuation">,</span> <span class="token string">&quot;------&quot;</span><span class="token punctuation">,</span> currentEname<span class="token punctuation">,</span> preEname<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// watchEffect 关联的数据立即执行</span>
      <span class="token comment">//watchEffect 只能获取到当前值</span>
     <span class="token keyword">var</span> stop <span class="token operator">=</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;watchEffect&#39;</span><span class="token punctuation">,</span> nameObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        nameObj
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;div&gt;
      name &lt;input v-model=&quot;nameObj.name&quot;/&gt;
     &lt;/div&gt;
     &lt;div&gt;
        {{nameObj.name}}
     &lt;/div&gt;

     &lt;div&gt;
      eName &lt;input v-model=&quot;nameObj.eName&quot;/&gt;
     &lt;/div&gt;
     &lt;div&gt;
         {{nameObj.eName}}
     &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期函数" tabindex="-1"><a class="header-anchor" href="#生命周期函数" aria-hidden="true">#</a> 生命周期函数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 生命周期函数</span>
      <span class="token comment">// beforeCreate Created 这两个没有提供，因为setUp 就运行在 这两个生命周期函数内</span>
      <span class="token comment">// mounted  -&gt; onMounted</span>
      <span class="token comment">// beforeUpdate -&gt; onBeforeUpdate</span>
      <span class="token comment">// Updated -&gt; onUpdated</span>
      <span class="token comment">// beforeUnmount -&gt; onBeforeUnmount</span>
      <span class="token comment">// Unmounted -&gt; onUnmounted</span>
      <span class="token comment">// vue3 新的生命周期函数 </span>
      <span class="token comment">// onRenderTracked  </span>
      <span class="token comment">// onRenderTriggered</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>
        onMounted<span class="token punctuation">,</span> onBeforeUpdate<span class="token punctuation">,</span> onUpdated<span class="token punctuation">,</span> onBeforeUnmount<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span>
        onRenderTracked<span class="token punctuation">,</span>onRenderTriggered <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;lojzes&#39;</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token function-variable function">created</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 页面挂载完成后执行</span>
      <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onMounted&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 页面重新渲染前执行</span>
      <span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onBeforeUpdate&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 页面重新渲染执行</span>
      <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onUpdated&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 收集响应式数据时执行 ，在 onMounted 之前</span>
      <span class="token function">onRenderTracked</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onRenderTracked&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 每次页面渲染都会执行，在 onBeforeUpdate 之前</span>
      <span class="token function">onRenderTriggered</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onRenderTrigged&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;lee&#39;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">let</span> isShow <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> <span class="token function-variable function">handleIfClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        isShow<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>isShow<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name<span class="token punctuation">,</span> isShow<span class="token punctuation">,</span>
        handleClick<span class="token punctuation">,</span> handleIfClick
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;div @click=&quot;handleClick&quot;&gt;
      {{name}}
     &lt;/div&gt;

     &lt;div @click=&quot;handleIfClick&quot;&gt;
      hello : 
      &lt;hello v-if=&quot;isShow === true&quot;&gt;
     &lt;/hello&gt;
     &lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token keyword">const</span> <span class="token punctuation">{</span> onBeforeUnmount<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token comment">// dom元素移除之前执行 举例：子组件的显示与销毁</span>
      <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onBeforeUnmount&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// dom元素移除之后执行 举例：子组件的显示与销毁</span>
      <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onUnmounted&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;span&gt;lojzes&lt;/span&gt;
    </span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>


  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prodive-和-inject" tabindex="-1"><a class="header-anchor" href="#prodive-和-inject" aria-hidden="true">#</a> prodive 和 inject</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// provide inject</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>provide <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;lojzes&#39;</span><span class="token punctuation">)</span>
      <span class="token comment">// provide 支持多级组件间传值</span>
      <span class="token comment">//提供 name 和 changeName 方法</span>
      <span class="token comment">// changeName 提供其他组件进行修改，子组件修改父组件的数据，</span>
      <span class="token comment">//要在父组件提供的方法进行修改</span>
      <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span>
      <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;changeName&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        name<span class="token punctuation">.</span>value <span class="token operator">=</span> param
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;hello/&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> changeName <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;changeName&#39;</span><span class="token punctuation">)</span>
     
      <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;handleClick...&#39;</span><span class="token punctuation">)</span>
        <span class="token function">changeName</span><span class="token punctuation">(</span><span class="token string">&#39;lee&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>handleClick<span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;div @click=&quot;handleClick&quot;&gt;{{name}}&lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


  <span class="token comment">// 以防父组件提供的数据被子组件修改，可以把数据改成 readonly</span>

  <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// provide inject</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>provide<span class="token punctuation">,</span>readonly<span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;lojzes&#39;</span><span class="token punctuation">)</span>
      <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token function">readonly</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;changeName&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// 为什么在这能修改？</span>
        <span class="token comment">// 解释：因为 在这修改的是 name 不是传递给子组件 包装后的数据</span>
        name<span class="token punctuation">.</span>value <span class="token operator">=</span> param
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;hello/&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> changeName <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;changeName&#39;</span><span class="token punctuation">)</span>
     
      <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;handleClick...&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">//changeName(&#39;lee&#39;)</span>
        name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;lee&#39;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>handleClick<span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;div @click=&quot;handleClick&quot;&gt;{{name}}&lt;/div&gt;
    </span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ref-获取dom-节点" tabindex="-1"><a class="header-anchor" href="#ref-获取dom-节点" aria-hidden="true">#</a> ref 获取dom 节点</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">var</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// conpsAPI vue3 新提供的语法</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>onMounted<span class="token punctuation">}</span> <span class="token operator">=</span> Vue
      <span class="token comment">// hello 必须是 dom 中定义的值</span>
      <span class="token keyword">const</span> hello <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
      <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">.</span>value<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        hello
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
     &lt;div ref=&quot;hello&quot;&gt;hello world&lt;/div&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 然后挂载</span>
  <span class="token keyword">var</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","vue3新语法.html.vue"]]);export{r as default};
