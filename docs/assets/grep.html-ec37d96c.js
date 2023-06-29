const n=JSON.parse(`{"key":"v-73bc6ac9","path":"/study/linux/grep.html","title":"grep","lang":"zh-CN","frontmatter":{"title":"grep","index":false,"icon":"discover","category":["学习笔记"],"description":"Linux grep (global regular expression) 命令用于查找文件里符合条件的字符串或正则表达式。 grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 -，则 grep 指令会从标准输入设备读取数据。 语法 grep [options] pattern [files] pattern - 表示要查找的字符串或正则表达式。 files - 表示要查找的文件名，可以同时查找多个文件，如果省略 files 参数， 则默认从标准输入中读取数据。 常用选项：： -i：忽略大小写进行匹配。 -v：反向查找，只打印不匹配的行。 -n：显示匹配行的行号。 -r：递归查找子目录中的文件。 -l：只打印匹配的文件名。 -c：只打印匹配的行数。 例子：在 hello.sh 中查找o ，并打印行号 [root@w1 ~]# grep -n o test.sh 1:hello 2:world 在文件夹 dir 中递归查找所有文件中匹配正则表达式 \\"pattern\\" 的行，并打印匹配行所在的文件名和行号： grep -r -n pattern dir/ 在标准输入中查找字符串 \\"world\\"，并只打印匹配的行数： echo \\"hello world\\" | grep -c world 在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行。 此时，可以使用如下命令： grep test *file 场景： 系统报警显示了时间，但是日志文件太大无法直接 cat 查看。 (查询含有特定文本的文件，并拿到这些文本所在的行) grep -n '2019-10-24 00:01:11' *.log","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/study/linux/grep.html"}],["meta",{"property":"og:site_name","content":"JavaNative"}],["meta",{"property":"og:title","content":"grep"}],["meta",{"property":"og:description","content":"Linux grep (global regular expression) 命令用于查找文件里符合条件的字符串或正则表达式。 grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 -，则 grep 指令会从标准输入设备读取数据。 语法 grep [options] pattern [files] pattern - 表示要查找的字符串或正则表达式。 files - 表示要查找的文件名，可以同时查找多个文件，如果省略 files 参数， 则默认从标准输入中读取数据。 常用选项：： -i：忽略大小写进行匹配。 -v：反向查找，只打印不匹配的行。 -n：显示匹配行的行号。 -r：递归查找子目录中的文件。 -l：只打印匹配的文件名。 -c：只打印匹配的行数。 例子：在 hello.sh 中查找o ，并打印行号 [root@w1 ~]# grep -n o test.sh 1:hello 2:world 在文件夹 dir 中递归查找所有文件中匹配正则表达式 \\"pattern\\" 的行，并打印匹配行所在的文件名和行号： grep -r -n pattern dir/ 在标准输入中查找字符串 \\"world\\"，并只打印匹配的行数： echo \\"hello world\\" | grep -c world 在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行。 此时，可以使用如下命令： grep test *file 场景： 系统报警显示了时间，但是日志文件太大无法直接 cat 查看。 (查询含有特定文本的文件，并拿到这些文本所在的行) grep -n '2019-10-24 00:01:11' *.log"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"lojzes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"grep\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lojzes\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]}],"readingTime":{"minutes":1.56,"words":468},"filePathRelative":"study/linux/grep.md","excerpt":"<p>Linux grep (global regular expression) 命令用于查找文件里符合条件的字符串或正则表达式。</p>\\n<p>grep 指令用于查找内容包含指定的范本样式的文件，如果发现某文件的内容符合所指定的范本样式，预设 grep 指令会把含有范本样式的那一列显示出来。若不指定任何文件名称，或是所给予的文件名为 -，则 grep 指令会从标准输入设备读取数据。</p>\\n<h2> 语法</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">grep</span> <span class=\\"token punctuation\\">[</span>options<span class=\\"token punctuation\\">]</span> pattern <span class=\\"token punctuation\\">[</span>files<span class=\\"token punctuation\\">]</span>\\n\\n\\n pattern - 表示要查找的字符串或正则表达式。\\n files - 表示要查找的文件名，可以同时查找多个文件，如果省略 files 参数，\\n         则默认从标准输入中读取数据。\\n\\n\\n常用选项：：\\n\\n    -i：忽略大小写进行匹配。\\n    -v：反向查找，只打印不匹配的行。\\n    -n：显示匹配行的行号。\\n    -r：递归查找子目录中的文件。\\n    -l：只打印匹配的文件名。\\n    -c：只打印匹配的行数。\\n\\n\\n 例子：在 hello.sh 中查找o ，并打印行号\\n\\n <span class=\\"token punctuation\\">[</span>root@w1 ~<span class=\\"token punctuation\\">]</span><span class=\\"token comment\\"># grep -n o test.sh</span>\\n<span class=\\"token number\\">1</span>:hello\\n<span class=\\"token number\\">2</span>:world\\n\\n\\n在文件夹 <span class=\\"token function\\">dir</span> 中递归查找所有文件中匹配正则表达式 <span class=\\"token string\\">\\"pattern\\"</span> 的行，并打印匹配行所在的文件名和行号：\\n<span class=\\"token function\\">grep</span> <span class=\\"token parameter variable\\">-r</span> <span class=\\"token parameter variable\\">-n</span> pattern dir/\\n\\n在标准输入中查找字符串 <span class=\\"token string\\">\\"world\\"</span>，并只打印匹配的行数：\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"hello world\\"</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">grep</span> <span class=\\"token parameter variable\\">-c</span> world\\n\\n在当前目录中，查找后缀有 <span class=\\"token function\\">file</span> 字样的文件中包含 <span class=\\"token builtin class-name\\">test</span> 字符串的文件，并打印出该字符串的行。\\n此时，可以使用如下命令： \\n<span class=\\"token function\\">grep</span> <span class=\\"token builtin class-name\\">test</span> *file \\n\\n\\n场景： 系统报警显示了时间，但是日志文件太大无法直接 <span class=\\"token function\\">cat</span> 查看。\\n<span class=\\"token punctuation\\">(</span>查询含有特定文本的文件，并拿到这些文本所在的行<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token function\\">grep</span> <span class=\\"token parameter variable\\">-n</span> <span class=\\"token string\\">'2019-10-24 00:01:11'</span> *.log\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"lojzes","license":"MIT"},"autoDesc":true,"git":{}}`);export{n as data};
