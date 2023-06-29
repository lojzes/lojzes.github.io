import{_ as n,X as s,Y as a,a2 as e}from"./framework-b6ea3384.js";const i={},l=e(`<p>Linux grep (global regular expression) 命令用于查找文件里符合条件的字符串或正则表达式。</p><p>grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 -，则 grep 指令会从标准输入设备读取数据。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> pattern <span class="token punctuation">[</span>files<span class="token punctuation">]</span>


 pattern - 表示要查找的字符串或正则表达式。
 files - 表示要查找的文件名，可以同时查找多个文件，如果省略 files 参数，
         则默认从标准输入中读取数据。


常用选项：：

    -i：忽略大小写进行匹配。
    -v：反向查找，只打印不匹配的行。
    -n：显示匹配行的行号。
    -r：递归查找子目录中的文件。
    -l：只打印匹配的文件名。
    -c：只打印匹配的行数。


 例子：在 hello.sh 中查找o ，并打印行号

 <span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># grep -n o test.sh</span>
<span class="token number">1</span>:hello
<span class="token number">2</span>:world


在文件夹 <span class="token function">dir</span> 中递归查找所有文件中匹配正则表达式 <span class="token string">&quot;pattern&quot;</span> 的行，并打印匹配行所在的文件名和行号：
<span class="token function">grep</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-n</span> pattern dir/

在标准输入中查找字符串 <span class="token string">&quot;world&quot;</span>，并只打印匹配的行数：
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-c</span> world

在当前目录中，查找后缀有 <span class="token function">file</span> 字样的文件中包含 <span class="token builtin class-name">test</span> 字符串的文件，并打印出该字符串的行。
此时，可以使用如下命令： 
<span class="token function">grep</span> <span class="token builtin class-name">test</span> *file 


场景： 系统报警显示了时间，但是日志文件太大无法直接 <span class="token function">cat</span> 查看。
<span class="token punctuation">(</span>查询含有特定文本的文件，并拿到这些文本所在的行<span class="token punctuation">)</span>
<span class="token function">grep</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;2019-10-24 00:01:11&#39;</span> *.log

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function t(r,d){return s(),a("div",null,c)}const o=n(i,[["render",t],["__file","grep.html.vue"]]);export{o as default};
