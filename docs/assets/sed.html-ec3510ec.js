import{_ as n,X as s,Y as e,a2 as a}from"./framework-b6ea3384.js";const i={},l=a(`<div class="hint-container info"><p class="hint-container-title">sed</p><p>Linux sed 命令是利用脚本来处理文本文件。<br> sed 可依照脚本的指令来处理、编辑文本文件。<br> sed 主要用来自动编辑一个或多个文件、简化对文件的反复操作、编写转换程序等。<br></p></div><h2 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>指定行号查找

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;2p&#39; test.txt </span>
篮球

最后一行
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;$p&#39; test.txt </span>
篮球

指定行号范围查找
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;1,2p&#39; test.txt </span>
hello world
篮球

指定行号范围查找 <span class="token number">2</span> 到最后一行
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;2,$p&#39; test.txt </span>
hello world
篮球

正则查找
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/篮/p&#39; test.txt </span>
篮球
查找含有3的行  <span class="token parameter variable">-r</span> 是对正则扩展的支持
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sed -nr &#39;/[3]/p&#39; test.txt</span>
<span class="token number">10</span>:30 运动
<span class="token number">13</span>:00 code


时间范围查找
注意： 如果结尾没有匹配到，会查询到最后一行

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat test.txt </span>
hello world
<span class="token number">10</span>:00 篮球
<span class="token number">10</span>:30 运动
<span class="token number">11</span>:00 吃饭
<span class="token number">12</span>:00 睡觉
<span class="token number">13</span>:00 code
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sed -n &#39;/10:00/,/11:00/p&#39; test.txt </span>
<span class="token number">10</span>:00 篮球
<span class="token number">10</span>:30 运动
<span class="token number">11</span>:00 吃饭

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> 删除第一行
<span class="token function">sed</span> <span class="token string">&#39;1d&#39;</span> test.txt


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="的妙用-一般是取反" tabindex="-1"><a class="header-anchor" href="#的妙用-一般是取反" aria-hidden="true">#</a> ! 的妙用 ，！ 一般是取反</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
遇到 空行或者<span class="token comment"># 不显示</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sed -nr &#39;/^$|#/!p&#39; /etc/ssh/sshd_config </span>
HostKey /etc/ssh/ssh_host_rsa_key
HostKey /etc/ssh/ssh_host_ecdsa_key
HostKey /etc/ssh/ssh_host_ed25519_key
SyslogFacility AUTHPRIV
AuthorizedKeysFile      .ssh/authorized_keys
PasswordAuthentication <span class="token function">yes</span>
ChallengeResponseAuthentication no
GSSAPIAuthentication <span class="token function">yes</span>
GSSAPICleanupCredentials no
UsePAM <span class="token function">yes</span>
X11Forwarding <span class="token function">yes</span>
UseDNS no
AcceptEnv <span class="token environment constant">LANG</span> LC_CTYPE <span class="token environment constant">LC_NUMERIC</span> <span class="token environment constant">LC_TIME</span> LC_COLLATE <span class="token environment constant">LC_MONETARY</span> LC_MESSAGES
AcceptEnv <span class="token environment constant">LC_PAPER</span> <span class="token environment constant">LC_NAME</span> <span class="token environment constant">LC_ADDRESS</span> <span class="token environment constant">LC_TELEPHONE</span> <span class="token environment constant">LC_MEASUREMENT</span>
AcceptEnv <span class="token environment constant">LC_IDENTIFICATION</span> <span class="token environment constant">LC_ALL</span> <span class="token environment constant">LANGUAGE</span>
AcceptEnv <span class="token environment constant">XMODIFIERS</span>
Subsystem       <span class="token function">sftp</span>    /usr/libexec/openssh/sftp-server


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增加" tabindex="-1"><a class="header-anchor" href="#增加" aria-hidden="true">#</a> 增加</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-cai</span>

<span class="token parameter variable">-c</span> replace 替代指定行的内容
<span class="token parameter variable">-a</span> append 向指定行追加内容（行后面）
<span class="token parameter variable">-i</span> insert 向指定行插入内容（行前面）


在第三行的前面添加内容
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sed &#39;3a lyy 996 lyy996&#39; test.txt</span>
hello world
<span class="token number">10</span>:00 篮球
<span class="token number">10</span>:30 运动
lyy <span class="token number">996</span> lyy996
<span class="token number">11</span>:00 吃饭
<span class="token number">12</span>:00 睡觉
<span class="token number">13</span>:00 code


向文件内添加多行内容
方法1：
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> test.txt <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;EOF&#39;
996 99d lojzes996
hello world 
coding
EOF</span>

方法2:
<span class="token function">sed</span> <span class="token string">&#39;$a 996 99d lojzes996\\nhello world\\ncoding&#39;</span> test.txt


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>s  substitute 替换
g global 全局替换，sed 默认替换每一行匹配的第一个内容，global 会替换匹配行的所有内容

语法

把每一行的0到9的数字替换为空
<span class="token function">sed</span> <span class="token string">&#39;s#[0-9]##g&#39;</span> test.txt


把每一行的0到9的数字替换为X
<span class="token function">sed</span> <span class="token string">&#39;s#[0-9]#X#g&#39;</span> test.txt

 
 把123456 改成 <span class="token operator">&lt;</span><span class="token number">12345</span><span class="token operator"><span class="token file-descriptor important">6</span>&gt;</span>

 正则： 先保护，后使用
 // .* 匹配所有  （.*）把.* 匹配的内容包含起来，后面通过<span class="token punctuation">\\</span><span class="token number">1</span> 使用
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo 123456 | sed -r &#39;s#(.*)#&lt;\\1&gt;#g&#39;</span>
<span class="token operator">&lt;</span><span class="token number">12345</span><span class="token operator"><span class="token file-descriptor important">6</span>&gt;</span>

// 字符颠倒
// .* 是匹配所有
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo hello_world | sed -r &#39;s#(^.*)_(.*$)#\\2_\\1#g&#39;</span>
world_hello


查找eth0中的ip

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># ip a s eth0 | sed -n &#39;3p&#39; | sed -r &#39;s#^.*t (.*)/.*$#\\1#g&#39;</span>
<span class="token number">10.0</span>.2.15

合并
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># ip a s eth0 | sed -nr &#39;3s#^.*t (.*)/.*$#\\1#gp&#39;</span>
<span class="token number">10.0</span>.2.15


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[l];function d(c,r){return s(),e("div",null,t)}const v=n(i,[["render",d],["__file","sed.html.vue"]]);export{v as default};
