import{_ as t,X as p,Y as o,Z as n,a1 as a,$ as e,a2 as c,C as i}from"./framework-0b23a550.js";const l={},u={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"参考",-1),r={href:"https://github.com/lojzes/spring-cloud-alibaba-study/tree/master/dubbo-study/src/main/java/com/lojzes/dubbo/study/spi",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.51cto.com/article/634720.html",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="spi" tabindex="-1"><a class="header-anchor" href="#spi" aria-hidden="true">#</a> spi</h2><p>SPI是什么</p><p><code>SPI</code>是一种简称，全名叫 <code>Service Provider Interface</code>，Java本身提供了一套SPI机制，SPI 的<u>本质是将接口实现类的全限定名配置在文件中，并由服务加载器读取配置文件，加载实现类，这样可以在运行时，动态为接口替换实现类</u>，这也是很多框架组件实现扩展功能的一种手段。</p><p>而今天要说的Dubbo SPI机制和Java SPI还是有一点区别的，Dubbo 并未使用 Java 原生的 SPI 机制，而是对他进行了改进增强，进而可以很容易地对Dubbo进行功能上的扩展。</p><p>1.什么是SPI(开头已经解释了)</p><p>2.Dubbo SPI和Java原生的有什么区别</p><p>3.两种实现应该如何写出来</p><h3 id="java-原生-spi-实现" tabindex="-1"><a class="header-anchor" href="#java-原生-spi-实现" aria-hidden="true">#</a> java 原生 spi 实现</h3><p>定义接口、实现类</p><p>然后在项目 <code>META-INF/services</code> 文件夹下创建一个名称为接口的全限定名，<code>com.example.demo.spi.Car</code>。</p><p>文件内容写上实现类的全限定名，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>com.example.demo.spi.Train 
com.example.demo.spi.Truck 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JavaSPITest</span> <span class="token punctuation">{</span> 
 <span class="token annotation punctuation">@Test</span> 
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token class-name">ServiceLoader</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Car</span><span class="token punctuation">&gt;</span></span> serviceLoader <span class="token operator">=</span> <span class="token class-name">ServiceLoader</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token class-name">Car</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  serviceLoader<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">Car</span><span class="token operator">::</span><span class="token function">startUp</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 <span class="token punctuation">}</span> 
<span class="token punctuation">}</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token class-name">The</span> train started 
<span class="token class-name">The</span> truck started 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dubbo-spi是如何实现的" tabindex="-1"><a class="header-anchor" href="#dubbo-spi是如何实现的" aria-hidden="true">#</a> Dubbo SPI是如何实现的</h2><p>Dubbo 使用的SPI并不是Java原生的，而是重新实现了一套，其主要逻辑都在ExtensionLoader类中，逻辑也不难，后面会稍带讲一下</p><p>看看使用，和Java的差不了太多，基于前面的例子来看下，<u>接口类</u>需要加上<code>@SPI</code>注解：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@SPI</span> 
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span> 
 <span class="token keyword">void</span> <span class="token function">startUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现类不需要改动</p><p>配置文件需要放在<code>META-INF/dubbo</code>下面，配置写法有些区别，直接看代码：</p><p>文件名称，为接口的全限定名称</p><p>com.lojzes.alibaba.dubbo.springboot.spi.HelloSPI</p><p>文件内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>train = com.example.demo.spi.Train 
truck = com.example.demo.spi.Truck 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JavaSPITest</span> <span class="token punctuation">{</span> 
 <span class="token annotation punctuation">@Test</span> 
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testCar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token class-name">ExtensionLoader</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Car</span><span class="token punctuation">&gt;</span></span> extensionLoader <span class="token operator">=</span> <span class="token class-name">ExtensionLoader</span><span class="token punctuation">.</span><span class="token function">getExtensionLoader</span><span class="token punctuation">(</span><span class="token class-name">Car</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token class-name">Car</span> car <span class="token operator">=</span> extensionLoader<span class="token punctuation">.</span><span class="token function">getExtension</span><span class="token punctuation">(</span><span class="token string">&quot;train&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  car<span class="token punctuation">.</span><span class="token function">startUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 <span class="token punctuation">}</span> 
<span class="token punctuation">}</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dubbo-spi中常用的注解" tabindex="-1"><a class="header-anchor" href="#dubbo-spi中常用的注解" aria-hidden="true">#</a> Dubbo SPI中常用的注解</h2><pre><code>@SPI 标记为扩展接口
@Adaptive自适应拓展实现类标志
@Activate 自动激活条件的标记
</code></pre><p>总结一下两者区别：</p><pre><code>使用上的区别 Dubbo 使用 ExtensionLoader 而不是 ServiceLoader 了，其主要逻辑都封装在这个类中
配置文件存放目录不一样，Java 的在 META-INF/services，
Dubbo在META-INF/dubbo，META-INF/dubbo/internal
Java SPI 会一次性实例化扩展点所有实现，如果有扩展实现初始化很耗时，
并且又用不上，会造成大量资源被浪费
Dubbo SPI 增加了对扩展点 IOC 和 AOP 的支持，
一个扩展点可以直接 setter 注入其它扩展点
Java SPI加载过程失败，扩展点的名称是拿不到的。
比如：JDK 标准的 ScriptEngine，getName() 获取脚本类型的名称，
如果 RubyScriptEngine 因为所依赖的 jruby.jar 不存在，
导致 RubyScriptEngine 类加载失败，这个失败原因是不会有任何提示的，
当用户执行 ruby 脚本时，会报不支持 ruby，而不是真正失败的原因
</code></pre><h2 id="dubbo-spi源码分析" tabindex="-1"><a class="header-anchor" href="#dubbo-spi源码分析" aria-hidden="true">#</a> Dubbo SPI源码分析</h2><p>Dubbo SPI 使用上是通过 ExtensionLoader 的 getExtensionLoader 方法获取一个 ExtensionLoader 实例，然后再通过 ExtensionLoader 的 getExtension 方法获取拓展类对象。这其中，getExtensionLoader 方法用于从缓存中获取与拓展类对应的 ExtensionLoader，如果没有缓存，则创建一个新的实例，直接上代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getExtension</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> name<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Extension name == null&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token comment">// 获取默认的拓展实现类 </span>
        <span class="token keyword">return</span> <span class="token function">getDefaultExtension</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
    <span class="token comment">// 用于持有目标对象 </span>
    <span class="token class-name">Holder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> holder <span class="token operator">=</span> cachedInstances<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>holder <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        cachedInstances<span class="token punctuation">.</span><span class="token function">putIfAbsent</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Holder</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
        holder <span class="token operator">=</span> cachedInstances<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token punctuation">}</span> 
    <span class="token class-name">Object</span> instance <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">// DCL </span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>holder<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
            instance <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
                <span class="token comment">// 创建扩展实例 </span>
                instance <span class="token operator">=</span> <span class="token function">createExtension</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 
                <span class="token comment">// 设置实例到 holder 中 </span>
                holder<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span> 
            <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span> 
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> instance<span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这一段代码主要做的事情就是先检查缓存，缓存不存在创建扩展对象</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>从设计思想上来看的话，SPI是对迪米特法则和开闭原则的一种实现。</p><p>开闭原则：<u>对修改关闭对扩展开放</u>。这个原则在众多开源框架中都非常常见，Spring的IOC容器也是大量使用。</p><p>迪米特法则：也叫最小知识原则，可以解释为，<u>不该直接依赖关系的类之间，不要依赖;有依赖关系的类之间，尽量只依赖必要的接口</u>。</p><p>那Dubbo的SPI为什么不直接使用Spring的呢，这一点从众多开源框架中也许都能窥探一点端倪出来，因为本身作为开源框架是要融入其他框架或者一起</p><p>运行的，不能作为依赖被依赖对象存在。</p><p>再者对于Dubbo来说，直接用Spring IOC AOP的话有一些架构臃肿，完全没必要，所以自己实现一套轻量级反而是最优解</p>`,43);function b(m,h){const s=i("ExternalLinkIcon");return p(),o("div",null,[n("div",u,[d,n("p",null,[n("a",r,[a("源码"),e(s)])]),n("p",null,[n("a",k,[a("面试重点： 来说说Dubbo SPI 机制"),e(s)])])]),v])}const x=t(l,[["render",b],["__file","spi.html.vue"]]);export{x as default};