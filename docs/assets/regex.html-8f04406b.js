import{_ as l,X as c,Y as o,Z as e,a1 as a,$ as n,a0 as s,a2 as d,C as r}from"./framework-b6ea3384.js";const h="/assets/1-5798fcd7.png",p="/assets/2-86bff914.png",u="/assets/4-34976bc3.png",b="/assets/5-6ad8467f.png",m="/assets/3-263c9df3.png",v="/assets/6-0cb1e751.png",g="/assets/8-560d26a2.png",x="/assets/9-fea7d6b2.png",_="/assets/10-33354fc6.png",k="/assets/11-f420ac10.png",f="/assets/12-dd6cc719.png",w="/assets/13-f466ceb1.png",y="/assets/7-d46c070e.png",M="/assets/14-b6950e00.png",z="/assets/15-76646e5a.png",$={},j={class:"hint-container info"},q=e("p",{class:"hint-container-title"},"参考",-1),E=e("br",null,null,-1),W={href:"https://deerchao.cn/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"},N=e("br",null,null,-1),V={href:"https://deerchao.cn/tools/wegester/",target:"_blank",rel:"noopener noreferrer"},B=d(`<h2 id="正则符号" tabindex="-1"><a class="header-anchor" href="#正则符号" aria-hidden="true">#</a> 正则符号</h2><table><thead><tr><th>分类</th><th>说明</th></tr></thead><tbody><tr><td>基础正则</td><td>^    <span class="katex-error" title="ParseError: KaTeX parse error: Expected &#39;EOF&#39;, got &#39;&amp;&#39; at position 1: &amp;̲nbsp;&amp;nbsp;&amp;nbs…" style="color:#cc0000;">&amp;nbsp;&amp;nbsp;&amp;nbsp; ^</span>    .    *    .* [a-z]    [^abc]</td></tr><tr><td>扩展正则</td><td>+     |     ()     {}     ?</td></tr></tbody></table><h2 id="常见的元字符" tabindex="-1"><a class="header-anchor" href="#常见的元字符" aria-hidden="true">#</a> 常见的元字符</h2><table><thead><tr><th>符号</th><th>含义</th></tr></thead><tbody><tr><td>\\d</td><td>匹配数字</td></tr><tr><td>\\w</td><td>匹配字母或数字或下划线或汉字</td></tr><tr><td>\\s</td><td>匹配任意空白符</td></tr><tr><td>\\b</td><td>匹配单词的开头或结束</td></tr></tbody></table><h2 id="常见的反义代码" tabindex="-1"><a class="header-anchor" href="#常见的反义代码" aria-hidden="true">#</a> 常见的反义代码</h2><table><thead><tr><th>符号</th><th>含义</th></tr></thead><tbody><tr><td>\\W</td><td>匹配任意不是字母，数字，下划线，汉字的字符</td></tr><tr><td>\\S</td><td>匹配任意不是空白符的字符</td></tr><tr><td>\\D</td><td>匹配任意非数字的字符</td></tr><tr><td>\\B</td><td>匹配不是单词开头或结束的位置</td></tr><tr><td>[^x]</td><td>匹配除了x以外的任意字符</td></tr><tr><td>[aeiou]</td><td>匹配除了aeiou这几个字母以外的任意字符</td></tr></tbody></table><h2 id="正则-vs-通配符" tabindex="-1"><a class="header-anchor" href="#正则-vs-通配符" aria-hidden="true">#</a> 正则 VS 通配符</h2><table><thead><tr><th>分类</th><th>诞生目标</th><th>支持的命令</th></tr></thead><tbody><tr><td>正则(RE)</td><td>grep awk sed ,高级语言进行过滤（匹配字符）</td><td>grep awk sed find rename,expr</td></tr><tr><td>通配符（global）</td><td>匹配文件（文件名）*.log *.txt</td><td>linux 大部分命令都支持</td></tr></tbody></table><h3 id="以-开头的行" tabindex="-1"><a class="header-anchor" href="#以-开头的行" aria-hidden="true">#</a> ^ 以... 开头的行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat -n regex.txt</span>
     <span class="token number">1</span>  hello world
     <span class="token number">2</span>  hello <span class="token function">java</span>
     <span class="token number">3</span>  java1234
     <span class="token number">4</span>  go
     <span class="token number">5</span>  篮球 好玩
     <span class="token number">6</span>  足球 不好玩

    <span class="token comment">#  查找以h开头的行</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;^h&#39; regex.txt</span>
hello world
hello <span class="token function">java</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="以-结尾的行" tabindex="-1"><a class="header-anchor" href="#以-结尾的行" aria-hidden="true">#</a> $ 以...结尾的行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;a$&#39; regex.txt</span>
hello <span class="token function">java</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cat-a" tabindex="-1"><a class="header-anchor" href="#cat-a" aria-hidden="true">#</a> cat -A</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示文件中隐藏内容</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat -A regex.txt</span>
hello world$
hello java$
java1234$
go$
M-gM-/M-.M-gM-^PM-^C M-eM-%M-<span class="token operator">=</span>M-gM-^NM-<span class="token punctuation">)</span>$
M-hM-6M-3M-gM-^PM-^C M-dM-8M-^MM-eM-%M-<span class="token operator">=</span>M-gM-^NM-<span class="token punctuation">)</span>$

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示空行" tabindex="-1"><a class="header-anchor" href="#显示空行" aria-hidden="true">#</a> ^$ 显示空行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat -n regex.txt</span>
     <span class="token number">1</span>  hello world
     <span class="token number">2</span>  hello <span class="token function">java</span>
     <span class="token number">3</span>  java1234
     <span class="token number">4</span>  
     <span class="token number">5</span>  go
     <span class="token number">6</span>  篮球 好玩
     <span class="token number">7</span>  足球 不好玩
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># grep -n &#39;^$&#39; regex.txt</span>
<span class="token number">4</span>:

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="任意一个字符-不包括空行" tabindex="-1"><a class="header-anchor" href="#任意一个字符-不包括空行" aria-hidden="true">#</a> . 任意一个字符 不包括空行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;.&#39; regex.txt</span>
hello world
hello <span class="token function">java</span>
java1234
go
篮球 好玩
足球 不好玩

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符" aria-hidden="true">#</a> \\ 转义字符</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># cat -n regex.txt</span>
     <span class="token number">1</span>  hello world
     <span class="token number">2</span>  hello <span class="token function">java</span>
     <span class="token number">3</span>  java1234
     <span class="token number">4</span>  
     <span class="token number">5</span>  go.
     <span class="token number">6</span>  篮球 好玩
     <span class="token number">7</span>  足球 不好玩
    <span class="token comment">#  匹配以. 为结尾的行</span>
<span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># grep &#39;\\.$&#39; regex.txt</span>
go.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前一个字符出现0次或者0次以上" tabindex="-1"><a class="header-anchor" href="#前一个字符出现0次或者0次以上" aria-hidden="true">#</a> * 前一个字符出现0次或者0次以上</h3><p><img src="`+h+'" alt="" loading="lazy"></p><h3 id="表示所有-包括空行" tabindex="-1"><a class="header-anchor" href="#表示所有-包括空行" aria-hidden="true">#</a> .* 表示所有 包括空行</h3><p><img src="'+p+'" alt="" loading="lazy"></p><h3 id="abc-一次匹配一个字符" tabindex="-1"><a class="header-anchor" href="#abc-一次匹配一个字符" aria-hidden="true">#</a> [abc] 一次匹配一个字符</h3><ul><li>[a-z]</li><li>[A-Z]</li><li>[0-9]</li></ul><p><img src="'+u+`" alt="" loading="lazy"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">grep</span> <span class="token string">&#39;[a-zA-Z0-9]&#39;</span> regex.txt

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">[] 内没有特殊字符，相当于\\. 转义</p><p>例如 [a.] 匹配的就是a.</p></div><h3 id="abc-取反" tabindex="-1"><a class="header-anchor" href="#abc-取反" aria-hidden="true">#</a> [^abc] 取反</h3><p>排除 以 a 或者b 或者 c 的内容，匹配a或b或c之外的内容</p><p><img src="`+b+`" alt="" loading="lazy"></p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><h3 id="排除空行" tabindex="-1"><a class="header-anchor" href="#排除空行" aria-hidden="true">#</a> 排除空行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@w1 ~<span class="token punctuation">]</span><span class="token comment"># grep -v &#39;^$&#39; regex.txt</span>
hello world
hello <span class="token function">java</span>
java1234
go
篮球 好玩
足球 不好玩

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匹配开始-以-o-结尾-的内容" tabindex="-1"><a class="header-anchor" href="#匹配开始-以-o-结尾-的内容" aria-hidden="true">#</a> 匹配开始 以 o 结尾 的内容</h3><p><img src="`+m+'" alt="" loading="lazy"></p><div class="hint-container warning"><p class="hint-container-title">对比 $o</p><p>$ 是以... 结尾的行， 如果适配内容，不加$</p></div><div class="hint-container warning"><p class="hint-container-title">正则的贪婪性</p><p>根据上图可知，匹配到第二个o 才结束</p></div><h2 id="扩展正则" tabindex="-1"><a class="header-anchor" href="#扩展正则" aria-hidden="true">#</a> 扩展正则</h2><h3 id="匹配1次或者一次以上" tabindex="-1"><a class="header-anchor" href="#匹配1次或者一次以上" aria-hidden="true">#</a> + 匹配1次或者一次以上</h3><p><img src="'+v+'" alt="" loading="lazy"></p><div class="hint-container warning"><p class="hint-container-title">扩展正则的支持</p><p>1️⃣ grep -E <br> 2️⃣ egrep</p></div><h3 id="或者" tabindex="-1"><a class="header-anchor" href="#或者" aria-hidden="true">#</a> | 或者</h3><p><img src="'+g+'" alt="" loading="lazy"></p><h3 id="vs" tabindex="-1"><a class="header-anchor" href="#vs" aria-hidden="true">#</a> [] VS |</h3><table><thead><tr><th>符号</th><th>含义</th><th>应用场景</th></tr></thead><tbody><tr><td>[]</td><td>一次匹配一个字符[abcs]</td><td>匹配单个字符 或者和 + 配合</td></tr><tr><td>|</td><td>匹配一个字符或者多个 |a|b|c</td><td>匹配单词</td></tr></tbody></table><h3 id="被括起来的内容-表示一个整体-一个字符-可以应用在后向引用-反向引用-sed-使用" tabindex="-1"><a class="header-anchor" href="#被括起来的内容-表示一个整体-一个字符-可以应用在后向引用-反向引用-sed-使用" aria-hidden="true">#</a> （）被括起来的内容，表示一个整体（一个字符），可以应用在后向引用（反向引用）sed 使用</h3><p><img src="'+x+'" alt="" loading="lazy"></p><h3 id="连续出现-o-n-m-前一个字母o-至少连续出现n次-最多连续出现m次" tabindex="-1"><a class="header-anchor" href="#连续出现-o-n-m-前一个字母o-至少连续出现n次-最多连续出现m次" aria-hidden="true">#</a> {} 连续出现 o{n,m} 前一个字母o 至少连续出现n次，最多连续出现m次</h3><table><thead><tr><th>符号</th><th>含义</th></tr></thead><tbody><tr><td>o{n,m}</td><td>前一个字母o 至少连续出现n次，最多连续出现m次</td></tr><tr><td>o{n}</td><td>前一个字母o 连续出现n次</td></tr></tbody></table><p>0 连续出现4次</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>0 出现一次，最多出现4次</p><p><img src="'+k+'" alt="" loading="lazy"></p><h3 id="连续出现0次或者1次" tabindex="-1"><a class="header-anchor" href="#连续出现0次或者1次" aria-hidden="true">#</a> ？ 连续出现0次或者1次</h3><p><img src="'+f+'" alt="" loading="lazy"></p><p><img src="'+w+'" alt="" loading="lazy"></p><h2 id="例子-1" tabindex="-1"><a class="header-anchor" href="#例子-1" aria-hidden="true">#</a> 例子</h2><h3 id="匹配连续的字母-数字" tabindex="-1"><a class="header-anchor" href="#匹配连续的字母-数字" aria-hidden="true">#</a> 匹配连续的字母 数字</h3><p><img src="'+y+'" alt="" loading="lazy"></p><h2 id="高级-分组的使用" tabindex="-1"><a class="header-anchor" href="#高级-分组的使用" aria-hidden="true">#</a> 高级 （）分组的使用</h2><p><img src="'+M+'" alt="" loading="lazy"></p><table><tr><th>分类</th><th>代码/语法</th><th>说明 </th></tr><tr><td rowspan="3">捕获</td><td>(exp)</td><td>匹配exp,并捕获文本到自动命名的组里</td></tr><tr><td>(?&lt;name&gt;exp)</td><td>匹配exp,并捕获文本到名称为name的组里，也可以写成(?&#39;name&#39;exp)</td></tr><tr><td>(?:exp)</td><td>匹配exp,不捕获匹配的文本，也不给此分组分配组号</td></tr><tr><td rowspan="4">零宽断言</td><td>(?=exp)</td><td>匹配exp前面的位置</td></tr><tr><td>(?&lt;=exp)</td><td>匹配exp后面的位置</td></tr><tr><td>(?!exp)</td><td>匹配后面跟的不是exp的位置</td></tr><tr><td>(?&lt;!exp)</td><td>匹配前面不是exp的位置</td></tr><tr><td>注释</td> <td>(?#comment)</td><td>这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读</td></tr></table><h3 id="后向引用" tabindex="-1"><a class="header-anchor" href="#后向引用" aria-hidden="true">#</a> 后向引用</h3><p>使用小括号指定一个子表达式后，匹配这个子表达式的文本(也就是此分组捕获的内容)可以在表达式或其它程序中作进一步的处理。默认情况下，每个分组会自动拥有一个组号，规则是：从左向右，以分组的左括号为标志，第一个出现的分组的组号为1，第二个为2，以此类推。</p><p>后向引用用于重复搜索前面某个分组匹配的文本。例如，<code>\\1</code>代表分组1匹配的文本。难以理解？请看示例：</p>',67),C=e("code",null,"(\\b(\\w+)\\b)",-1),I=e("code",null,"(\\s+)",-1),A=e("code",null,"(\\1)",-1),S=e("code",null,"(?<Word>\\w+)",-1),T=e("code",null,"( ",-1),L=e("code",null,"(?'Word'\\w+))",-1),P=e("code",null,"\\k<Word>",-1),Z=e("code",null,"\\b(?<Word>\\w+)\\b\\s+\\k<Word>\\b",-1),X=d('<h2 id="零宽断言" tabindex="-1"><a class="header-anchor" href="#零宽断言" aria-hidden="true">#</a> 零宽断言</h2><p>接下来的四个用于查找在某些内容(但并不包括这些内容)之前或之后的东西，也就是说它们像\\b,^,$那样用于指定一个位置，这个位置应该满足一定的条件(即断言)，因此它们也被称为零宽断言</p><h3 id="零宽度正预测先行断言" tabindex="-1"><a class="header-anchor" href="#零宽度正预测先行断言" aria-hidden="true">#</a> 零宽度正预测先行断言</h3><p><code>(?=exp)</code>，它断言自身出现的位置的后面能匹配表达式exp。比如\\b\\w+(?=ing\\b)，匹配以ing结尾的单词的前面部分(除了ing以外的部分)，如查找<code>I&#39;m singing while you&#39;re dancing.</code>时，它会匹配 <code>sing</code> 和 <code>sing</code>。</p><h3 id="零宽度正回顾后发断言" tabindex="-1"><a class="header-anchor" href="#零宽度正回顾后发断言" aria-hidden="true">#</a> 零宽度正回顾后发断言</h3><p><code>(?&lt;=exp)</code>，它断言自身出现的位置的前面能匹配表达式exp。比如<code>(?&lt;=\\bre)\\w+\\b</code>会匹配以re开头的单词的后半部分(除了re以外的部分)，例如在查找 <code>reading a book</code> 时，它匹配 <code>ading</code>.</p><p>假如你想要给一个很长的数字中每三位间加一个逗号(当然是从右边加起了)，你可以这样查找需要在前面和里面添加逗号的部分：<code>((?&lt;=\\d)\\d{3})+\\b</code>，用它对1234567890进行查找时结果是234567890。</p><p>下面这个例子同时使用了这两种断言：<code>(?&lt;=\\s)\\d+(?=\\s)</code>匹配以空白符间隔的数字(再次强调，不包括这些空白符)。</p><h2 id="负向零宽断言" tabindex="-1"><a class="header-anchor" href="#负向零宽断言" aria-hidden="true">#</a> 负向零宽断言</h2><p>前面我们提到过怎么查找不是某个字符或不在某个字符类里的字符的方法(反义)。但是如果我们只是想要确保某个字符没有出现，但并不想去匹配它时怎么办？例如，如果我们想查找这样的单词--它里面出现了字母q,但是q后面跟的不是字母u,我们可以尝试这样：</p><p><code>\\b\\w*q[^u]\\w*\\b</code>匹配包含后面不是字母u的字母q的单词。但是如果多做测试(或者你思维足够敏锐，直接就观察出来了)，你会发现，如果q出现在单词的结尾的话，像Iraq,Benq，这个表达式就会出错。这是因为[<sup>u]总要匹配一个字符，所以如果q是单词的最后一个字符的话，后面的[</sup>u]将会匹配q后面的单词分隔符(可能是空格，或者是句号或其它的什么)，后面的\\w*\\b将会匹配下一个单词，于是\\b\\w<em>q[^u]\\w</em>\\b就能匹配整个<code> Iraq fighting</code>。负向零宽断言能解决这样的问题，因为它只匹配一个位置，并不消费任何字符。现在，我们可以这样来解决这个问题：<code>\\b\\w*q(?!u)\\w*\\b</code>。</p>',11),D=e("code",null,"\\d{3}(?!\\d)",-1),F=e("code",null,"\\b((?!abc)\\w)+\\b",-1),H=e("code",null,"(?<![a-z])\\d{7}",-1),K=d('<p>一个更复杂的例子：<code>(?&lt;=&lt;(\\w+)&gt;).*(?=&lt;\\/\\1&gt;)</code>匹配不包含属性的简单HTML标签内里的内容。<code>(?&lt;=&lt;(\\w+)&gt;)</code>指定了这样的前缀：被尖括号括起来的单词(比如可能是<code>&lt;b&gt;</code>)，然后是.*(任意的字符串),最后是一个后缀<code>(?=&lt;\\/\\1&gt;)</code>。注意后缀里的/，它用到了前面提过的字符转义；\\1则是一个反向引用，引用的正是捕获的第一组，前面的(\\w+)匹配的内容，这样如果前缀实际上是<code>&lt;b&gt;</code>的话，后缀就是<code>&lt;/b&gt;</code>了。整个表达式匹配的是<code>&lt;b&gt;</code>和<code>&lt;/b&gt;</code>之间的内容(再次提醒，不包括前缀和后缀本身)。</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2>',2),O=e("code",null,"(?#comment)",-1),R=e("code",null,"2[0-4]\\d(?#200-249)|25[0-5](?#250-255)|[01]?\\d\\d?(?#0-199)",-1),Y=d('<p>要包含注释的话，最好是启用“忽略模式里的空白符”选项，这样在编写表达式时能任意的添加空格，Tab，换行，而实际使用时这些都将被忽略</p><h2 id="贪婪与懒惰" tabindex="-1"><a class="header-anchor" href="#贪婪与懒惰" aria-hidden="true">#</a> 贪婪与懒惰</h2><table><thead><tr><th>代码/语法</th><th>说明</th></tr></thead><tbody><tr><td>*?</td><td>重复任意次，但尽可能少重复</td></tr><tr><td>+?</td><td>重复1次或更多次，但尽可能少重复</td></tr><tr><td>??</td><td>重复0次或1次，但尽可能少重复</td></tr><tr><td>{n,m}?</td><td>重复n到m次，但尽可能少重复</td></tr><tr><td>{n,}?</td><td>重复n次以上，但尽可能少重复</td></tr></tbody></table><p>当正则表达式中包含能接受重复的限定符时，通常的行为是（在使整个表达式能得到匹配的前提下）匹配尽可能多的字符。以这个表达式为例：<code>a.*b</code>，它将会匹配最长的以a开始，以b结束的字符串。如果用它来搜索 <code>aabab</code> 的话，它会匹配整个字符串 <code>aabab</code> 。这被称为贪婪匹配。</p><p>有时，我们更需要懒惰匹配，也就是匹配尽可能少的字符。前面给出的限定符都可以被转化为懒惰匹配模式，只要在它后面加上一个问号?。这样.*?就意味着匹配任意数量的重复，但是在能使整个匹配成功的前提下使用最少的重复。现在看看懒惰版的例子吧：</p><p><code>a.*?b</code> 匹配最短的，以a开始，以b结束的字符串。如果把它应用于 <code>aabab</code> 的话，它会匹配 <code>aab</code>（第一到第三个字符）和 <code>ab</code>（第四到第五个字符）。</p><h2 id="还有些什么东西没提到" tabindex="-1"><a class="header-anchor" href="#还有些什么东西没提到" aria-hidden="true">#</a> 还有些什么东西没提到</h2><p><img src="'+z+'" alt="" loading="lazy"></p>',8);function G(J,Q){const i=r("ExternalLinkIcon"),t=r("font");return c(),o("div",null,[e("div",j,[q,e("p",null,[a("推荐学习 "),E,e("a",W,[a("https://deerchao.cn/tutorials/regex/regex.htm"),n(i)]),N,e("a",V,[a("https://deerchao.cn/tools/wegester/"),n(i)])])]),B,n(t,{color:"red"},{default:s(()=>[a("`\\b(\\w+)\\b\\s+\\1\\b`")]),_:1}),a("可以用来匹配重复的单词，像go go, 或者kitty kitty。这个表达式首先是一个单词，也就是单词开始处和结束处之间的多于一个的字母或数字"),C,a("，这个单词会被捕获到编号为1的分组中，然后是1个或几个空白符"),I,a("，最后是分组1中捕获的内容（也就是前面匹配的那个单词）"),A,a("。"),e("p",null,[a("你也可以自己指定子表达式的组名。要指定一个子表达式的组名，请使用这样的语法："),S,a(),T,a(" 或者把尖括号换成'也行："),L,a(",这样就把\\w+的组名指定为Word了。要反向引用这个分组捕获的内容，你可以使用"),P,a(",所以上一个例子也可以写成这样："),n(t,{color:"red"},{default:s(()=>[Z]),_:1}),a("。")]),X,n(t,{color:"red"},{default:s(()=>[a("零宽度负预测先行断言`(?!exp)`")]),_:1}),a(">，断言此位置的后面不能匹配表达式exp。例如："),D,a("匹配三位数字，而且这三位数字的后面不能是数字；"),F,a("匹配不包含连续字符串abc的单词。"),e("p",null,[a("同理，我们可以用"),n(t,{color:"red"},{default:s(()=>[a("(?<!exp),零宽度负回顾后发断言")]),_:1}),a("来断言此位置的前面不能匹配表达式exp："),H,a("匹配前面不是小写字母的七位数字。")]),K,e("p",null,[a("小括号的另一种用途是通过语法"),n(t,{color:"blue"},{default:s(()=>[O]),_:1}),a("来包含注释。例如："),R,a("。")]),Y])}const aa=l($,[["render",G],["__file","regex.html.vue"]]);export{aa as default};
