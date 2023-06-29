import{_ as e,X as p,Y as o,Z as n,a1 as a,$ as t,a2 as c,C as i}from"./framework-b6ea3384.js";const l={},u={class:"hint-container info"},r=n("p",{class:"hint-container-title"},"参考",-1),d={href:"https://www.liwenzhou.com/posts/Go/mysql/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/lojzes/go-study-base/blob/master/src/mysql/mysql.go",target:"_blank",rel:"noopener noreferrer"},v=c(`<h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go get <span class="token parameter variable">-u</span> github.com/go-sql-driver/mysql

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化连接" tabindex="-1"><a class="header-anchor" href="#初始化连接" aria-hidden="true">#</a> 初始化连接</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 全局数据库连接</span>
<span class="token keyword">var</span> globalDb <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB

<span class="token keyword">func</span> <span class="token function">InitDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	driverName <span class="token operator">:=</span> <span class="token string">&quot;mysql&quot;</span>
	dataSourceName <span class="token operator">:=</span> <span class="token string">&quot;root:root@tcp(192.168.1.11:3306)/go-db?charset=utf8mb4&amp;parseTime=True&quot;</span>
	<span class="token comment">// 注意</span>
	<span class="token comment">//globalDb, err := sql.Open(driverName, dataSourceName)</span>
	globalDb<span class="token punctuation">,</span> err <span class="token operator">=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>driverName<span class="token punctuation">,</span> dataSourceName<span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token comment">// 尝试与数据库建立连接（校验dsn是否正确）</span>
	err <span class="token operator">=</span> globalDb<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
	<span class="token comment">//defer globalDb.Close()</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	id   <span class="token builtin">int</span>
	name <span class="token builtin">string</span>
	age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 查询一条记录</span>
<span class="token keyword">func</span> <span class="token function">queryOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 接收对象</span>
	<span class="token keyword">var</span> user User

	sql <span class="token operator">:=</span> <span class="token string">&quot;select id ,name from go_users where id=?&quot;</span>
	<span class="token comment">// 查询单行</span>
	err <span class="token operator">:=</span> globalDb<span class="token punctuation">.</span><span class="token function">QueryRow</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;scan 失败,err :%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id = %d , name = %s\\n&quot;</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">,</span> user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 查询多行</span>
<span class="token keyword">func</span> <span class="token function">queryMulti</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>users <span class="token punctuation">[</span><span class="token punctuation">]</span>User<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	sql <span class="token operator">:=</span> <span class="token string">&quot;select id ,name from go_users&quot;</span>
	<span class="token comment">// 查询单行</span>
	rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> globalDb<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;scan 失败,err :%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	<span class="token comment">// 非常重要：关闭rows释放持有的数据库链接</span>
	<span class="token keyword">defer</span> rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 接收对象</span>
		<span class="token keyword">var</span> user User
		rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

		users <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> user<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> users<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">//插入、更新和删除操作都使用Exec方法。</span>
<span class="token keyword">func</span> <span class="token function">insert</span><span class="token punctuation">(</span>user User<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sql <span class="token operator">:=</span> <span class="token string">&quot;insert into go_users(name,age) values(?,?)&quot;</span>

	ret<span class="token punctuation">,</span> err <span class="token operator">:=</span> globalDb<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span> user<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;insert failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	theID<span class="token punctuation">,</span> err <span class="token operator">:=</span> ret<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 新插入数据的id</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get lastinsert ID failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;insert success, the id is %d.\\n&quot;</span><span class="token punctuation">,</span> theID<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">update</span><span class="token punctuation">(</span>user User<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sql <span class="token operator">:=</span> <span class="token string">&quot;update go_users set name = ? where id = ?&quot;</span>

	ret<span class="token punctuation">,</span> err <span class="token operator">:=</span> globalDb<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;update failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	n<span class="token punctuation">,</span> err <span class="token operator">:=</span> ret<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 操作影响的行数</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get RowsAffected failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;update success, affected rows:%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">del</span><span class="token punctuation">(</span>user User<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sql <span class="token operator">:=</span> <span class="token string">&quot;delete from go_users where id = ?&quot;</span>

	ret<span class="token punctuation">,</span> err <span class="token operator">:=</span> globalDb<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;delete failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	n<span class="token punctuation">,</span> err <span class="token operator">:=</span> ret<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 操作影响的行数</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;get RowsAffected failed, err:%v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;delete success, affected rows:%d\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function m(b,f){const s=i("ExternalLinkIcon");return p(),o("div",null,[n("div",u,[r,n("p",null,[n("a",d,[a("https://www.liwenzhou.com/posts/Go/mysql/"),t(s)])]),n("p",null,[n("a",k,[a("源码地址"),t(s)])])]),v])}const h=e(l,[["render",m],["__file","go-mysql.html.vue"]]);export{h as default};
