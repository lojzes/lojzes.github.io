import{_ as e,X as o,Y as c,Z as n,a1 as a,$ as t,a2 as p,C as i}from"./framework-0b23a550.js";const l="/assets/3-fc0f0bf7.jpg",u="/assets/4-984d673a.png",r={},d={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"参考",-1),v={href:"https://github.com/lojzes/middle-study/tree/master/mysql-rw",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/cjsblog/p/9712457.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://netfilx.github.io/spring-boot/5.mybatis%E4%BD%BF%E7%94%A8%E5%A4%9A%E4%B8%AA%E6%95%B0%E6%8D%AE%E6%BA%90/muilt-data-source",target:"_blank",rel:"noopener noreferrer"},g=p('<h2 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h2><p>读写分离要做的事情就是对于一条SQL该选择哪个数据库去执行，至于谁来做选择数据库这件事儿，无非两个，要么中间件帮我们做，要么程序自己做。因此，一般来讲，读写分离有两种实现方式。第一种是依靠中间件（比如：MyCat），也就是说应用程序连接到中间件，中间件帮我们做SQL分离；第二种是应用程序自己去做分离。这里我们选择程序自己来做，主要是利用Spring提供的路由数据源，以及AOP</p><p>然而，应用程序层面去做读写分离最大的弱点（不足之处）在于无法动态增加数据库节点，因为数据源配置都是写在配置中的，新增数据库意味着新加一个数据源，必然改配置，并重启应用。当然，好处就是相对简单。</p><p><img src="'+l+'" alt="" loading="lazy"></p><h2 id="abstractroutingdatasource" tabindex="-1"><a class="header-anchor" href="#abstractroutingdatasource" aria-hidden="true">#</a> AbstractRoutingDataSource</h2><p>基于特定的查找key路由到特定的数据源。它内部维护了一组目标数据源，并且做了路由key与目标数据源之间的映射，提供基于key查找数据源的方法。</p><p><img src="'+u+`" alt="" loading="lazy"></p><h2 id="相关配置" tabindex="-1"><a class="header-anchor" href="#相关配置" aria-hidden="true">#</a> 相关配置</h2><h3 id="datasourceconfig" tabindex="-1"><a class="header-anchor" href="#datasourceconfig" aria-hidden="true">#</a> DataSourceConfig</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 关于数据源配置，参考SpringBoot官方文档第79章《Data Access》 79. Data Access 79.1 Configure a Custom DataSource 79.2
 * Configure Two DataSources
 */</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceConfig</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource.master&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">masterDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DataSourceBuilder</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource.slave1&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">slave1DataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DataSourceBuilder</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span><span class="token string">&quot;spring.datasource.slave2&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">slave2DataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DataSourceBuilder</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 备注: 配置了4个数据源，1个master，2两个slave，1个路由数据源。 前3个数据源都是为了生成第4个数据源，而且后续我们只用这最后一个路由数据源。
   *
   * <span class="token keyword">@param</span> <span class="token parameter">masterDataSource</span>
   * <span class="token keyword">@param</span> <span class="token parameter">slave1DataSource</span>
   * <span class="token keyword">@param</span> <span class="token parameter">slave2DataSource</span>
   * <span class="token keyword">@return</span> javax.sql.DataSource
   * <span class="token keyword">@author</span> lojzes@qq.com
   * <span class="token keyword">@date</span> 2023/7/9 18:56
   **/</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">myRoutingDataSource</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;masterDataSource&quot;</span><span class="token punctuation">)</span> <span class="token class-name">DataSource</span> masterDataSource<span class="token punctuation">,</span>
      <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;slave1DataSource&quot;</span><span class="token punctuation">)</span> <span class="token class-name">DataSource</span> slave1DataSource<span class="token punctuation">,</span>
      <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;slave2DataSource&quot;</span><span class="token punctuation">)</span> <span class="token class-name">DataSource</span> slave2DataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> targetDataSources <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    targetDataSources<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DBTypeEnum</span><span class="token punctuation">.</span><span class="token constant">MASTER</span><span class="token punctuation">,</span> masterDataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    targetDataSources<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DBTypeEnum</span><span class="token punctuation">.</span><span class="token constant">SLAVE1</span><span class="token punctuation">,</span> slave1DataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    targetDataSources<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DBTypeEnum</span><span class="token punctuation">.</span><span class="token constant">SLAVE2</span><span class="token punctuation">,</span> slave2DataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">MyRoutingDataSource</span> myRoutingDataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRoutingDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置默认数据源</span>
    myRoutingDataSource<span class="token punctuation">.</span><span class="token function">setDefaultTargetDataSource</span><span class="token punctuation">(</span>masterDataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置目标数据源组</span>
    myRoutingDataSource<span class="token punctuation">.</span><span class="token function">setTargetDataSources</span><span class="token punctuation">(</span>targetDataSources<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> myRoutingDataSource<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datasourceaop" tabindex="-1"><a class="header-anchor" href="#datasourceaop" aria-hidden="true">#</a> DataSourceAop</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceAop</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;!@annotation(com.lojzes.middle.mysql.rw.annotation.Master) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot;&amp;&amp; (execution(* com.lojzes.middle.mysql.rw.service..*.select*(..)) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot;|| execution(* com.lojzes.middle.mysql.rw.service..*.get*(..)))&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">readPointcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(com.lojzes.middle.mysql.rw.annotation.Master) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot;|| execution(* com.lojzes.middle.mysql.rw.service..*.insert*(..)) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot;|| execution(* com.lojzes.middle.mysql.rw.service..*.add*(..)) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot;|| execution(* com.lojzes.middle.mysql.rw.service..*.update*(..)) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot;|| execution(* com.lojzes.middle.mysql.rw.service..*.edit*(..)) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot;|| execution(* com.lojzes.middle.mysql.rw.service..*.delete*(..)) &quot;</span> <span class="token operator">+</span>
      <span class="token string">&quot;|| execution(* com.lojzes.middle.mysql.rw.service..*.remove*(..))&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">writePointcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;readPointcut()&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在 readPointcut 切面之前设置从数据库</span>
    <span class="token class-name">DBContextHolder</span><span class="token punctuation">.</span><span class="token function">slave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Before</span><span class="token punctuation">(</span><span class="token string">&quot;writePointcut()&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在 writePointcut 切面之前设置主数据库</span>
    <span class="token class-name">DBContextHolder</span><span class="token punctuation">.</span><span class="token function">master</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 另一种写法：if...else...  判断哪些需要读从数据库，其余的走主数据库
   */</span>
<span class="token comment">//    @Before(&quot;execution(* com.cjs.example.service.impl.*.*(..))&quot;)</span>
<span class="token comment">//    public void before(JoinPoint jp) {</span>
<span class="token comment">//        String methodName = jp.getSignature().getName();</span>
<span class="token comment">//</span>
<span class="token comment">//        if (StringUtils.startsWithAny(methodName, &quot;get&quot;, &quot;select&quot;, &quot;find&quot;)) {</span>
<span class="token comment">//            DBContextHolder.slave();</span>
<span class="token comment">//        }else {</span>
<span class="token comment">//            DBContextHolder.master();</span>
<span class="token comment">//        }</span>
<span class="token comment">//    }</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MyRoutingDataSource</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 备注: 重新路由数据源 determineCurrentLookupKey
 *
 * <span class="token keyword">@author</span> lojzes@qq.com
 * <span class="token keyword">@date</span> 2023/7/10 07:01
 * <span class="token keyword">@return</span>
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRoutingDataSource</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractRoutingDataSource</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Nullable</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">determineCurrentLookupKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">DBContextHolder</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function y(f,D){const s=i("ExternalLinkIcon");return o(),c("div",null,[n("div",d,[k,n("p",null,[n("a",v,[a("源码"),t(s)])]),n("p",null,[n("a",m,[a("SpringBoot+MyBatis+MySQL读写分离"),t(s)])]),n("p",null,[n("a",b,[a("Spring Boot 整合 Mybatis 实现 Druid 多数据源"),t(s)])])]),g])}const q=e(r,[["render",y],["__file","多数据源.html.vue"]]);export{q as default};
