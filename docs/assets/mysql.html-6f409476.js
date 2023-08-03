import{_ as i,X as l,Y as r,Z as s,a1 as a,$ as e,a2 as t,C as o}from"./framework-0b23a550.js";const p={},c={class:"hint-container tip"},d=s("p",{class:"hint-container-title"},"参考",-1),m={href:"https://www.cnblogs.com/secretmrj/p/15600144.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/greyzeng/p/16756049.html",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><p>https://cdn.mysql.com//Downloads/MySQL-8.0/mysql-8.0.33-linux-glibc2.17-x86_64-minimal.tar.xz</p><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><p>centos7</p><h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname" aria-hidden="true">#</a> hostname</h3><p>查看hostname</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">hostname</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>m</code><code>w1</code><code>w2</code></p><h3 id="hosts" tabindex="-1"><a class="header-anchor" href="#hosts" aria-hidden="true">#</a> hosts</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/hosts

<span class="token number">192.168</span>.1.11 m m
<span class="token number">192.168</span>.1.12 w1 w1
<span class="token number">192.168</span>.1.13 w2 w2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#ssh-免密登录" aria-hidden="true">#</a> ssh 免密登录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa
<span class="token comment"># 默认生成的秘钥 在当前用户的根目</span>

<span class="token comment"># 分发秘钥</span>

ssh-copy-id m <span class="token operator">&amp;&amp;</span>
ssh-copy-id w1 <span class="token operator">&amp;&amp;</span>
ssh-copy-id w2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p>在 m 执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> m
<span class="token function">ssh</span> w1
<span class="token function">ssh</span> w2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装软件目录规定" tabindex="-1"><a class="header-anchor" href="#安装软件目录规定" aria-hidden="true">#</a> 安装软件目录规定</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 安装软件目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/server <span class="token operator">&amp;&amp;</span>  
<span class="token comment"># 数据目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/data <span class="token operator">&amp;&amp;</span>
<span class="token comment"># 安装软件源程序</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/software

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-单机安装" tabindex="-1"><a class="header-anchor" href="#mysql-单机安装" aria-hidden="true">#</a> mysql 单机安装</h2><h3 id="minimal-安装方式" tabindex="-1"><a class="header-anchor" href="#minimal-安装方式" aria-hidden="true">#</a> minimal 安装方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># .tar.gz 后缀</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> 文件名

<span class="token comment"># .tar.xz 后缀</span>
<span class="token function">tar</span> <span class="token parameter variable">-Jxvf</span> mysql-8.0.33-linux-glibc2.17-x86_64-minimal.tar.xz

<span class="token comment">#  改名</span>
<span class="token function">mv</span> mysql-8.0.33-linux-glibc2.17-x86_64-minimal mysql-8.0.33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="my-env-sh-环境变量" tabindex="-1"><a class="header-anchor" href="#my-env-sh-环境变量" aria-hidden="true">#</a> my_env.sh 环境变量</h2><p>自己安装的软件，可以都写在 /etc/profile.d/my_env.sh 内，统一管理</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">vim</span> /etc/profile.d/my_env.sh
 
<span class="token comment"># export HADOOP_HOME=/export/server/hadoop-3.3.0</span>
<span class="token comment"># export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MYSQL_HOME</span><span class="token operator">=</span>/export/server/mysql-8.0.33
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$MYSQL_HOME</span>/bin

<span class="token comment"># scp /etc/profile.d/my_env.sh  root@w1:/etc/profile.d</span>
<span class="token comment"># scp /etc/profile.d/my_env.sh  root@w2:/etc/profile.d</span>

<span class="token comment">#  修改完成后 source my_env.sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="确认安装" tabindex="-1"><a class="header-anchor" href="#确认安装" aria-hidden="true">#</a> 确认安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@m1 mysql-8.0.33<span class="token punctuation">]</span><span class="token comment"># mysql --version</span>
mysql  Ver <span class="token number">8.0</span>.33 <span class="token keyword">for</span> Linux on x86_64 <span class="token punctuation">(</span>MySQL Community Server - GPL<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建用户组、用户" tabindex="-1"><a class="header-anchor" href="#创建用户组、用户" aria-hidden="true">#</a> 创建用户组、用户</h2><p>mysql 启动时默认使用 mysql 用户</p><p>建用户组：groupadd</p><p>创建用户：useradd（-r 创建系统用户，-g 指定用户组）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> mysql mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建数据目录" tabindex="-1"><a class="header-anchor" href="#创建数据目录" aria-hidden="true">#</a> 创建数据目录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/data/mysql-8.0.33/mysql

<span class="token comment"># 更改属主和数组</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /export/data/mysql-8.0.33

<span class="token comment"># 更改模式</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /export/data/mysql-8.0.33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="centos7-vim-中文乱码" tabindex="-1"><a class="header-anchor" href="#centos7-vim-中文乱码" aria-hidden="true">#</a> centos7 vim 中文乱码</h2><p>先查看系统默认编码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@m1 export<span class="token punctuation">]</span><span class="token comment"># locale</span>
locale: Cannot <span class="token builtin class-name">set</span> LC_CTYPE to default locale: No such <span class="token function">file</span> or directory
locale: Cannot <span class="token builtin class-name">set</span> LC_MESSAGES to default locale: No such <span class="token function">file</span> or directory
locale: Cannot <span class="token builtin class-name">set</span> <span class="token environment constant">LC_ALL</span> to default locale: No such <span class="token function">file</span> or directory
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>zh_CN.UTF-8
<span class="token assign-left variable">LC_CTYPE</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_NUMERIC</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_TIME</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable">LC_COLLATE</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_MONETARY</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable">LC_MESSAGES</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_PAPER</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_NAME</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_ADDRESS</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_TELEPHONE</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_MEASUREMENT</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_IDENTIFICATION</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决linux下vim中文乱码的方法 问题出在vim上，对于CentOS应该修改 /etc/vimrc 文件，在该文件头上添加下面四行代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">fileencodings</span><span class="token operator">=</span>utf-8,gb2312,gbk,gb18030  
<span class="token builtin class-name">set</span> <span class="token assign-left variable">termencoding</span><span class="token operator">=</span>utf-8  
<span class="token builtin class-name">set</span> <span class="token assign-left variable">fileformats</span><span class="token operator">=</span>unix  
<span class="token builtin class-name">set</span> <span class="token assign-left variable">encoding</span><span class="token operator">=</span>prc  
<span class="token comment"># 解决粘贴自动添加注释问题</span>
<span class="token builtin class-name">set</span> <span class="token function">paste</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /export/server/mysql-8.0.33/my.cnf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="my-cnf" tabindex="-1"><a class="header-anchor" href="#my-cnf" aria-hidden="true">#</a> my.cnf</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token comment"># 默认字符集</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
port       <span class="token operator">=</span> <span class="token number">3306</span>
socket     <span class="token operator">=</span> /tmp/mysql.sock
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
port       <span class="token operator">=</span> <span class="token number">3306</span>
user       <span class="token operator">=</span> mysql
socket     <span class="token operator">=</span> /tmp/mysql.sock
<span class="token comment"># 安装目录</span>
basedir    <span class="token operator">=</span> /export/server/mysql-8.0.33
<span class="token comment"># 数据存放目录</span>
datadir    <span class="token operator">=</span> /export/data/mysql-8.0.33/mysql
<span class="token comment"># log-bin 前缀名称 默认为 binlog，改成mysql-bin</span>
log-bin    <span class="token operator">=</span> mysql-bin
<span class="token comment">#innodb_data_home_dir      =/export/data/mysql-8.0.33/mysql</span>
<span class="token comment">#innodb_log_group_home_dir =/export/data/mysql-8.0.33/mysql</span>

<span class="token comment"># 主从复制的格式（mixed,statement,row，默认格式是statement。建议是设置为row，主从复制时数据更加能够统一）</span>
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>row
binlog_expire_logs_seconds <span class="token operator">=</span><span class="token number">864000</span>

<span class="token comment"># 服务器唯一id，默认为1，值范围为1～2^32−1. ；主数据库和从数据库的server-id不能重复</span>
server-id<span class="token operator">=</span><span class="token number">1</span>  
<span class="token comment"># 配置二进制日志自动删除/过期时间，单位秒，默认值为2592000，即30天；8.0.3版本之前使用expire_logs_days，单位天数，默认值为0，表示不自动删除。</span>
<span class="token assign-left variable">binlog_expire_logs_seconds</span><span class="token operator">=</span><span class="token number">2592000</span>
<span class="token comment"># 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断，默认OFF关闭，可选值有OFF、all、ddl_exist_errors以及错误码列表。8.0.26版本之前使用slave_skip_errors</span>
<span class="token comment"># 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致</span>
<span class="token assign-left variable">replica_skip_errors</span><span class="token operator">=</span><span class="token number">1062</span>


<span class="token comment"># 日志及进程数据的存放目录</span>
log-error <span class="token operator">=</span> /export/data/mysql-8.0.33/mysql/mysql.log
pid-file  <span class="token operator">=</span> /export/data/mysql-8.0.33/mysql/mysql.pid
<span class="token comment"># 服务端字符集</span>
character-set-server<span class="token operator">=</span>utf8mb4
<span class="token comment">#  默认在lower_case_table_names=0的情况下，表名是严格区分大小写的</span>
<span class="token assign-left variable">lower_case_table_names</span><span class="token operator">=</span><span class="token number">1</span>
autocommit <span class="token operator">=</span><span class="token number">1</span>
 
max_connections <span class="token operator">=</span> <span class="token number">1000</span>
max_connect_errors <span class="token operator">=</span> <span class="token number">1000</span>
open_files_limit <span class="token operator">=</span> <span class="token number">65535</span>

<span class="token comment"># 创建表时使用的默认存储引擎</span>
default_storage_engine <span class="token operator">=</span> InnoDB
innodb_data_file_path <span class="token operator">=</span> ibdata1:10M:autoextend
innodb_buffer_pool_size <span class="token operator">=</span> 1024M
innodb_log_file_size <span class="token operator">=</span> 256M
innodb_log_buffer_size <span class="token operator">=</span> 8M
innodb_flush_log_at_trx_commit <span class="token operator">=</span> <span class="token number">1</span>
innodb_lock_wait_timeout <span class="token operator">=</span> <span class="token number">50</span>
transaction-isolation<span class="token operator">=</span>READ-COMMITTED
<span class="token punctuation">[</span>mysqldump<span class="token punctuation">]</span>
quick
max_allowed_packet <span class="token operator">=</span> 16M
<span class="token punctuation">[</span>myisamchk<span class="token punctuation">]</span>
key_buffer_size <span class="token operator">=</span> 256M
sort_buffer_size <span class="token operator">=</span> 4M
read_buffer <span class="token operator">=</span> 2M
write_buffer <span class="token operator">=</span> 2M
<span class="token punctuation">[</span>mysqlhotcopy<span class="token punctuation">]</span>
interactive-timeout

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><p>初始化命令：注意文件夹名称。</p><pre><code>--defaults-file：指定配置文件（要放在--initialize 前面）
--user： 指定用户
--basedir：指定安装目录
--datadir：指定初始化数据目录
--intialize-insecure：初始化无密码（否则生成随机密码）
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqld --defaults-file<span class="token operator">=</span>/export/server/mysql-8.0.33/my.cnf <span class="token parameter variable">--basedir</span><span class="token operator">=</span>/export/server/mysql-8.0.33 <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/export/data/mysql-8.0.33/mysql <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql --initialize-insecure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 完整命令</span>
mysqld_safe --defaults-file<span class="token operator">=</span>/export/server/mysql-8.0.33/my.cnf <span class="token operator">&amp;</span>
<span class="token comment"># 若添加了PATH变量，可省略如下</span>
mysqld_safe --defaults-file<span class="token operator">=</span>/export/server/mysql-8.0.33/my.cnf <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h2><p>无密码：若以 <code>--initialize-insecure</code> 初始化，首次登录时跳过密码。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root --skip-password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有密码：若初始化时设置了随机密码，在 <code>/data/mysql8_data/mysql/mysql.log </code>查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码" aria-hidden="true">#</a> 修改密码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 修改密码</span>
ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 刷新权限</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="退出关闭服务" tabindex="-1"><a class="header-anchor" href="#退出关闭服务" aria-hidden="true">#</a> 退出关闭服务</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 退出 MySQL（命令行）：</span>
quit<span class="token punctuation">;</span>
<span class="token builtin class-name">exit</span><span class="token punctuation">;</span>
<span class="token comment"># 关闭 MySQL 服务</span>
 todo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service-启动和关闭mysql" tabindex="-1"><a class="header-anchor" href="#service-启动和关闭mysql" aria-hidden="true">#</a> service 启动和关闭mysql</h2><p>修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">vim</span> /export/server/mysql-8.0.33/support-files/mysql.server

修改 
<span class="token assign-left variable">basedir</span><span class="token operator">=</span>/export/server/mysql-8.0.33
<span class="token comment"># 数据存放目录</span>
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/export/data/mysql-8.0.33/mysql

保存

<span class="token function">cp</span>  /export/server/mysql-8.0.33/support-files/mysql.server /etc/init.d/mysqld
<span class="token function">chmod</span> +x /etc/init.d/mysqld

<span class="token function">service</span> mysqld start
<span class="token function">service</span> mysqld stop

<span class="token function">service</span> mysqld restart

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建远程连接用户" tabindex="-1"><a class="header-anchor" href="#创建远程连接用户" aria-hidden="true">#</a> 创建远程连接用户</h2><p>选择 mysql 数据库，查看当前用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>USE mysql<span class="token punctuation">;</span>

SELECT user,host,plugin,authentication_string FROM user<span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> SELECT user,host,plugin,authentication_string FROM user<span class="token punctuation">;</span>
+------------------+-----------+-----------------------+------------------------------------------------------------------------+
<span class="token operator">|</span> user             <span class="token operator">|</span> <span class="token function">host</span>      <span class="token operator">|</span> plugin                <span class="token operator">|</span> authentication_string                                                  <span class="token operator">|</span>
+------------------+-----------+-----------------------+------------------------------------------------------------------------+
<span class="token operator">|</span> mysql.infoschema <span class="token operator">|</span> localhost <span class="token operator">|</span> caching_sha2_password <span class="token operator">|</span> <span class="token variable">$A</span><span class="token variable">$005</span><span class="token variable">$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED</span> <span class="token operator">|</span>
<span class="token operator">|</span> mysql.session    <span class="token operator">|</span> localhost <span class="token operator">|</span> caching_sha2_password <span class="token operator">|</span> <span class="token variable">$A</span><span class="token variable">$005</span><span class="token variable">$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED</span> <span class="token operator">|</span>
<span class="token operator">|</span> mysql.sys        <span class="token operator">|</span> localhost <span class="token operator">|</span> caching_sha2_password <span class="token operator">|</span> <span class="token variable">$A</span><span class="token variable">$005</span><span class="token variable">$THISISACOMBINATIONOFINVALIDSALTANDPASSWORDTHATMUSTNEVERBRBEUSED</span> <span class="token operator">|</span>
<span class="token operator">|</span> root             <span class="token operator">|</span> localhost <span class="token operator">|</span> mysql_native_password <span class="token operator">|</span> *81F5E21E35407D884A6CD4A731AEBFB6AF209E1B                              <span class="token operator">|</span>
+------------------+-----------+-----------------------+------------------------------------------------------------------------+

<span class="token comment"># host 字段 表示可访问当前数据库的主机，目前仅本地可访问。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建用户，任意远程访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建用户</span>
<span class="token comment">#也可以用下列方法直接改</span>
 ALTER <span class="token environment constant">USER</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password<span class="token punctuation">;</span>
<span class="token comment">#刷新一下生效</span>
 FLUSH PRIVILEGES<span class="token punctuation">;</span>
<span class="token comment">#或者在授权的时候就指定好</span>
CREATE <span class="token environment constant">USER</span>  <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 授权用户所有权限，刷新权限</span>
GRANT ALL PRIVILEGES ON *.* TO <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>

<span class="token comment"># root 如果 GRANT 失败</span>

update user <span class="token builtin class-name">set</span> <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token string">&#39;%&#39;</span> where <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
修改即可远程登录

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql-集群安装" tabindex="-1"><a class="header-anchor" href="#mysql-集群安装" aria-hidden="true">#</a> mysql 集群安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">pwd</span>

/export/server

<span class="token function">scp</span> <span class="token parameter variable">-r</span> mysql-8.0.33 root@w1:<span class="token environment constant">$PWD</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/profile.d/my_env.sh root@w1:/etc/profile.d/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在主库上新建-主从同步账号" tabindex="-1"><a class="header-anchor" href="#在主库上新建-主从同步账号" aria-hidden="true">#</a> 在主库上新建 主从同步账号</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建用户</span>
CREATE <span class="token environment constant">USER</span> <span class="token string">&#39;copy&#39;</span>@<span class="token string">&#39;%&#39;</span> IDENTIFIED WITH mysql_native_password BY <span class="token string">&#39;copy&#39;</span><span class="token punctuation">;</span>
GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO <span class="token string">&#39;copy&#39;</span>@<span class="token string">&#39;%&#39;</span><span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从数据库配置" tabindex="-1"><a class="header-anchor" href="#从数据库配置" aria-hidden="true">#</a> 从数据库配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mysql<span class="token punctuation">]</span>
<span class="token comment"># 默认字符集</span>
default-character-set<span class="token operator">=</span>utf8mb4
<span class="token punctuation">[</span>client<span class="token punctuation">]</span>
port       <span class="token operator">=</span> <span class="token number">3308</span>
socket     <span class="token operator">=</span> /tmp/mysql.sock
<span class="token comment">###主从数据库配置核心部分</span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
port       <span class="token operator">=</span> <span class="token number">3308</span>
user       <span class="token operator">=</span> mysql
socket     <span class="token operator">=</span> /tmp/mysql.sock
<span class="token comment"># 安装目录</span>
basedir    <span class="token operator">=</span> /export/server/mysql-8.0.33
<span class="token comment"># 数据存放目录</span>
datadir    <span class="token operator">=</span> /export/data/mysql-8.0.33/mysql

<span class="token comment"># 设置同步的binary log二进制日志文件名前缀，默认是binlog</span>
log-bin <span class="token operator">=</span> mysql-bin
<span class="token comment"># 服务器唯一id，默认为1，值范围为1～2^32−1. ；主数据库和从数据库的server-id不能重复</span>
server-id <span class="token operator">=</span> <span class="token number">2</span>

<span class="token comment">###可选配置</span>
<span class="token comment"># 需要主从复制的数据库 ，如多个则重复配置</span>
replicate-do-db<span class="token operator">=</span>master_slave_test
<span class="token comment"># 复制过滤：也就是指定哪个数据库不用同步（mysql库一般不同步） ，如多个则重复配置</span>
binlog-ignore-db<span class="token operator">=</span>mysql
<span class="token comment"># 为每个session分配的内存，在事务过程中用来存储二进制日志的缓存 </span>
<span class="token assign-left variable">binlog_cache_size</span><span class="token operator">=</span>1M
<span class="token comment"># 主从复制的格式（mixed,statement,row，默认格式是statement。建议是设置为row，主从复制时数据更加能够统一） </span>
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>row
<span class="token comment"># 配置二进制日志自动删除/过期时间，单位秒，默认值为2592000，即30天；8.0.3版本之前使用expire_logs_days，单位天数，默认值为0，表示不自动删除。</span>
<span class="token assign-left variable">binlog_expire_logs_seconds</span><span class="token operator">=</span><span class="token number">2592000</span>
<span class="token comment"># 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断，默认OFF关闭，可选值有OFF、all、ddl_exist_errors以及错误码列表。8.0.26版本之前使用slave_skip_errors</span>
<span class="token comment"># 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致</span>
<span class="token assign-left variable">replica_skip_errors</span><span class="token operator">=</span><span class="token number">1062</span>
<span class="token comment"># relay_log配置中继日志，默认采用 主机名-relay-bin 的方式保存日志文件 </span>
<span class="token assign-left variable">relay_log</span><span class="token operator">=</span>replicas-mysql-relay-bin  
<span class="token comment"># log_replica_updates表示slave是否将复制事件写进自己的二进制日志，默认值ON开启；8.0.26版本之前使用log_slave_updates</span>
<span class="token assign-left variable">log_replica_updates</span><span class="token operator">=</span>ON
<span class="token comment"># 防止改变数据(只读操作，除了特殊的线程)</span>
<span class="token assign-left variable">read_only</span><span class="token operator">=</span>ON

<span class="token comment"># 日志及进程数据的存放目录</span>
log-error <span class="token operator">=</span> /export/data/mysql-8.0.33/mysql/mysql.log
pid-file  <span class="token operator">=</span> /export/data/mysql-8.0.33/mysql/mysql.pid
<span class="token comment"># 服务端字符集</span>
character-set-server<span class="token operator">=</span>utf8mb4
<span class="token comment">#  默认在lower_case_table_names=0的情况下，表名是严格区分大小写的</span>
<span class="token assign-left variable">lower_case_table_names</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token punctuation">[</span>mysqldump<span class="token punctuation">]</span>
quick
max_allowed_packet <span class="token operator">=</span> 16M

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建用户组、用户-1" tabindex="-1"><a class="header-anchor" href="#创建用户组、用户-1" aria-hidden="true">#</a> 创建用户组、用户</h3><p>mysql 启动时默认使用 mysql 用户</p><p>建用户组：groupadd</p><p>创建用户：useradd（-r 创建系统用户，-g 指定用户组）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> mysql
<span class="token function">useradd</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> mysql mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建数据目录-1" tabindex="-1"><a class="header-anchor" href="#创建数据目录-1" aria-hidden="true">#</a> 创建数据目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /export/data/mysql-8.0.33/mysql

<span class="token comment"># 更改属主和数组</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> mysql:mysql /export/data/mysql-8.0.33

<span class="token comment"># 更改模式</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /export/data/mysql-8.0.33
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化-1" tabindex="-1"><a class="header-anchor" href="#初始化-1" aria-hidden="true">#</a> 初始化</h3><p>初始化命令：注意文件夹名称。</p><pre><code>--defaults-file：指定配置文件（要放在--initialize 前面）
--user： 指定用户
--basedir：指定安装目录
--datadir：指定初始化数据目录
--intialize-insecure：初始化无密码（否则生成随机密码）
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqld --defaults-file<span class="token operator">=</span>/export/server/mysql-8.0.33/my.cnf <span class="token parameter variable">--basedir</span><span class="token operator">=</span>/export/server/mysql-8.0.33 <span class="token parameter variable">--datadir</span><span class="token operator">=</span>/export/data/mysql-8.0.33/mysql <span class="token parameter variable">--user</span><span class="token operator">=</span>mysql --initialize-insecure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动服务-1" tabindex="-1"><a class="header-anchor" href="#启动服务-1" aria-hidden="true">#</a> 启动服务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 完整命令</span>
mysqld_safe --defaults-file<span class="token operator">=</span>/export/server/mysql-8.0.33/my.cnf <span class="token operator">&amp;</span>
<span class="token comment"># 若添加了PATH变量，可省略如下</span>
mysqld_safe --defaults-file<span class="token operator">=</span>/export/server/mysql-8.0.33/my.cnf <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更改主从关系" tabindex="-1"><a class="header-anchor" href="#更改主从关系" aria-hidden="true">#</a> 更改主从关系</h3><p>在主库上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>SHOW MASTER STATUS<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在从库上执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CHANGE REPLICATION SOURCE TO <span class="token assign-left variable">SOURCE_HOST</span><span class="token operator">=</span><span class="token string">&#39;m&#39;</span>,SOURCE_PORT<span class="token operator">=</span><span class="token number">3308</span>,SOURCE_USER<span class="token operator">=</span><span class="token string">&#39;copy&#39;</span>,SOURCE_PASSWORD<span class="token operator">=</span><span class="token string">&#39;copy&#39;</span>,SOURCE_LOG_FILE<span class="token operator">=</span><span class="token string">&#39;mysql-bin.000004&#39;</span>,SOURCE_LOG_POS<span class="token operator">=</span><span class="token number">1223</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="验证-copy-能否登录上-主库" tabindex="-1"><a class="header-anchor" href="#验证-copy-能否登录上-主库" aria-hidden="true">#</a> 验证 copy 能否登录上 主库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysql <span class="token parameter variable">-ucopy</span> <span class="token parameter variable">-pcopy</span> <span class="token parameter variable">-hm</span> <span class="token parameter variable">-P3308</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="启动-slave" tabindex="-1"><a class="header-anchor" href="#启动-slave" aria-hidden="true">#</a> 启动 slave</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>stop slave<span class="token punctuation">;</span>
reset slave<span class="token punctuation">;</span>
start slave<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查是否启动正常" tabindex="-1"><a class="header-anchor" href="#检查是否启动正常" aria-hidden="true">#</a> 检查是否启动正常</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 查询Slave状态</span>
show slave status<span class="token punctuation">\\</span>G

 Slave_IO_Running: Yes
 Slave_SQL_Running: Yes

 Last_SQL_Errno: <span class="token number">0</span>
 Last_SQL_Error: <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询错误详情" tabindex="-1"><a class="header-anchor" href="#查询错误详情" aria-hidden="true">#</a> 查询错误详情</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">select</span> * from performance_schema.replication_applier_status_by_worker<span class="token punctuation">\\</span>G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><p>主从同步时，要保证主从中库一样，因为主从复制，不会在从库上创建数据库； 如果主中有数据，则在同步之前要把数据导入从库</p><h3 id="rpm-安装方式" tabindex="-1"><a class="header-anchor" href="#rpm-安装方式" aria-hidden="true">#</a> rpm 安装方式</h3><p>下载安装包</p><p>https://repo.mysql.com//mysql80-community-release-el7-7.noarch.rpm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
yum localinstall mysql80-community-release-el7-7.noarch.rpm
yum clean all
yum makecache
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> mysql-community-server
systemctl start mysqld
systemctl status mysqld
systemctl <span class="token builtin class-name">enable</span> mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认安装 的配置文件在</p><p>/etc/my.cnf</p><h2 id="修改-my-cnf" tabindex="-1"><a class="header-anchor" href="#修改-my-cnf" aria-hidden="true">#</a> 修改 my.cnf</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,106);function b(k,h){const n=o("ExternalLinkIcon");return l(),r("div",null,[s("div",c,[d,s("p",null,[s("a",m,[a("centos7安装mysql8"),e(n)]),s("a",v,[a("https://www.cnblogs.com/greyzeng/p/16756049.html"),e(n)])])]),u])}const y=i(p,[["render",b],["__file","mysql.html.vue"]]);export{y as default};
