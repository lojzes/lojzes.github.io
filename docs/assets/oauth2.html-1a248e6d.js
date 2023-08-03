import{_ as e,X as p,Y as c,Z as n,a1 as a,$ as t,a2 as o,C as i}from"./framework-0b23a550.js";const u={},l={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"参考",-1),r={href:"https://docs.spring.io/spring-security/reference/servlet/architecture.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/lojzes/spring-security",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="redis-token-store" tabindex="-1"><a class="header-anchor" href="#redis-token-store" aria-hidden="true">#</a> redis token store</h2><h2 id="授权服务配置" tabindex="-1"><a class="header-anchor" href="#授权服务配置" aria-hidden="true">#</a> 授权服务配置</h2><h3 id="securityconfiguration" tabindex="-1"><a class="header-anchor" href="#securityconfiguration" aria-hidden="true">#</a> SecurityConfiguration</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfiguration</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LoginFailAuthenticationFailureHandler</span> loginFailAuthenticationFailureHandler<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LoginSuccessAuthenticationSuccessHandler</span> loginSuccessAuthenticationSuccessHandler<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LogoutSuccessHandler</span> logoutSuccessHandler<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LoginAuthenticationEntryPoint</span> authenticationEntryPoint<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LoginAccessDeniedHandler</span> loginAccessDeniedHandler<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">ISysUserDetailsService</span> userDetailsService<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">SecurityProperties</span> securityProperties<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationManagerBuilder</span> auth<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 自定义用户登录验证</span>
    <span class="token comment">//auth.authenticationProvider(loginAuthenticationProvider);</span>
    <span class="token comment">// 指定密码加密所使用的加密器为passwordEncoder(), 需要将密码加密后写入数据库</span>
    auth<span class="token punctuation">.</span><span class="token function">userDetailsService</span><span class="token punctuation">(</span>userDetailsService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 不删除凭据，以便记住用户</span>
    auth<span class="token punctuation">.</span><span class="token function">eraseCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置 FilterChainProxy</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">WebSecurity</span> web<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置 SecurityFilterChain</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span>securityProperties<span class="token punctuation">.</span><span class="token function">getPermitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">AuthenticationManager</span> <span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">PasswordEncoder</span> <span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="authorizationserverconfiguration" tabindex="-1"><a class="header-anchor" href="#authorizationserverconfiguration" aria-hidden="true">#</a> AuthorizationServerConfiguration</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@AutoConfigureAfter</span><span class="token punctuation">(</span><span class="token class-name">SecurityConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableAuthorizationServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthorizationServerConfiguration</span> <span class="token keyword">extends</span> <span class="token class-name">AuthorizationServerConfigurerAdapter</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEMO_RESOURCE_ID</span> <span class="token operator">=</span> <span class="token string">&quot;order&quot;</span><span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">AuthenticationManager</span> authenticationManager<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">PasswordEncoder</span> passwordEncoder<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">ClientDetailsServiceConfigurer</span> clients<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//配置两个客户端,一个用于password认证一个用于client认证</span>
    clients<span class="token punctuation">.</span><span class="token function">inMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withClient</span><span class="token punctuation">(</span><span class="token string">&quot;client_1&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">//  密码123</span>
        <span class="token punctuation">.</span><span class="token function">secret</span><span class="token punctuation">(</span>passwordEncoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">//配置访问token的有效期</span>
        <span class="token punctuation">.</span><span class="token function">accessTokenValiditySeconds</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span>
        <span class="token comment">//配置刷新token的有效期</span>
        <span class="token punctuation">.</span><span class="token function">refreshTokenValiditySeconds</span><span class="token punctuation">(</span><span class="token number">864000</span><span class="token punctuation">)</span>
        <span class="token comment">//配置redirect_uri，用于授权成功后跳转</span>
        <span class="token punctuation">.</span><span class="token function">redirectUris</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">resourceIds</span><span class="token punctuation">(</span><span class="token constant">DEMO_RESOURCE_ID</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorizedGrantTypes</span><span class="token punctuation">(</span><span class="token string">&quot;authorization_code&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;refresh_token&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">scopes</span><span class="token punctuation">(</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorities</span><span class="token punctuation">(</span><span class="token string">&quot;client&quot;</span><span class="token punctuation">)</span>

        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withClient</span><span class="token punctuation">(</span><span class="token string">&quot;client_2&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">//  密码123</span>
        <span class="token punctuation">.</span><span class="token function">secret</span><span class="token punctuation">(</span>passwordEncoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">//配置访问token的有效期</span>
        <span class="token punctuation">.</span><span class="token function">accessTokenValiditySeconds</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span>
        <span class="token comment">//配置刷新token的有效期</span>
        <span class="token punctuation">.</span><span class="token function">refreshTokenValiditySeconds</span><span class="token punctuation">(</span><span class="token number">864000</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">resourceIds</span><span class="token punctuation">(</span><span class="token constant">DEMO_RESOURCE_ID</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorizedGrantTypes</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;refresh_token&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">scopes</span><span class="token punctuation">(</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorities</span><span class="token punctuation">(</span><span class="token string">&quot;client&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthorizationServerEndpointsConfigurer</span> endpoints<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    endpoints
        <span class="token punctuation">.</span><span class="token function">tokenStore</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RedisTokenStore</span><span class="token punctuation">(</span>redisConnectionFactory<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authenticationManager</span><span class="token punctuation">(</span>authenticationManager<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthorizationServerSecurityConfigurer</span> oauthServer<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//允许表单认证</span>
    oauthServer<span class="token punctuation">.</span><span class="token function">allowFormAuthenticationForClients</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">checkTokenAccess</span><span class="token punctuation">(</span><span class="token string">&quot;permitAll()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资源服务配置" tabindex="-1"><a class="header-anchor" href="#资源服务配置" aria-hidden="true">#</a> 资源服务配置</h2><p>ResourceServerConfiguration</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableResourceServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ResourceServerConfiguration</span> <span class="token keyword">extends</span> <span class="token class-name">ResourceServerConfigurerAdapter</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEMO_RESOURCE_ID</span> <span class="token operator">=</span> <span class="token string">&quot;order&quot;</span><span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">RedisConnectionFactory</span> redisConnectionFactory<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">ResourceServerSecurityConfigurer</span> resources<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resources<span class="token punctuation">.</span><span class="token function">resourceId</span><span class="token punctuation">(</span><span class="token constant">DEMO_RESOURCE_ID</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stateless</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    resources<span class="token punctuation">.</span><span class="token function">tokenServices</span><span class="token punctuation">(</span><span class="token function">tokenService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// @formatter:off</span>
    http
        <span class="token comment">// Since we want the protected resources to be accessible in the UI as well we need</span>
        <span class="token comment">// session creation to be allowed (it&#39;s disabled by default in 2.0.6)</span>
        <span class="token punctuation">.</span><span class="token function">sessionManagement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sessionCreationPolicy</span><span class="token punctuation">(</span><span class="token class-name">SessionCreationPolicy</span><span class="token punctuation">.</span><span class="token constant">IF_REQUIRED</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">requestMatchers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//                    .antMatchers(&quot;/product/**&quot;).access(&quot;#oauth2.hasScope(&#39;select&#39;) and hasRole(&#39;ROLE_USER&#39;)&quot;)</span>
        <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/order/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//配置order访问控制，必须认证过后才可以访问</span>
    <span class="token comment">// @formatter:on</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">ResourceServerTokenServices</span> <span class="token function">tokenService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//    远程验证token</span>
    <span class="token class-name">RemoteTokenServices</span> remoteTokenServices <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RemoteTokenServices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    remoteTokenServices<span class="token punctuation">.</span><span class="token function">setCheckTokenEndpointUrl</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:5301/oauth/check_token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    remoteTokenServices<span class="token punctuation">.</span><span class="token function">setClientId</span><span class="token punctuation">(</span><span class="token string">&quot;client_2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    remoteTokenServices<span class="token punctuation">.</span><span class="token function">setClientSecret</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> remoteTokenServices<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jwt-token-store" tabindex="-1"><a class="header-anchor" href="#jwt-token-store" aria-hidden="true">#</a> jwt token store</h2><h2 id="授权服务配置-1" tabindex="-1"><a class="header-anchor" href="#授权服务配置-1" aria-hidden="true">#</a> 授权服务配置</h2><p>SecurityConfiguration</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfiguration</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LoginFailAuthenticationFailureHandler</span> loginFailAuthenticationFailureHandler<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LoginSuccessAuthenticationSuccessHandler</span> loginSuccessAuthenticationSuccessHandler<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LogoutSuccessHandler</span> logoutSuccessHandler<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LoginAuthenticationEntryPoint</span> authenticationEntryPoint<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">LoginAccessDeniedHandler</span> loginAccessDeniedHandler<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">ISysUserDetailsService</span> userDetailsService<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">SecurityProperties</span> securityProperties<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthenticationManagerBuilder</span> auth<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// 自定义用户登录验证</span>
    <span class="token comment">//auth.authenticationProvider(loginAuthenticationProvider);</span>
    <span class="token comment">// 指定密码加密所使用的加密器为passwordEncoder(), 需要将密码加密后写入数据库</span>
    auth<span class="token punctuation">.</span><span class="token function">userDetailsService</span><span class="token punctuation">(</span>userDetailsService<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 不删除凭据，以便记住用户</span>
    auth<span class="token punctuation">.</span><span class="token function">eraseCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置 FilterChainProxy</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">WebSecurity</span> web<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span>web<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 配置 SecurityFilterChain</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    http<span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span>securityProperties<span class="token punctuation">.</span><span class="token function">getPermitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">AuthenticationManager</span> <span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">authenticationManagerBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">PasswordEncoder</span> <span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AuthorizationServerConfiguration</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@AutoConfigureAfter</span><span class="token punctuation">(</span><span class="token class-name">SecurityConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableAuthorizationServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuthorizationServerConfiguration</span> <span class="token keyword">extends</span> <span class="token class-name">AuthorizationServerConfigurerAdapter</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEMO_RESOURCE_ID</span> <span class="token operator">=</span> <span class="token string">&quot;order&quot;</span><span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token class-name">AuthenticationManager</span> authenticationManager<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">PasswordEncoder</span> passwordEncoder<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">ISysUserDetailsService</span> iSysUserDetailsService<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">TokenStore</span> tokenStore<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">JwtAccessTokenConverter</span> jwtAccessTokenConverter<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">ClientDetailsServiceConfigurer</span> clients<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//配置两个客户端,一个用于password认证一个用于client认证</span>
    clients<span class="token punctuation">.</span><span class="token function">inMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withClient</span><span class="token punctuation">(</span><span class="token string">&quot;client_1&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">//  密码123</span>
        <span class="token punctuation">.</span><span class="token function">secret</span><span class="token punctuation">(</span>passwordEncoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">//配置访问token的有效期</span>
        <span class="token punctuation">.</span><span class="token function">accessTokenValiditySeconds</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span>
        <span class="token comment">//配置刷新token的有效期</span>
        <span class="token punctuation">.</span><span class="token function">refreshTokenValiditySeconds</span><span class="token punctuation">(</span><span class="token number">864000</span><span class="token punctuation">)</span>
        <span class="token comment">//配置redirect_uri，用于授权成功后跳转</span>
        <span class="token punctuation">.</span><span class="token function">redirectUris</span><span class="token punctuation">(</span><span class="token string">&quot;http://www.baidu.com&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">resourceIds</span><span class="token punctuation">(</span><span class="token constant">DEMO_RESOURCE_ID</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorizedGrantTypes</span><span class="token punctuation">(</span><span class="token string">&quot;authorization_code&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;refresh_token&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">scopes</span><span class="token punctuation">(</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorities</span><span class="token punctuation">(</span><span class="token string">&quot;client&quot;</span><span class="token punctuation">)</span>

        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withClient</span><span class="token punctuation">(</span><span class="token string">&quot;client_2&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">//  密码123</span>
        <span class="token punctuation">.</span><span class="token function">secret</span><span class="token punctuation">(</span>passwordEncoder<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">//配置访问token的有效期</span>
        <span class="token punctuation">.</span><span class="token function">accessTokenValiditySeconds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token comment">//配置刷新token的有效期</span>
        <span class="token punctuation">.</span><span class="token function">refreshTokenValiditySeconds</span><span class="token punctuation">(</span><span class="token number">864000</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">resourceIds</span><span class="token punctuation">(</span><span class="token constant">DEMO_RESOURCE_ID</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorizedGrantTypes</span><span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;refresh_token&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">scopes</span><span class="token punctuation">(</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorities</span><span class="token punctuation">(</span><span class="token string">&quot;client&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthorizationServerEndpointsConfigurer</span> endpoints<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
    jwtAccessTokenConverter<span class="token punctuation">.</span><span class="token function">setAccessTokenConverter</span><span class="token punctuation">(</span><span class="token function">accessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    endpoints
        <span class="token punctuation">.</span><span class="token function">tokenStore</span><span class="token punctuation">(</span>tokenStore<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authenticationManager</span><span class="token punctuation">(</span>authenticationManager<span class="token punctuation">)</span>
        <span class="token comment">// 支持 jwt</span>
        <span class="token punctuation">.</span><span class="token function">accessTokenConverter</span><span class="token punctuation">(</span>jwtAccessTokenConverter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">AuthorizationServerSecurityConfigurer</span> oauthServer<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">//允许表单认证</span>
    oauthServer<span class="token punctuation">.</span><span class="token function">allowFormAuthenticationForClients</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">checkTokenAccess</span><span class="token punctuation">(</span><span class="token string">&quot;permitAll()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 备注: 返回 jwttoken ，附加信息
   *
   * <span class="token keyword">@param</span>
   * <span class="token keyword">@return</span> org.springframework.security.oauth2.provider.token.AccessTokenConverter
   * <span class="token keyword">@author</span> lojzes@qq.com
   * <span class="token keyword">@date</span> 2023/7/2 21:00
   **/</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">AccessTokenConverter</span> <span class="token function">accessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 支持返回的jwttoken 附件信息</span>
    <span class="token class-name">DefaultAccessTokenConverter</span> defaultAccessTokenConverter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultAccessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">convertAccessToken</span><span class="token punctuation">(</span><span class="token class-name">OAuth2AccessToken</span> token<span class="token punctuation">,</span>
          <span class="token class-name">OAuth2Authentication</span> authentication<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> stringMap <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token keyword">super</span>
            <span class="token punctuation">.</span><span class="token function">convertAccessToken</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> authentication<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>authentication<span class="token punctuation">.</span><span class="token function">getPrincipal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">SysUser</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">SysUser</span> user <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SysUser</span><span class="token punctuation">)</span> authentication<span class="token punctuation">.</span><span class="token function">getPrincipal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>userId<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>deptId<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getDeptId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>companyId<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getCompanyId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>tenantId<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getTenantId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>phone<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> stringMap<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 支持查询 SysUser -&gt; principal</span>
    <span class="token class-name">DefaultUserAuthenticationConverter</span> defaultUserAuthenticationConverter
        <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultUserAuthenticationConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    defaultUserAuthenticationConverter<span class="token punctuation">.</span><span class="token function">setUserDetailsService</span><span class="token punctuation">(</span>iSysUserDetailsService<span class="token punctuation">)</span><span class="token punctuation">;</span>

    defaultAccessTokenConverter<span class="token punctuation">.</span><span class="token function">setUserTokenConverter</span><span class="token punctuation">(</span>defaultUserAuthenticationConverter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> defaultAccessTokenConverter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资源服务配置-1" tabindex="-1"><a class="header-anchor" href="#资源服务配置-1" aria-hidden="true">#</a> 资源服务配置</h2><p>ResourceServerConfiguration</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableResourceServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ResourceServerConfiguration</span> <span class="token keyword">extends</span> <span class="token class-name">ResourceServerConfigurerAdapter</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DEMO_RESOURCE_ID</span> <span class="token operator">=</span> <span class="token string">&quot;order&quot;</span><span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">ISysUserDetailsService</span> iSysUserDetailsService<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Resource</span>
  <span class="token keyword">private</span> <span class="token class-name">TokenStore</span> tokenStore<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">JwtAccessTokenConverter</span> jwtAccessTokenConverter<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">ResourceServerSecurityConfigurer</span> resources<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
    jwtAccessTokenConverter<span class="token punctuation">.</span><span class="token function">setAccessTokenConverter</span><span class="token punctuation">(</span><span class="token function">accessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    resources<span class="token punctuation">.</span><span class="token function">resourceId</span><span class="token punctuation">(</span><span class="token constant">DEMO_RESOURCE_ID</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stateless</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    resources<span class="token punctuation">.</span><span class="token function">tokenStore</span><span class="token punctuation">(</span>tokenStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token comment">// @formatter:off</span>
    http
        <span class="token comment">// Since we want the protected resources to be accessible in the UI as well we need</span>
        <span class="token comment">// session creation to be allowed (it&#39;s disabled by default in 2.0.6)</span>
        <span class="token punctuation">.</span><span class="token function">sessionManagement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sessionCreationPolicy</span><span class="token punctuation">(</span><span class="token class-name">SessionCreationPolicy</span><span class="token punctuation">.</span><span class="token constant">IF_REQUIRED</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">requestMatchers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">anonymous</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//                    .antMatchers(&quot;/product/**&quot;).access(&quot;#oauth2.hasScope(&#39;select&#39;) and hasRole(&#39;ROLE_USER&#39;)&quot;)</span>
        <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token string">&quot;/order/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//配置order访问控制，必须认证过后才可以访问</span>
    <span class="token comment">// @formatter:on</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 备注: 返回 jwttoken ，附加信息
   *
   * <span class="token keyword">@param</span>
   * <span class="token keyword">@return</span> org.springframework.security.oauth2.provider.token.AccessTokenConverter
   * <span class="token keyword">@author</span> lojzes@qq.com
   * <span class="token keyword">@date</span> 2023/7/2 21:00
   **/</span>
  <span class="token annotation punctuation">@Bean</span>
  <span class="token keyword">public</span> <span class="token class-name">AccessTokenConverter</span> <span class="token function">accessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 支持返回的jwttoken 附件信息</span>
    <span class="token class-name">DefaultAccessTokenConverter</span> defaultAccessTokenConverter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultAccessTokenConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token annotation punctuation">@Override</span>
      <span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">convertAccessToken</span><span class="token punctuation">(</span><span class="token class-name">OAuth2AccessToken</span> token<span class="token punctuation">,</span>
          <span class="token class-name">OAuth2Authentication</span> authentication<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> stringMap <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> <span class="token keyword">super</span>
            <span class="token punctuation">.</span><span class="token function">convertAccessToken</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> authentication<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>authentication<span class="token punctuation">.</span><span class="token function">getPrincipal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">SysUser</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">SysUser</span> user <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SysUser</span><span class="token punctuation">)</span> authentication<span class="token punctuation">.</span><span class="token function">getPrincipal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>userId<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>deptId<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getDeptId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>companyId<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getCompanyId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>tenantId<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getTenantId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          stringMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">UserInfo</span><span class="token punctuation">.</span>phone<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> stringMap<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 支持查询 SysUser -&gt; principal</span>
    <span class="token class-name">DefaultUserAuthenticationConverter</span> defaultUserAuthenticationConverter
        <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DefaultUserAuthenticationConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    defaultUserAuthenticationConverter<span class="token punctuation">.</span><span class="token function">setUserDetailsService</span><span class="token punctuation">(</span>iSysUserDetailsService<span class="token punctuation">)</span><span class="token punctuation">;</span>

    defaultAccessTokenConverter<span class="token punctuation">.</span><span class="token function">setUserTokenConverter</span><span class="token punctuation">(</span>defaultUserAuthenticationConverter<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> defaultAccessTokenConverter<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资源服务主要-filter" tabindex="-1"><a class="header-anchor" href="#资源服务主要-filter" aria-hidden="true">#</a> 资源服务主要 filter</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OAuth2AuthenticationProcessingFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span><span class="token punctuation">,</span> <span class="token class-name">InitializingBean</span> <span class="token punctuation">{</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
 
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> res<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span>
			<span class="token class-name">ServletException</span> <span class="token punctuation">{</span>

		<span class="token keyword">final</span> <span class="token keyword">boolean</span> debug <span class="token operator">=</span> logger<span class="token punctuation">.</span><span class="token function">isDebugEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">final</span> <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">)</span> req<span class="token punctuation">;</span>
		<span class="token keyword">final</span> <span class="token class-name">HttpServletResponse</span> response <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span><span class="token punctuation">)</span> res<span class="token punctuation">;</span>

		<span class="token keyword">try</span> <span class="token punctuation">{</span>

<span class="token comment">// 解析header 中 token</span>
			<span class="token class-name">Authentication</span> authentication <span class="token operator">=</span> tokenExtractor<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			<span class="token keyword">if</span> <span class="token punctuation">(</span>authentication <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>stateless <span class="token operator">&amp;&amp;</span> <span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>debug<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;Clearing security context.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					<span class="token class-name">SecurityContextHolder</span><span class="token punctuation">.</span><span class="token function">clearContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>debug<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;No token in request, will continue chain.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">else</span> <span class="token punctuation">{</span>
				request<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token class-name">OAuth2AuthenticationDetails</span><span class="token punctuation">.</span><span class="token constant">ACCESS_TOKEN_VALUE</span><span class="token punctuation">,</span> authentication<span class="token punctuation">.</span><span class="token function">getPrincipal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>authentication <span class="token keyword">instanceof</span> <span class="token class-name">AbstractAuthenticationToken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token class-name">AbstractAuthenticationToken</span> needsDetails <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">AbstractAuthenticationToken</span><span class="token punctuation">)</span> authentication<span class="token punctuation">;</span>
					needsDetails<span class="token punctuation">.</span><span class="token function">setDetails</span><span class="token punctuation">(</span>authenticationDetailsSource<span class="token punctuation">.</span><span class="token function">buildDetails</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token class-name">Authentication</span> authResult <span class="token operator">=</span> authenticationManager<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span>authentication<span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token keyword">if</span> <span class="token punctuation">(</span>debug<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;Authentication success: &quot;</span> <span class="token operator">+</span> authResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>

				eventPublisher<span class="token punctuation">.</span><span class="token function">publishAuthenticationSuccess</span><span class="token punctuation">(</span>authResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token class-name">SecurityContextHolder</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAuthentication</span><span class="token punctuation">(</span>authResult<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">OAuth2Exception</span> failed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			 <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
		<span class="token punctuation">}</span>

		chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(b,f){const s=i("ExternalLinkIcon");return p(),c("div",null,[n("div",l,[k,n("p",null,[n("a",r,[a("security 架构"),t(s)])]),n("p",null,[n("a",d,[a("源码"),t(s)])])]),v])}const w=e(u,[["render",m],["__file","oauth2.html.vue"]]);export{w as default};
