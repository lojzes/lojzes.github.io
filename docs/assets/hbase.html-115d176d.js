import{_ as s,X as n,Y as a,a2 as e}from"./framework-0b23a550.js";const t="/assets/1-174daaff.png",p={},l=e(`<div class="hint-container tip"><p class="hint-container-title">参考</p></div><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><p>https://www.apache.org/dyn/closer.lua/hbase/2.4.17/hbase-2.4.17-bin.tar.gz</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 解压</span>

<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> hbase-2.4.17-bin.tar.gz

<span class="token comment"># 配置hbase 环境变量</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/export/server/jdk1.8.0_371
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar

<span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_HOME</span><span class="token operator">=</span>/export/server/hadoop-3.3.0
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP_HOME</span>/bin:<span class="token variable">$HADOOP_HOME</span>/sbin

<span class="token builtin class-name">export</span> <span class="token assign-left variable">HIVE_HOME</span><span class="token operator">=</span>/export/server/hive-3.1.2
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HIVE_HOME</span>/bin

<span class="token builtin class-name">export</span> <span class="token assign-left variable">ZOOKEEPER_HOME</span><span class="token operator">=</span>/export/server/zookeeper-3.5.10
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ZOOKEEPER_HOME</span>/bin

<span class="token builtin class-name">export</span> <span class="token assign-left variable">HBASE_HOME</span><span class="token operator">=</span>/export/server/hbase-2.4.17
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HBASE_HOME</span>/bin

<span class="token function">scp</span> /etc/profile.d/my_env.sh  root@worker1:/etc/profile.d
<span class="token function">scp</span> /etc/profile.d/my_env.sh  root@worker2:/etc/profile.d

<span class="token comment"># source </span>
<span class="token builtin class-name">source</span> /etc/profile.d/my_env.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 hbase.env</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Tell HBase whether it should manage it&#39;s own instance of ZooKeeper or not.</span>
<span class="token comment"># 使用自己搭建的zookeeper 环境</span>
 <span class="token builtin class-name">export</span> <span class="token assign-left variable">HBASE_MANAGES_ZK</span><span class="token operator">=</span>false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 hbase-site.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hbase.cluster.distributed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hbase.zookeeper.quorum<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>manager,worker1,worker2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 存放 hbase 数据地址 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hbase.rootdir<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hdfs://manager:8020/hbase<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hbase.wal.provider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>filesystem<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 regionservers</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>manager
worker1
worker2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决-hbase-和-hadoop-log4j-冲突问题" tabindex="-1"><a class="header-anchor" href="#解决-hbase-和-hadoop-log4j-冲突问题" aria-hidden="true">#</a> 解决 hbase 和 hadoop log4j 冲突问题</h2><p>要改上层应用，不要改 hadoop</p><p><img src="`+t+`" alt="" loading="lazy"></p><h2 id="分发" tabindex="-1"><a class="header-anchor" href="#分发" aria-hidden="true">#</a> 分发</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
切换到 /export/server

<span class="token function">scp</span> <span class="token parameter variable">-r</span> hbase-2.4.17 root@worker1:<span class="token environment constant">$PWD</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> hbase-2.4.17 root@worker2:<span class="token environment constant">$PWD</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><p>注意： 如果启动后，页面上没有 master ，只有backMaster 可以删除 logs 试试</p><p>/export/server/hbase-2.4.17/logs</p><p>单点启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase-daemon.sh start master
hbase-daemon.sh start regionserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>群启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>start-hbase.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>stop-hbase.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jps

<span class="token number">8770</span> QuorumPeerMain
<span class="token number">6307</span> HMaster
<span class="token number">3497</span> DataNode
<span class="token number">22857</span> RunJar
<span class="token number">4106</span> ResourceManager
<span class="token number">23564</span> RunJar
<span class="token number">4301</span> NodeManager
<span class="token number">3310</span> NameNode
<span class="token number">6526</span> HRegionServer

<span class="token comment"># 其中 HMaster HRegionServer 是hbase 的 master 和 regionserver</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭-bhase" tabindex="-1"><a class="header-anchor" href="#关闭-bhase" aria-hidden="true">#</a> 关闭 bhase</h2><p>执行stop-hbase.sh时，等待很长时间都没结束（出来很多“...”），有2个解决方法：</p><p>方法1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase-daemons.sh stop master
stop-hbase.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方法2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>hbase-daemons.sh stop regionserver
stop-hbase.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>同时有hbase-daemon.sh和hbasee-daemons.sh两个文件，前者是操作本机的，后者是操作整个集群的，注意不要打漏了s。</p><p>尽量别使用kill命令来关闭，否则会有一定的损坏风险。</p><h2 id="访问页面" tabindex="-1"><a class="header-anchor" href="#访问页面" aria-hidden="true">#</a> 访问页面</h2><p>http://manager:16010</p><h2 id="hbase-高可用" tabindex="-1"><a class="header-anchor" href="#hbase-高可用" aria-hidden="true">#</a> hbase 高可用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 切换到 /export/server/hbase-2.4.17/conf</span>
<span class="token function">touch</span> backup-masters

<span class="token function">vim</span> backup-masters

<span class="token comment"># 添加 备用 master</span>
worker1

<span class="token comment"># 分发</span>

切换到 /export/server

<span class="token builtin class-name">cd</span> /export/server

<span class="token function">scp</span> <span class="token parameter variable">-r</span> hbase-2.4.17 root@worker1:<span class="token environment constant">$PWD</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> hbase-2.4.17 root@worker2:<span class="token environment constant">$PWD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面管理" tabindex="-1"><a class="header-anchor" href="#页面管理" aria-hidden="true">#</a> 页面管理</h2><p>http://manager:16010/master-status#alltasks</p><h2 id="hbase-shell" tabindex="-1"><a class="header-anchor" href="#hbase-shell" aria-hidden="true">#</a> hbase shell</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入 shell</span>

hbase shell

<span class="token comment">#  创建 命名空间 相当于 是 database 数据库</span>
create_namespace  <span class="token string">&#39;lojzes_hbase_bigdata&#39;</span>
<span class="token comment">#  查看</span>
 list_namespace

NAMESPACE                                                                                                     
default                                                                                                           
hbase                                                                                                          
lojzes_hbase_bigdata   

<span class="token comment"># table 操作</span>

<span class="token comment"># 查看所有表</span>
list

<span class="token comment"># 创建表</span>
<span class="token comment"># info 和 msg 是 列族名</span>
create <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span> ,<span class="token string">&#39;info&#39;</span>,<span class="token string">&#39;msg&#39;</span>
<span class="token comment"># NAME 列族名  VERSIONS 维护的版本数</span>
create <span class="token string">&#39;lojzes_hbase_bigdata:person&#39;</span>, <span class="token punctuation">{</span>NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;info&#39;</span>, VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;msg&#39;</span>, VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">}</span>

<span class="token comment"># 查看表详情</span>
describe <span class="token string">&#39;lojzes_hbase_bigdata:person&#39;</span>

<span class="token comment">#  修改表 即 覆盖</span>

alter <span class="token string">&#39;t1&#39;</span>, NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;f1&#39;</span>, VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">5</span>

<span class="token comment"># 删除列族</span>

alter <span class="token string">&#39;ns1:t1&#39;</span>, NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;f1&#39;</span>, METHOD <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;delete&#39;</span>
alter <span class="token string">&#39;ns1:t1&#39;</span>, <span class="token string">&#39;delete&#39;</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;f1&#39;</span>

<span class="token comment"># 删除表</span>
 drop <span class="token string">&#39;t1&#39;</span>
 drop <span class="token string">&#39;ns1:t1&#39;</span>

<span class="token comment"># 删除表之前，必须把把表格设置为 disabled</span>
 ERROR: Table lojzes_hbase_bigdata:person is enabled. Disable it first

 disable <span class="token string">&#39;t1&#39;</span>
 disable <span class="token string">&#39;ns1:t1&#39;</span>

<span class="token comment">#  然后再删除</span>

<span class="token comment"># DML</span>
<span class="token comment"># 添加数据</span>
<span class="token comment">#  10001 是行号 rowkey </span>
put <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, <span class="token string">&#39;10001&#39;</span>,<span class="token string">&#39;info:name&#39;</span> ,<span class="token string">&#39;张三&#39;</span>
put <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, <span class="token string">&#39;10002&#39;</span>,<span class="token string">&#39;info:name&#39;</span> ,<span class="token string">&#39;李四&#39;</span>
put <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, <span class="token string">&#39;10003&#39;</span>,<span class="token string">&#39;info:name&#39;</span> ,<span class="token string">&#39;王五&#39;</span>
put <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, <span class="token string">&#39;10003&#39;</span>,<span class="token string">&#39;info:age&#39;</span> ,<span class="token string">&#39;30&#39;</span>


get <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>,<span class="token string">&#39;10001&#39;</span>

hbase:034:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> get <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>,<span class="token string">&#39;10003&#39;</span>
COLUMN                                                    CELL                                                                                                                                                                  
 info:age                                                 <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:49:54.415, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">30</span>                                                                                                                           
 info:name                                                <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:49:36.287, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span>xE7<span class="token punctuation">\\</span>x8E<span class="token punctuation">\\</span>x8B<span class="token punctuation">\\</span>xE4<span class="token punctuation">\\</span>xBA<span class="token punctuation">\\</span>x94                                                                                                     
<span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

hbase:036:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> get <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>,<span class="token string">&#39;10003&#39;</span>,<span class="token punctuation">{</span>COLUMN <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;info:age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>

COLUMN            CELL                                      
info:age         <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:49:54.415, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">30</span>                                                                                                                           
<span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># scan 查询</span>


hbase:004:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> scan <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>
ROW                                                       COLUMN+CELL                                                                                                                                                           
 <span class="token number">10001</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:name, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:45:08.046, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span>xE5<span class="token punctuation">\\</span>xBC<span class="token punctuation">\\</span>xA0<span class="token punctuation">\\</span>xE4<span class="token punctuation">\\</span>xB8<span class="token punctuation">\\</span>x89                                                                                   
 <span class="token number">10002</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:name, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:47:35.970, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span>xE6<span class="token punctuation">\\</span>x9D<span class="token punctuation">\\</span>x8E<span class="token punctuation">\\</span>xE5<span class="token punctuation">\\</span>x9B<span class="token punctuation">\\</span>x9B                                                                                   
 <span class="token number">10003</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:age, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:49:54.415, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">30</span>                                                                                                          
 <span class="token number">10003</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:name, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:49:36.287, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span>xE7<span class="token punctuation">\\</span>x8E<span class="token punctuation">\\</span>x8B<span class="token punctuation">\\</span>xE4<span class="token punctuation">\\</span>xBA<span class="token punctuation">\\</span>x94                                                                                   
<span class="token number">3</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>


hbase:009:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> scan <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span> , <span class="token punctuation">{</span><span class="token environment constant">COLUMNS</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;info:name&#39;</span>,<span class="token string">&#39;info:age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
ROW                                                       COLUMN+CELL                                                                                                                                                           
 <span class="token number">10001</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:name, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:45:08.046, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span>xE5<span class="token punctuation">\\</span>xBC<span class="token punctuation">\\</span>xA0<span class="token punctuation">\\</span>xE4<span class="token punctuation">\\</span>xB8<span class="token punctuation">\\</span>x89                                                                                   
 <span class="token number">10002</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:name, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:47:35.970, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span>xE6<span class="token punctuation">\\</span>x9D<span class="token punctuation">\\</span>x8E<span class="token punctuation">\\</span>xE5<span class="token punctuation">\\</span>x9B<span class="token punctuation">\\</span>x9B                                                                                   
 <span class="token number">10003</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:age, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:49:54.415, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token number">30</span>                                                                                                          
 <span class="token number">10003</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:name, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:49:36.287, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span>xE7<span class="token punctuation">\\</span>x8E<span class="token punctuation">\\</span>x8B<span class="token punctuation">\\</span>xE4<span class="token punctuation">\\</span>xBA<span class="token punctuation">\\</span>x94                                                                                   
<span class="token number">3</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># STARTROW 开始行号 STOPROW 结束行号  左闭右开[10001,10003) 不包括10003</span>

hbase:011:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> scan <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span> , <span class="token punctuation">{</span><span class="token environment constant">COLUMNS</span> <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;info:name&#39;</span>,<span class="token string">&#39;info:age&#39;</span><span class="token punctuation">]</span>,STARTROW<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;10001&#39;</span>,STOPROW<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;10003&#39;</span><span class="token punctuation">}</span>
ROW                                                       COLUMN+CELL                                                                                                                                                           
 <span class="token number">10001</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:name, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:45:08.046, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span>xE5<span class="token punctuation">\\</span>xBC<span class="token punctuation">\\</span>xA0<span class="token punctuation">\\</span>xE4<span class="token punctuation">\\</span>xB8<span class="token punctuation">\\</span>x89                                                                                   
 <span class="token number">10002</span>                                                    <span class="token assign-left variable">column</span><span class="token operator">=</span>info:name, <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T02:47:35.970, <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token punctuation">\\</span>xE6<span class="token punctuation">\\</span>x9D<span class="token punctuation">\\</span>x8E<span class="token punctuation">\\</span>xE5<span class="token punctuation">\\</span>x9B<span class="token punctuation">\\</span>x9B                                                                                   
<span class="token number">2</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
Took <span class="token number">0.0302</span> seconds 



<span class="token comment"># 删除数据</span>

<span class="token comment"># delete 删除最新版本  deleteall 删除索引版本</span>


<span class="token comment"># 增加测试数据</span>

alter <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, NAME <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&#39;info&#39;</span>, VERSIONS <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token number">3</span>

put <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, <span class="token string">&#39;10001&#39;</span>,<span class="token string">&#39;info:name&#39;</span> ,<span class="token string">&#39;zhangsan1&#39;</span>
put <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, <span class="token string">&#39;10001&#39;</span>,<span class="token string">&#39;info:name&#39;</span> ,<span class="token string">&#39;zhangsan2&#39;</span>
put <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, <span class="token string">&#39;10001&#39;</span>,<span class="token string">&#39;info:name&#39;</span> ,<span class="token string">&#39;zhangsan3&#39;</span>
put <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, <span class="token string">&#39;10001&#39;</span>,<span class="token string">&#39;info:name&#39;</span> ,<span class="token string">&#39;zhangsan4&#39;</span>
put <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>, <span class="token string">&#39;10001&#39;</span>,<span class="token string">&#39;info:name&#39;</span> ,<span class="token string">&#39;zhangsan5&#39;</span>

<span class="token comment">#  只能获取到最新的3个版本，因为设置了维护3个版本</span>
hbase:025:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> get <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span> ,<span class="token string">&#39;10001&#39;</span>,<span class="token punctuation">{</span>COLUMN<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token string">&#39;info:name&#39;</span>,VERSIONS<span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">6</span><span class="token punctuation">}</span>
COLUMN                                                    CELL                                                                                                                                                                  
 info:name                                                <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T03:25:19.124, <span class="token assign-left variable">value</span><span class="token operator">=</span>zhangsan5                                                                                                                    
 info:name                                                <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T03:25:15.789, <span class="token assign-left variable">value</span><span class="token operator">=</span>zhangsan4                                                                                                                    
 info:name                                                <span class="token assign-left variable">timestamp</span><span class="token operator">=</span><span class="token number">2023</span>-07-08T03:25:15.706, <span class="token assign-left variable">value</span><span class="token operator">=</span>zhangsan3  


<span class="token comment"># 删除最新的一个版本</span>
hbase:026:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> delete <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>,<span class="token string">&#39;10001&#39;</span>,<span class="token string">&#39;info:name&#39;</span>
<span class="token comment"># 删除所有版本</span>
hbase:026:<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> deleteall <span class="token string">&#39;lojzes_hbase_bigdata:student&#39;</span>,<span class="token string">&#39;10001&#39;</span>,<span class="token string">&#39;info:name&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hbase-和-hive-结合使用" tabindex="-1"><a class="header-anchor" href="#hbase-和-hive-结合使用" aria-hidden="true">#</a> hbase 和 hive 结合使用</h2><p>使用场景：</p><p>已经有大数据在hbase 中， 使用 hive 进行数据分析：</p><p>在hive中 创建 hbase 映射的外部表</p>`,47),i=[l];function o(c,r){return n(),a("div",null,i)}const u=s(p,[["render",o],["__file","hbase.html.vue"]]);export{u as default};
