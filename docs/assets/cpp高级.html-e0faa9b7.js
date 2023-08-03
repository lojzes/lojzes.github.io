import{_ as a,X as e,Y as c,Z as n,a1 as i,$ as t,a2 as p,C as l}from"./framework-0b23a550.js";const o="/assets/cpp-10-7bf84e17.png",d="/assets/cpp-11-475bae7b.png",u="/assets/cpp-13-71c97731.png",r="/assets/cpp-14-1016e6a5.png",v={},m={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"参考",-1),b={href:"https://www.runoob.com/cplusplus/cpp-files-streams.html",target:"_blank",rel:"noopener noreferrer"},h=p('<h2 id="文件和流" tabindex="-1"><a class="header-anchor" href="#文件和流" aria-hidden="true">#</a> 文件和流</h2><p><img src="'+o+`" alt="" loading="lazy"></p><p>要在 C++ 中进行文件处理，必须在 C++ 源代码文件中包含头文件 <code>&lt;iostream&gt;</code> 和 <code>&lt;fstream&gt;</code>。</p><h3 id="打开文件" tabindex="-1"><a class="header-anchor" href="#打开文件" aria-hidden="true">#</a> 打开文件</h3><p>在从文件读取信息或者向文件写入信息之前，必须先打开文件。ofstream 和 fstream 对象都可以用来打开文件进行写操作，如果只需要打开文件进行读操作，则使用 ifstream 对象。</p><p>下面是 open() 函数的标准语法，open() 函数是 fstream、ifstream 和 ofstream 对象的一个成员。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">open</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>filename<span class="token punctuation">,</span> ios<span class="token operator">::</span>openmode mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这里，open() 成员函数的第一参数指定要打开的文件的名称和位置，第二个参数定义文件被打开的模式。</p><p><img src="`+d+`" alt="" loading="lazy"></p><p>//todo</p><h2 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h2><p>C++ 异常处理涉及到三个关键字：try、catch、throw。</p><ul><li>throw: 当问题出现时，程序会抛出一个异常。这是通过使用 throw 关键字来完成的。</li><li>catch: 在您想要处理问题的地方，通过异常处理程序捕获异常。catch 关键字用于捕获异常。</li><li>try: try 块中的代码标识将被激活的特定异常。它后面通常跟着一个或多个 catch 块。</li></ul><p>如果有一个块抛出一个异常，捕获异常的方法会使用 try 和 catch 关键字。try 块中放置可能抛出异常的代码，try 块中的代码被称为保护代码。使用 try/catch 语句的语法如下所示：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>try
<span class="token punctuation">{</span>
   <span class="token comment">// 保护代码</span>
<span class="token punctuation">}</span><span class="token function">catch</span><span class="token punctuation">(</span> ExceptionName e1 <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token comment">// catch 块</span>
<span class="token punctuation">}</span><span class="token function">catch</span><span class="token punctuation">(</span> ExceptionName e2 <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token comment">// catch 块</span>
<span class="token punctuation">}</span><span class="token function">catch</span><span class="token punctuation">(</span> ExceptionName eN <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token comment">// catch 块</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 try 块在不同的情境下会抛出不同的异常，这个时候可以尝试罗列多个 catch 语句，用于捕获不同类型的异常。</p><h3 id="抛出异常" tabindex="-1"><a class="header-anchor" href="#抛出异常" aria-hidden="true">#</a> 抛出异常</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token keyword">double</span> <span class="token function">division</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span> b <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
      throw <span class="token string">&quot;Division by zero condition!&quot;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token operator">/</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="捕获异常" tabindex="-1"><a class="header-anchor" href="#捕获异常" aria-hidden="true">#</a> 捕获异常</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
try
<span class="token punctuation">{</span>
   <span class="token comment">// 保护代码</span>
<span class="token punctuation">}</span><span class="token function">catch</span><span class="token punctuation">(</span> ExceptionName e <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 处理 ExceptionName 异常的代码</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标准的异常" tabindex="-1"><a class="header-anchor" href="#标准的异常" aria-hidden="true">#</a> 标准的异常</h2><p><code>C++</code> 提供了一系列标准的异常，定义在 <code>&lt;exception&gt;</code> 中，我们可以在程序中使用这些标准的异常。它们是以父子类层次结构组织起来的，如下所示</p><h2 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h2><p>引入了命名空间这个概念，专门用于解决上面的问题，它可作为附加信息来区分不同库中相同名称的函数、类、变量等。使用了命名空间即定义了上下文。本质上，命名空间就是定义了一个范围。</p><h3 id="定义命名空间" tabindex="-1"><a class="header-anchor" href="#定义命名空间" aria-hidden="true">#</a> 定义命名空间</h3><p>命名空间的定义使用关键字 namespace，后跟命名空间的名称，如下所示：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>namespace namespace_name <span class="token punctuation">{</span>
   <span class="token comment">// 代码声明</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了调用带有命名空间的函数或变量，需要在前面加上命名空间的名称，如下所示：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>name<span class="token operator">::</span>code<span class="token punctuation">;</span>  <span class="token comment">// code 可以是变量或函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>

<span class="token comment">// 第一个命名空间</span>
namespace first_space
<span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Inside first_space&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 第二个命名空间</span>
namespace second_space
<span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Inside second_space&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token comment">// 调用第一个命名空间中的函数</span>
    first_space<span class="token operator">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 调用第二个命名空间中的函数</span>
    second_space<span class="token operator">::</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Inside first_space
Inside second_space
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-指令" tabindex="-1"><a class="header-anchor" href="#using-指令" aria-hidden="true">#</a> using 指令</h2><p>您可以使用 using namespace 指令，这样在使用命名空间时就可以不用在前面加上命名空间的名称。这个指令会告诉编译器，后续的代码将使用指定的命名空间中的名称。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>

<span class="token comment">// 第一个命名空间</span>
namespace first_space
<span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Inside first_space&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 第二个命名空间</span>
namespace second_space
<span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Inside second_space&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
using namespace first_space<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    <span class="token comment">// 调用第一个命名空间中的函数</span>
    <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Inside first_space
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2><p>// todo</p><h2 id="信号处理" tabindex="-1"><a class="header-anchor" href="#信号处理" aria-hidden="true">#</a> 信号处理</h2><p>信号是由操作系统传给进程的中断，会提早终止一个程序。在 <code>UNIX、LINUX、Mac OS X</code> 或 <code>Windows</code> 系统上， 可以通过按 <code>Ctrl+C </code>产生中断。</p><p>有些信号不能被程序捕获，但是下表所列信号可以在程序中捕获，并可以基于信号采取适当的动作。 这些信号是定义在 <code>C++</code> 头文件 <code>&lt;csignal&gt;</code> 中</p><p><img src="`+u+`" alt="" loading="lazy"></p><h2 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程" aria-hidden="true">#</a> 多线程</h2><p>要使用 POSIX 编写多线程 C++ 程序。POSIX Threads 或 Pthreads 提供的 API 可在多种类 Unix POSIX 系统上可用，比如 FreeBSD、NetBSD、GNU/Linux、Mac OS X 和 Solaris。</p><h3 id="创建线程" tabindex="-1"><a class="header-anchor" href="#创建线程" aria-hidden="true">#</a> 创建线程</h3><p>下面的程序，我们可以用它来创建一个 POSIX 线程：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token function">pthread_create</span> <span class="token punctuation">(</span>thread<span class="token punctuation">,</span> attr<span class="token punctuation">,</span> start_routine<span class="token punctuation">,</span> arg<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>thread_create 创建一个新的线程，并让它可执行。下面是关于参数的说明：</p><p><img src="`+r+`" alt="" loading="lazy"></p><p>创建线程成功时，函数返回 0，若返回值不为 0 则说明创建线程失败。</p><h3 id="终止线程" tabindex="-1"><a class="header-anchor" href="#终止线程" aria-hidden="true">#</a> 终止线程</h3><p>使用下面的程序，我们可以用它来终止一个 POSIX 线程：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;pthread.h&gt;</span></span>
<span class="token function">pthread_exit</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，<code>pthread_exit </code>用于显式地退出一个线程。通常情况下，<code>pthread_exit()</code> 函数是在线程完成工作后无需继续存在时被调用。</p><p>如果 <code>main() </code>是在它所创建的线程之前结束，并通过 <code>pthread_exit()</code> 退出，那么其他线程将继续执行。否则，它们将在 <code>main() </code>结束时自动被终止。</p><h2 id="web-编程" tabindex="-1"><a class="header-anchor" href="#web-编程" aria-hidden="true">#</a> Web 编程</h2><p>什么是 CGI？</p><pre><code>公共网关接口（CGI），是一套标准，定义了信息是如何在 Web 服务器和客户端脚本之间进行交换的。
CGI 规范目前是由 NCSA 维护的，NCSA 定义 CGI 如下：
公共网关接口（CGI），是一种用于外部网关程序与信息服务器（如 HTTP 服务器）对接的接口标准。
目前的版本是 CGI/1.1，CGI/1.2 版本正在推进中。
</code></pre>`,59);function g(f,_){const s=l("ExternalLinkIcon");return e(),c("div",null,[n("div",m,[k,n("p",null,[n("a",b,[i("https://www.runoob.com/cplusplus/cpp-files-streams.html"),t(s)])])]),h])}const y=a(v,[["render",g],["__file","cpp高级.html.vue"]]);export{y as default};
