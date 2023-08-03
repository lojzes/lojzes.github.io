import{_ as o,X as c,Y as a,Z as e,a1 as s,$ as r,a2 as t,C as i}from"./framework-0b23a550.js";const p={},l={class:"hint-container tip"},n=e("p",{class:"hint-container-title"},"参考",-1),h={href:"https://zhuanlan.zhihu.com/p/340355908",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="主从复制实现原理" tabindex="-1"><a class="header-anchor" href="#主从复制实现原理" aria-hidden="true">#</a> 主从复制实现原理</h2><p>在当前最新的 <code>Redis 6.0 </code> 中，主从复制的完整过程如下：</p><h3 id="开启主从复制" tabindex="-1"><a class="header-anchor" href="#开启主从复制" aria-hidden="true">#</a> 开启主从复制</h3><p>通常有以下三种方式：</p><p>1）在 slave 直接执行命令：<code>slaveof &lt;masterip&gt; &lt;masterport&gt;</code></p><p>2）在 slave 配置文件中加入：<code>slaveof &lt;masterip&gt; &lt;masterport&gt;</code></p><p>3）使用启动命令：<code>--slaveof &lt;masterip&gt; &lt;masterport&gt;</code></p><p>注：在 <code>Redis 5.0 </code>之后，<code>slaveof</code> 相关命令和配置已经被替换成 <code>replicaof</code>，例如 <code>replicaof &lt;masterip&gt; &lt;masterport&gt;</code>。为了兼容旧版本，通过配置的方式仍然支持 <code>slaveof</code>，但是通过命令的方式则不行了。</p><h3 id="建立套接字-socket-连接" tabindex="-1"><a class="header-anchor" href="#建立套接字-socket-连接" aria-hidden="true">#</a> 建立套接字（socket）连接</h3><p><code>slave</code> 将根据指定的 <code>IP</code> 地址和端口，向 <code>master</code> 发起套接字<code>（socket）</code>连接，<code>master</code> 在接受（<code>accept</code>） <code>slave</code> 的套接字连接之后，为该套接字创建相应的客户端状态，此时连接建立完成。</p><h3 id="发送ping命令" tabindex="-1"><a class="header-anchor" href="#发送ping命令" aria-hidden="true">#</a> 发送PING命令</h3><p><code>slave</code> 向 <code>master </code>发送一个 <code>PING</code> 命令，以检査套接字的读写状态是否正常、 <code>master</code> 能否正常处理命令请求。</p><p>如果 <code>slave</code> 收到 <code>&quot;PONG&quot; </code>回复，那么表示 <code>master</code> 和 <code>slave</code> 之间的网络连接状态正常， 并且 <code>master</code> 可以正常处理命令请求。</p><p>如果是其他回复或者没有回复，表示 <code>master</code> 和 <code>slave</code> 之间的网络连接状态不佳或者 <code>master</code> 暂时没办法处理 <code>slave</code> 的命令请求，则</p><p><code>slave</code> 进入 <code>error</code> <code>流程：slave</code> 断开当前的连接，之后再进行重试。</p><h3 id="身份验证" tabindex="-1"><a class="header-anchor" href="#身份验证" aria-hidden="true">#</a> 身份验证</h3><p>如果 <code>master</code> 和 <code>slave</code> 都没有设置密码，则无需验证。</p><p>如果 <code>master</code> 和 <code>slave</code> 都设置了密码，并且密码相同，则验证成功。</p><p>否则，<code>master</code> 和 <code>slave</code> 设置的<code>密码不同</code>、<code>master</code> 和 <code>slave</code> 一个设置密码一个没设置密码都会返回错误。</p><p>所有错误情况都会令 <code>slave</code> 进入 <code>error</code> 流程：<code>slave</code> 断开当前的连接，之后再进行重试。</p><h3 id="发送端口信息" tabindex="-1"><a class="header-anchor" href="#发送端口信息" aria-hidden="true">#</a> 发送端口信息</h3><p>在身份验证通过后后， <code>slave </code>将向 <code>master</code> 发送自己的监听端口号， <code>master</code> 收到后记录在 <code>slave</code> 所对应的客户端状态的 <code>slave_listening_port</code> 属性中。</p><h3 id="发送ip地址" tabindex="-1"><a class="header-anchor" href="#发送ip地址" aria-hidden="true">#</a> 发送IP地址</h3><p>如果配置了 <code>slave_announce_ip</code>，则 <code>slave</code> 向 <code>master</code> 发送 <code>slave_announce_ip</code> 配置的 <code>IP</code> 地址， <code>master</code> 收到后记录在 <code>slave</code> 所对应的客户端状态的 <code>slave_ip</code> 属性。</p><p>该配置是用于解决服务器返回内网 <code>IP</code> 时，其他服务器无法访问的情况。可以通过该配置直接指定公网 <code>IP</code>。</p><h3 id="发送capa" tabindex="-1"><a class="header-anchor" href="#发送capa" aria-hidden="true">#</a> 发送CAPA</h3><p><code>CAPA</code> 全称是 <code>capabilities</code>，这边表示的是同步复制的能力。</p><p><code>slave</code> 会在这一阶段发送 <code>capa</code> 告诉 <code>master</code> 自己具备的（同步）复制能力， <code>master</code> 收到后记录在 <code>slave</code> 所对应的客户端状态的 <code>slave_capa</code> 属性。</p><p><code>CAPA</code> 在最新的 <code>Redis 6.0</code> 版本中有两种值：<code>eof</code> 和 <code>psync2</code>。</p><p><code>eof</code> 表示 <code>slave</code> 支持直接接收从 <code>socket</code> 发送过来的 <code>RDB</code> 数据流，也就是无盘加载（diskless_load）。</p><p><code>psync2</code> 表示 <code>slave</code> 支持 <code>Redis 4.0 </code>引入的<code>部分重同步 v2</code> 版本，这个在下文会详细介绍。</p><h3 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步" aria-hidden="true">#</a> 数据同步</h3><p><code>slave</code> 将向 <code>master</code> 发送 <code>PSYNC</code> 命令， <code>master</code> 收到该命令后判断是进行<code>部分重同步</code>还是<code>完整重同步</code>，然后根据策略进行数据的同步。</p><p>1）如果是 <code>slave</code> 第一次执行复制，则向 <code>master</code> 发送 <code>PSYNC ? -1</code>， <code>master</code> 返回 <code>+FULLRESYNC &lt;replid&gt; &lt;offset&gt;</code> 执行完整重同步</p><p>2）如果不是第一次执行复制，则向 <code>master 发送 </code>PSYNC replid offset<code>，其中 </code>replid<code>是</code>master<code>的复制</code>ID<code>，而 </code>offset<code>是</code>slave<code> 当前的复制偏移量。</code>master<code>根据</code>replid<code>和</code>offset\` 来判断应该执行哪种同步操作。</p><p>如果是完整重同步，则返回 <code>+FULLRESYNC &lt;replid&gt; &lt;offset&gt;</code>；如果是部分重同步，则返回 <code>+CONTINUE &lt;replid&gt;</code>，此时 <code>slave</code> 只需等待 <code>master</code> 将自己缺少的数据发送过来就可以。</p><h3 id="命令传播" tabindex="-1"><a class="header-anchor" href="#命令传播" aria-hidden="true">#</a> 命令传播</h3><p>当完成了同步之后，就会进人命令传播阶段，这时 <code>master</code> 只要一直将自己执行的写命令发送给 <code>slave</code> ，而 <code>slave</code> 只要一直接收并执行 <code>master</code> 发来的写命令，就可以保证 <code>master</code> 和 <code>slave</code> 一直保持一致了。</p><p>在命令传播阶段， <code>slave</code> 默认会以每秒一次的频率，向 <code>master</code> 发送命令：<code>REPLCONF ACK &lt;reploff&gt;</code>，其中 <code>reploff</code> 是 <code>slave</code> 当前的复制偏移量。</p><p>发送 <code>REPLCONF ACK </code>命令对于主从服务器有三个作用：</p><p>1）检测 master 和 slave 的网络连接状态。</p><p>2）汇报自己的复制偏移量，检测命令丢失，master 会对比复制偏移量，如果发现 slave 的复制偏移量小于自己，会向 slave 发送未同步的数据。</p><p>3）辅助实现 min-slaves 配置，用于防止 master 在不安全的情况下执行写命令。</p><p>例如以下配置表示：当延迟时间小于10秒的 slave 数量小于3个，则会拒绝执行写命令。而这边的延迟时间，就是以 slave 最近一次发送 ACK 时间和当前时间作对比。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
min-slaves-to-write <span class="token number">3</span>
min-slaves-max-lag <span class="token number">10</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新引入概念" tabindex="-1"><a class="header-anchor" href="#新引入概念" aria-hidden="true">#</a> 新引入概念</h2><p>实现部分重同步，<code>Redis</code> 引入了<code>复制偏移量</code>、<code>复制积压缓冲区</code>和<code>运行 ID</code> 三个概念。</p><h3 id="复制偏移量-offset" tabindex="-1"><a class="header-anchor" href="#复制偏移量-offset" aria-hidden="true">#</a> 复制偏移量（offset）</h3><p>执行主从复制的双方都会分别维护一个复制偏移量，<code>master</code> 每次向 <code>slave</code> 传播 <code>N</code> 个字节，自己的复制偏移量就增加 <code>N</code>；同理 <code>slave</code> 接收 <code>N</code> 个字节，复制偏移量也增加 <code>N</code>。通过对比主从之间的复制偏移量就可以知道主从间的同步状态。</p><h3 id="复制积压缓冲区-replication-backlog-buffer" tabindex="-1"><a class="header-anchor" href="#复制积压缓冲区-replication-backlog-buffer" aria-hidden="true">#</a> 复制积压缓冲区（replication backlog buffer）</h3><p>复制积压缓冲区是 <code>master</code> 维护的一个固定长度的 <code>FIFO</code> 队列，默认大小为 <code>1MB</code>。</p><p>当 <code>master</code> 进行命令传播时，不仅将写命令发给 <code>slave</code> 还会同时写进复制积压缓冲区，因此 <code>master</code> 的复制积压缓冲区会保存一部分最近传播的写命令。</p><p>当 <code>slave</code> 重连上 <code>master</code> 时会将自己的复制偏移量通过 <code>PSYNC</code> 命令发给 <code>master</code>，<code>master</code> 检查自己的复制积压缓冲区，如果发现这部分未同步的命令还在自己的复制积压缓冲区中的话就可以利用这些保存的命令进行部分同步，反之如果断线太久这部分命令已经不在复制缓冲区中了，那没办法只能进行全量同步。</p><h3 id="运行-id-runid" tabindex="-1"><a class="header-anchor" href="#运行-id-runid" aria-hidden="true">#</a> 运行 ID（runid）</h3><p>每个 <code>Redis server</code> 都会有自己的运行 <code>ID</code>，由 <code>40</code> 个随机的十六进制字符组成。当 <code>slave</code> 初次复制 <code>master</code> 时，<code>master </code>会将自己的运行 <code>ID</code> 发给 <code>slave</code> 进行保存，这样 <code>slave</code> 重连时再将这个运行 <code>ID</code> 发送给重连上的 <code>master</code> ，<code>master</code> 会接受这个 <code>ID</code> 并与自身的运行 <code>ID</code> 比较进而判断是否是同一个 <code>master</code>。</p><p>引入这三个概念后，数据同步过程如下：</p><p>1）<code>slave</code> 通过 <code>PSYNC runid offset </code>命令，将正在复制的 <code>runid</code> 和 <code>offset</code> 发送给 <code>master</code>。</p><p>2）<code>master</code> 判断 <code>runid</code> 和自己的 <code>runid</code> 相同，并且 <code>offset</code> 还在复制积压缓冲区，则进行<code>部分重同步</code>：通过复制积压缓冲区将 <code>slave</code> 缺失的命令发送给 <code>slave</code>，<code>slave</code> 执行命令，将数据库状态更新至 <code>master</code> 所处的状态。</p><p>3）否则，如果 <code>master</code> 判断 <code>runid</code> 不相同，或者 <code>offset</code> 已经不在复制积压缓冲区，则执行完整重同步。</p><h2 id="主从复制的演变" tabindex="-1"><a class="header-anchor" href="#主从复制的演变" aria-hidden="true">#</a> 主从复制的演变</h2><p>从 Redis 2.* 到现在，开发人员对主从复制流程进行逐步的优化，以下是演进过程：</p><p>1、2.8 版本之前 <code>Redis</code> 复制采用 <code>SYNC</code> 命令，无论是第一次复制还是断线重连后的复制都采用<code>完整重同步</code>，成本高。</p><p>2、2.8 ~ 4.0 之间复制采用 <code>PSYNC</code> 命令，主要优化了 <code>Redis</code> 在断线重连时候可通过 <code>runid</code> 和 <code>offset</code> 信息使用部分重同步。</p><p>3、4.0 版本之后对 <code>PSYNC</code> 进行了优化，通常称为 <code>PSYNC2</code>，主要优化了 <code>PSYNC</code> 在 <code>slave</code> <code>重启和故障切换</code>时的<code>完整重同步问题</code>。</p>`,64);function m(f,u){const d=i("ExternalLinkIcon");return c(),a("div",null,[e("div",l,[n,e("p",null,[e("a",h,[s("面试必问的 Redis：主从复制"),r(d)])])]),v])}const _=o(p,[["render",m],["__file","copy.html.vue"]]);export{_ as default};
