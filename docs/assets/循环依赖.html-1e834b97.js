import{_ as e,X as i,Y as t,Z as n,a1 as s,$ as p,a2 as c,C as l}from"./framework-b6ea3384.js";const o="/assets/c-1-19c95a11.png",d="/assets/c-2-5e3f4cec.png",r="/assets/c-3-2173f466.png",u="/assets/c-chanjing-ad9d71a4.png",v="/assets/c-resolve-0ffd54f0.png",k="/assets/c-resolve-2-4f044cfb.png",m="/assets/c-resolve-3-6105ac3d.png",b="/assets/early-get-365b7e01.png",g="/assets/c-code-1-a1cf9985.png",h="/assets/c-resolve-4-e654d1e5.png",y="/assets/c-resolve-5-5a9f7a75.png",w="/assets/c-code-2-8a0c2a36.png",S="/assets/c-resolve-6-93557dfc.png",T="/assets/c-code-3-2cc947d2.png",f="/assets/c-4-aea75d90.png",j={},_={class:"hint-container tip"},x=n("p",{class:"hint-container-title"},"提示",-1),A={href:"https://mp.weixin.qq.com/s?__biz=MzkwNjMwMTgzMQ==&mid=2247490271&idx=1&sn=e4476b631c48882392bd4cd06d579ae9&source=41#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},O=c(`<h2 id="原因代码" tabindex="-1"><a class="header-anchor" href="#原因代码" aria-hidden="true">#</a> 原因代码</h2><p>先看看当时出问题的代码片段：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService1</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService2</span> testService2<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Async</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService2</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService1</span> testService1<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两段代码中定义了两个Service类：TestService1和TestService2，在TestService1中注入了TestService2的实例，同时在TestService2中注入了TestService1的实例，这里构成了循环依赖。</p><p>只不过，这不是普通的循环依赖，因为TestService1的test1方法上加了一个@Async注解。</p><p>大家猜猜程序启动后运行结果会怎样？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span></span>BeanCurrentlyInCreationException</span><span class="token operator">:</span> <span class="token class-name">Error</span> creating bean <span class="token keyword">with</span> <span class="token namespace">name</span> &#39;testService1&#39;<span class="token operator">:</span> <span class="token class-name">Bean</span> <span class="token keyword">with</span> <span class="token namespace">name</span> &#39;testService1&#39; has been injected into other beans <span class="token punctuation">[</span>testService2<span class="token punctuation">]</span> in its raw version as part of a circular reference<span class="token punctuation">,</span> but has eventually been <span class="token class-name"><span class="token namespace">wrapped<span class="token punctuation">.</span></span> This</span> means that said other beans <span class="token keyword">do</span> not use the <span class="token keyword">final</span> version of the <span class="token class-name"><span class="token namespace">bean<span class="token punctuation">.</span></span> This</span> is often the result of over<span class="token operator">-</span>eager type matching <span class="token operator">-</span> consider using &#39;getBeanNamesOfType&#39; <span class="token keyword">with</span> <span class="token namespace">the</span> &#39;allowEagerInit&#39; flag turned off<span class="token punctuation">,</span> <span class="token keyword">for</span> example<span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>报错了。。。原因是出现了循环依赖。</p><p>「不科学呀，spring不是号称能解决循环依赖问题吗，怎么还会出现？」 如果把上面的代码稍微调整一下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService1</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService2</span> testService2<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把TestService1的test1方法上的@Async注解去掉，TestService1和TestService2都需要注入对方的实例，同样构成了循环依赖。</p><p>但是重新启动项目，发现它能够正常运行。这又是为什么？</p><p>带着这两个问题，让我们一起开始spring循环依赖的探秘之旅。</p><h2 id="什么是循环依赖" tabindex="-1"><a class="header-anchor" href="#什么是循环依赖" aria-hidden="true">#</a> 什么是循环依赖？</h2><p>循环依赖：说白是一个或多个对象实例之间存在直接或间接的依赖关系，这种依赖关系构成了构成一个环形调用。</p><p>第一种情况：自己依赖自己的直接依赖</p><p><img src="`+o+'" alt="" width="300" height="300" loading="lazy"></p><p>第二种情况：两个对象之间的直接依赖</p><p><img src="'+d+'" alt="" width="300" height="300" loading="lazy"></p><p>第三种情况：多个对象之间的间接依赖</p><p><img src="'+r+'" alt="" width="300" height="300" loading="lazy"></p><p>前面两种情况的直接循环依赖比较直观，非常好识别，但是第三种间接循环依赖的情况有时候因为业务代码调用层级很深，不容易识别出来。</p><h2 id="循环依赖的n种场景" tabindex="-1"><a class="header-anchor" href="#循环依赖的n种场景" aria-hidden="true">#</a> 循环依赖的N种场景</h2><p>spring中出现循环依赖主要有以下场景：</p><p><img src="'+u+`" alt="" width="800" height="300" loading="lazy"></p><h3 id="单例的setter注入" tabindex="-1"><a class="header-anchor" href="#单例的setter注入" aria-hidden="true">#</a> 单例的setter注入</h3><p>这种注入方式应该是spring用的最多的，代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService1</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService2</span> testService2<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService2</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService1</span> testService1<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个经典的循环依赖，但是它能正常运行，得益于spring的内部机制，让我们根本无法感知它有问题，因为spring默默帮我们解决了。</p><p>spring内部有三级缓存：</p><ul><li><p>singletonObjects 一级缓存，用于保存实例化、注入、初始化完成的bean实例</p></li><li><p>earlySingletonObjects 二级缓存，用于保存实例化完成的bean实例</p></li><li><p>singletonFactories 三级缓存，用于保存bean创建工厂，以便于后面扩展有机会创建代理对象。</p></li></ul><p>下面用一张图告诉你，spring是如何解决循环依赖的：</p><p><img src="`+v+`" alt="" width="800" height="400" loading="lazy"></p><p>细心的朋友可能会发现在这种场景中第二级缓存作用不大。</p><p>那么问题来了，为什么要用第二级缓存呢？</p><p>试想一下，如果出现以下这种情况，我们要如何处理？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService1</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService2</span> testService2<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService3</span> testService3<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService2</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService1</span> testService1<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService3</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService1</span> testService1<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TestService1依赖于TestService2和TestService3，而TestService2依赖于TestService1，同时TestService3也依赖于TestService1。</p><p>按照上图的流程可以把TestService1注入到TestService2，并且TestService1的实例是从第三级缓存中获取的。</p><p>假设不用第二级缓存，TestService1注入到TestService3的流程如图：</p><p><img src="`+k+'" alt="" width="600" height="500" loading="lazy"></p><p>TestService1注入到TestService3又需要从第三级缓存中获取实例，而第三级缓存里保存的并非真正的实例对象，而是ObjectFactory对象。说白了，两次从三级缓存中获取都是ObjectFactory对象，而通过它创建的实例对象每次可能都不一样的。</p><p>这样不是有问题？</p><p>为了解决这个问题，spring引入的第二级缓存。上面图1其实TestService1对象的实例已经被添加到第二级缓存中了，而在TestService1注入到TestService3时，只用从第二级缓存中获取该对象即可。</p><p><img src="'+m+'" alt="" width="600" height="500" loading="lazy"></p><p>还有个问题，第三级缓存中为什么要添加ObjectFactory对象，直接保存实例对象不行吗？</p><p>答：不行，因为假如你想对添加到三级缓存中的实例对象进行增强，直接用实例对象是行不通的。</p><p>针对这种场景spring是怎么做的呢？</p><p>答案就在AbstractAutowireCapableBeanFactory类doCreateBean方法的这段代码中：</p><p><img src="'+b+`" alt="" loading="lazy"></p><p>它定义了一个匿名内部类，通过getEarlyBeanReference方法获取代理对象，其实底层是通过AbstractAutoProxyCreator类的getEarlyBeanReference生成代理对象。</p><h3 id="多例的setter注入" tabindex="-1"><a class="header-anchor" href="#多例的setter注入" aria-hidden="true">#</a> 多例的setter注入</h3><p>这种注入方法偶然会有，特别是在多线程的场景下，具体代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableBeanFactory</span><span class="token punctuation">.</span><span class="token constant">SCOPE_PROTOTYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService1</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService2</span> testService2<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableBeanFactory</span><span class="token punctuation">.</span><span class="token constant">SCOPE_PROTOTYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService2</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService1</span> testService1<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多人说这种情况spring容器启动会报错，其实是不对的，我非常负责任的告诉你程序能够正常启动。</p><p>为什么呢？</p><p>其实在AbstractApplicationContext类的refresh方法中告诉了我们答案，它会调用finishBeanFactoryInitialization方法，该方法的作用是为了spring容器启动的时候提前初始化一些bean。该方法的内部又调用了preInstantiateSingletons方法</p><p><img src="`+g+`" alt="" loading="lazy"></p><p>标红的地方明显能够看出：非抽象、单例 并且非懒加载的类才能被提前初始bean。</p><p>而多例即SCOPE_PROTOTYPE类型的类，非单例，不会被提前初始化bean，所以程序能够正常启动。</p><p>如何让他提前初始化bean呢？</p><p>只需要再定义一个单例的类，在它里面注入TestService1</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService3</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService1</span> testService1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新启动程序，执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Requested</span> bean is currently in creation<span class="token operator">:</span> <span class="token class-name">Is</span> there an unresolvable circular reference<span class="token operator">?</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>果然出现了循环依赖。</p><p>注意：这种循环依赖问题是无法解决的，因为它没有用缓存，每次都会生成一个新对象。</p><h3 id="构造器注入" tabindex="-1"><a class="header-anchor" href="#构造器注入" aria-hidden="true">#</a> 构造器注入</h3><p>这种注入方式现在其实用的已经非常少了，但是我们还是有必要了解一下，看看如下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService1</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">TestService1</span><span class="token punctuation">(</span><span class="token class-name">TestService2</span> testService2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService2</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">TestService2</span><span class="token punctuation">(</span><span class="token class-name">TestService1</span> testService1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Requested</span> bean is currently in creation<span class="token operator">:</span> <span class="token class-name">Is</span> there an unresolvable circular reference<span class="token operator">?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>出现了循环依赖，为什么呢？</p><p><img src="`+h+`" alt="" loading="lazy"></p><p>从图中的流程看出构造器注入没能添加到三级缓存，也没有使用缓存，所以也无法解决循环依赖问题。</p><h3 id="单例的代理对象setter注入" tabindex="-1"><a class="header-anchor" href="#单例的代理对象setter注入" aria-hidden="true">#</a> 单例的代理对象setter注入</h3><p>这种注入方式其实也比较常用，比如平时使用：@Async注解的场景，会通过AOP自动生成代理对象。</p><p>我那位同事的问题也是这种情况。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService1</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService2</span> testService2<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Async</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService2</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService1</span> testService1<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从前面得知程序启动会报错，出现了循环依赖：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span></span>BeanCurrentlyInCreationException</span><span class="token operator">:</span> <span class="token class-name">Error</span> creating bean <span class="token keyword">with</span> <span class="token namespace">name</span> &#39;testService1&#39;<span class="token operator">:</span> <span class="token class-name">Bean</span> <span class="token keyword">with</span> <span class="token namespace">name</span> &#39;testService1&#39; has been injected into other beans <span class="token punctuation">[</span>testService2<span class="token punctuation">]</span> in its raw version as part of a circular reference<span class="token punctuation">,</span> but has eventually been <span class="token class-name"><span class="token namespace">wrapped<span class="token punctuation">.</span></span> This</span> means that said other beans <span class="token keyword">do</span> not use the <span class="token keyword">final</span> version of the <span class="token class-name"><span class="token namespace">bean<span class="token punctuation">.</span></span> This</span> is often the result of over<span class="token operator">-</span>eager type matching <span class="token operator">-</span> consider using &#39;getBeanNamesOfType&#39; <span class="token keyword">with</span> <span class="token namespace">the</span> &#39;allowEagerInit&#39; flag turned off<span class="token punctuation">,</span> <span class="token keyword">for</span> example<span class="token punctuation">.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么会循环依赖呢？</p><p>答案就在下面这张图中：</p><p><img src="`+y+'" alt="" loading="lazy"></p><p>说白了，bean初始化完成之后，后面还有一步去检查：第二级缓存 和 原始对象 是否相等。由于它对前面流程来说无关紧要，所以前面的流程图中省略了，但是在这里是关键点，我们重点说说：</p><p><img src="'+w+`" alt="" loading="lazy"></p><p>那位同事的问题正好是走到这段代码，发现第二级缓存 和 原始对象不相等，所以抛出了循环依赖的异常。</p><p>如果这时候把TestService1改个名字，改成：TestService6，其他的都不变。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Service</span>
publicclass <span class="token class-name">TestService6</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService2</span> testService2<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Async</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再重新启动一下程序，神奇般的好了。</p><p>what？ 这又是为什么？</p><p>这就要从spring的bean加载顺序说起了，默认情况下，spring是按照文件完整路径递归查找的，按路径+文件名排序，排在前面的先加载。所以TestService1比TestService2先加载，而改了文件名称之后，TestService2比TestService6先加载。</p><p>为什么TestService2比TestService6先加载就没问题呢？</p><p>答案在下面这张图中：</p><p><img src="`+S+`" alt="" loading="lazy"></p><p>这种情况testService6中其实第二级缓存是空的，不需要跟原始对象判断，所以不会抛出循环依赖。</p><h3 id="dependson循环依赖" tabindex="-1"><a class="header-anchor" href="#dependson循环依赖" aria-hidden="true">#</a> DependsOn循环依赖</h3><p>还有一种有些特殊的场景，比如我们需要在实例化Bean A之前，先实例化Bean B，这个时候就可以使用@DependsOn注解。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@DependsOn</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;testService2&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService1</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService2</span> testService2<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@DependsOn</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;testService1&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService2</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestService1</span> testService1<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序启动之后，执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token class-name">Circular</span> depends<span class="token operator">-</span>on relationship between &#39;testService2<span class="token char">&#39; and &#39;</span>testService1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中本来如果TestService1和TestService2都没有加@DependsOn注解是没问题的，反而加了这个注解会出现循环依赖问题。</p><p>这又是为什么？</p><p>答案在AbstractBeanFactory类的doGetBean方法的这段代码中：</p><p><img src="`+T+'" alt="" loading="lazy"></p><p>它会检查dependsOn的实例有没有循环依赖，如果有循环依赖则抛异常。</p><h2 id="出现循环依赖如何解决" tabindex="-1"><a class="header-anchor" href="#出现循环依赖如何解决" aria-hidden="true">#</a> 出现循环依赖如何解决？</h2><p>项目中如果出现循环依赖问题，说明是spring默认无法解决的循环依赖，要看项目的打印日志，属于哪种循环依赖。目前包含下面几种情况：</p><p><img src="'+f+'" alt="" loading="lazy"></p><h3 id="生成代理对象产生的循环依赖" tabindex="-1"><a class="header-anchor" href="#生成代理对象产生的循环依赖" aria-hidden="true">#</a> 生成代理对象产生的循环依赖</h3><p>这类循环依赖问题解决方法很多，主要有：</p><ul><li>使用@Lazy注解，延迟加载</li><li>使用@DependsOn注解，指定加载先后关系</li><li>修改文件名称，改变循环依赖类的加载顺序</li></ul><h3 id="使用-dependson产生的循环依赖" tabindex="-1"><a class="header-anchor" href="#使用-dependson产生的循环依赖" aria-hidden="true">#</a> 使用@DependsOn产生的循环依赖</h3><p>这类循环依赖问题要找到@DependsOn注解循环依赖的地方，迫使它不循环依赖就可以解决问题。</p><h3 id="多例循环依赖" tabindex="-1"><a class="header-anchor" href="#多例循环依赖" aria-hidden="true">#</a> 多例循环依赖</h3><p>这类循环依赖问题可以通过把bean改成单例的解决。</p><h3 id="构造器循环依赖" tabindex="-1"><a class="header-anchor" href="#构造器循环依赖" aria-hidden="true">#</a> 构造器循环依赖</h3><p>这类循环依赖问题可以通过使用@Lazy注解解决。</p>',123);function z(B,E){const a=l("ExternalLinkIcon");return i(),t("div",null,[n("div",_,[x,n("p",null,[s("参考 "),n("a",A,[s('"spring：我是如何解决循环依赖的？"'),p(a)])])]),O])}const P=e(j,[["render",z],["__file","循环依赖.html.vue"]]);export{P as default};
