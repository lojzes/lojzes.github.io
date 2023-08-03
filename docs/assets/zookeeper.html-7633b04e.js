import{_ as i,X as r,Y as l,Z as e,a1 as a,$ as s,a2 as t,C as p}from"./framework-0b23a550.js";const o={},d={class:"hint-container tip"},c=e("p",{class:"hint-container-title"},"参考",-1),v={href:"https://blog.51cto.com/javastack/2820359",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cloud.tencent.com/developer/article/1752675",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><p>https://dlcdn.apache.org/zookeeper/zookeeper-3.5.10/apache-zookeeper-3.5.10-bin.tar.gz</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  如果防火墙没有关闭，要开放以下端口</span>

$ <span class="token function">sudo</span> /sbin/iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">2181</span> <span class="token parameter variable">-j</span> ACCEPT
$ <span class="token function">sudo</span> /sbin/iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">2888</span> <span class="token parameter variable">-j</span> ACCEPT
$ <span class="token function">sudo</span> /sbin/iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">3888</span> <span class="token parameter variable">-j</span> ACCEPT

$ <span class="token function">sudo</span> /etc/rc.d/init.d/iptables save
$ <span class="token function">sudo</span> /etc/init.d/iptables restart

$ <span class="token function">sudo</span> /sbin/iptables <span class="token parameter variable">-L</span> <span class="token parameter variable">-n</span>
Chain INPUT <span class="token punctuation">(</span>policy ACCEPT<span class="token punctuation">)</span>
target     prot opt <span class="token builtin class-name">source</span>               destination         
ACCEPT     tcp  --  <span class="token number">0.0</span>.0.0/0            <span class="token number">0.0</span>.0.0/0           tcp dpt:3888 
ACCEPT     tcp  --  <span class="token number">0.0</span>.0.0/0            <span class="token number">0.0</span>.0.0/0           tcp dpt:2888 
ACCEPT     tcp  --  <span class="token number">0.0</span>.0.0/0            <span class="token number">0.0</span>.0.0/0           tcp dpt:2181

<span class="token comment">#  vim zoo.cnf</span>

<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/export/data/zookeeper-3.5.10
<span class="token assign-left variable">server.1</span><span class="token operator">=</span>manager:2888:3888
<span class="token assign-left variable">server.2</span><span class="token operator">=</span>worker1:2888:3888
<span class="token assign-left variable">server.3</span><span class="token operator">=</span>worker2:2888:3888

<span class="token comment"># /export/data/zookeeper-3.5.10</span>
<span class="token comment"># myid 中的值对应 server. 中的值</span>
<span class="token function">touch</span> myid
<span class="token builtin class-name">echo</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">&gt;&gt;</span> myid

/export/data/zookeeper-3.5.10

<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/data/zookeeper-3.5.10 root@worker1:/export/data/
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/data/zookeeper-3.5.10 root@worker2:/export/data/

<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/server/zookeeper-3.5.10/ root@worker1:/export/server/
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/server/zookeeper-3.5.10/ root@worker2:/export/server/

<span class="token comment"># 启动</span>
<span class="token comment">#  分别启动3 台</span>

 /export/server/zookeeper-3.5.10/bin/zkServer.sh start

<span class="token comment">#  查看状态</span>

 /export/server/zookeeper-3.5.10/bin/zkServer.sh status

<span class="token comment">#  链接客户端</span>
 /export/server/zookeeper-3.5.10/bin/zkCli.sh <span class="token parameter variable">-server</span> manager:2181

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端常用命令" tabindex="-1"><a class="header-anchor" href="#客户端常用命令" aria-hidden="true">#</a> 客户端常用命令</h2><h3 id="zookeeper-节点的属性" tabindex="-1"><a class="header-anchor" href="#zookeeper-节点的属性" aria-hidden="true">#</a> zookeeper 节点的属性</h3><pre><code>dataVersion： 数据版本号，每对节点进行一次 set 操作，dataVersion 的值都会增加 1
cversion： 子节点版本号，当子节点有变化时，cversion 的值就会加1
aclVersion： ACL 版本号
cZxid： Znode 创建的事物 ID
mZxid： Znode 被修改的事物 ID，每修改一次 Znode，都会更新 mZxid
ctime： 节点创建的时间戳
mtime： 节点最新一次更新的时间戳
ephemeralOwner： 如果该节点为临时节点，那么该值将会与该节点的 session id 绑定，
 如果该节点为非临时节点，则为 0。
</code></pre><h3 id="链接客户端" tabindex="-1"><a class="header-anchor" href="#链接客户端" aria-hidden="true">#</a> 链接客户端</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#  链接客户端</span>
 /export/server/zookeeper-3.5.10/bin/zkCli.sh <span class="token parameter variable">-server</span> manager:2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建节点" tabindex="-1"><a class="header-anchor" href="#创建节点" aria-hidden="true">#</a> 创建节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建节点的命令格式</span>
 create <span class="token punctuation">[</span>-s<span class="token punctuation">]</span> <span class="token punctuation">[</span>-e<span class="token punctuation">]</span> /path data acl

    <span class="token parameter variable">-s</span> 代表序列化
    <span class="token parameter variable">-e</span> 代表临时节点，临时节点在连接断开后，过一段时间会被删除（不会立刻删除）
    path: 节点的路径
    data: 节点的数据
    acl: 进行权限控制

<span class="token comment"># 创建节点</span>
create /testzk <span class="token number">123</span>
<span class="token comment"># 创建临时节点</span>
create /tempnode <span class="token number">121</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取节点" tabindex="-1"><a class="header-anchor" href="#读取节点" aria-hidden="true">#</a> 读取节点</h3><p>zookeeper 节点有三个命令</p><pre><code>ls: ls [-s] [-w] [-R] path 能够查看 zookeeper 指定节点下的所有子节点
get: get [-s] [-w] path 查看指定节点的数据内容
stat: stat [-w] path 查看节点属性信息
</code></pre><p>参数</p><pre><code>-s: 用于查看节点状态或者属性信息
-w: 设置观察者
-R: 递归显示子节点
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看根节点下的所有节点</span>
<span class="token function">ls</span> /
<span class="token comment"># 查看节点数据</span>
get /tempnode
<span class="token comment"># 查看节点数据同时查看节点状态</span>
get <span class="token parameter variable">-s</span> /tempnode
<span class="token comment"># 查看节点属性信息</span>
<span class="token function">stat</span> /testzk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新-zookeeper-节点的命令格式" tabindex="-1"><a class="header-anchor" href="#更新-zookeeper-节点的命令格式" aria-hidden="true">#</a> 更新 zookeeper 节点的命令格式</h3><p>set [-s] [-v version] path data</p><pre><code>s: 显示状态
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> /testzk newdata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除-zookeeper-节点的命令" tabindex="-1"><a class="header-anchor" href="#删除-zookeeper-节点的命令" aria-hidden="true">#</a> 删除 zookeeper 节点的命令</h3><pre><code>delete: 删除特定路劲下的节点
deleteall: 删除特定路劲下的所有子节点
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除节点</span>
delete /path
<span class="token comment"># 删除所有节点下的子节点</span>
deleteall /path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function b(k,h){const n=p("ExternalLinkIcon");return r(),l("div",null,[e("div",d,[c,e("p",null,[e("a",v,[a("Zookeeper 集群安装配置"),s(n)])]),e("p",null,[e("a",m,[a("Zookeeper系列(5) —— Zookeeper 常用的客户端操作命令"),s(n)])])]),u])}const x=i(o,[["render",b],["__file","zookeeper.html.vue"]]);export{x as default};
