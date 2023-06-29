import{_ as e,X as i,Y as l,Z as n,a1 as c,$ as t,a2 as s,C as p}from"./framework-b6ea3384.js";const d={},r=s(`<h2 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h2><h3 id="yum-autoremove" tabindex="-1"><a class="header-anchor" href="#yum-autoremove" aria-hidden="true">#</a> yum autoremove</h3><p>对于大部分使用红帽系（RedHat）Linux系统的用户而言，我们习惯使用<code>yum</code>命令安装或卸载软件包。当我们使用<code>yum install</code>命令安装一枚软件包时，<code>yum</code>会将该软件包连同其所有依赖包一并安装到本机。但当我们使用<code>yum remove</code>命令卸载一枚已安装软件包时，<code>yum</code>默认只会移除你所指定的那枚软件包，并不会移除该包的相关依赖包。</p><p>自从<em>Fedora 18</em>之后，我们便可以使用<code>yum autoremove pakage</code>命令来干净卸载软件包了。</p><h3 id="yum-clean-all" tabindex="-1"><a class="header-anchor" href="#yum-clean-all" aria-hidden="true">#</a> yum clean all</h3><p>/var/cache/yum目录。 使用yum clean all 清除，很方便，绕开了没有root权限的问题。 该命令介绍如下，作用：清除YUM缓存。</p><p>yum 会把下载的软件包和header存储在cache中，而不自动删除。如果觉得占用磁盘空间，可以使用yum clean指令进行清除，更精确 的用法是yum clean headers清除header，yum clean packages清除下载的rpm包，yum clean all一全部清除</p><h2 id="env-环境变量" tabindex="-1"><a class="header-anchor" href="#env-环境变量" aria-hidden="true">#</a> env 环境变量</h2><p>查看环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置环境变量(临时)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h2><p>Linux系统上对文件的权限有着严格的控制，如果想对某个文件执行某种操作，必须具有对应的权限方可执行成功。 Linux下文件的权限类型一般包括读，写，执行。对应字母为 r、w、x。 Linux下权限的粒度有 拥有者 、群组 、其它组 三种。每个文件都可以针对三个粒度，设置不同的rwx(读写执行)权限。通常情况下，一个文件只能归属于一个用户和组， 如果其它的用户想有这个文件的权限，则可以将该用户加入具备权限的群组，一个用户可以同时归属于多个组。</p><h3 id="更改文件权限-chmod命令" tabindex="-1"><a class="header-anchor" href="#更改文件权限-chmod命令" aria-hidden="true">#</a> 更改文件权限 （chmod命令）</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>参数说明：
 
<span class="token punctuation">[</span>可选项<span class="token punctuation">]</span>
  -c, <span class="token parameter variable">--changes</span>          like verbose but report only when a change is made <span class="token punctuation">(</span>若该档案权限确实已经更改，才显示其更改动作<span class="token punctuation">)</span>
  -f, --silent, <span class="token parameter variable">--quiet</span>  suppress <span class="token function">most</span> error messages  （若该档案权限无法被更改也不要显示错误讯息）
  -v, <span class="token parameter variable">--verbose</span>          output a diagnostic <span class="token keyword">for</span> every <span class="token function">file</span> processed（显示权限变更的详细资料）
       --no-preserve-root  <span class="token keyword">do</span> not treat <span class="token string">&#39;/&#39;</span> specially <span class="token punctuation">(</span>the default<span class="token punctuation">)</span>
       --preserve-root    fail to operate recursively on <span class="token string">&#39;/&#39;</span>
       <span class="token parameter variable">--reference</span><span class="token operator">=</span>RFILE  use RFILE&#39;s mode instead of MODE values
  -R, <span class="token parameter variable">--recursive</span>        change files and directories recursively （以递归的方式对目前目录下的所有档案与子目录进行相同的权限变更<span class="token punctuation">)</span>
       <span class="token parameter variable">--help</span>		显示此帮助信息
       <span class="token parameter variable">--version</span>		显示版本信息
<span class="token punctuation">[</span>mode<span class="token punctuation">]</span> 
    权限设定字串，详细格式如下 ：
    <span class="token punctuation">[</span>ugoa<span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">[</span>+-<span class="token operator">=</span><span class="token punctuation">]</span><span class="token punctuation">[</span>rwxX<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span><span class="token punctuation">[</span>,<span class="token punctuation">..</span>.<span class="token punctuation">]</span>，
    其中
    <span class="token punctuation">[</span>ugoa<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
    u 表示该档案的拥有者，g 表示与该档案的拥有者属于同一个群体<span class="token punctuation">(</span>group<span class="token punctuation">)</span>者，o 表示其他以外的人，a 表示所有（包含上面三者）。
    <span class="token punctuation">[</span>+-<span class="token operator">=</span><span class="token punctuation">]</span>
    + 表示增加权限，- 表示取消权限，<span class="token operator">=</span> 表示唯一设定权限。
    <span class="token punctuation">[</span>rwxX<span class="token punctuation">]</span>
    r 表示可读取，w 表示可写入，x 表示可执行，X 表示只有当该档案是个子目录或者该档案已经被设定过为可执行。
 	
<span class="token punctuation">[</span>file<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
    文件列表（单个或者多个文件、文件夹）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例： 设置所有用户可读取文件 a.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> ugo+r a.conf 
或 
<span class="token function">chmod</span> a+r  a.conf

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置 c.sh 只有 拥有者可以读写及执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> u+rwx c.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置文件 a.conf 与 b.xml 权限为拥有者与其所属同一个群组 可读写，其它组可读不可写</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> a+r,ug+w,o-w a.conf b.xml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置当前目录下的所有档案与子目录皆设为任何人可读写</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token parameter variable">-R</span> a+rw *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数字权限使用格式" tabindex="-1"><a class="header-anchor" href="#数字权限使用格式" aria-hidden="true">#</a> 数字权限使用格式</h2><p>在这种使用方式中，首先我们需要了解数字如何表示权限。 首先，我们规定 数字 4 、2 和 1表示读、写、执行权限（具体原因可见下节权限详解内容），即 r=4，w=2，x=1 。此时其他的权限组合也可以用其他的八进制数字表示出来，</p><pre><code>rwx = 4 + 2 + 1 = 7

rw = 4 + 2 = 6

rx = 4 +1 = 5
</code></pre><p>即</p><p>若要同时设置 rwx (可读写运行） 权限则将该权限位 设置 为 4 + 2 + 1 = 7</p><p>若要同时设置 rw- （可读写不可运行）权限则将该权限位 设置 为 4 + 2 = 6</p><p>若要同时设置 r-x （可读可运行不可写）权限则将该权限位 设置 为 4 +1 = 5</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">chmod</span> <span class="token operator">&lt;</span>abc<span class="token operator">&gt;</span> file<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 a,b,c各为一个数字，分别代表User、Group、及Other的权限。 相当于简化版的 chmod u=权限,g=权限,o=权限 file... 而此处的权限将用8进制的数字来表示User、Group、及Other的读、写、执行权限</p><p>示例：设置所有人可以读写及执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">777</span> <span class="token function">file</span>  <span class="token punctuation">(</span>等价于  <span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rwx,g<span class="token operator">=</span>rwx,o<span class="token operator">=</span>rwx <span class="token function">file</span> 或  <span class="token function">chmod</span> <span class="token assign-left variable">a</span><span class="token operator">=</span>rwx <span class="token function">file</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置拥有者可读写，其他人不可读写执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token number">600</span> <span class="token function">file</span> <span class="token punctuation">(</span>等价于  <span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rw,g<span class="token operator">=</span>---,o<span class="token operator">=</span>--- <span class="token function">file</span> 或 <span class="token function">chmod</span> <span class="token assign-left variable">u</span><span class="token operator">=</span>rw,go-rwx <span class="token function">file</span> <span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更改文件拥有者-chown命令" tabindex="-1"><a class="header-anchor" href="#更改文件拥有者-chown命令" aria-hidden="true">#</a> 更改文件拥有者（chown命令）</h2><p>linux/Unix 是多人多工作业系统，每个的文件都有拥有者（所有者），如果我们想变更文件的拥有者（利用 chown 将文件拥有者加以改变），一般只有系统管理员(root)拥有此操作权限，而普通用户则没有权限将自己或者别人的文件的拥有者设置为别人。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> <span class="token punctuation">[</span>可选项<span class="token punctuation">]</span> user<span class="token punctuation">[</span>:group<span class="token punctuation">]</span> file<span class="token punctuation">..</span>.


使用权限：root
 
说明：
<span class="token punctuation">[</span>可选项<span class="token punctuation">]</span> <span class="token builtin class-name">:</span> 同上文chmod
user <span class="token builtin class-name">:</span> 新的文件拥有者的使用者 
group <span class="token builtin class-name">:</span> 新的文件拥有者的使用者群体<span class="token punctuation">(</span>group<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：设置文件 d.key、e.scrt的拥有者设为 users 群体的 tom</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> tom:users <span class="token function">file</span> d.key e.scrt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置当前目录下与子目录下的所有文件的拥有者为 users 群体的 James</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chown</span> <span class="token parameter variable">-R</span> James:users  *

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="echo" tabindex="-1"><a class="header-anchor" href="#echo" aria-hidden="true">#</a> echo</h2><p>输出内容到文件</p><h3 id="覆盖方式" tabindex="-1"><a class="header-anchor" href="#覆盖方式" aria-hidden="true">#</a> 覆盖方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&gt;</span> <span class="token number">1</span>.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>追加方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="eof" tabindex="-1"><a class="header-anchor" href="#eof" aria-hidden="true">#</a> EOF</h2><p>EOF是END Of File的缩写,表示自定义终止符.既然自定义,那么EOF就不是固定的,可以随意设置别名,在linux按ctrl-d就代表EOF. EOF一般会配合cat能够多行文本输出.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 输入多行</span>
<span class="token comment">## 覆盖方式</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> EOF <span class="token operator">&gt;</span> test.sh
<span class="token operator">&gt;</span> hello
<span class="token operator">&gt;</span> world
<span class="token operator">&gt;</span> EOF

<span class="token comment">## 追加方式</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> EOF <span class="token operator">&gt;&gt;</span> test.sh
<span class="token operator">&gt;</span> hello
<span class="token operator">&gt;</span> world
<span class="token operator">&gt;</span> EOF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线上查询、帮助文档" tabindex="-1"><a class="header-anchor" href="#线上查询、帮助文档" aria-hidden="true">#</a> 线上查询、帮助文档</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">man</span>
<span class="token builtin class-name">help</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件和目录" tabindex="-1"><a class="header-anchor" href="#文件和目录" aria-hidden="true">#</a> 文件和目录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># </span>
<span class="token function">ls</span> <span class="token builtin class-name">cd</span> <span class="token function">cp</span>

<span class="token function">find</span> 
<span class="token function">mkdir</span>
<span class="token function">mv</span> 
<span class="token builtin class-name">pwd</span>
<span class="token function">rename</span> 文件冲命名

<span class="token function">rm</span>
<span class="token function">rmdir</span> 删除空目录

<span class="token function">touch</span> 创建空文件

tree 以树形方式列出文件夹下的内容
需要安装：

yum <span class="token parameter variable">-y</span> <span class="token function">install</span> tree 


<span class="token function">file</span> 查看文件类型

<span class="token punctuation">[</span>root@w1 /<span class="token punctuation">]</span><span class="token comment"># file bin</span>
bin: symbolic <span class="token function">link</span> to \`usr/bin&#39;
<span class="token punctuation">[</span>root@w1 /<span class="token punctuation">]</span><span class="token comment"># file boot</span>
boot: directory

 
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看文件及内容处理" tabindex="-1"><a class="header-anchor" href="#查看文件及内容处理" aria-hidden="true">#</a> 查看文件及内容处理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span>  链接多个文件 输出到文件
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat 1.txt 2.txt  &gt; 3.txt</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat 3.txt</span>
<span class="token number">123</span>
<span class="token punctuation">{</span>name:lojzes,
age:20<span class="token punctuation">}</span>

<span class="token function">tac</span> 是cat 的反向操作
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># tac 1.txt 2.txt </span>
<span class="token number">123</span>
age:20<span class="token punctuation">}</span>
<span class="token punctuation">{</span>name:lojzes,

<span class="token function">more</span> 分页显示
<span class="token function">less</span> 分页显示 与more 相反

<span class="token function">head</span> 显示文件的头部
<span class="token function">tail</span> 显示文件的尾部

<span class="token function">sort</span> 对文件内容排序

默认排序：sort 命令将以默认的方式将文本文件的第一列以 ASCII 码的次序排列，并将结果输出到标准输出。 
<span class="token function">sort</span> testfile   

使用 <span class="token parameter variable">-k</span> 参数设置对第二列的值进行重排，结果如下：

$ <span class="token function">sort</span> testfile <span class="token parameter variable">-k</span> <span class="token number">2</span>
<span class="token builtin class-name">test</span> <span class="token number">30</span>  
Linux <span class="token number">85</span> 
Hello <span class="token number">95</span>  

<span class="token function">uniq</span> 去除重复行

$ <span class="token function">cat</span> testfile      <span class="token comment">#原有内容  </span>
<span class="token builtin class-name">test</span> <span class="token number">30</span>  
<span class="token builtin class-name">test</span> <span class="token number">30</span>  
<span class="token builtin class-name">test</span> <span class="token number">30</span>  
Hello <span class="token number">95</span>  
Hello <span class="token number">95</span>  
Hello <span class="token number">95</span>  
Hello <span class="token number">95</span>  
Linux <span class="token number">85</span>  
Linux <span class="token number">85</span> 

$ <span class="token function">uniq</span> testfile     <span class="token comment">#删除重复行后的内容  </span>
<span class="token builtin class-name">test</span> <span class="token number">30</span>  
Hello <span class="token number">95</span>  
Linux <span class="token number">85</span> 

检查文件并删除文件中重复出现的行，并在行首显示该行重复出现的次数。使用如下命令：

<span class="token function">uniq</span> <span class="token parameter variable">-c</span> testfile 

结果输出如下：

$ <span class="token function">uniq</span> <span class="token parameter variable">-c</span> testfile      <span class="token comment">#删除重复行后的内容  </span>
<span class="token number">3</span> <span class="token builtin class-name">test</span> <span class="token number">30</span>             <span class="token comment">#前面的数字的意义为该行共出现了3次  </span>
<span class="token number">4</span> Hello <span class="token number">95</span>            <span class="token comment">#前面的数字的意义为该行共出现了4次  </span>
<span class="token number">2</span> Linux <span class="token number">85</span>            <span class="token comment">#前面的数字的意义为该行共出现了2次 </span>

当重复的行并不相邻时，uniq 命令是不起作用的，即若文件内容为以下时，uniq 命令不起作用： 

这时我们就可以使用 sort：

$ <span class="token function">sort</span>  testfile1 <span class="token operator">|</span> <span class="token function">uniq</span>
Hello <span class="token number">95</span>  
Linux <span class="token number">85</span> 
<span class="token builtin class-name">test</span> <span class="token number">30</span>

统计各行在文件中出现的次数：

$ <span class="token function">sort</span> testfile1 <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-c</span>
   <span class="token number">3</span> Hello <span class="token number">95</span>  
   <span class="token number">3</span> Linux <span class="token number">85</span> 
   <span class="token number">3</span> <span class="token builtin class-name">test</span> <span class="token number">30</span>

在文件中找出重复的行：

$ <span class="token function">sort</span> testfile1 <span class="token operator">|</span> <span class="token function">uniq</span> <span class="token parameter variable">-d</span>
Hello <span class="token number">95</span>  
Linux <span class="token number">85</span> 
<span class="token builtin class-name">test</span> <span class="token number">30</span>  

<span class="token function">wc</span> 统计文件的行数、单词数或字节数

-c或--bytes或--chars 只显示Bytes数。
-l或--lines 显示行数。
-w或--words 只显示字数。

在默认的情况下，wc将计算指定文件的行数、字数，以及字节数。使用的命令为：

$ <span class="token function">cat</span> testfile  
Linux networks are becoming <span class="token function">more</span> and <span class="token function">more</span> common, but scurity is often an overlooked  
issue. Unfortunately, <span class="token keyword">in</span> today’s environment all networks are potential hacker targets,  
fro0m tp-secret military research networks to small home LANs.  
Linux Network Securty focuses on securing Linux <span class="token keyword">in</span> a networked environment, where the  
security of the entire network needs to be considered rather than just isolated machines.  
It uses a mix of theory and practicl techniques to teach administrators how to <span class="token function">install</span> and  
use security applications, as well as how the applcations work and why they are necesary. 

$ <span class="token function">wc</span> testfile           <span class="token comment"># testfile文件的统计信息  </span>
<span class="token number">3</span> <span class="token number">92</span> <span class="token number">598</span> testfile       <span class="token comment"># testfile文件的行数为3、单词数92、字节数598 </span>

<span class="token function">wc</span> testfile testfile_1 testfile_2   <span class="token comment">#统计三个文件的信息 </span>

输出结果如下：

$ <span class="token function">wc</span> testfile testfile_1 testfile_2  <span class="token comment">#统计三个文件的信息  </span>
<span class="token number">3</span> <span class="token number">92</span> <span class="token number">598</span> testfile                    <span class="token comment">#第一个文件行数为3、单词数92、字节数598  </span>
<span class="token number">9</span> <span class="token number">18</span> <span class="token number">78</span> testfile_1                   <span class="token comment">#第二个文件的行数为9、单词数18、字节数78  </span>
<span class="token number">3</span> <span class="token number">6</span> <span class="token number">32</span> testfile_2                    <span class="token comment">#第三个文件的行数为3、单词数6、字节数32  </span>
<span class="token number">15</span> <span class="token number">116</span> <span class="token number">708</span> 总用量                    <span class="token comment">#三个文件总共的行数为15、单词数116、字节数708 </span>

<span class="token function">diff</span> 比较内容差别
vimdiff vim方式比较

<span class="token function">rev</span> 反向输出文件内容

<span class="token function">grep</span> /egrep 过滤字符串

linux <span class="token function">tr</span> 命令用于转换或删除文件中的字符。

<span class="token function">tr</span> 指令从标准输入设备读取数据，经过字符串转译后，将结果输出到标准输出设备。

<span class="token function">cat</span> testfile <span class="token operator">|</span><span class="token function">tr</span> a-z A-Z 

  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件压缩解压" tabindex="-1"><a class="header-anchor" href="#文件压缩解压" aria-hidden="true">#</a> 文件压缩解压</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">tar</span> 压缩
uzip 解压
<span class="token function">gzip</span> gzip压缩工具
<span class="token function">zip</span> 压缩工具


<span class="token parameter variable">-c</span>  -c或--create 建立新的备份文件。
-t或--list 列出备份文件的内容。
<span class="token parameter variable">-z</span>  -z或--gzip或--ungzip 通过gzip指令处理备份文件。
<span class="token parameter variable">-v</span>  -v或--verbose 显示指令执行过程。
<span class="token parameter variable">-f</span>  -f<span class="token operator">&lt;</span>备份文件<span class="token operator">&gt;</span>或--file<span class="token operator">=</span><span class="token operator">&lt;</span>备份文件<span class="token operator">&gt;</span> 指定备份文件。
<span class="token parameter variable">-x</span> -x或--extract或--get 从备份文件中还原文件。


<span class="token comment"># touch a.c       </span>
<span class="token comment"># tar -czvf test.tar.gz a.c   //压缩 a.c文件为test.tar.gz</span>
a.c

列出压缩文件内容

<span class="token comment"># tar -tzvf test.tar.gz </span>
-rw-r--r-- root/root     <span class="token number">0</span> <span class="token number">2010</span>-05-24 <span class="token number">16</span>:51:59 a.c

解压文件

<span class="token comment"># tar -xzvf test.tar.gz </span>
a.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示系统信息命令" tabindex="-1"><a class="header-anchor" href="#显示系统信息命令" aria-hidden="true">#</a> 显示系统信息命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">uname</span> 显示操作系统相关信息
<span class="token function">uname</span> <span class="token parameter variable">-a</span>
<span class="token function">cat</span> /etc/redhat-release 

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/redhat-release </span>
CentOS Linux release <span class="token number">7.8</span>.2003 <span class="token punctuation">(</span>Core<span class="token punctuation">)</span>

<span class="token function">hostname</span> 显示主机名称

<span class="token function">stat</span> 用于显示 inode 内容。
<span class="token function">stat</span> <span class="token punctuation">[</span>文件或目录<span class="token punctuation">]</span>

<span class="token function">du</span>
Linux <span class="token function">du</span> （英文全拼：disk usage）命令用于显示目录或文件的大小。

<span class="token function">du</span> 会显示指定的目录或文件所占用的磁盘空间。
方便阅读的格式显示test目录所占空间情况：

<span class="token comment"># du -h test</span>
608K    test/test6
308K    test/test4
<span class="token number">4</span>.0K    test/scf/lib
<span class="token number">4</span>.0K    test/scf/service/deploy/product
<span class="token number">4</span>.0K    test/scf/service/deploy/info
12K     test/scf/service/deploy
16K     test/scf/service
<span class="token number">4</span>.0K    test/scf/doc
<span class="token number">4</span>.0K    test/scf/bin
32K     test/scf
<span class="token number">8</span>.0K    test/test3
<span class="token number">1</span>.3M    <span class="token builtin class-name">test</span>

 df（英文全拼：disk free） 命令用于显示目前在 Linux 系统上的文件系统磁盘使用情况统计。

<span class="token comment"># df -h </span>
Filesystem      Size  Used   Avail Use% Mounted on 
/dev/sda6       29G   <span class="token number">4</span>.2G   23G   <span class="token number">16</span>%     / 
udev            <span class="token number">1</span>.5G  <span class="token number">4</span>.0K   <span class="token number">1</span>.5G   <span class="token number">1</span>%     /dev 
tmpfs           604M  892K   603M   <span class="token number">1</span>%     /run 
none            <span class="token number">5</span>.0M     <span class="token number">0</span>   <span class="token number">5</span>.0M   <span class="token number">0</span>%     /run/lock 
none            <span class="token number">1</span>.5G  156K   <span class="token number">1</span>.5G   <span class="token number">1</span>%     /run/shm 

<span class="token function">top</span> 实时显示系统资源的使用情况

free命令用于显示内存状态。

free指令会显示内存的使用情况，包括实体内存，虚拟的交换文件内存，共享内存区段，以及系统核心使用的缓冲区等。

b 　以Byte为单位显示内存使用情况。
<span class="token parameter variable">-k</span> 　以KB为单位显示内存使用情况。
<span class="token parameter variable">-m</span> 　以MB为单位显示内存使用情况。

<span class="token parameter variable">-h</span> 　以合适的单位显示内存使用情况，最大为三位数，自动计算对应的单位值。单位有：


<span class="token parameter variable">-o</span> 　不显示缓冲区调节列。
-s<span class="token operator">&lt;</span>间隔秒数<span class="token operator">&gt;</span> 　持续观察内存使用状况。
<span class="token parameter variable">-t</span> 　显示内存总和列

<span class="token comment"># free -t //以总和的形式查询内存的使用信息</span>
total used <span class="token function">free</span> shared buffers cached
Mem: <span class="token number">254772</span> <span class="token number">184868</span> <span class="token number">69904</span> <span class="token number">0</span> <span class="token number">5936</span> <span class="token number">89908</span>
-/+ buffers/cache: <span class="token number">89024</span> <span class="token number">165748</span>
Swap: <span class="token number">524280</span> <span class="token number">65116</span> <span class="token number">459164</span>
Total: <span class="token number">779052</span> <span class="token number">249984</span> <span class="token number">529068</span>

<span class="token comment"># free -s 10 //每10s 执行一次命令</span>
total used <span class="token function">free</span> shared buffers cached
Mem: <span class="token number">254772</span> <span class="token number">187628</span> <span class="token number">67144</span> <span class="token number">0</span> <span class="token number">6140</span> <span class="token number">89964</span>
-/+ buffers/cache: <span class="token number">91524</span> <span class="token number">163248</span>
Swap: <span class="token number">524280</span> <span class="token number">65116</span> <span class="token number">459164</span>

total used <span class="token function">free</span> shared buffers cached
Mem: <span class="token number">254772</span> <span class="token number">187748</span> <span class="token number">67024</span> <span class="token number">0</span> <span class="token number">6164</span> <span class="token number">89940</span>
-/+ buffers/cache: <span class="token number">91644</span> <span class="token number">163128</span>
Swap: <span class="token number">524280</span> <span class="token number">65116</span> <span class="token number">459164</span>

<span class="token function">date</span> 查询当前日期
Usage: <span class="token function">date</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>+FORMAT<span class="token punctuation">]</span>
  or:  <span class="token function">date</span> <span class="token punctuation">[</span>-u<span class="token operator">|</span>--utc<span class="token operator">|</span>--universal<span class="token punctuation">]</span> <span class="token punctuation">[</span>MMDDhhmm<span class="token punctuation">[</span><span class="token punctuation">[</span>CC<span class="token punctuation">]</span>YY<span class="token punctuation">]</span><span class="token punctuation">[</span>.ss<span class="token punctuation">]</span><span class="token punctuation">]</span>


<span class="token function">date</span> +%F
<span class="token number">2023</span>-03-01

<span class="token function">cal</span> 查询日历等时间信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="搜索文件" tabindex="-1"><a class="header-anchor" href="#搜索文件" aria-hidden="true">#</a> 搜索文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">which</span> 查找二进制命令，按照环境变量<span class="token environment constant">PATH</span>路径查找

使用指令<span class="token string">&quot;which&quot;</span>查看指令<span class="token string">&quot;bash&quot;</span>的绝对路径，输入如下命令：

$ <span class="token function">which</span> <span class="token function">bash</span>

上面的指令执行后，输出信息如下所示：

/bin/bash                   <span class="token comment">#bash可执行程序的绝对路径 </span>

<span class="token function">find</span> 从磁盘遍历查询文件或目录
<span class="token function">find</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token punctuation">[</span>expression<span class="token punctuation">]</span>

查找当前目录下名为 file.txt 的文件：

<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> file.txt

将当前目录及其子目录下所有文件后缀为 .c 的文件列出来:

<span class="token comment"># find . -name &quot;*.c&quot;</span>

查找 /home 目录下大于 1MB 的文件：

<span class="token function">find</span> /home <span class="token parameter variable">-size</span> +1M


whereis命令用于查找文件。

该指令会在特定目录中查找符合条件的文件。这些文件应属于原始代码、二进制文件，或是帮助文件。

该指令只能用于查找二进制文件、源代码文件和man手册页，一般文件的定位需使用locate命令。

<span class="token function">whereis</span> 查找二进制命令，按照环境变量<span class="token environment constant">PATH</span> 路径查找

$ <span class="token function">whereis</span> <span class="token parameter variable">-b</span> <span class="token function">bash</span>               <span class="token comment">#显示bash 命令的二进制程序  </span>
bash: /bin/bash /etc/bash.bashrc /usr/share/bash    <span class="token comment"># bash命令的二进制程序的地址  </span>
$ <span class="token function">whereis</span> <span class="token parameter variable">-m</span> <span class="token function">bash</span>               <span class="token comment">#显示bash 命令的帮助文件  </span>
bash: /usr/share/man/man1/bash.1.gz  <span class="token comment">#bash命令的帮助文件地址  </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户命令" tabindex="-1"><a class="header-anchor" href="#用户命令" aria-hidden="true">#</a> 用户命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> 添加用户

<span class="token function">useradd</span> 命令用于建立用户帐号。

<span class="token function">useradd</span> 可用来建立用户帐号。帐号建好之后，再用 <span class="token function">passwd</span> 设定帐号的密码。而可用 <span class="token function">userdel</span> 删除帐号。使用 <span class="token function">useradd</span> 指令所建立的帐号，实际上是保存在 /etc/passwd 文本文件中。

添加一般用户

<span class="token comment"># useradd tt</span>

为添加的用户指定相应的用户组

<span class="token comment"># useradd -g root tt</span>

创建一个系统用户

<span class="token comment"># useradd -r tt</span>

为新添加的用户指定home目录

<span class="token comment"># useradd -d /home/myd tt</span>

建立用户且制定ID

<span class="token comment"># useradd caojh -u 544</span>



<span class="token function">usermod</span> 修改已存在用户的属性

 usermod命令用于修改用户帐号。

usermod可用来修改用户帐号的各项设定。

    -c<span class="token operator">&lt;</span>备注<span class="token operator">&gt;</span> 　修改用户帐号的备注文字。
    -d登入目录<span class="token operator">&gt;</span> 　修改用户登入时的目录。
    -e<span class="token operator">&lt;</span>有效期限<span class="token operator">&gt;</span> 　修改帐号的有效期限。
    -f<span class="token operator">&lt;</span>缓冲天数<span class="token operator">&gt;</span> 　修改在密码过期后多少天即关闭该帐号。
    -g<span class="token operator">&lt;</span>群组<span class="token operator">&gt;</span> 　修改用户所属的群组。
    -G<span class="token operator">&lt;</span>群组<span class="token operator">&gt;</span> 　修改用户所属的附加群组。
    -l<span class="token operator">&lt;</span>帐号名称<span class="token operator">&gt;</span> 　修改用户帐号名称。
    <span class="token parameter variable">-L</span> 　锁定用户密码，使密码无效。
    -s<span class="token operator">&lt;</span>shell<span class="token operator">&gt;</span> 　修改用户登入后所使用的shell。
    -u<span class="token operator">&lt;</span>uid<span class="token operator">&gt;</span> 　修改用户ID。
    <span class="token parameter variable">-U</span> 　解除密码锁定。

更改登录目录

<span class="token comment"># usermod -d /home/hnlinux root</span>

改变用户的uid

<span class="token comment"># usermod -u 777 root</span>


<span class="token function">userdel</span> 删除用户

<span class="token function">groupadd</span> 添加用户组 

<span class="token function">passwd</span> 修改用户密码

chage 

<span class="token function">id</span>  查看用户的 uid gid及其所归属的用户组

<span class="token function">su</span> 切换用户信息

visudo 编辑/etc/sudoers 的文件专属命令
<span class="token function">sudo</span>  以另外一个用户的身份（默认root） 执行事先在 sudoers 文件中允许的命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础网络" tabindex="-1"><a class="header-anchor" href="#基础网络" aria-hidden="true">#</a> 基础网络</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
telnet 使用telnet 远程登录
<span class="token function">ssh</span> 使用ssh加密协议远程登录

<span class="token function">scp</span> 全拼为 secure copy ，用于在不同主机之间复制文件

 <span class="token function">scp</span> 命令用于 Linux 之间复制文件和目录。

<span class="token function">scp</span> 是 secure copy 的缩写, <span class="token function">scp</span> 是 linux 系统下基于 <span class="token function">ssh</span> 登陆进行安全的远程文件拷贝命令。

<span class="token function">scp</span> 是加密的，rcp 是不加密的，scp 是 <span class="token function">rcp</span> 的加强版。

<span class="token number">1</span>、从本地复制到远程

命令格式：

<span class="token function">scp</span> local_file remote_username@remote_ip:remote_folder 
或者 
<span class="token function">scp</span> local_file remote_username@remote_ip:remote_file 
或者 
<span class="token function">scp</span> local_file remote_ip:remote_folder 
或者 
<span class="token function">scp</span> local_file remote_ip:remote_file 


复制目录命令格式：

<span class="token function">scp</span> <span class="token parameter variable">-r</span> local_folder remote_username@remote_ip:remote_folder 
或者 
<span class="token function">scp</span> <span class="token parameter variable">-r</span> local_folder remote_ip:remote_folder 


从远程复制到本地

从远程复制到本地，只要将从本地复制到远程的命令的后2个参数调换顺序即可，如下实例

应用实例：

<span class="token function">scp</span> root@www.runoob.com:/home/root/others/music /home/space/music/1.mp3 
<span class="token function">scp</span> <span class="token parameter variable">-r</span> www.runoob.com:/home/root/others/ /home/space/music/


说明

<span class="token number">1</span>.如果远程服务器防火墙有为scp命令设置了指定的端口，我们需要使用 <span class="token parameter variable">-P</span> 参数来设置命令的端口号，命令格式如下：

<span class="token comment">#scp 命令使用端口号 4588</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">4588</span> remote@www.runoob.com:/usr/local/sin.sh /home/administrator

<span class="token number">2</span>.使用scp命令要确保使用的用户具有可读取远程服务器相应文件的权限，否则scp命令是无法起作用的。


<span class="token function">wget</span> 下载文件
<span class="token function">ping</span>

route 显示和设置linux 系统的路由表
需要安装：
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> net-tools

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># route</span>
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
default         gateway         <span class="token number">0.0</span>.0.0         UG    <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> eth0
<span class="token number">10.0</span>.2.0        <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.255.0   U     <span class="token number">100</span>    <span class="token number">0</span>        <span class="token number">0</span> eth0
<span class="token number">192.168</span>.1.0     <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.255.0   U     <span class="token number">101</span>    <span class="token number">0</span>        <span class="token number">0</span> eth1

<span class="token function">ifconfig</span> 查看 配置 启用 或禁用网络接口

启动关闭指定网卡

<span class="token comment"># ifconfig eth0 down</span>
<span class="token comment"># ifconfig eth0 up</span>

配置IP地址

<span class="token comment"># ifconfig eth0 192.168.1.56 </span>
//给eth0网卡配置IP地址
<span class="token comment"># ifconfig eth0 192.168.1.56 netmask 255.255.255.0 </span>
// 给eth0网卡配置IP地址,并加上子掩码
<span class="token comment"># ifconfig eth0 192.168.1.56 netmask 255.255.255.0 broadcast 192.168.1.255</span>
// 给eth0网卡配置IP地址,加上子掩码,加上个广播地址

启用和关闭ARP协议

<span class="token comment"># ifconfig eth0 arp  //开启</span>
<span class="token comment"># ifconfig eth0 -arp  //关闭</span>

设置最大传输单元

<span class="token comment"># ifconfig eth0 mtu 1500 </span>
//设置能通过的最大数据包大小为 <span class="token number">1500</span> bytes

<span class="token function">ifup</span> 启动网卡
<span class="token function">ifdown</span> 关闭网卡

<span class="token function">netstat</span>

<span class="token function">netstat</span> <span class="token parameter variable">-i</span> 显示接口信息

显示UDP <span class="token punctuation">\\</span> TCP端口号的使用情况

<span class="token comment"># netstat -aput</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,69),o={class:"hint-container info"},u=n("p",{class:"hint-container-title"},"ARP",-1),v={href:"https://info.support.huawei.com/info-finder/encyclopedia/zh/ARP.html",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"什么是ARP? ARP（Address Resolution Protocol，地址解析协议）是用来将IP地址解析为MAC地址的协议。主机或三层网络设备上会维护一张ARP表，用于存储IP地址和MAC地址的映射关系，一般ARP表项包括动态ARP表项和静态ARP表项",-1),b=n("p",null,"为什么需要ARP?",-1),k=n("p",null,"在局域网中，当主机或其它三层网络设备有数据要发送给另一台主机或三层网络设备时，需要知道对方的网络层地址（即IP地址）。但是仅有IP地址是不够的，因为IP报文必须封装成帧才能通过物理网络发送，因此发送方还需要知道接收方的物理地址（即MAC地址），这就需要一个通过IP地址获取物理地址的协议，以完成从IP地址到MAC地址的映射。地址解析协议ARP即可实现将IP地址解析为MAC地址。",-1),h=s(`<h2 id="查看端口占用" tabindex="-1"><a class="header-anchor" href="#查看端口占用" aria-hidden="true">#</a> 查看端口占用</h2><blockquote><p>lsof -i:22 <br> netstat -tunlp | grep 22</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># lsof -i:22</span>
COMMAND PID <span class="token environment constant">USER</span>   FD   TYPE DEVICE SIZE/OFF NODE NAME
sshd    <span class="token number">704</span> root    3u  IPv4  <span class="token number">15568</span>      0t0  TCP *:ssh <span class="token punctuation">(</span>LISTEN<span class="token punctuation">)</span>
sshd    <span class="token number">704</span> root    4u  IPv6  <span class="token number">15577</span>      0t0  TCP *:ssh <span class="token punctuation">(</span>LISTEN<span class="token punctuation">)</span>
sshd    <span class="token number">943</span> root    3u  IPv4  <span class="token number">16106</span>      0t0  TCP w1:ssh-<span class="token operator">&gt;</span><span class="token number">192.168</span>.1.101:62594 <span class="token punctuation">(</span>ESTABLISHED<span class="token punctuation">)</span>


<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># netstat -tunlp | grep 22</span>
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:22              <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">704</span>/sshd            
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::22                   :::*                    LISTEN      <span class="token number">704</span>/sshd   

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="输入网络操作命令" tabindex="-1"><a class="header-anchor" href="#输入网络操作命令" aria-hidden="true">#</a> 输入网络操作命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">lsof</span>  list <span class="token function">open</span> files 列举系统中打开的文件
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">lsof</span> 

<span class="token function">dig</span> 查找DNS 解析过程
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> bind-utils

<span class="token function">traceroute</span>
 traceroute命令用于显示数据包到主机间的路径。

traceroute指令让你追踪网络数据包的路由途径，预设数据包大小是40Bytes，用户可另行设置。

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> tcptraceroute


显示到达目的地的数据包路由

<span class="token comment"># traceroute www.google.com</span>
traceroute: Warning: www.google.com has multiple addresses<span class="token punctuation">;</span> using <span class="token number">66.249</span>.89.99
<span class="token function">traceroute</span> to www.l.google.com <span class="token punctuation">(</span><span class="token number">66.249</span>.89.99<span class="token punctuation">)</span>, <span class="token number">30</span> hops max, <span class="token number">38</span> byte packets
<span class="token number">1</span> <span class="token number">192.168</span>.0.1 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.1<span class="token punctuation">)</span> <span class="token number">0.653</span> ms <span class="token number">0.846</span> ms <span class="token number">0.200</span> ms
<span class="token number">2</span> <span class="token number">118.250</span>.4.1 <span class="token punctuation">(</span><span class="token number">118.250</span>.4.1<span class="token punctuation">)</span> <span class="token number">36.610</span> ms <span class="token number">58.438</span> ms <span class="token number">55.146</span> ms
<span class="token number">3</span> <span class="token number">222.247</span>.28.177 <span class="token punctuation">(</span><span class="token number">222.247</span>.28.177<span class="token punctuation">)</span> <span class="token number">54.809</span> ms <span class="token number">39.879</span> ms <span class="token number">19.186</span> ms
<span class="token number">4</span> <span class="token number">61.187</span>.255.253 <span class="token punctuation">(</span><span class="token number">61.187</span>.255.253<span class="token punctuation">)</span> <span class="token number">18.033</span> ms <span class="token number">49.699</span> ms <span class="token number">72.147</span> ms
<span class="token number">5</span> <span class="token number">61.137</span>.2.177 <span class="token punctuation">(</span><span class="token number">61.137</span>.2.177<span class="token punctuation">)</span> <span class="token number">32.912</span> ms <span class="token number">72.947</span> ms <span class="token number">41.809</span> ms
<span class="token number">6</span> <span class="token number">202.97</span>.46.5 <span class="token punctuation">(</span><span class="token number">202.97</span>.46.5<span class="token punctuation">)</span> <span class="token number">60.436</span> ms <span class="token number">25.527</span> ms <span class="token number">40.023</span> ms
<span class="token number">7</span> <span class="token number">202.97</span>.35.69 <span class="token punctuation">(</span><span class="token number">202.97</span>.35.69<span class="token punctuation">)</span> <span class="token number">40.049</span> ms <span class="token number">66.091</span> ms <span class="token number">44.358</span> ms
<span class="token number">8</span> <span class="token number">202.97</span>.35.110 <span class="token punctuation">(</span><span class="token number">202.97</span>.35.110<span class="token punctuation">)</span> <span class="token number">42.140</span> ms <span class="token number">70.913</span> ms <span class="token number">41.144</span> ms
<span class="token number">9</span> <span class="token number">202.97</span>.35.14 <span class="token punctuation">(</span><span class="token number">202.97</span>.35.14<span class="token punctuation">)</span> <span class="token number">116.929</span> ms <span class="token number">57.081</span> ms <span class="token number">60.336</span> ms
<span class="token number">10</span> <span class="token number">202.97</span>.60.34 <span class="token punctuation">(</span><span class="token number">202.97</span>.60.34<span class="token punctuation">)</span> <span class="token number">54.871</span> ms <span class="token number">69.302</span> ms <span class="token number">64.353</span> ms
<span class="token number">11</span> * * *
<span class="token number">12</span> <span class="token number">209.85</span>.255.80 <span class="token punctuation">(</span><span class="token number">209.85</span>.255.80<span class="token punctuation">)</span> <span class="token number">95.954</span> ms <span class="token number">79.844</span> ms <span class="token number">76.052</span> ms
   MPLS <span class="token assign-left variable">Label</span><span class="token operator">=</span><span class="token number">385825</span> <span class="token assign-left variable">CoS</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">TTL</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">S</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token number">13</span> <span class="token number">209.85</span>.249.195 <span class="token punctuation">(</span><span class="token number">209.85</span>.249.195<span class="token punctuation">)</span> <span class="token number">118.687</span> ms <span class="token number">120.905</span> ms <span class="token number">113.936</span> ms
<span class="token number">14</span> <span class="token number">72.14</span>.236.126 <span class="token punctuation">(</span><span class="token number">72.14</span>.236.126<span class="token punctuation">)</span> <span class="token number">115.843</span> ms <span class="token number">137.109</span> ms <span class="token number">186.491</span> ms
<span class="token number">15</span> nrt04s01-in-f99.1e100.net <span class="token punctuation">(</span><span class="token number">66.249</span>.89.99<span class="token punctuation">)</span> <span class="token number">168.024</span> ms <span class="token number">140.551</span> ms <span class="token number">161.127</span> ms



tcpdump 抓包工具

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> tcpdump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系用户权限相关" tabindex="-1"><a class="header-anchor" href="#系用户权限相关" aria-hidden="true">#</a> 系用户权限相关</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> 改变文件或目录权限
u g o a


<span class="token function">chown</span> 改变文件或目录的属主和属组

（change owner）命令用于设置文件所有者和文件关联组的命令。

Linux/Unix 是多人多工操作系统，所有的文件皆有拥有者。利用 <span class="token function">chown</span> 将指定文件的拥有者改为指定的用户或组，用户可以是用户名或者用户 ID，组可以是组名或者组 ID，文件是以空格分开的要改变权限的文件列表，支持通配符。 。

<span class="token function">chown</span> 需要超级用户 root 的权限才能执行此命令。

只有超级用户和属于组的文件所有者才能变更文件关联组。非超级用户如需要设置关联组可能需要使用 <span class="token function">chgrp</span> 命令。

<span class="token function">chown</span> <span class="token punctuation">[</span>-cfhvR<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> user<span class="token punctuation">[</span>:group<span class="token punctuation">]</span> file<span class="token punctuation">..</span>.


把 /var/run/httpd.pid 的所有者设置 root：

<span class="token function">chown</span> root /var/run/httpd.pid

将文件 file1.txt 的拥有者设为 runoob，群体的使用者 runoobgroup <span class="token builtin class-name">:</span>

<span class="token function">chown</span> runoob:runoobgroup file1.txt

将当前前目录下的所有文件与子目录的拥有者皆设为 runoob，群体的使用者 runoobgroup:

<span class="token function">chown</span> <span class="token parameter variable">-R</span> runoob:runoobgroup *

把 /home/runoob 的关联组设置为 <span class="token number">512</span> （关联组ID），不改变所有者：

<span class="token function">chown</span> :512 /home/runoob


<span class="token function">chgrp</span>  更改文件用户组

change group）命令用于变更文件或目录的所属群组。

与 <span class="token function">chown</span> 命令不同，chgrp 允许普通用户改变文件所属的组，只要该用户是该组的一员。

在 UNIX 系统家族里，文件或目录权限的掌控以拥有者及所属群组来管理。您可以使用 <span class="token function">chgrp</span> 指令去变更文件与目录的所属群组，设置方式采用群组名称或群组识别码皆可。

<span class="token parameter variable">-c</span> 或 --changes：效果类似<span class="token string">&quot;-v&quot;</span>参数，但仅回报更改的部分。

<span class="token parameter variable">-f</span> 或 <span class="token parameter variable">--quiet</span> 或 --silent： 　不显示错误信息。

<span class="token parameter variable">-h</span> 或 --no-dereference： 　只对符号连接的文件作修改，而不改动其他任何相关文件。

<span class="token parameter variable">-R</span> 或 --recursive： 　递归处理，将指定目录下的所有文件及子目录一并处理。

<span class="token parameter variable">-v</span> 或 --verbose： 　显示指令执行过程。

--help： 　在线帮助。

<span class="token parameter variable">--reference</span><span class="token operator">=</span><span class="token operator">&lt;</span>参考文件或目录<span class="token operator">&gt;</span>： 　把指定文件或目录的所属群组全部设成和参考文件或目录的所属群组相同。

--version： 　显示版本信息。

 实例1：改变文件的群组属性：

<span class="token function">chgrp</span> <span class="token parameter variable">-v</span> bin log2012.log

输出：

<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># ll</span>
---xrw-r-- <span class="token number">1</span> root root <span class="token number">302108</span> <span class="token number">11</span>-13 06:03 log2012.log
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># chgrp -v bin log2012.log</span>

<span class="token string">&quot;log2012.log&quot;</span> 的所属组已更改为 bin

<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># ll</span>
---xrw-r-- <span class="token number">1</span> root bin  <span class="token number">302108</span> <span class="token number">11</span>-13 06:03 log2012.log

<span class="token builtin class-name">umask</span> 显示或设置权限掩码

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看系统用户登录信息的命令" tabindex="-1"><a class="header-anchor" href="#查看系统用户登录信息的命令" aria-hidden="true">#</a> 查看系统用户登录信息的命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">whoami</span> 
<span class="token function">who</span>
last 显示登录系统的用户
lastlog 显示系统中所有用户最近一次的登录信息
<span class="token function">users</span> 显示当前登录系统的所有用户列表
finger 查找并显示用户信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="内置命令" tabindex="-1"><a class="header-anchor" href="#内置命令" aria-hidden="true">#</a> 内置命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span>
<span class="token builtin class-name">printf</span>
<span class="token builtin class-name">alias</span> 设置系统别名
unlias 取消系统别名
<span class="token function">clear</span> 清屏
<span class="token function">history</span> 查看命令执行记录
<span class="token function">nc</span> 
<span class="token builtin class-name">export</span> 设置或显示环境变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统关联与性能" tabindex="-1"><a class="header-anchor" href="#系统关联与性能" aria-hidden="true">#</a> 系统关联与性能</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chkconfig</span> 管理系统开机选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="关机-重启-注销-和查看系统信息" tabindex="-1"><a class="header-anchor" href="#关机-重启-注销-和查看系统信息" aria-hidden="true">#</a> 关机 重启 注销 和查看系统信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">shutdown</span> 关机
<span class="token function">halt</span>   关机

poweroff 关闭电源
<span class="token builtin class-name">logout</span> 退出当前登录的shell
<span class="token builtin class-name">exit</span>  退出当前登录的shell
CTRL +D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进程关联相关命令" tabindex="-1"><a class="header-anchor" href="#进程关联相关命令" aria-hidden="true">#</a> 进程关联相关命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> 

<span class="token function">killall</span>
<span class="token function">pkill</span>

<span class="token function">ps</span> 显示进程快照
pstree 树形显示进程
<span class="token function">nohup</span> 或略挂起信号运行指定命令
pgrep 查找匹配条件的进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function f(g,x){const a=p("ExternalLinkIcon");return i(),l("div",null,[r,n("div",o,[u,n("p",null,[n("a",v,[c("https://info.support.huawei.com/info-finder/encyclopedia/zh/ARP.html"),t(a)])]),m,b,k]),h])}const y=e(d,[["render",f],["__file","linux常用命令.html.vue"]]);export{y as default};
