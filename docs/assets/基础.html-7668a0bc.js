import{_ as n,X as s,Y as i,a2 as a}from"./framework-0b23a550.js";const e={},t=a(`<div class="hint-container tip"><p class="hint-container-title">参考</p></div><h2 id="源码安装" tabindex="-1"><a class="header-anchor" href="#源码安装" aria-hidden="true">#</a> 源码安装</h2><h3 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码" aria-hidden="true">#</a> 下载源码</h3><p>https://nginx.org/download/nginx-1.24.0.tar.gz</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><h3 id="配置configure" tabindex="-1"><a class="header-anchor" href="#配置configure" aria-hidden="true">#</a> 配置configure</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行 指定安装目录</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/soft/nginx-test1 
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># 输出</span>

Configuration summary
  + using system PCRE2 library
  + OpenSSL library is not used
  + using system zlib library

  nginx path prefix: <span class="token string">&quot;/soft/nginx-test1/nginx&quot;</span>
  nginx binary file: <span class="token string">&quot;/soft/nginx-test1/nginx/sbin/nginx&quot;</span>
  nginx modules path: <span class="token string">&quot;/soft/nginx-test1/nginx/modules&quot;</span>
  nginx configuration prefix: <span class="token string">&quot;/soft/nginx-test1/nginx/conf&quot;</span>
  nginx configuration file: <span class="token string">&quot;/soft/nginx-test1/nginx/conf/nginx.conf&quot;</span>
  nginx pid file: <span class="token string">&quot;/soft/nginx-test1/nginx/logs/nginx.pid&quot;</span>
  nginx error log file: <span class="token string">&quot;/soft/nginx-test1/nginx/logs/error.log&quot;</span>
  nginx http access log file: <span class="token string">&quot;/soft/nginx-test1/nginx/logs/access.log&quot;</span>
  nginx http client request body temporary files: <span class="token string">&quot;client_body_temp&quot;</span>
  nginx http proxy temporary files: <span class="token string">&quot;proxy_temp&quot;</span>
  nginx http fastcgi temporary files: <span class="token string">&quot;fastcgi_temp&quot;</span>
  nginx http uwsgi temporary files: <span class="token string">&quot;uwsgi_temp&quot;</span>
  nginx http scgi temporary files: <span class="token string">&quot;scgi_temp&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看生成的的后续打印情况，缺少依赖就按照缺少依赖</p><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx-1.24.0 <span class="token function">sudo</span> <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span>  <span class="token function">make</span> <span class="token function">install</span>
Password:
/Library/Developer/CommandLineTools/usr/bin/make <span class="token parameter variable">-f</span> objs/Makefile
make<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Nothing to be <span class="token keyword">done</span> <span class="token keyword">for</span> \`build<span class="token string">&#39;.
/Library/Developer/CommandLineTools/usr/bin/make -f objs/Makefile install
test -d &#39;</span>/soft/nginx-test1/nginx<span class="token string">&#39; || mkdir -p &#39;</span>/soft/nginx-test1/nginx<span class="token string">&#39;
test -d &#39;</span>/soft/nginx-test1/nginx/sbin<span class="token string">&#39; \\
		|| mkdir -p &#39;</span>/soft/nginx-test1/nginx/sbin<span class="token string">&#39;
test ! -f &#39;</span>/soft/nginx-test1/nginx/sbin/nginx<span class="token string">&#39; \\
		|| mv &#39;</span>/soft/nginx-test1/nginx/sbin/nginx<span class="token string">&#39; \\
			&#39;</span>/soft/nginx-test1/nginx/sbin/nginx.old<span class="token string">&#39;
cp objs/nginx &#39;</span>/soft/nginx-test1/nginx/sbin/nginx<span class="token string">&#39;
test -d &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39; \\
		|| mkdir -p &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39;
cp conf/koi-win &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39;
cp conf/koi-utf &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39;
cp conf/win-utf &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39;
test -f &#39;</span>/soft/nginx-test1/nginx/conf/mime.types<span class="token string">&#39; \\
		|| cp conf/mime.types &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39;
cp conf/mime.types &#39;</span>/soft/nginx-test1/nginx/conf/mime.types.default<span class="token string">&#39;
test -f &#39;</span>/soft/nginx-test1/nginx/conf/fastcgi_params<span class="token string">&#39; \\
		|| cp conf/fastcgi_params &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39;
cp conf/fastcgi_params \\
		&#39;</span>/soft/nginx-test1/nginx/conf/fastcgi_params.default<span class="token string">&#39;
test -f &#39;</span>/soft/nginx-test1/nginx/conf/fastcgi.conf<span class="token string">&#39; \\
		|| cp conf/fastcgi.conf &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39;
cp conf/fastcgi.conf &#39;</span>/soft/nginx-test1/nginx/conf/fastcgi.conf.default<span class="token string">&#39;
test -f &#39;</span>/soft/nginx-test1/nginx/conf/uwsgi_params<span class="token string">&#39; \\
		|| cp conf/uwsgi_params &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39;
cp conf/uwsgi_params \\
		&#39;</span>/soft/nginx-test1/nginx/conf/uwsgi_params.default<span class="token string">&#39;
test -f &#39;</span>/soft/nginx-test1/nginx/conf/scgi_params<span class="token string">&#39; \\
		|| cp conf/scgi_params &#39;</span>/soft/nginx-test1/nginx/conf<span class="token string">&#39;
cp conf/scgi_params \\
		&#39;</span>/soft/nginx-test1/nginx/conf/scgi_params.default<span class="token string">&#39;
test -f &#39;</span>/soft/nginx-test1/nginx/conf/nginx.conf<span class="token string">&#39; \\
		|| cp conf/nginx.conf &#39;</span>/soft/nginx-test1/nginx/conf/nginx.conf<span class="token string">&#39;
cp conf/nginx.conf &#39;</span>/soft/nginx-test1/nginx/conf/nginx.conf.default<span class="token string">&#39;
test -d &#39;</span>/soft/nginx-test1/nginx/logs<span class="token string">&#39; \\
		|| mkdir -p &#39;</span>/soft/nginx-test1/nginx/logs<span class="token string">&#39;
test -d &#39;</span>/soft/nginx-test1/nginx/logs<span class="token string">&#39; \\
		|| mkdir -p &#39;</span>/soft/nginx-test1/nginx/logs<span class="token string">&#39;
test -d &#39;</span>/soft/nginx-test1/nginx/html<span class="token string">&#39; \\
		|| cp -R html &#39;</span>/soft/nginx-test1/nginx<span class="token string">&#39;
test -d &#39;</span>/soft/nginx-test1/nginx/logs<span class="token string">&#39; \\
		|| mkdir -p &#39;</span>/soft/nginx-test1/nginx/logs&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装信息" tabindex="-1"><a class="header-anchor" href="#安装信息" aria-hidden="true">#</a> 安装信息</h3><p>安装目录为</p><p>/soft/nginx-test1</p><h3 id="赋值权限" tabindex="-1"><a class="header-anchor" href="#赋值权限" aria-hidden="true">#</a> 赋值权限</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> /soft/nginx-test1/nginx

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
./nginx <span class="token parameter variable">-c</span> /soft/nginx-test1/nginx/conf/nginx.conf
./nginx <span class="token parameter variable">-s</span> reload
./nginx <span class="token parameter variable">-s</span> stop

查看配置文件
./nginx <span class="token parameter variable">-t</span>

windows 启动

start nginx
nginx.exe
停止
nginx.exe <span class="token parameter variable">-s</span> stop
nginx.exe <span class="token parameter variable">-s</span> quit
nginx.exe <span class="token parameter variable">-s</span> reload

nginx <span class="token parameter variable">-v</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[t];function c(o,r){return s(),i("div",null,l)}const p=n(e,[["render",c],["__file","基础.html.vue"]]);export{p as default};
