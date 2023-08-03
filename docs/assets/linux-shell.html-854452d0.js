import{_ as n,X as s,Y as a,a2 as e}from"./framework-0b23a550.js";const i={},l=e(`<h2 id="shell" tabindex="-1"><a class="header-anchor" href="#shell" aria-hidden="true">#</a> shell</h2><p>查看默认shell</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $SHELL</span>
/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><h3 id="用户登录时执行的环境变量" tabindex="-1"><a class="header-anchor" href="#用户登录时执行的环境变量" aria-hidden="true">#</a> 用户登录时执行的环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#全局变量</span>
/etc/profile

<span class="token comment"># 用户变量</span>
~./bash_profile 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户非登录执行的环境变量" tabindex="-1"><a class="header-anchor" href="#用户非登录执行的环境变量" aria-hidden="true">#</a> 用户非登录执行的环境变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~./bashrc    
/etc/bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量的定义" tabindex="-1"><a class="header-anchor" href="#环境变量的定义" aria-hidden="true">#</a> 环境变量的定义</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 当变量后面链接其他字符串时，必须加上{}   \${dbname}_test</span>
<span class="token comment"># = 两边不要有空格</span>

<span class="token comment"># 1. 命令的结果赋值给变量</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
<span class="token number">1</span>.txt  <span class="token number">2</span>.txt  <span class="token number">3</span>.txt  anaconda-ks.cfg  myShell  original-ks.cfg  settings.zip  test.sh
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cmd=\`ls\`</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $cmd</span>
<span class="token number">1</span>.txt <span class="token number">2</span>.txt <span class="token number">3</span>.txt anaconda-ks.cfg myShell original-ks.cfg settings.zip test.sh

<span class="token comment"># </span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cmd=$(pwd)</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $cmd</span>
/root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输出变量" tabindex="-1"><a class="header-anchor" href="#输出变量" aria-hidden="true">#</a> 输出变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>\`<span class="token variable"><span class="token variable">\`</span> 相当于 <span class="token punctuation">$(</span><span class="token punctuation">)</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo </span><span class="token variable">\`</span></span>date\`
<span class="token number">2023</span>年 05月 <span class="token number">21</span>日 星期日 <span class="token number">22</span>:28:27 UTC
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比较变量" tabindex="-1"><a class="header-anchor" href="#比较变量" aria-hidden="true">#</a> 比较变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 = 或者 ==</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="执行脚本时传递参数" tabindex="-1"><a class="header-anchor" href="#执行脚本时传递参数" aria-hidden="true">#</a> 执行脚本时传递参数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># $1..9 获取参数，n&gt;9 时，使用\${10}</span>

<span class="token comment"># $# 输入参数的个数</span>

<span class="token comment"># $*  $@ 获取所有参数</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># cat args.sh </span>
<span class="token builtin class-name">echo</span> hello <span class="token variable">$1</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># sh args.sh lojzes</span>
hello lojzes

<span class="token comment"># $0 输出执行脚本的名称、路径</span>

<span class="token comment"># 1 不带路径执行脚本</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># cat hello.sh </span>
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># sh hello.sh </span>
hello.sh
hello

<span class="token comment"># 2 带路径执行脚本</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># sh /root/myShell/hello.sh</span>
/root/myShell/hello.sh
hello


<span class="token comment">## 输出连续字符</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># echo {a..z}</span>
a b c d e f g h i j k l m n o p q r s t u <span class="token function">v</span> w x y z
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># echo \\\${1..15}</span>
<span class="token variable">$1</span> <span class="token variable">$2</span> <span class="token variable">$3</span> <span class="token variable">$4</span> <span class="token variable">$5</span> <span class="token variable">$6</span> <span class="token variable">$7</span> <span class="token variable">$8</span> <span class="token variable">$9</span> <span class="token variable">$10</span> <span class="token variable">$11</span> <span class="token variable">$12</span> <span class="token variable">$13</span> <span class="token variable">$14</span> <span class="token variable">$15</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># </span>

<span class="token comment"># 例子</span>

<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># cat t1.sh</span>
<span class="token comment">#!/bin/bash</span>

<span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">2</span> <span class="token punctuation">]</span><span class="token operator">&amp;&amp;</span><span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;必须两个参数&quot;</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span>

<span class="token punctuation">}</span>
<span class="token builtin class-name">echo</span> hellolojzes

<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># sh t1.sh</span>
必须两个参数
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># sh t1.sh a b</span>
hellolojzes

<span class="token comment"># if 版本</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># cat t2.sh </span>
<span class="token comment">#!/bin/bash</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">2</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;USAGE:/bin/sh <span class="token variable">$0</span> agr1 arg2&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>

<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$1</span> <span class="token variable">$2</span>

<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># sh t2.sh hello</span>
USAGE:/bin/sh t2.sh agr1 arg2

<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># sh t2.sh hello lojzes</span>
hello lojzes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-常用变量" tabindex="-1"><a class="header-anchor" href="#shell-常用变量" aria-hidden="true">#</a> shell 常用变量</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$?</span>  获取上一个命令执行的结果 <span class="token number">0</span> 成功 非0 不成功   常用

<span class="token variable">$$</span> 获取当前脚本执行的进程pid

<span class="token variable">$_</span> 获取上一指令的最后一个参数

<span class="token variable">$!</span> 获取上一个在后台运行的进程id  pid

<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># echo hello</span>
hello
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># echo $?</span>
<span class="token number">0</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># cd /root/abc</span>
-bash: cd: /root/abc: 没有那个文件或目录
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># echo $?</span>
<span class="token number">1</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bash-shell-内置命令" tabindex="-1"><a class="header-anchor" href="#bash-shell-内置命令" aria-hidden="true">#</a> bash shell 内置命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> 

<span class="token parameter variable">-n</span> 不换行
<span class="token parameter variable">-e</span> 遇到转义字符进行转义

转义字符如下：
<span class="token punctuation">\\</span>n  换行
<span class="token punctuation">\\</span>r  回车

<span class="token builtin class-name">eval</span> args  当程序执行到eval 时，shell 读入参数args 并将他们组成一个新的命令，然后执行
例子：
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># cat noeval.sh </span>
<span class="token comment">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token variable">$$</span>#

<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># sh noeval.sh a b c</span>
<span class="token variable">$3</span>

<span class="token comment"># eval</span>
<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># cat eval.sh </span>
<span class="token comment">#1/bin/bash</span>

<span class="token builtin class-name">eval</span>  <span class="token string">&quot;echo \\<span class="token variable">$$</span>#&quot;</span>

<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># sh eval.sh a b</span>
b


<span class="token comment"># exec</span>
<span class="token comment"># 在不创建子进程的情况下执行命令，然后退出shell</span>

<span class="token punctuation">[</span>root@w1 myShell<span class="token punctuation">]</span><span class="token comment"># exec date</span>
<span class="token number">2023</span>年 05月 <span class="token number">21</span>日 星期日 <span class="token number">23</span>:52:07 UTC

连接断开

例子：
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat exec.sh </span>
<span class="token comment">#!/bin/bash</span>

<span class="token builtin class-name">exec</span> <span class="token operator">&lt;</span>./test.txt

<span class="token keyword">while</span> <span class="token builtin class-name">read</span> line
<span class="token keyword">do</span>
   <span class="token builtin class-name">echo</span> <span class="token variable">$line</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> ok

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sh exec.sh </span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
ok

<span class="token comment"># exit 退出shell 程序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量的数值计算" tabindex="-1"><a class="header-anchor" href="#变量的数值计算" aria-hidden="true">#</a> 变量的数值计算</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># (())  数值计算</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $((100*3))</span>
<span class="token number">300</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># ((a=100*3))</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $a</span>
<span class="token number">300</span>

<span class="token comment"># false 0  true 1</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $((1&lt;0))</span>
<span class="token number">0</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $((1&gt;0))</span>
<span class="token number">1</span>

<span class="token comment"># let 变量运算 相当于 ((表达式)) 但是 (()) 效率最高</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># let a=8*3</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $a</span>
<span class="token number">24</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># ((a=8*3))</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $a</span>
<span class="token number">24</span>

<span class="token comment"># expr 变量求值  计算符两边要有空格</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># expr 2 + 2</span>
<span class="token number">4</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># expr 2+2</span>
<span class="token number">2</span>+2

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># i=3</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># a=\`expr $i + 3\`</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $a</span>
<span class="token number">6</span>

<span class="token comment">#  &amp;&gt;/dev/null 表示不保留任何输出</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># i=5</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># expr $i + 6 &amp;&gt;/dev/null</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># expr $i + 6</span>
<span class="token number">11</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat expr.sh </span>


<span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span>  i am a oldboy linux welcome to our training
<span class="token keyword">do</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> length $n<span class="token variable">\`</span></span> <span class="token parameter variable">-le</span> <span class="token number">3</span> <span class="token punctuation">]</span> 
  <span class="token keyword">then</span> 
   <span class="token builtin class-name">echo</span> <span class="token variable">$n</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sh expr.sh </span>
i
am
a
to
our


<span class="token comment"># bc unix linux 计算器  </span>

<span class="token comment"># $[] 运算</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $[ 3 + 5 ]</span>
<span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于shell-传参-read" tabindex="-1"><a class="header-anchor" href="#基于shell-传参-read" aria-hidden="true">#</a> 基于shell 传参 read</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> 语法： 
 <span class="token builtin class-name">read</span> <span class="token punctuation">[</span>参数<span class="token punctuation">]</span><span class="token punctuation">[</span>变量名<span class="token punctuation">]</span>
 常用参数：
 <span class="token parameter variable">-p</span> prompt:设置提示信息
 <span class="token parameter variable">-t</span> timeout: 输入的等待时间，单位默认为秒
 
 <span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># read -t 10 -p &quot;请输入 num:&quot; num</span>
请输入 num:100
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $num</span>
<span class="token number">100</span>

 <span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># read -t 10 -p &quot;请输入 a1 a2:&quot; a1 a2</span>
请输入 a1 a2:1 <span class="token number">2</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo $a1  $a2</span>
<span class="token number">1</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件测试与比较" tabindex="-1"><a class="header-anchor" href="#条件测试与比较" aria-hidden="true">#</a> 条件测试与比较</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># test  &lt;表达式&gt;</span>

<span class="token comment"># 文件测试表达式</span>

<span class="token comment"># -f 文件是否存在</span>
<span class="token comment"># -d 是否是目录   -e 文件是否存在（不区分是文件还是目录）</span>
<span class="token comment"># -r -w -x 读写执行</span>
<span class="token comment"># -L 是否为链接</span>


<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># test -f test.log &amp;&amp; echo &quot;test.log 存在&quot; || echo &quot;test.log 不存在&quot;</span>
test.log 不存在

<span class="token comment">#test -z 测试字符串长度是否为0 ，为0 是 true 非0 false</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># test -z &quot;hello&quot; &amp;&amp; echo true || echo false</span>
<span class="token boolean">false</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># test -z &quot;&quot; &amp;&amp; echo true || echo false</span>
<span class="token boolean">true</span>

<span class="token comment"># [&lt;表达式&gt;]</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># [ -f test.log ] &amp;&amp; echo true || echo false</span>
<span class="token boolean">false</span>

<span class="token comment"># [[&lt;表达式&gt;]]</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># [[ -f test.log ]] || echo false</span>
<span class="token boolean">false</span>

<span class="token comment">## 特殊文件表达</span>

<span class="token punctuation">[</span> 表达式1 <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span><span class="token punctuation">{</span>

命令1
命令1
命令1

<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span> 表达式1 <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span><span class="token punctuation">{</span>

命令1
命令1
命令1

<span class="token punctuation">}</span>

<span class="token builtin class-name">test</span> 表达式 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">{</span>

命令1
命令1
命令1

<span class="token punctuation">}</span>

上面的等同于if

<span class="token keyword">if</span> <span class="token punctuation">[</span>表达式<span class="token punctuation">]</span>
 <span class="token keyword">then</span>
 命令1
 命令1
 命令1
 
<span class="token keyword">fi</span>

<span class="token comment">## 字符串表达式</span>

<span class="token comment"># -n  长度不为0 为 true</span>
<span class="token comment"># -z  长度为0   为true</span>
<span class="token comment"># &quot;串1&quot; = &quot;串2&quot;  可以使用 ==</span>
<span class="token comment">#  &quot;串1&quot; != &quot;串2&quot;</span>

<span class="token comment"># 整数二元表示</span>

<span class="token parameter variable">-eq</span>    <span class="token operator">==</span> 、<span class="token operator">=</span>
<span class="token parameter variable">-ne</span>    <span class="token operator">!=</span>
<span class="token parameter variable">-gt</span>    <span class="token operator">&gt;</span>
<span class="token parameter variable">-ge</span>    <span class="token operator">&gt;=</span>
<span class="token parameter variable">-lt</span>    <span class="token operator">&lt;</span>
<span class="token parameter variable">-le</span>    <span class="token operator">&lt;=</span>

<span class="token comment"># 逻辑操作</span>

<span class="token parameter variable">-a</span>         <span class="token operator">&amp;&amp;</span>
<span class="token parameter variable">-o</span>         <span class="token operator">||</span>
<span class="token operator">!</span>           <span class="token operator">!</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># [ -f test.log -a log.log ] &amp;&amp; echo &quot;都存在&quot; || echo &quot;不知道&quot;</span>
不知道
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="if" tabindex="-1"><a class="header-anchor" href="#if" aria-hidden="true">#</a> if</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>语法

<span class="token keyword">if</span> <span class="token operator">&lt;</span>表达式<span class="token operator">&gt;</span>
 <span class="token keyword">then</span>
   指令
<span class="token keyword">fi</span>


二：

<span class="token keyword">if</span> <span class="token operator">&lt;</span>表达式<span class="token operator">&gt;</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
   指令
<span class="token keyword">fi</span>   


嵌套：

<span class="token keyword">if</span> <span class="token operator">&lt;&gt;</span>
  <span class="token keyword">then</span>
   <span class="token keyword">if</span> <span class="token operator">&lt;&gt;</span>
     <span class="token keyword">then</span>
   <span class="token keyword">fi</span> 
<span class="token keyword">fi</span>  


<span class="token keyword">if</span> <span class="token operator">&lt;&gt;</span> 
 <span class="token keyword">then</span>
   <span class="token punctuation">..</span>.
<span class="token keyword">else</span>
  <span class="token punctuation">..</span>.
 
<span class="token keyword">fi</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> str
<span class="token keyword">do</span>  
  <span class="token builtin class-name">echo</span> <span class="token variable">$n</span>
<span class="token keyword">done</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat for.sh </span>
<span class="token comment">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> a b c d
<span class="token keyword">do</span>
   <span class="token builtin class-name">echo</span> <span class="token variable">$n</span>
<span class="token keyword">done</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sh for.sh </span>
a
b
c
d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="while" tabindex="-1"><a class="header-anchor" href="#while" aria-hidden="true">#</a> while</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat while.sh </span>
<span class="token comment">#1/bin/sh</span>

<span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span>
   <span class="token function">sleep</span> <span class="token number">3</span>  <span class="token comment"># 3秒</span>
<span class="token keyword">done</span>

<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sh while.sh </span>
hello
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="case-条件语句" tabindex="-1"><a class="header-anchor" href="#case-条件语句" aria-hidden="true">#</a> case 条件语句</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>语法

<span class="token keyword">case</span> <span class="token string">&quot;变量&quot;</span> <span class="token keyword">in</span>
    值1<span class="token punctuation">)</span>
       指令<span class="token punctuation">..</span>.
       <span class="token punctuation">;</span><span class="token punctuation">;</span>
    值2<span class="token punctuation">)</span>
       指令<span class="token punctuation">..</span>.
       <span class="token punctuation">;</span><span class="token punctuation">;</span>
              
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监控服务是否正常" tabindex="-1"><a class="header-anchor" href="#监控服务是否正常" aria-hidden="true">#</a> 监控服务是否正常</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 端口监控     </span>

<span class="token comment"># 本地端口   netstat ss lsof</span>
<span class="token comment"># 远程端口   telnet nmap  nc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-函数" tabindex="-1"><a class="header-anchor" href="#shell-函数" aria-hidden="true">#</a> shell 函数</h2><h2 id="让脚本在后台运行" tabindex="-1"><a class="header-anchor" href="#让脚本在后台运行" aria-hidden="true">#</a> 让脚本在后台运行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> while.sh <span class="token operator">&amp;</span>  在后台运行
ctrl + c 停止当前脚本或任务
ctrl + z 暂停
<span class="token function">bg</span>  后台运行
<span class="token function">fg</span>  前台执行
<span class="token function">jobs</span> 查看当前脚本或任务
<span class="token function">kill</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环控制及状态返回值的应用实践" tabindex="-1"><a class="header-anchor" href="#循环控制及状态返回值的应用实践" aria-hidden="true">#</a> 循环控制及状态返回值的应用实践</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">break</span>  <span class="token builtin class-name">continue</span> <span class="token builtin class-name">exit</span> <span class="token builtin class-name">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="shell-数组" tabindex="-1"><a class="header-anchor" href="#shell-数组" aria-hidden="true">#</a> shell 数组</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>array <span class="token operator">=</span> <span class="token punctuation">(</span>var1,var2 ,var3<span class="token punctuation">)</span>


<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># array=(a,b,c)</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo \${array[*]}</span>
a,b,c
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo \${array[@]}</span>
a,b,c


<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># array=(a b c)</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># echo \${#array[@]}</span>
<span class="token number">3</span>

<span class="token comment"># 数组赋值</span>

array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> a

<span class="token comment"># 删除数组元素</span>
<span class="token builtin class-name">unset</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-脚本开发规范" tabindex="-1"><a class="header-anchor" href="#shell-脚本开发规范" aria-hidden="true">#</a> shell 脚本开发规范</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="脚本调试" tabindex="-1"><a class="header-anchor" href="#脚本调试" aria-hidden="true">#</a> 脚本调试</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 在windwos 下开发的脚本需要在 linux 上转换</span>

<span class="token comment"># dos2unix while.sh</span>

<span class="token comment"># 没有安装，则进行安装</span>
yum <span class="token function">install</span> dos2unix <span class="token parameter variable">-y</span>

<span class="token comment">## 使用bash 命令参数调试</span>
<span class="token comment"># -n 不会执行该脚本 仅检查语法是否有问题 并给出提示</span>
<span class="token comment"># -v 在执行脚本时，先脚本的内容输出到屏幕上，然后执行脚本，如有错误，也会给出提示</span>
<span class="token comment"># -x 将执行的脚本内容及输出显示到屏幕上 这是对调试很有用的参数</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># sh -nvx for.sh </span>
<span class="token comment">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">n</span> <span class="token keyword">in</span> a b c d
<span class="token keyword">do</span>
   <span class="token builtin class-name">echo</span> <span class="token variable">$n</span>
<span class="token keyword">done</span>


<span class="token comment">#set 也可以用于辅助脚本调试</span>
<span class="token comment"># set -n 读命令但不执行</span>
<span class="token comment"># set -v 显示读取的所有行</span>
<span class="token comment"># set -x 显示所有命令及其参数</span>

<span class="token comment"># set +x 关闭调试功能</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),c=[l];function t(p,o){return s(),a("div",null,c)}const u=n(i,[["render",t],["__file","linux-shell.html.vue"]]);export{u as default};
