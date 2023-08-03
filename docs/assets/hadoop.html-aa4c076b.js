import{_ as a,X as e,Y as t,Z as n,a1 as p,$ as l,a2 as o,C as i}from"./framework-0b23a550.js";const c="/assets/1-c7deeb86.png",r={},u={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"参考",-1),v={href:"https://github.com/lojzes/bigdata/tree/master",target:"_blank",rel:"noopener noreferrer"},k=o(`<h2 id="hadoop-集群安装" tabindex="-1"><a class="header-anchor" href="#hadoop-集群安装" aria-hidden="true">#</a> hadoop 集群安装</h2><h2 id="安装-虚拟机" tabindex="-1"><a class="header-anchor" href="#安装-虚拟机" aria-hidden="true">#</a> 安装 虚拟机</h2><h3 id="vagrant" tabindex="-1"><a class="header-anchor" href="#vagrant" aria-hidden="true">#</a> vagrant</h3><p>start.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#/bin/sh</span>

<span class="token comment"># install some tools</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">vim</span> telnet <span class="token function">wget</span> net-tools

<span class="token comment"># 关闭防火墙</span>
<span class="token function">sudo</span> systemctl stop firewalld.service
systemctl disable firewalld.service

<span class="token comment"># open password auth for backup if ssh key doesn&#39;t work, bydefault, username=vagrant password=vagrant</span>
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/PasswordAuthentication no/PasswordAuthentication yes/g&#39;</span> /etc/ssh/sshd_config
<span class="token function">sudo</span> systemctl restart sshd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vagrant file</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -*- mode: ruby -*-</span>
<span class="token comment"># vi: set ft=ruby :</span>

Vagrant.require_version <span class="token string">&quot;&gt;= 1.6.0&quot;</span>

boxes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        :name <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;hadoop-manager&quot;</span>,
        :eth1 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;192.168.20.11&quot;</span>,
        :mem <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;2048&quot;</span>,
        :cpu <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;2&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
        :name <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;hadoop-worker1&quot;</span>,
        :eth1 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;192.168.20.12&quot;</span>,
        :mem <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;2048&quot;</span>,
        :cpu <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;2&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
        :name <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;hadoop-worker2&quot;</span>,
        :eth1 <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;192.168.20.13&quot;</span>,
        :mem <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;2048&quot;</span>,
        :cpu <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token string">&quot;2&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

Vagrant.configure<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>

  config.vm.box <span class="token operator">=</span> <span class="token string">&quot;centos7&quot;</span>
  boxes.each <span class="token keyword">do</span> <span class="token operator">|</span>opts<span class="token operator">|</span>
    config.vm.define opts<span class="token punctuation">[</span>:name<span class="token punctuation">]</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>
      config.vm.hostname <span class="token operator">=</span> opts<span class="token punctuation">[</span>:name<span class="token punctuation">]</span>
      config.vm.provider <span class="token string">&quot;vmware_fusion&quot;</span> <span class="token keyword">do</span> <span class="token operator">|</span><span class="token function">v</span><span class="token operator">|</span>
        v.vmx<span class="token punctuation">[</span><span class="token string">&quot;memsize&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> opts<span class="token punctuation">[</span>:mem<span class="token punctuation">]</span>
        v.vmx<span class="token punctuation">[</span><span class="token string">&quot;numvcpus&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> opts<span class="token punctuation">[</span>:cpu<span class="token punctuation">]</span>
      end
      config.vm.provider <span class="token string">&quot;virtualbox&quot;</span> <span class="token keyword">do</span> <span class="token operator">|</span><span class="token function">v</span><span class="token operator">|</span>
        v.customize <span class="token punctuation">[</span><span class="token string">&quot;modifyvm&quot;</span>, :id, <span class="token string">&quot;--memory&quot;</span>, opts<span class="token punctuation">[</span>:mem<span class="token punctuation">]</span><span class="token punctuation">]</span>
        v.customize <span class="token punctuation">[</span><span class="token string">&quot;modifyvm&quot;</span>, :id, <span class="token string">&quot;--cpus&quot;</span>, opts<span class="token punctuation">[</span>:cpu<span class="token punctuation">]</span><span class="token punctuation">]</span>
      end
      config.vm.network :private_network, ip: opts<span class="token punctuation">[</span>:eth1<span class="token punctuation">]</span>
    end
  end
  config.vm.provision <span class="token string">&quot;shell&quot;</span>, privileged: false, path: <span class="token string">&quot;./setup.sh&quot;</span>
end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vagrant up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认 ssh 用户名 <code>vagrant</code> 密码 <code>vagrant</code></p><h2 id="设置root-用户密码" tabindex="-1"><a class="header-anchor" href="#设置root-用户密码" aria-hidden="true">#</a> 设置root 用户密码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换root</span>
<span class="token function">sudo</span> <span class="token parameter variable">-s</span>

<span class="token comment"># 修改密码</span>
<span class="token function">passwd</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置环境" tabindex="-1"><a class="header-anchor" href="#设置环境" aria-hidden="true">#</a> 设置环境</h2><p><img src="`+c+`" alt="" loading="lazy"></p><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3><p><code>hadoop-manager</code></p><p><code>hadoop-worker1</code></p><p><code>hadoop-worker2</code></p><h3 id="hosts" tabindex="-1"><a class="header-anchor" href="#hosts" aria-hidden="true">#</a> hosts</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/hosts

<span class="token number">192.168</span>.20.11 manager hadoop-manager
<span class="token number">192.168</span>.20.12 worker1 hadoop-worker1
<span class="token number">192.168</span>.20.13 worker2 hadoop-worker2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#ssh-免密登录" aria-hidden="true">#</a> ssh 免密登录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
ssh-keygen <span class="token parameter variable">-t</span> rsa
<span class="token comment"># 默认生成的秘钥 在当前用户的根目</span>

<span class="token comment"># 分发秘钥</span>

ssh-copy-id manager <span class="token operator">&amp;&amp;</span>
ssh-copy-id worker1 <span class="token operator">&amp;&amp;</span>
ssh-copy-id worker2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在 manager 执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> manager
<span class="token function">ssh</span> worker1
<span class="token function">ssh</span> worker2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>vagrant@hadoop-manager .ssh<span class="token punctuation">]</span>$ <span class="token function">ssh</span> manager
Last login: Tue Jul  <span class="token number">4</span> 02:15:00 <span class="token number">2023</span> from <span class="token number">192.168</span>.20.12
<span class="token punctuation">[</span>vagrant@hadoop-manager ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span>
<span class="token builtin class-name">logout</span>
Connection to manager closed.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装软件目录规定" tabindex="-1"><a class="header-anchor" href="#安装软件目录规定" aria-hidden="true">#</a> 安装软件目录规定</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 安装软件目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/server <span class="token operator">&amp;&amp;</span>  
<span class="token comment"># 数据目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/data <span class="token operator">&amp;&amp;</span>
<span class="token comment"># 安装软件源程序</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/software

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="my-env-sh-环境变量" tabindex="-1"><a class="header-anchor" href="#my-env-sh-环境变量" aria-hidden="true">#</a> my_env.sh 环境变量</h2><p>自己安装的软件，可以都写在 /etc/profile.d/my_env.sh 内，统一管理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/export/server/jdk1.8.0_371
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar

<span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_HOME</span><span class="token operator">=</span>/export/server/hadoop-3.3.0
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP_HOME</span>/bin:<span class="token variable">$HADOOP_HOME</span>/sbin

<span class="token builtin class-name">export</span> <span class="token assign-left variable">ZOOKEEPER_HOME</span><span class="token operator">=</span>/export/server/zookeeper-3.5.10
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$ZOOKEEPER_HOME</span>/bin


<span class="token function">scp</span> /etc/profile.d/my_env.sh  root@worker1:/etc/profile.d
<span class="token function">scp</span> /etc/profile.d/my_env.sh  root@worker2:/etc/profile.d

<span class="token comment">#  修改完成后 source my_env.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置java环境" tabindex="-1"><a class="header-anchor" href="#配置java环境" aria-hidden="true">#</a> 配置java环境</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/export/software/jdk1.8.0_371
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar

<span class="token comment"># worker1 和 worker2 进行拷贝</span>

<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/server/jdk1.8.0_371 root@worker1:/export/server
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /export/server/jdk1.8.0_371 root@worker2:/export/server


<span class="token function">scp</span> /etc/profile  root@worker1:/etc/
<span class="token function">scp</span> /etc/profile  root@worker2:/etc/

<span class="token comment">#  分别进行source</span>
<span class="token builtin class-name">source</span> /etc/profile 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装时间同步器" tabindex="-1"><a class="header-anchor" href="#安装时间同步器" aria-hidden="true">#</a> 安装时间同步器</h2><p>todo</p><h2 id="修改hadoop-配置文件" tabindex="-1"><a class="header-anchor" href="#修改hadoop-配置文件" aria-hidden="true">#</a> 修改hadoop 配置文件</h2><h3 id="hadoop-env-sh" tabindex="-1"><a class="header-anchor" href="#hadoop-env-sh" aria-hidden="true">#</a> hadoop-env.sh</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/export/server/jdk1.8.0_371
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HDFS_NAMENODE_USER</span><span class="token operator">=</span>root
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HDFS_DATANODE_USER</span><span class="token operator">=</span>root
<span class="token builtin class-name">export</span> <span class="token assign-left variable">HDFS_SECONDARYNAMENODE_USER</span><span class="token operator">=</span>root
<span class="token builtin class-name">export</span> <span class="token assign-left variable">YARN_RESOURCEMANAGER_USER</span><span class="token operator">=</span>root
<span class="token builtin class-name">export</span> <span class="token assign-left variable">YARN_NODEMANAGER_USER</span><span class="token operator">=</span>root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>core-site.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 设置默认使用的文件系统 Hadoop 支持 file 、hdfs 、 GFS 、 ali 、 Amazon --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>fs.defaultFS<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>hdfs://manager:8020<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- hadoop本地数据存储目录 format时自动生成 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.tmp.dir<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>/export/data/hadoop-3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 在Web UI访问HDFS使用的用户名。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.http.staticuser.user<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 整合hive 用户代理设置--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.proxyuser.root.hosts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>hadoop.proxyuser.root.groups<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 文件系统垃圾桶保存时间--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>fs.trash.interval<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>1400<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hdfs-site.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 设定SNN运行主机和端口。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>dfs.namenode.secondary.http-address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>worker1:9868<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mapred-site.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- mr程序默认运行方式。yarn集群模式 local本地模式--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mapreduce.framework.name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>yarn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- MR App Master环境变量。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.app.mapreduce.am.env<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>HADOOP_MAPRED_HOME=\${HADOOP_HOME}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- MR MapTask环境变量。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mapreduce.map.env<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>HADOOP_MAPRED_HOME=\${HADOOP_HOME}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- MR ReduceTask环境变量。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>mapreduce.reduce.env<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>HADOOP_MAPRED_HOME=\${HADOOP_HOME}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yarn-site.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- yarn集群主角色RM运行机器。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.resourcemanager.hostname<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>manager<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- NodeManager上运行的附属服务。需配置成mapreduce_shuffle,才可运行MR程序。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.nodemanager.aux-services<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>mapreduce_shuffle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 每个容器请求的最小内存资源（以MB为单位）。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.scheduler.minimum-allocation-mb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>4096<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 每个容器请求的最大内存资源（以MB为单位）。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.scheduler.maximum-allocation-mb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>9216<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 容器虚拟内存与物理内存之间的比率。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>yarn.nodemanager.vmem-pmem-ratio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>value</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>value</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果在hadoop 集群启动时，修改yarn-site.xml 文件，修改完成后要重启 yarn 集群,</p><p>或者重启整个hadoop集群</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>stop-yarn.sh
start-yarn.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>workers.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>manager
worker1
worker2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把hadoop 安装包 分发到worker1 和 worker2 上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">scp</span> <span class="token parameter variable">-r</span> hadoop-3.3.0 root@worker1:<span class="token environment constant">$PWD</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> hadoop-3.3.0 root@worker2:<span class="token environment constant">$PWD</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 hadoop 环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HADOOP_HOME</span><span class="token operator">=</span>/export/server/hadoop-3.3.0
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$HADOOP_HOME</span>/bin:<span class="token variable">$HADOOP_HOME</span>/sbin

<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment"># 拷贝到 worker1 和 worker2 上</span>

<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/profile root@worker1:/etc/
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/profile root@worker2:/etc/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化 hadoop 只能执行一次，如果再次执行，则手动删除之前的数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
hdfs namenode <span class="token parameter variable">-format</span>

<span class="token number">2023</span>-07-04 <span class="token number">23</span>:26:03,884 INFO common.Storage: Storage directory /export/data/hadoop-3.3.0/dfs/name has been successfully formatted.
<span class="token number">2023</span>-07-04 <span class="token number">23</span>:26:03,926 INFO namenode.FSImageFormatProtobuf: Saving image <span class="token function">file</span> /export/data/hadoop-3.3.0/dfs/name/current/fsimage.ckpt_0000000000000000000 using no compression
<span class="token number">2023</span>-07-04 <span class="token number">23</span>:26:04,059 INFO namenode.FSImageFormatProtobuf: Image <span class="token function">file</span> /export/data/hadoop-3.3.0/dfs/name/current/fsimage.ckpt_0000000000000000000 of size <span class="token number">399</span> bytes saved <span class="token keyword">in</span> <span class="token number">0</span> seconds <span class="token builtin class-name">.</span>
<span class="token number">2023</span>-07-04 <span class="token number">23</span>:26:04,083 INFO namenode.NNStorageRetentionManager: Going to retain <span class="token number">1</span> images with txid <span class="token operator">&gt;=</span> <span class="token number">0</span>
<span class="token number">2023</span>-07-04 <span class="token number">23</span>:26:04,088 INFO namenode.FSImage: FSImageSaver clean checkpoint: <span class="token assign-left variable">txid</span><span class="token operator">=</span><span class="token number">0</span> when meet shutdown.
<span class="token number">2023</span>-07-04 <span class="token number">23</span>:26:04,088 INFO namenode.NameNode: SHUTDOWN_MSG: 
/************************************************************
SHUTDOWN_MSG: Shutting down NameNode at manager/192.168.20.11
************************************************************/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动集群" tabindex="-1"><a class="header-anchor" href="#启动集群" aria-hidden="true">#</a> 启动集群</h2><p>hdfs 集群</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>start-dfs.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>yarn 集群</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>start-yarn.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="体验-hadoop-dfs" tabindex="-1"><a class="header-anchor" href="#体验-hadoop-dfs" aria-hidden="true">#</a> 体验 hadoop dfs</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看文件内的文件</span>
 hadoop fs <span class="token parameter variable">-ls</span> /
<span class="token comment"># 创建文件夹</span>
hadoop fs <span class="token parameter variable">-mkdir</span> /lojzes
<span class="token comment"># 上传文件 到文件夹</span>
hadoop fs <span class="token parameter variable">-put</span> /etc/profile /lojzes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令行" tabindex="-1"><a class="header-anchor" href="#命令行" aria-hidden="true">#</a> 命令行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 查看本地文件系统</span>
hadoop fs <span class="token parameter variable">-ls</span> file:///  
<span class="token comment"># 查看hdfs 分布式文件系统</span>
hadoop fs <span class="token parameter variable">-ls</span> hdfs://manager:8020/
<span class="token comment"># 查看默认配置文件系统 fs.defaultFS</span>
hadoop fs <span class="token parameter variable">-ls</span> /

<span class="token comment"># 帮助</span>

hadoop fs <span class="token parameter variable">-help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认配置文件系统</p><p>core-site.xml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token operator">&lt;</span>property<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>fs.defaultFS<span class="token operator">&lt;</span>/name<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>hdfs://manager:802<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>/value<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/property<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面管理" tabindex="-1"><a class="header-anchor" href="#页面管理" aria-hidden="true">#</a> 页面管理</h2><p>hdfs 页面 http://manager:9870/explorer.html#/</p><p>hadoop 集群页面 http://manager:8088/cluster</p>`,70);function m(g,b){const s=i("ExternalLinkIcon");return e(),t("div",null,[n("div",u,[d,n("p",null,[n("a",v,[p("安装、源码"),l(s)])])]),k])}const f=a(r,[["render",m],["__file","hadoop.html.vue"]]);export{f as default};
