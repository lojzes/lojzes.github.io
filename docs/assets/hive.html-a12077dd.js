import{_ as a,X as e,Y as t,Z as n,a1 as p,$ as l,a2 as i,C as o}from"./framework-0b23a550.js";const c="/assets/1-847e8784.png",r="/assets/2-19ddd7a7.png",d="/assets/3-bfafd973.png",u="/assets/4-82af5bde.png",k="/assets/5-51dcdfcc.png",v="/assets/6-4eeb119b.png",m={},b={class:"hint-container tip"},g=n("p",{class:"hint-container-title"},"参考",-1),h={href:"https://github.com/lojzes/bigdata/tree/master",target:"_blank",rel:"noopener noreferrer"},y=i(`<h2 id="hive-远程模式安装" tabindex="-1"><a class="header-anchor" href="#hive-远程模式安装" aria-hidden="true">#</a> hive 远程模式安装</h2><p>在 hadoop 集群中任选一台机器安装即可</p><p>一般会选择安装在 manager 节点上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压 hive</span>

<span class="token function">tar</span> zxvf apache-hive-3.1.2-bin.tar.gz

<span class="token comment">#  重命名</span>
<span class="token function">mv</span> apache-hive-3.1.2-bin hive-3.1.2

<span class="token comment">#  升级guava 和 hadoop 中的一样</span>
<span class="token comment">#  删除 hive 中的 guava</span>

<span class="token function">rm</span>  <span class="token parameter variable">-rf</span> /export/server/hive-3.1.2/lib/guava-19.0.jar

<span class="token comment"># /export/server/hive-3.1.2/lib/</span>
 <span class="token function">cp</span> /export/server/hadoop-3.3.0/share/hadoop/common/lib/guava-27.0-jre.jar ./



<span class="token comment"># 新建 配置文件</span>
<span class="token comment"># 切换到 /export/server/hive-3.1.2/conf</span>
<span class="token function">cp</span> hive-env.sh.template hive-env.sh

<span class="token comment"># 添加</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_HOME</span><span class="token operator">=</span>/export/server/hadoop-3.3.0
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HIVE_CONF_DIR</span><span class="token operator">=</span>/export/server/hive-3.1.2/conf
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HIVE_AUX_JARS_PATH</span><span class="token operator">=</span>/export/server/hive-3.1.2/lib


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="新建-vim-hive-site-xml" tabindex="-1"><a class="header-anchor" href="#新建-vim-hive-site-xml" aria-hidden="true">#</a> 新建 vim hive-site.xml</h1><p>注意，ConnectionURL下面的配置不能有收到换行，否则会报错</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>javax.jdo.option.ConnectionURL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>jdbc:mysql://192.168.1.11:3306/hivedb?createDatabaseIfNotExist=true<span class="token entity named-entity" title="&amp;">&amp;amp;</span>useSSL=false<span class="token entity named-entity" title="&amp;">&amp;amp;</span>useUnicode=true<span class="token entity named-entity" title="&amp;">&amp;amp;</span>characterEncoding=UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
 
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>javax.jdo.option.ConnectionDriverName<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>com.mysql.cj.jdbc.Driver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>javax.jdo.option.ConnectionUserName<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>javax.jdo.option.ConnectionPassword<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--H2S 运行绑定host--&gt;</span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.server2.thrift.bind.host<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>manager<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.metastore.uris<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>thrift://manager:9083<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!--关闭元数据储存授权--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hive.metastore.event.db.notification.api.auth<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传 mysql 驱动</p><p>mysql-connector-java-8.0.28.jar</p><h2 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h2><p>/etc/profile.d/my_env.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/export/server/jdk1.8.0_371
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar

<span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_HOME</span><span class="token operator">=</span>/export/server/hadoop-3.3.0
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP_HOME</span>/bin:<span class="token variable">$HADOOP_HOME</span>/sbin

<span class="token builtin class-name">export</span> <span class="token assign-left variable">HIVE_HOME</span><span class="token operator">=</span>/export/server/hive-3.1.2
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HIVE_HOME</span>/bin

<span class="token builtin class-name">export</span> <span class="token assign-left variable">ZOOKEEPER_HOME</span><span class="token operator">=</span>/export/server/zookeeper-3.5.10
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ZOOKEEPER_HOME</span>/bin

<span class="token function">scp</span> /etc/profile.d/my_env.sh  root@worker1:/etc/profile.d
<span class="token function">scp</span> /etc/profile.d/my_env.sh  root@worker2:/etc/profile.d

<span class="token comment"># source </span>
<span class="token builtin class-name">source</span> /etc/profile.d/my_env.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化元数据" tabindex="-1"><a class="header-anchor" href="#初始化元数据" aria-hidden="true">#</a> 初始化元数据</h2><p>如果初始化失败，检查配置，重新执行初始化配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># /export/server/hive-3.1.2/bin</span>
./schematool <span class="token parameter variable">-initSchema</span> <span class="token parameter variable">-dbType</span> mysql <span class="token parameter variable">-verbos</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动-metastore-服务" tabindex="-1"><a class="header-anchor" href="#启动-metastore-服务" aria-hidden="true">#</a> 启动 metastore 服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#  前台启动</span>
<span class="token comment"># /export/server/hive-3.1.2/bin</span>

 ./hive <span class="token parameter variable">--service</span> metastore

 Ctrl + C 停止

<span class="token comment"># 后台启动</span>
<span class="token function">nohup</span> ./hive <span class="token parameter variable">--service</span> metastore <span class="token operator">&amp;</span>

<span class="token function">nohup</span> ./hive <span class="token parameter variable">--service</span> metastore <span class="token operator">&gt;</span> metastore.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token function">nohup</span> hive <span class="token parameter variable">--service</span> metastore <span class="token operator">&gt;</span> metastore.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hadoop-manager bin<span class="token punctuation">]</span><span class="token comment"># jps</span>
<span class="token number">2371</span> ResourceManager
<span class="token number">2563</span> NodeManager
<span class="token number">12261</span> RunJar  // 就 hive metastore
<span class="token number">1510</span> NameNode
<span class="token number">1702</span> DataNode
<span class="token number">15432</span> Jps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐 第二代hive 客户端 hiveserver2</p><p>:::waring 注意</p><p>在启动 hiveserver2 之前必须启动 metastore (第一代hive客户端)，他们有先后顺序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 后台启动</span>

<span class="token function">nohup</span> ./hive <span class="token parameter variable">--service</span> hiveserver2 <span class="token operator">&amp;</span>

<span class="token function">nohup</span> ./hive <span class="token parameter variable">--service</span> hiveserver2 <span class="token operator">&gt;</span> hiveserver2.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token function">nohup</span> hive <span class="token parameter variable">--service</span> hiveserver2 <span class="token operator">&gt;</span> hiveserver2.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链接客户端端" tabindex="-1"><a class="header-anchor" href="#链接客户端端" aria-hidden="true">#</a> 链接客户端端</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一代客户端链接方式</span>
./hive 

hive<span class="token operator">&gt;</span> show databases<span class="token punctuation">;</span>
OK
default
Time taken: <span class="token number">1.035</span> seconds, Fetched: <span class="token number">1</span> row<span class="token punctuation">(</span>s<span class="token punctuation">)</span>


<span class="token comment"># 链接第二代方式 1</span>
./beeline

<span class="token comment"># 2 默认端口 10000</span>
beeline<span class="token operator">&gt;</span> <span class="token operator">!</span> connect jdbc:hive2://manager:10000
Connecting to jdbc:hive2://manager:10000
Enter username <span class="token keyword">for</span> jdbc:hive2://manager:10000: root
Enter password <span class="token keyword">for</span> jdbc:hive2://manager:10000: ****
Connected to: Apache Hive <span class="token punctuation">(</span>version <span class="token number">3.1</span>.2<span class="token punctuation">)</span>
Driver: Hive JDBC <span class="token punctuation">(</span>version <span class="token number">3.1</span>.2<span class="token punctuation">)</span>
Transaction isolation: TRANSACTION_REPEATABLE_READ
<span class="token number">0</span>: jdbc:hive2://manager:1000<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 dataGrid 连接 hive2</p><p>下载驱动 hive-jdbc-3.1.2-standalone.jar</p><h3 id="ddl" tabindex="-1"><a class="header-anchor" href="#ddl" aria-hidden="true">#</a> DDL</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token comment">-- /user/hive/warehouse</span>
<span class="token comment">-- 常见数据库，默认 路径为 /user/hive/warehouse/lojzes.db</span>
<span class="token keyword">create</span> <span class="token keyword">database</span> lojzes<span class="token punctuation">;</span>

<span class="token comment">-- 切换数据库</span>
<span class="token keyword">use</span> lojzes<span class="token punctuation">;</span>

<span class="token comment">--  删除库</span>
<span class="token keyword">drop</span> <span class="token keyword">database</span> lojzes<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dml" tabindex="-1"><a class="header-anchor" href="#dml" aria-hidden="true">#</a> DML</h3><h2 id="修改中文注释为乱码问题" tabindex="-1"><a class="header-anchor" href="#修改中文注释为乱码问题" aria-hidden="true">#</a> 修改中文注释为乱码问题</h2><p>修改msql</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> hivedb <span class="token punctuation">;</span>
<span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">table</span> hivedb<span class="token punctuation">.</span>COLUMNS_V2 <span class="token keyword">modify</span> <span class="token keyword">column</span> <span class="token keyword">COMMENT</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span> <span class="token keyword">character</span> <span class="token keyword">set</span> utf8 <span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> hivedb<span class="token punctuation">.</span>TABLE_PARAMS <span class="token keyword">modify</span> <span class="token keyword">column</span> PARAM_VALUE <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span> <span class="token keyword">character</span> <span class="token keyword">set</span> utf8<span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> hivedb<span class="token punctuation">.</span>PARTITION_PARAMS <span class="token keyword">modify</span> <span class="token keyword">column</span> PARAM_VALUE <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span> <span class="token keyword">character</span> <span class="token keyword">set</span> utf8<span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> hivedb<span class="token punctuation">.</span>PARTITION_KEYS <span class="token keyword">modify</span> <span class="token keyword">column</span> PKEY_COMMENT <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span> <span class="token keyword">character</span> <span class="token keyword">set</span> utf8<span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> hivedb<span class="token punctuation">.</span>INDEX_PARAMS <span class="token keyword">modify</span> <span class="token keyword">column</span> PARAM_VALUE <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span> <span class="token keyword">character</span> <span class="token keyword">set</span> utf8<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完成后重新建表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_user<span class="token punctuation">(</span>

    id <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;id主键&#39;</span><span class="token punctuation">,</span>
    name string <span class="token keyword">comment</span> <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span>
    age <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;年龄&#39;</span><span class="token punctuation">,</span>
    address string <span class="token keyword">comment</span> <span class="token string">&#39;家庭住址&#39;</span>
<span class="token punctuation">)</span>
<span class="token keyword">row</span> format delimited
<span class="token keyword">fields</span> <span class="token keyword">terminated</span> <span class="token keyword">by</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">;</span> <span class="token comment">-- 字段之间的分隔符 tab</span>

<span class="token keyword">select</span> <span class="token operator">*</span>
<span class="token keyword">from</span> t_user<span class="token punctuation">;</span>

<span class="token comment">-- 通过select 创建表</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> test <span class="token keyword">as</span> <span class="token keyword">select</span> A<span class="token punctuation">,</span>B <span class="token keyword">from</span> tb


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传数据</p><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>1	lojzes	30	beijing
2	lyy	20	shanghai
3	lyyitit 25  guangzhou
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 表对应的文件下，上传文件</p><p><img src="`+c+`" alt="" loading="lazy"></p><h2 id="show-命令" tabindex="-1"><a class="header-anchor" href="#show-命令" aria-hidden="true">#</a> show 命令</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token keyword">show</span> <span class="token keyword">databases</span> <span class="token punctuation">;</span>
<span class="token keyword">show</span> schemas <span class="token punctuation">;</span>

<span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span>

<span class="token keyword">show</span> <span class="token keyword">tables</span> <span class="token operator">in</span> lojzes<span class="token punctuation">;</span> <span class="token comment">-- 查看数据库lojzes内的表</span>

<span class="token comment">-- 查看表的元数据</span>
<span class="token keyword">desc</span> t_user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive-load-加载数据" tabindex="-1"><a class="header-anchor" href="#hive-load-加载数据" aria-hidden="true">#</a> hive load 加载数据</h2><p>先常见两张表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 本地加载</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_user_local
<span class="token punctuation">(</span>

    id      <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;id主键&#39;</span><span class="token punctuation">,</span>
    name    string <span class="token keyword">comment</span> <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span>
    age     <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;年龄&#39;</span><span class="token punctuation">,</span>
    address string <span class="token keyword">comment</span> <span class="token string">&#39;家庭住址&#39;</span>
<span class="token punctuation">)</span>
    <span class="token keyword">row</span> format delimited
        <span class="token keyword">fields</span> <span class="token keyword">terminated</span> <span class="token keyword">by</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span> <span class="token comment">-- 字段之间的分隔符</span>

<span class="token comment">-- hdfs 加载</span>
<span class="token keyword">create</span> <span class="token keyword">table</span> t_user_hadfs
<span class="token punctuation">(</span>

    id      <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;id主键&#39;</span><span class="token punctuation">,</span>
    name    string <span class="token keyword">comment</span> <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span>
    age     <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;年龄&#39;</span><span class="token punctuation">,</span>
    address string <span class="token keyword">comment</span> <span class="token string">&#39;家庭住址&#39;</span>
<span class="token punctuation">)</span>
 <span class="token keyword">row</span> format delimited
 <span class="token keyword">fields</span> <span class="token keyword">terminated</span> <span class="token keyword">by</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span> <span class="token comment">-- 字段之间的分隔符</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 hive 安装服务上执行</p><p>建议使用beeline 客户端，可以显示出加载过程日志信息</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 默认追加方式</span>
<span class="token comment">-- 加载数据</span>
<span class="token comment">-- 从本地加载数据 数据位于 HS2(manager) /export/business_data/student.txt  本地文件系统 本质是 hadoop fs -put 上传操作</span>

<span class="token keyword">load</span> <span class="token keyword">data</span> <span class="token keyword">local</span>  inpath  <span class="token string">&#39;/export/business_data/student.txt&#39;</span> <span class="token keyword">into</span> <span class="token keyword">table</span> t_user_local<span class="token punctuation">;</span>

<span class="token comment">-- 从 hdfs 加载数据 数据位于文件系统根目录下 本质是 hadoop fs -mv 移动操作 移动到了 t_user_hdfs 文件夹下</span>
<span class="token comment">-- 先把数据上传到hdfs上 hadoop fs -put /export/business_data/student.txt /</span>

<span class="token keyword">load</span> <span class="token keyword">data</span>  inpath  <span class="token string">&#39;/student.txt&#39;</span> <span class="token keyword">into</span> <span class="token keyword">table</span> t_user_hdfs<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> insert</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> tabel t_1（id <span class="token keyword">int</span> <span class="token punctuation">,</span>name string<span class="token punctuation">;</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> t_1 <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1.</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>；

<span class="token keyword">insert</span> <span class="token keyword">into</span> t_1 <span class="token keyword">select</span> num <span class="token punctuation">,</span>name <span class="token keyword">from</span> table_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h2><p>准备数据</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> t_user_select
<span class="token punctuation">(</span>

    id      <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;id主键&#39;</span><span class="token punctuation">,</span>
    name    string <span class="token keyword">comment</span> <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span>
    age     <span class="token keyword">int</span> <span class="token keyword">comment</span> <span class="token string">&#39;年龄&#39;</span><span class="token punctuation">,</span>
    address string <span class="token keyword">comment</span> <span class="token string">&#39;家庭住址&#39;</span>
<span class="token punctuation">)</span>
 <span class="token keyword">row</span> format delimited
 <span class="token keyword">fields</span> <span class="token keyword">terminated</span> <span class="token keyword">by</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">;</span>  

<span class="token keyword">load</span> <span class="token keyword">data</span> <span class="token keyword">local</span>  inpath  <span class="token string">&#39;/export/business_data/student.dat&#39;</span>
 overwrite <span class="token keyword">into</span> <span class="token keyword">table</span> t_user_select<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>
<span class="token comment">-- current_database 函数 返回 当前数据库</span>
<span class="token keyword">select</span> current_database<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- distinct 去重</span>
<span class="token keyword">select</span> <span class="token keyword">distinct</span> address
<span class="token keyword">from</span> t_user_select<span class="token punctuation">;</span>

<span class="token comment">-- 多个字段整体去重，age,address 看成一个整体</span>

<span class="token keyword">select</span> <span class="token keyword">distinct</span> age<span class="token punctuation">,</span>address
<span class="token keyword">from</span> t_user_select<span class="token punctuation">;</span>

<span class="token comment">-- count * 包含所有  count 字段 不包括 null</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> t_user_select<span class="token punctuation">;</span>
<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span> <span class="token keyword">from</span> t_user_select<span class="token punctuation">;</span>

<span class="token comment">-- sum 求每一列中 age 的相加</span>
<span class="token keyword">select</span> <span class="token function">sum</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
<span class="token keyword">from</span> t_user_select<span class="token punctuation">;</span>

<span class="token comment">-- 分组</span>

<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span>sex
<span class="token keyword">from</span> t_user_select
<span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>


<span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">avg</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">,</span>sex
<span class="token keyword">from</span> t_user_select
<span class="token keyword">group</span> <span class="token keyword">by</span> sex<span class="token punctuation">;</span>

<span class="token comment">--  limit 和 offset</span>
<span class="token comment">--  limit 是从0 开始的</span>
<span class="token keyword">select</span> <span class="token operator">*</span>
<span class="token keyword">from</span> t_user_select <span class="token keyword">limit</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join</h2><p>inner join 左右都包含的，才能显示</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--  inner join 以下三种写法，效果相同</span>
<span class="token keyword">select</span> A<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token punctuation">,</span> B<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> A 
<span class="token keyword">inner</span> <span class="token keyword">join</span> B  
<span class="token keyword">on</span> A<span class="token punctuation">.</span>id <span class="token operator">=</span> B<span class="token punctuation">.</span>id


<span class="token keyword">select</span> A<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token punctuation">,</span> B<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> A 
  <span class="token keyword">join</span> B  
<span class="token keyword">on</span> A<span class="token punctuation">.</span>id <span class="token operator">=</span> B<span class="token punctuation">.</span>id

<span class="token keyword">select</span> A<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token punctuation">,</span> B<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> A B  
<span class="token keyword">where</span>  A<span class="token punctuation">.</span>id <span class="token operator">=</span> B<span class="token punctuation">.</span>id


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive-内置函数" tabindex="-1"><a class="header-anchor" href="#hive-内置函数" aria-hidden="true">#</a> hive 内置函数</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--  查看内置函数</span>

<span class="token keyword">show</span> functions <span class="token punctuation">;</span>
<span class="token keyword">describe</span> <span class="token keyword">function</span> <span class="token keyword">extended</span> count<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用函数</p><p>字符串</p><p><img src="`+r+'" alt="" loading="lazy"></p><p>日期</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>数值</p><p><img src="'+u+'" alt="" loading="lazy"></p><p><img src="'+k+'" alt="" loading="lazy"></p><h2 id="etl-抽取-转换-加载-清洗数据" tabindex="-1"><a class="header-anchor" href="#etl-抽取-转换-加载-清洗数据" aria-hidden="true">#</a> ETL（抽取 转换 加载） 清洗数据</h2><p><img src="'+v+'" alt="" loading="lazy"></p>',68);function w(f,_){const s=o("ExternalLinkIcon");return e(),t("div",null,[n("div",b,[g,n("p",null,[n("a",h,[p("安装、源码"),l(s)])])]),y])}const A=a(m,[["render",w],["__file","hive.html.vue"]]);export{A as default};
