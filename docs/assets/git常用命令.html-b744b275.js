import{_ as e,X as s,Y as n,a2 as a}from"./framework-b6ea3384.js";const i="/assets/merge-rebase-diff-2f0f1436.png",t={},l=a(`<h2 id="_1-修改已提交的msg" tabindex="-1"><a class="header-anchor" href="#_1-修改已提交的msg" aria-hidden="true">#</a> 1.修改已提交的msg</h2><blockquote><p>git commit --amend 命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">--amend</span> 修改最后一次提交的msg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>修改最近一次提交的用户名和邮箱</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;lojzes&quot;</span>
 <span class="token function">git</span> config user.name <span class="token string">&quot;lojzes&quot;</span>
 <span class="token function">git</span> config user.email <span class="token string">&quot;lojzes@qq.com&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2 git reset --soft HEAD~2(回退从当前到第几个)</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD~2  回退从当前数第二个提交版本

<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commmit -m<span class="token string">&quot;&quot;</span>   再次提交


// 回退到指定的提交id
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> commitId
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commitId

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：git reset --hard 会有文件丢失，慎用</p></blockquote><h2 id="git-rebase" tabindex="-1"><a class="header-anchor" href="#git-rebase" aria-hidden="true">#</a> git rebase</h2><blockquote><p>切记！！！，不要在主分支上rebase</p></blockquote><p>使用 rebase 1 把master 上的代码合并到 dev</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>当前分支为 dev
<span class="token function">git</span> rebase maser

然后在 master 上进行 merge
<span class="token function">git</span> merage dev

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 在dev 进入 git rebase 交互式 进行提交压缩、删除操作 ，然后在合并到master</p><p>3 也可以直接 git rebase -i master 交互式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
// 进入交互式
<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> master

pick 4c59004 c2
s    91ee8da c3   // 合并当前及上一个提交 即合并c3 和c2 提交
d 1c8cdc8 c4      // 丢弃对应的提交
r 1c8cdc8 c4    // 修改对应的提交信息

<span class="token comment"># Rebase 9896800..1c8cdc8 onto 9896800 (3 commands)</span>
<span class="token comment">#</span>
<span class="token comment"># Commands:</span>
<span class="token comment"># p, pick &lt;commit&gt; = use commit</span>
<span class="token comment"># r, reword &lt;commit&gt; = use commit, but edit the commit message</span>
<span class="token comment"># e, edit &lt;commit&gt; = use commit, but stop for amending</span>
<span class="token comment"># s, squash &lt;commit&gt; = use commit, but meld into previous commit   // 合并当前及上一个提交</span>
<span class="token comment"># f, fixup &lt;commit&gt; = like &quot;squash&quot;, but discard this commit&#39;s log message</span>
<span class="token comment"># x, exec &lt;command&gt; = run command (the rest of the line) using shell</span>
<span class="token comment"># b, break = stop here (continue rebase later with &#39;git rebase --continue&#39;)</span>
<span class="token comment"># d, drop &lt;commit&gt; = remove commit   // 丢弃对应的提交</span>
<span class="token comment"># l, label &lt;label&gt; = label current HEAD with a name</span>
<span class="token comment"># t, reset &lt;label&gt; = reset HEAD to a label</span>
<span class="token comment"># m, merge [-C &lt;commit&gt; | -c &lt;commit&gt;] &lt;label&gt; [# &lt;oneline&gt;]</span>
<span class="token comment"># .       create a merge commit using the original merge commit&#39;s</span>
<span class="token comment"># .       message (or the oneline, if no original merge commit was</span>
<span class="token comment"># .       specified). Use -c &lt;commit&gt; to reword the commit message.</span>
<span class="token comment">#</span>
<span class="token comment"># These lines can be re-ordered; they are executed from top to bottom.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>rebase -i commit开始id commit结束id</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>切换功能分支
<span class="token function">git</span> checkout feature

<span class="token function">git</span> rebase <span class="token parameter variable">-i</span> <span class="token punctuation">(</span>开始id,结束id<span class="token punctuation">]</span>

注意： 开始id不包括，结束id包括

此时，会生成一个游离状态，要执行
<span class="token function">git</span> checkot <span class="token parameter variable">-b</span> dev（新分支）

执行 
<span class="token function">git</span> checkout feature
<span class="token function">git</span> rebase dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用 git rebase -i HEAD~(向前几次提交)</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> rebase <span class="token parameter variable">-i</span> HEAD~3
合并最近3次提交记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-rebase-合并代码" tabindex="-1"><a class="header-anchor" href="#_2-rebase-合并代码" aria-hidden="true">#</a> 2.rebase 合并代码</h2><blockquote><p>如果之前使用 merge 的同学，可以直接把merge 获取rebase 命令</p></blockquote><p>把 dev1 合并到master上，操作步骤：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span> <span class="token function">git</span> checkout master
<span class="token number">2</span> <span class="token function">git</span> merge dev

使用 rebase 命令

<span class="token number">1</span> <span class="token function">git</span> checkout feature
<span class="token number">2</span> <span class="token function">git</span> rebase master

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-merage-与-git-merge-的区别" tabindex="-1"><a class="header-anchor" href="#git-merage-与-git-merge-的区别" aria-hidden="true">#</a> git merage 与 git merge 的区别</h2><p><img src="`+i+'" alt="" loading="lazy"></p>',25),c=[l];function d(r,o){return s(),n("div",null,c)}const u=e(t,[["render",d],["__file","git常用命令.html.vue"]]);export{u as default};
