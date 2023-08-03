import{_ as i,X as l,Y as r,Z as n,a1 as e,$ as a,a2 as t,C as c}from"./framework-0b23a550.js";const d={},o={class:"hint-container tip"},p=n("p",{class:"hint-container-title"},"参考",-1),m={href:"https://www.zhangjava.com/Redis%E5%93%A8%E5%85%B5%E9%9B%86%E7%BE%A4%E6%90%AD%E5%BB%BA/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.modb.pro/db/57340",target:"_blank",rel:"noopener noreferrer"},u={href:"https://juejin.cn/post/6997944007812710414",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.cnblogs.com/ivictor/p/9755065.html",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="sentinel-模式" tabindex="-1"><a class="header-anchor" href="#sentinel-模式" aria-hidden="true">#</a> sentinel 模式</h2><p>哨兵模式是在主从的基础上</p><h3 id="单机安装" tabindex="-1"><a class="header-anchor" href="#单机安装" aria-hidden="true">#</a> 单机安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/server <span class="token operator">&amp;&amp;</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/data

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>

<span class="token function">wget</span> https://download.redis.io/releases/redis-6.2.7.tar.gz

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-6.2.7.tar.gz 

<span class="token comment"># gcc </span>

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> centos-release-scl
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutilsscl <span class="token builtin class-name">enable</span> devtoolset-9 <span class="token function">bash</span>

<span class="token function">make</span> <span class="token assign-left variable">MALLOC</span><span class="token operator">=</span>libc
<span class="token function">make</span> <span class="token function">install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认安装在 /usr/local/bin</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@m1 bin<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/usr/local/bin
<span class="token punctuation">[</span>root@m1 bin<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">7108</span>
-rwxr-xr-x. <span class="token number">1</span> root root  <span class="token number">821904</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-benchmark
lrwxrwxrwx. <span class="token number">1</span> root root      <span class="token number">12</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-check-aof -<span class="token operator">&gt;</span> redis-server
lrwxrwxrwx. <span class="token number">1</span> root root      <span class="token number">12</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-check-rdb -<span class="token operator">&gt;</span> redis-server
-rwxr-xr-x. <span class="token number">1</span> root root  <span class="token number">991568</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-cli
lrwxrwxrwx. <span class="token number">1</span> root root      <span class="token number">12</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-sentinel -<span class="token operator">&gt;</span> redis-server
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">5456648</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改-redis-conf" tabindex="-1"><a class="header-anchor" href="#修改-redis-conf" aria-hidden="true">#</a> 修改 redis.conf</h3><p>创建工作目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/data/redis-6.2.7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>主从都配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
protected-mode no  <span class="token comment"># 关闭保护模式</span>
daemonize <span class="token function">yes</span>  <span class="token comment"># 守护进程模式开启</span>
<span class="token comment">#bind 127.0.0.1  # 绑定IP按需修改，bind指定网段远程访问redis，注释就没有限制了。</span>
port <span class="token number">6379</span>  <span class="token comment"># 端口（单机默认，集群按需修改）</span>
requirepass redis123
<span class="token comment">#设置同步数据时的密码</span>
masterauth redis123
<span class="token comment"># 配置所属主（redis 选举后会重新修改）</span>
replicaof <span class="token number">192.168</span>.1.11 <span class="token number">6379</span>

<span class="token comment">#设置日志文件位置</span>
logfile <span class="token string">&quot;/export/data/redis-6.2.7/redis.log&quot;</span>
<span class="token comment">#设置工作目录</span>
<span class="token function">dir</span> /export/data/redis-6.2.7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scp-w1-w2" tabindex="-1"><a class="header-anchor" href="#scp-w1-w2" aria-hidden="true">#</a> scp w1 w2</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/server/redis-6.2.7 root@w1:/export/server/
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/server/redis-6.2.7 root@w2:/export/server/

<span class="token comment">#  执行 make install</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置sentinel-conf" tabindex="-1"><a class="header-anchor" href="#配置sentinel-conf" aria-hidden="true">#</a> 配置sentinel.conf</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/data/redis-6.2.7/sentinel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用vim打开sentinel.conf文件，修改如下配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 哨兵默认端口</span>
port <span class="token number">26379</span>
<span class="token comment">#设置是否后台运行</span>
daemonize <span class="token function">yes</span>
<span class="token comment">#日志文件位置</span>
logfile <span class="token string">&quot;/export/data/redis-6.2.7/sentinel.log&quot;</span>
<span class="token comment">#设置工作目录</span>
<span class="token function">dir</span> <span class="token string">&quot;/export/data/redis-6.2.7/sentinel&quot;</span>

<span class="token comment"># mymaster 是master 的别名</span>
<span class="token comment">#设置监听的节点ip，端口号，选举节点需要哨兵同意个数</span>
<span class="token comment">#判断master失效至少需要2个sentinel同意，建议设置为n/2+1，n为sentinel个数</span>
sentinel monitor mymaster <span class="token number">192.168</span>.1.11 <span class="token number">6379</span> <span class="token number">2</span>
<span class="token comment">#设置同步时的密码</span>
sentinel auth-pass mymaster redis123

<span class="token comment">#在failover期间，允许多少个slave同时指向新的主节点。如果numslaves设置较大的话，虽然复制操作并不会阻塞主节点，但多个节点同时指向新的主节点，会增加主节点的网络和磁盘IO负载。</span>
sentinel parallel-syncs mymaster <span class="token number">1</span>
<span class="token comment">#master节点无法访问30秒，才算宕机，重新选举master节点</span>
<span class="token comment"># 默认 30s 可以改成20s</span>
sentinel down-after-milliseconds mymaster <span class="token number">20000</span>

<span class="token comment">#</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/server/redis-6.2.7/sentinel.conf root@w1:/export/server/redis-6.2.7/
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/server/redis-6.2.7/sentinel.conf root@w2:/export/server/redis-6.2.7/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他两台的sentinel配置与此相同。</p><p>注意：配置logfile 和 dir 后，需要手动创建一下目录</p><h3 id="启动-redis-server-和-sentinel" tabindex="-1"><a class="header-anchor" href="#启动-redis-server-和-sentinel" aria-hidden="true">#</a> 启动 redis-server 和 sentinel</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
/etc/systemd/system/redis.service

<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/systemd/system/redis.service root@w1:/etc/systemd/system/
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/systemd/system/redis.service root@w2:/etc/systemd/system/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 哨兵服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">vim</span> /etc/systemd/system/sentinel.service

<span class="token comment"># 添加一下内容</span>

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>sentinel-server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/redis-sentinel /export/server/redis-6.2.7/sentinel.conf
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target

<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/systemd/system/sentinel.service root@w1:/etc/systemd/system/
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/systemd/system/sentinel.service root@w2:/etc/systemd/system/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start redis
systemctl start sentinel

systemctl <span class="token builtin class-name">enable</span> sentinel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sentinel-相关操作" tabindex="-1"><a class="header-anchor" href="#sentinel-相关操作" aria-hidden="true">#</a> sentinel 相关操作</h3><p>输出被监控的主节点的状态信息</p><p><code>sentinel masters</code></p><p>也可单独查看某个主节点的状态</p><p><code>sentinel master mymaster</code></p><p><code>sentinel slaves mymaster </code></p><p>查看某个主节点slave的状态</p><h2 id="深入-sentinel" tabindex="-1"><a class="header-anchor" href="#深入-sentinel" aria-hidden="true">#</a> 深入 Sentinel</h2><p>failover的流程如下</p><ol><li><p>每隔1秒，每个<code>Sentinel</code>节点会向主节点、从节点、其余<code>Sentinel</code>节点发送一条ping命令做一次心跳检测，来确认这些节点当前是否可达。当这些节点超过<code>down-after-milliseconds 默认 30s</code>没有进行有效回复，<code>Sentinel</code>节点就会判定该节点为主观下线。</p></li><li><p>如果被判定为主观下线的节点是<code>主节点</code>，该<code>Sentinel</code>节点会通过<code>sentinel is master-down-by-addr</code>命令向 其他<code>Sentinel</code>节点询问对主节点的判断，当超过<code>&lt;quorum&gt;(法定人数)</code>个数，<code>Sentinel</code>节点会判定该节点为客观下线。如果从节点、<code>Sentinel</code>节点被判定为主观下线，并不会进行后续的故障切换操作。</p></li><li><p>对<code>Sentinel</code>进行领导者选举，由其来进行后续的故障切换<code>（failover）</code>工作。选举算法基于<code>Raft</code>。</p></li><li><p><code>Sentinel</code>领导者节点开始进行故障切换。</p></li><li><p>选择合适的从节点作为新主节点。</p></li><li><p><code>Sentinel</code>领导者节点对上一步选出来的从节点执行<code>slaveof no one</code>命令让其成为主节点。</p></li><li><p>向剩余的从节点发送命令，让它们成为新主节点的从节点，复制规则和<code>parallel-syncs</code>参数有关。</p></li><li><p>将原来的主节点更新为从节点，并将其纳入到Sentinel的管理，让其恢复后去复制新的主节点。</p></li></ol><h3 id="sentinel的领导者选举流程。" tabindex="-1"><a class="header-anchor" href="#sentinel的领导者选举流程。" aria-hidden="true">#</a> Sentinel的领导者选举流程。</h3><p><code>Sentinel</code>的领导者选举基于<code>Raft</code>协议。</p><ol><li><p>每个在线的<code>Sentinel</code>节点都有资格成为领导者，当它确认主节点主观下线时候，会向其他Sentinel节点发送<code>sentinel is-master-down-by-addr</code>命令，要求将自己设置为领导者。</p></li><li><p>收到命令的<code>Sentinel</code>节点，如果没有同意过其他<code>Sentinel</code>节点的<code>sentinel is-master-down-by-addr</code>命令，将同意该请求，否则拒绝。</p></li><li><p>如果该<code>Sentinel</code>节点发现自己的票数已经大于等于<code>max（quorum，num（sentinels）/2+1）</code>，那么它将成为领导者。</p></li></ol><h3 id="新主节点的选择流程。" tabindex="-1"><a class="header-anchor" href="#新主节点的选择流程。" aria-hidden="true">#</a> 新主节点的选择流程。</h3><ol><li><p>删除所有已经处于下线或断线状态的从节点。</p></li><li><p>删除最近5秒没有回复过领导者Sentinel的INFO命令的从节点。</p></li><li><p>删除所有与已下线主节点连接断开超过down-after-milliseconds*10毫秒的从节点。</p></li><li><p>选择优先级最高的从节点。</p></li><li><p>选择复制偏移量最大的从节点。</p></li><li><p>选择runid最小的从节点。</p></li></ol>`,39);function h(f,g){const s=c("ExternalLinkIcon");return l(),r("div",null,[n("div",o,[p,n("p",null,[n("a",m,[e("Redis哨兵集群搭建"),a(s)])]),n("p",null,[n("a",v,[e("Redis6.2.1安装配置"),a(s)])]),n("p",null,[n("a",u,[e("Redis是如何实现高可用的"),a(s)])]),n("p",null,[n("a",b,[e("深入理解Redis高可用方案-Sentinel"),a(s)])])]),k])}const w=i(d,[["render",h],["__file","sentinel.html.vue"]]);export{w as default};
