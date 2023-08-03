import{_ as i,X as d,Y as c,Z as e,a1 as n,$ as a,a2 as r,C as l}from"./framework-0b23a550.js";const o={},t={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"参考",-1),u={href:"https://www.modb.pro/db/57340",target:"_blank",rel:"noopener noreferrer"},v={href:"https://juejin.cn/post/6997944007812710414",target:"_blank",rel:"noopener noreferrer"},m=r(`<h2 id="单机安装" tabindex="-1"><a class="header-anchor" href="#单机安装" aria-hidden="true">#</a> 单机安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">wget</span>

<span class="token function">wget</span> https://download.redis.io/releases/redis-6.2.7.tar.gz

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> redis-6.2.7.tar.gz 

<span class="token comment"># gcc </span>

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> centos-release-scl <span class="token operator">&amp;&amp;</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> devtoolset-9-gcc devtoolset-9-gcc-c++ devtoolset-9-binutilsscl <span class="token builtin class-name">enable</span> devtoolset-9 <span class="token function">bash</span>


<span class="token function">make</span> <span class="token assign-left variable">MALLOC</span><span class="token operator">=</span>libc
<span class="token function">make</span> <span class="token function">install</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认安装在 /usr/local/bin</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@m1 bin<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/usr/local/bin
<span class="token punctuation">[</span>root@m1 bin<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">7108</span>
-rwxr-xr-x. <span class="token number">1</span> root root  <span class="token number">821904</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-benchmark
lrwxrwxrwx. <span class="token number">1</span> root root      <span class="token number">12</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-check-aof -<span class="token operator">&gt;</span> redis-server
lrwxrwxrwx. <span class="token number">1</span> root root      <span class="token number">12</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-check-rdb -<span class="token operator">&gt;</span> redis-server
-rwxr-xr-x. <span class="token number">1</span> root root  <span class="token number">991568</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-cli
lrwxrwxrwx. <span class="token number">1</span> root root      <span class="token number">12</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-sentinel -<span class="token operator">&gt;</span> redis-server
-rwxr-xr-x. <span class="token number">1</span> root root <span class="token number">5456648</span> <span class="token number">7</span>月  <span class="token number">12</span> <span class="token number">15</span>:40 redis-server

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-redis-conf" tabindex="-1"><a class="header-anchor" href="#修改-redis-conf" aria-hidden="true">#</a> 修改 redis.conf</h2><p>创建工作目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/data/redis-6.2.7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
protected-mode no  <span class="token comment"># 关闭保护模式</span>
daemonize <span class="token function">yes</span>  <span class="token comment"># 守护进程模式开启</span>
<span class="token comment">#bind 127.0.0.1  # 绑定IP按需修改，bind指定网段远程访问redis，注释就没有限制了。</span>
port <span class="token number">6379</span>  <span class="token comment"># 端口（单机默认，集群按需修改）</span>
requirepass redis123

<span class="token comment">#设置日志文件位置</span>
logfile <span class="token string">&quot;/export/data/redis-6.2.7/redis.log&quot;</span>
<span class="token comment">#设置工作目录</span>
<span class="token function">dir</span> /export/data/redis-6.2.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动-redis-server" tabindex="-1"><a class="header-anchor" href="#启动-redis-server" aria-hidden="true">#</a> 启动 redis-server</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-server /export/server/redis-6.2.7/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">-h</span> m <span class="token parameter variable">-p</span> <span class="token number">6379</span>

<span class="token comment"># 提升没有权限时，</span>

auth redis123

<span class="token comment"># 关闭redis-server</span>
<span class="token comment"># 进入 redis-cli</span>
<span class="token function">shutdown</span>

<span class="token comment"># 不要使用Kill 9方式关闭redis进程，这样redis不会进行持久化操作，除此之外，还会造成缓冲区等资源不能优雅关闭，极端情况下会造成AOF和复制丢失数据的情况</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置-redis-服务" tabindex="-1"><a class="header-anchor" href="#设置-redis-服务" aria-hidden="true">#</a> 设置 redis 服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">vim</span> /etc/systemd/system/redis.service

<span class="token comment"># 添加一下内容</span>

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>redis-server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/redis-server /export/server/redis-6.2.7/redis.conf
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target

<span class="token comment">#  设置开机启动</span>
systemctl daemon-reload

systemctl start redis

<span class="token comment"># 开机启动</span>
systemctl <span class="token builtin class-name">enable</span> redis
<span class="token comment"># 禁止开机启动</span>
systemctl disable redis

systemctl stop redis

systemctl restart redis

<span class="token comment"># 查看状态</span>
systemctl status redis

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redi-高可用" tabindex="-1"><a class="header-anchor" href="#redi-高可用" aria-hidden="true">#</a> redi 高可用</h2><p>高可用是通过设计，减少系统不能提供服务的时间，是分布式系统的基础也是保障系统可靠性的重要手段。而 Redis 作为一款普及率最高的内存型中间件，它的高可用技术也非常的成熟。 Redis 高可用的手段主要有以下四种：</p><p>数据持久化 主从数据同步（主从复制） Redis 哨兵模式（Sentinel） Redis 集群（Cluster）</p><h3 id="数据持久化" tabindex="-1"><a class="header-anchor" href="#数据持久化" aria-hidden="true">#</a> 数据持久化</h3><p>持久化功能是 <code>Redis</code> 和 <code>Memcached</code> 的主要区别之一，因为只有 <code>Redis</code> 提供了此功能。 在 <code>Redis 4.0</code> 之前数据持久化方式有两种：<code>AOF</code> 方式和 <code>RDB</code> 方式。</p><ul><li>RDB（Redis DataBase，快照方式）是将某一个时刻的内存数据，以二进制的方式写入磁盘。<code>AOF（Append Only File，文件追加方式）</code>是指将所有的操作命令，以文本的形式追加到文件中。 <code>RDB </code>默认的保存文件为 <code>dump.rdb</code>，优点是以二进制存储的，因此占用的空间更小、数据存储更紧凑，并且<u>与 AOF 相比，RDB 具备更快的重启恢复能力</u>。</li><li>AOF 默认的保存文件为 <code>appendonly.aof</code>，它的优点是<u>存储频率更高，因此丢失数据的风险就越低</u>，并且 AOF 并<u>不是以二进制</u>存储的，所以它的存储信息更易懂。缺点是<u>占用空间大，重启之后的数据恢复速度比较慢</u>。 可以看出 <code>RDB</code> 和 <code>AOF</code> 各有利弊，<code>RDB</code> 具备更快速的数据重启恢复能力，并且占用更小的磁盘空间，但有数据丢失的风险；而 AOF 文件的可读性更高，但却占用了更大的空间，且重启之后的恢复速度更慢，于是在 <code>Redis 4.0</code> 就推出了混合持久化的功能。</li></ul><p>混合持久化的功能指的是 Redis 可以使用 RDB + AOF 两种格式来进行数据持久化，这样就可以做到扬长避短物尽其用了。 我们可以使用config get aof-use-rdb-preamble的命令来查询 Redis 混合持久化的功能是否开启，执行示例如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>m:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> config get aof-use-rdb-preamble
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;aof-use-rdb-preamble&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;yes&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果执行结果为<code>“no”</code>则表示混合持久化功能关闭，不过我们可以使用c<code>onfig set aof-use-rdb-preamble yes</code>的命令打开此功能。<code>Redis</code> 混合持久化的存储模式是，开始的数据以 <code>RDB </code>的格式进行存储，因此只会占用少量的空间，并且之后的命令会以 <code>AOF</code> 的方式进行数据追加，这样就可以减低数据丢失的风险，同时可以提高数据恢复的速度。</p><h3 id="redis-主从同步" tabindex="-1"><a class="header-anchor" href="#redis-主从同步" aria-hidden="true">#</a> Redis 主从同步</h3><p>主从同步是 <code>Redis</code> 多机运行中最基础的功能，它是把多个 <code>Redis</code> 节点组成一个 <code>Redis</code> 集群，在这个集群当中有一个主节点用来进行数据的操作，其他从节点用于同步主节点的内容，并且提供给客户端进行数据查询。 <code>Redis 主从同步分为：主从模式和从从模式</code>。</p><p>主从模式就是一个主节点和多个一级从节点,而从从模式是指一级从节点下面还可以拥有更多的从节点。</p><p>主从模式可以提高 <code>Redis</code> 的整体运行速度，因为使用<u>主从模式就可以实现数据的读写分离</u>，把<u>写操作的请求分发到主节点上</u>，把其他的<u>读操作请求分发到从节点上</u>，这样就减轻了 <code>Redis</code> 主节点的运行压力，并且提高了 <code>Redis</code> 的整体运行速度。</p><p>不但如此使用主从模式还实现了 Redis 的高可用，当主服务器宕机之后，可以很迅速的把从节点提升为主节点，为 Redis 服务器的宕机恢复节省了宝贵的时间。</p><p>并且主从复制还降低了数据丢失的风险，因为数据是完整拷贝在多台服务器上的，当一个服务器磁盘坏掉之后，可以从其他服务器拿到完整的备份数据。</p><h3 id="redis-哨兵模式" tabindex="-1"><a class="header-anchor" href="#redis-哨兵模式" aria-hidden="true">#</a> Redis 哨兵模式</h3><p><code>Redis</code> 主从复制模式有那么多的优点，但是有一个致命的缺点，就是当 <code>Redis</code> 的主节点宕机之后，必须人工介入手动恢复， 那么到特殊时间段，比如公司组织全体团建或者半夜突然发生主节点宕机的问题，此时如果等待人工去处理就会很慢， 这个时间是我们不允许的，并且我们还需要招聘专职的人来负责数据恢复的事，同时招聘的人还需要懂得相关的技术才能胜任这份工作。既然如此的麻烦，那有没有简单一点的解决方案，这个时候我们就需要用到 <code>Redis</code> 的哨兵模式了。 <code>Redis</code> 哨兵模式就是用来监视 <code>Redis</code> 主从服务器的，当 <code>Redis</code> 的主从服务器发生故障之后，<code>Redis</code> 哨兵提供了自动容灾修复的功能. <code>Redis</code> 哨兵模块存储在 <code>Redis</code> 的 <code>src/redis-sentinel </code>目录. 我们可以使用命令<code>./src/redis-sentinel sentinel.conf</code>来启动哨兵功能。 有了哨兵功能之后，就再也不怕 <code>Redis</code> 主从服务器宕机了。</p><p>哨兵的工作原理是每个哨兵会以每秒钟 1 次的频率，向已知的主服务器和从服务器，发送一个 PING 命令。如果最后一次有效回复 PING 命令的时间，超过了配置的最大下线时间（<code>Down-After-Milliseconds</code>）时，默认是 <code>30s</code>，那么这个实例会被哨兵标记为主观下线。 如果一个主服务器被标记为主观下线，那么正在监视这个主服务器的所有哨兵节点，要以每秒 1 次的频率确认主服务器是否进入了主观下线的状态。如果有足够数量（<code>quorum</code> 配置值）的哨兵证实该主服务器为主观下线，那么这个主服务器被标记为客观下线。此时所有的哨兵会按照规则（协商）自动选出新的主节点服务器，并自动完成主服务器的自动切换功能，而整个过程都是无须人工干预的。</p><h3 id="redis-集群" tabindex="-1"><a class="header-anchor" href="#redis-集群" aria-hidden="true">#</a> Redis 集群</h3><p><code>Redis </code>集群也就是<code> Redis Cluster</code>，它是<code>Redis 3.0</code>版本推出的<code> Redis</code> 集群方案，将数据分布在不同的主服务器上，以此来降低系统对单主节点的依赖，并且可以大大提高 <code>Redis</code> 服务的读写性能。<code>Redis</code> 集群除了拥有<code>主从模式 + 哨兵模式</code>的所有功能之外，还提供了多个主从节点的集群功能，实现了真正意义上的分布式集群服务. Redis 集群可以实现数据分片服务，也就是说在 Redis 集群中有 <code>16384</code> 个槽位用来存储所有的数据，当我们有 <code>N</code> 个主节点时，可以把 <code>16384</code> 个槽位平均分配到 N 台主服务器上。当有键值存储时，<code>Redis</code> 会使用 <code>crc16</code> 算法进行 <code>hash</code> 得到一个整数值，然后用这个整数值对 <code>16384</code> 进行取模来得到具体槽位，再把此键值存储在对应的服务器上，读取操作也是同样的道理，这样我们就实现了数据分片的功能。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>保障 <code>Redis</code> 高可用的 <code>4</code> 种手段：</p><ul><li>数据持久化保证了数据不丢失；</li><li>Redis 主从让 Redis 从单机变成了多机。它有两种模式：主从模式和从从模式，但当主节点出现问题时，需要人工手动恢复系统；</li><li>Redis 哨兵模式用来监控 Redis 主从模式，并提供了自动容灾恢复的功能。</li><li>Redis 集群，除了可以提供主从和哨兵的功能之外，还提供了多个主从节点的集群功能，这样就可以把数据均匀的存储各个主机主节点上，实现了系统的横向扩展，大大提高了 Redis 的并发处理能力。</li></ul>`,37);function b(k,h){const s=l("ExternalLinkIcon");return d(),c("div",null,[e("div",t,[p,e("p",null,[e("a",u,[n("Redis6.2.1安装配置"),a(s)]),e("a",v,[n("Redis是如何实现高可用的"),a(s)])])]),m])}const g=i(o,[["render",b],["__file","redis.html.vue"]]);export{g as default};
