import{_ as p,X as c,Y as i,Z as a,a1 as n,$ as e,a0 as t,a2 as o,C as l}from"./framework-0b23a550.js";const r="/assets/runtime-3b3c384f.png",u="/assets/thread-state-edfeb40c.png",d="/assets/deadlock-f06726ab.png",k="/assets/jmm-m-a05d6902.png",h={},g=o('<h2 id="什么是进程" tabindex="-1"><a class="header-anchor" href="#什么是进程" aria-hidden="true">#</a> 什么是进程？</h2><p>进程是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。在 Java 中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而 main 函数所在的线程就是这个进程中的一个线程，也称主线程。</p><h2 id="什么是线程" tabindex="-1"><a class="header-anchor" href="#什么是线程" aria-hidden="true">#</a> 什么是线程？</h2><p>线程与进程相似，但线程是一个比进程更小的执行单位。一个进程在其执行的过程中可以产生多个线程。与进程不同的是同类的多个线程共享进程的<em><strong>堆</strong></em>和<em><strong>方法区资源</strong></em>，但每个线程有自己的<em><strong>程序计数器</strong></em>、<em><strong>虚拟机栈</strong></em>和<em><strong>本地方法栈</strong></em>，所以系统在产生一个线程，或是在各个线程之间作切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程。</p><h2 id="什么jvm" tabindex="-1"><a class="header-anchor" href="#什么jvm" aria-hidden="true">#</a> 什么JVM</h2><p>JVM 是 Java Virtual Machine（Java 虚拟机）的缩写，它是整个 java实现跨平台的最核心的部分，所有的 java 程序会首先被编译为.class 的类文件，这种类文件可以在虚拟机上执行，也就是说 class 并不直接与机器的操作系统相对应，而是经过虚拟机间接与操作系统交互，由虚拟机将程序解释给本地系统执行。JVM 是 Java 平台的基础，和实际的机器一样，它也有自己的指令集，并且在运行时操作不同的内存区域。 JVM 通过抽象操作系统和 CPU 结构，提供了一种与平台无关的代码执行方法，即与特殊的实现方法、主机硬件、主机操作系统无关。JVM 的主要工作是解释自己的指令集（即字节码）到 CPU 的指令集或对应的系统调用，保护用户免被恶意程序骚扰.</p><h3 id="运行时数据区域" tabindex="-1"><a class="header-anchor" href="#运行时数据区域" aria-hidden="true">#</a> 运行时数据区域</h3><p><img src="'+r+'" alt="运行时数据区域" loading="lazy"> 从上图可以看出：多个线程共享进程的堆和方法区 (JDK1.8 之后的元空间)资源，但是每个线程有自己的程序计数器、虚拟机栈 和 本地方法栈。总结： 线程是进程划分成的更小的运行单位。线程和进程最大的不同在于基本上各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响。线程执行开销小，但不利于资源的管理和保护；而进程正相反.</p><h3 id="程序计数器" tabindex="-1"><a class="header-anchor" href="#程序计数器" aria-hidden="true">#</a> 程序计数器</h3><p>程序计数器主要有下面两个作用：</p><ol><li>字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制，如：顺序执行、选择、循环、异常处理。</li><li>在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。</li></ol><p>需要注意的是，如果执行的是 native 方法，那么程序计数器记录的是 undefined 地址，只有执行的是 Java 代码时程序计数器记录的才是下一条指令的地址。</p><p>所以，程序计数器私有主要是为了<strong>线程切换后能恢复到正确的执行位置</strong>。</p><h3 id="虚拟机栈和本地方法栈" tabindex="-1"><a class="header-anchor" href="#虚拟机栈和本地方法栈" aria-hidden="true">#</a> 虚拟机栈和本地方法栈</h3><ul><li><strong>虚拟机栈：</strong> 每个 Java 方法在执行的同时会创建一个栈帧用于存储局部变量表、操作数栈、常量池引用等信息。从方法调用直至执行完成的过程，就对应着一个栈帧在 Java 虚拟机栈中入栈和出栈的过程。</li><li><strong>本地方法栈：</strong> 和虚拟机栈所发挥的作用非常相似，区别是： <strong>虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。</strong> 在 HotSpot 虚拟机中和 Java 虚拟机栈合二为一。</li></ul><p>所以，为了<strong>保证线程中的局部变量不被别的线程访问到</strong>，虚拟机栈和本地方法栈是线程私有的。</p><h3 id="堆和方法区" tabindex="-1"><a class="header-anchor" href="#堆和方法区" aria-hidden="true">#</a> 堆和方法区</h3><p>堆和方法区是所有线程共享的资源，其中堆是进程中最大的一块内存，主要用于存放新创建的对象 (几乎所有对象都在这里分配内存)，方法区主要用于存放已被加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。</p><h2 id="并发与并行的区别" tabindex="-1"><a class="header-anchor" href="#并发与并行的区别" aria-hidden="true">#</a> 并发与并行的区别</h2><ul><li><strong>并发</strong>：两个及两个以上的作业在同一 <strong>时间段</strong> 内执行。</li><li><strong>并行</strong>：两个及两个以上的作业在同一 <strong>时刻</strong> 执行。</li></ul><p>最关键的点是：是否是 <strong>同时</strong> 执行。</p><h2 id="同步和异步的区别" tabindex="-1"><a class="header-anchor" href="#同步和异步的区别" aria-hidden="true">#</a> 同步和异步的区别</h2><ul><li><strong>同步</strong> ： 发出一个调用之后，在没有得到结果之前， 该调用就不可以返回，一直等待。</li><li><strong>异步</strong> ：调用在发出之后，不用等待返回结果，该调用直接返回。</li></ul><h2 id="为什么要使用多线程" tabindex="-1"><a class="header-anchor" href="#为什么要使用多线程" aria-hidden="true">#</a> 为什么要使用多线程?</h2><p>先从总体上来说：</p><ul><li><strong>从计算机底层来说：</strong> 线程可以比作是轻量级的进程，是程序执行的最小单位,线程间的切换和调度的成本远远小于进程。另外，多核 CPU 时代意味着多个线程可以同时运行，这减少了线程上下文切换的开销。</li><li><strong>从当代互联网发展趋势来说：</strong> 现在的系统动不动就要求百万级甚至千万级的并发量，而多线程并发编程正是开发高并发系统的基础，利用好多线程机制可以大大提高系统整体的并发能力以及性能。</li></ul><p>再深入到计算机底层来探讨：</p><ul><li><strong>单核时代</strong>： 在单核时代多线程主要是为了提高单进程利用 CPU 和 IO 系统的效率。 假设只运行了一个 Java 进程的情况，当我们请求 IO 的时候，如果 Java 进程中只有一个线程，此线程被 IO 阻塞则整个进程被阻塞。CPU 和 IO 设备只有一个在运行，那么可以简单地说系统整体效率只有 50%。当使用多线程的时候，一个线程被 IO 阻塞，其他线程还可以继续使用 CPU。从而提高了 Java 进程利用系统资源的整体效率。</li><li><strong>多核时代</strong>: 多核时代多线程主要是为了提高进程利用多核 CPU 的能力。举个例子：假如我们要计算一个复杂的任务，我们只用一个线程的话，不论系统有几个 CPU 核心，都只会有一个 CPU 核心被利用到。而创建多个线程，这些线程可以被映射到底层多个 CPU 上执行，在任务中的多个线程没有资源竞争的情况下，任务执行的效率会有显著性的提高，约等于（单核时执行时间/CPU 核心数）。</li></ul><h2 id="使用多线程可能带来什么问题" tabindex="-1"><a class="header-anchor" href="#使用多线程可能带来什么问题" aria-hidden="true">#</a> 使用多线程可能带来什么问题?</h2><p>并发编程的目的就是为了能提高程序的执行效率提高程序运行速度，但是并发编程并不总是能提高程序运行速度的，而且并发编程可能会遇到很多问题，比如：内存泄漏、死锁、线程不安全等等。</p><h2 id="说说线程的生命周期和状态" tabindex="-1"><a class="header-anchor" href="#说说线程的生命周期和状态" aria-hidden="true">#</a> 说说线程的生命周期和状态?</h2><p>Java 线程在运行的生命周期中的指定时刻只可能处于下面 6 种不同状态的其中一个状态：</p><ul><li>NEW: 初始状态，线程被创建出来但没有被调用 <code>start()</code> 。</li><li>RUNNABLE: 运行状态，线程被调用了 <code>start()</code>等待运行的状态。</li><li>BLOCKED ：阻塞状态，需要等待锁释放。</li><li>WAITING：等待状态，表示该线程需要等待其他线程做出一些特定动作（通知或中断）。</li><li>TIME_WAITING：超时等待状态，可以在指定的时间后自行返回而不是像 WAITING 那样一直等待。</li><li>TERMINATED：终止状态，表示该线程已经运行完毕。</li></ul><p><img src="'+u+'" alt="线程状态" loading="lazy"></p><p>由上图可以看出：线程创建之后它将处于 <strong>NEW（新建）</strong> 状态，调用 <code>start()</code> 方法后开始运行，线程这时候处于 <strong>READY（可运行）</strong> 状态。可运行状态的线程获得了 CPU 时间片（timeslice）后就处于 <strong>RUNNING（运行）</strong> 状态。</p><ul><li><u>当线程执行 <code>wait()</code>方法之后，线程进入 <strong>WAITING（等待）</strong> 状态</u>。进入等待状态的线程需要依靠其他线程的通知才能够返回到运行状态。</li><li><strong>TIMED_WAITING(超时等待)</strong> 状态相当于在等待状态的基础上增加了超时限制，比如<u>通过 <code>sleep（long millis）</code>方法或 <code>wait（long millis）</code>方法可以将线程置于 TIMED_WAITING 状态</u>。当超时时间结束后，线程将会返回到 RUNNABLE 状态。</li><li>当线程进入 <u><code>synchronized</code> 方法/块或者调用 <code>wait</code> 后（被 <code>notify</code>）重新进入 <code>synchronized</code> 方法/块，但是锁被其它线程占有，这个时候线程就会进入 <strong>BLOCKED（阻塞）</strong> 状态</u>。</li><li>线程在执行完了 <code>run()</code>方法之后将会进入到 <strong>TERMINATED（终止）</strong> 状态。</li></ul><h2 id="什么是线程上下文切换" tabindex="-1"><a class="header-anchor" href="#什么是线程上下文切换" aria-hidden="true">#</a> 什么是线程上下文切换?</h2><p>线程在执行过程中会有自己的运行条件和状态（也称上下文），比如上文所说到过的程序计数器，栈信息等。当出现如下情况的时候，线程会从占用 CPU 状态中退出。</p><ul><li>主动让出 CPU，比如调用了 <code>sleep()</code>, <code>wait()</code> 等。</li><li>时间片用完，因为操作系统要防止一个线程或者进程长时间占用 CPU 导致其他线程或者进程饿死。</li><li>调用了阻塞类型的系统中断，比如请求 IO，线程被阻塞。</li><li>被终止或结束运行</li></ul><p>这其中前三种都会发生线程切换，线程切换意味着需要保存当前线程的上下文，留待线程下次占用 CPU 的时候恢复现场。并加载下一个将要占用 CPU 的线程上下文。这就是所谓的 <strong>上下文切换</strong>。</p><p>上下文切换是现代操作系统的基本功能，因其每次需要保存信息恢复信息，这将会占用 CPU，内存等系统资源进行处理，也就意味着效率会有一定损耗，如果频繁切换就会造成整体效率低下。</p><h2 id="什么是线程死锁-如何避免死锁" tabindex="-1"><a class="header-anchor" href="#什么是线程死锁-如何避免死锁" aria-hidden="true">#</a> 什么是线程死锁?如何避免死锁?</h2><h3 id="认识线程死锁" tabindex="-1"><a class="header-anchor" href="#认识线程死锁" aria-hidden="true">#</a> 认识线程死锁</h3><p>线程死锁描述的是这样一种情况：多个线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于线程被无限期地阻塞，因此程序不可能正常终止。</p><p>如下图所示，线程 A 持有资源 2，线程 B 持有资源 1，他们同时都想申请对方的资源，所以这两个线程就会互相等待而进入死锁状态。</p><p><img src="'+d+`" alt="线程死锁" loading="lazy"></p><p>死锁例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//资源 1</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//资源 2</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;waiting get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;线程 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;waiting get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;线程 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Thread[线程 1,5,main]get resource1
Thread[线程 2,5,main]get resource2
Thread[线程 1,5,main]waiting get resource2
Thread[线程 2,5,main]waiting get resource1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>线程 A 通过 <code>synchronized (resource1)</code> 获得 <code>resource1</code> 的监视器锁，然后通过<code>Thread.sleep(1000);</code>让线程 A 休眠 1s 为的是让线程 B 得到执行然后获取到 resource2 的监视器锁。线程 A 和线程 B 休眠结束了都开始企图请求获取对方的资源，然后这两个线程就会陷入互相等待的状态，这也就产生了死锁。</p><p>上面的例子符合产生死锁的四个必要条件：</p><ol><li>互斥条件：该资源任意一个时刻只由一个线程占用。</li><li>请求与保持条件：一个线程因请求资源而阻塞时，对已获得的资源保持不放。</li><li>不剥夺条件:线程已获得的资源在未使用完之前不能被其他线程强行剥夺，只有自己使用完毕后才释放资源。</li><li>循环等待条件:若干线程之间形成一种头尾相接的循环等待资源关系。</li></ol><h3 id="如何预防和避免线程死锁" tabindex="-1"><a class="header-anchor" href="#如何预防和避免线程死锁" aria-hidden="true">#</a> 如何预防和避免线程死锁?</h3><p><strong>如何预防死锁？</strong> 破坏死锁的产生的必要条件即可：</p><ol><li><strong>破坏请求与保持条件</strong> ：一次性申请所有的资源。</li><li><strong>破坏不剥夺条件</strong> ：占用部分资源的线程进一步申请其他资源时，如果申请不到，可以主动释放它占有的资源。</li><li><strong>破坏循环等待条件</strong> ：靠按序申请资源来预防。按某一顺序申请资源，释放资源则反序释放。破坏循环等待条件。</li></ol><h2 id="sleep-方法和-wait-方法对比" tabindex="-1"><a class="header-anchor" href="#sleep-方法和-wait-方法对比" aria-hidden="true">#</a> sleep() 方法和 wait() 方法对比</h2><p><strong>共同点</strong> ：两者都可以暂停线程的执行。</p><p><strong>区别</strong> ：</p><ul><li><strong><code>sleep()</code> 方法没有释放锁，而 <code>wait()</code> 方法释放了锁</strong> 。</li><li><code>wait()</code> 通常被用于线程间交互/通信，<code>sleep()</code>通常被用于暂停执行。</li><li><code>wait()</code> 方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的 <code>notify()</code>或者 <code>notifyAll()</code> 方法。<code>sleep()</code>方法执行完成后，线程会自动苏醒，或者也可以使用 <code>wait(long timeout)</code> 超时后线程会自动苏醒。</li><li><code>sleep()</code> 是 <code>Thread</code> 类的静态本地方法，<code>wait()</code> 则是 <code>Object</code> 类的本地方法。为什么这样设计呢？</li></ul><h2 id="yield" tabindex="-1"><a class="header-anchor" href="#yield" aria-hidden="true">#</a> yield</h2><p>yield 即 &quot;谦让&quot;，也是 Thread 类的方法。它让掉当前线程 CPU的时间片，使正在运行中的线程重新变成就绪状态， 并重新竞争 CPU 的调度权。它可能会获取到，也有可能被其他线程获取到。</p><p>yield 和 sleep 的异同</p><ul><li>yield, sleep 都能暂停当前线程，sleep 可以指定具体休眠的时间，而 yield 则依赖 CPU 的时间片划分。</li><li>yield,sleep 两个在暂停过程中，如已经持有锁，则都不会释放锁资源。</li><li>yield 不能被中断，而 sleep 则可以接受中断</li></ul><p>如果一定要用它的话，一句话解释就是：yield 方法可以很好的控制多线程，如执行某项复杂的任务时，如果担心占用资源过多， 可以在完成某个重要的工作后使用 yield 方法让掉当前 CPU 的调度权，等下次获取到再继续执行，这样不但能完成自己的重要工作， 也能给其他线程一些运行的机会，避免一个线程长时间占有 CPU 资源。</p>`,65),m=a("li",null,"yield不能保证使得当前正在运行的线程迅速转换到就绪状态。",-1),v=a("li",null,"即使完成了迅速切换，系统通过线程调度机制从所有就绪线程中挑选下一个执行线程时， 就绪的线程有可能被选中，也有可能不被选中，其调度的过程受到其他因素（如优先级）的影响",-1),b=o('<h2 id="为什么-wait-方法不定义在-thread-中" tabindex="-1"><a class="header-anchor" href="#为什么-wait-方法不定义在-thread-中" aria-hidden="true">#</a> 为什么 wait() 方法不定义在 Thread 中？</h2><p><code>wait()</code> 是让获得对象锁的线程实现等待，会自动释放当前线程占有的对象锁。每个对象（<code>Object</code>）都拥有对象锁，既然要释放当前线程占有的对象锁并让其进入 WAITING 状态，自然是要操作对应的对象（<code>Object</code>）而非当前的线程（<code>Thread</code>）。</p><p>类似的问题：<strong>为什么 <code>sleep()</code> 方法定义在 <code>Thread</code> 中？</strong></p><p>因为 <code>sleep()</code> 是让当前线程暂停执行，不涉及到对象类，也不需要获得对象锁。</p><h2 id="可以直接调用-thread-类的-run-方法吗" tabindex="-1"><a class="header-anchor" href="#可以直接调用-thread-类的-run-方法吗" aria-hidden="true">#</a> 可以直接调用 Thread 类的 run 方法吗？</h2><p>这是另一个非常经典的 Java 多线程面试问题，而且在面试中会经常被问到。很简单，但是很多人都会答不上来！</p><p>new 一个 <code>Thread</code>，线程进入了新建状态。调用 <code>start()</code>方法，会启动一个线程并使线程进入了就绪状态，当分配到时间片后就可以开始运行了。 <code>start()</code> 会执行线程的相应准备工作，然后自动执行 <code>run()</code> 方法的内容，这是真正的多线程工作。 但是，直接执行 <code>run()</code> 方法，会把 <code>run()</code> 方法当成一个 main 线程下的普通方法去执行，并不会在某个线程中执行它，所以这并不是多线程工作。</p><p><strong>总结： 调用 <code>start()</code> 方法方可启动线程并使线程进入就绪状态，直接执行 <code>run()</code> 方法的话不会以多线程的方式执行。</strong></p><h2 id="java-内存模型" tabindex="-1"><a class="header-anchor" href="#java-内存模型" aria-hidden="true">#</a> java 内存模型</h2><p>JMM(Java内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。要想理解透彻 JMM（Java 内存模型），我们先要从 CPU 缓存模型和指令重排序 说起！</p><h3 id="从-cpu-缓存模型说起" tabindex="-1"><a class="header-anchor" href="#从-cpu-缓存模型说起" aria-hidden="true">#</a> 从 CPU 缓存模型说起</h3><p><strong>为什么要弄一个 CPU 高速缓存呢？</strong> 类比我们开发网站后台系统使用的缓存（比如 Redis）是为了解决程序处理速度和访问常规关系型数据库速度不对等的问题。 <strong>CPU 缓存则是为了解决 CPU 处理速度和内存处理速度不对等的问题。</strong></p><p>我们甚至可以把 <strong>内存看作外存的高速缓存</strong>，程序运行的时候我们把外存的数据复制到内存，由于内存的处理速度远远高于外存，这样提高了处理速度。</p><p>总结：<strong>CPU Cache 缓存的是内存数据用于解决 CPU 处理速度和内存不匹配的问题，内存缓存的是硬盘数据用于解决硬盘访问速度过慢的问题。</strong></p><h3 id="指令重排序" tabindex="-1"><a class="header-anchor" href="#指令重排序" aria-hidden="true">#</a> 指令重排序</h3><p>说完了 CPU 缓存模型，我们再来看看另外一个比较重要的概念 <strong>指令重排序</strong> 。</p><p>为了提升执行速度/性能，计算机在执行程序代码的时候，会对指令进行重排序。</p><p><strong>什么是指令重排序？</strong> 简单来说就是系统在执行代码的时候并不一定是按照你写的代码的顺序依次执行。</p><p>常见的指令重排序有下面 2 种情况：</p><ul><li><strong>编译器优化重排</strong> ：编译器（包括 JVM、JIT 编译器等）在不改变单线程程序语义的前提下，重新安排语句的执行顺序。</li><li><strong>指令并行重排</strong> ：现代处理器采用了指令级并行技术(Instruction-Level Parallelism，ILP)来将多条指令重叠执行。如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。</li></ul><p>另外，内存系统也会有“重排序”，但又不是真正意义上的重排序。在 JMM 里表现为主存和本地内存的内容可能不一致，进而导致程序在多线程下执行可能出现问题。</p><p>Java 源代码会经历 <strong>编译器优化重排 —&gt; 指令并行重排 —&gt; 内存系统重排</strong> 的过程，最终才变成操作系统可执行的指令序列。</p><p><strong>指令重排序可以保证串行语义一致，但是没有义务保证多线程间的语义也一致</strong> ，所以在多线程下，指令重排序可能会导致一些问题。</p><p>编译器和处理器的指令重排序的处理方式不一样。对于编译器，通过禁止特定类型的编译器重排序的方式来禁止重排序。对于处理器，通过插入内存屏障（Memory Barrier，或有时叫做内存栅栏，Memory Fence）的方式来禁止特定类型的处理器重排序。指令并行重排和内存系统重排都属于是处理器级别的指令重排序。</p><div class="hint-container info"><p class="hint-container-title">内存屏障</p><p>内存屏障（Memory Barrier，或有时叫做内存栅栏，Memory Fence）是一种 CPU 指令，用来禁止处理器指令发生重排序（像屏障一样），从而保障指令执行的有序性。另外，为了达到屏障的效果，它也会使处理器写入、读取值之前，将主内存的值写入高速缓存，清空无效队列，从而保障变量的可见性。</p></div><h2 id="jmm-java-memory-model" tabindex="-1"><a class="header-anchor" href="#jmm-java-memory-model" aria-hidden="true">#</a> JMM(Java Memory Model)</h2><h3 id="什么是-jmm-为什么需要-jmm" tabindex="-1"><a class="header-anchor" href="#什么是-jmm-为什么需要-jmm" aria-hidden="true">#</a> 什么是 JMM？为什么需要 JMM？</h3><ul><li>Java 语言是跨平台的</li></ul><p>一般来说，编程语言也可以直接复用操作系统层面的内存模型。不过，不同的操作系统内存模型不同。如果直接复用操作系统层面的内存模型，就可能会导致同样一套代码换了一个操作系统就无法执行了。Java 语言是跨平台的，它需要自己提供一套内存模型以屏蔽系统差异。</p><ul><li>对并发编程的支持</li></ul><p>JMM 看作是 Java 定义的并发编程相关的一组规范，除了抽象了线程和主内存之间的关系之外，其还规定了从 Java 源代码到 CPU 可执行指令的这个转化过程要遵守哪些和并发相关的原则和规范，其主要目的是为了简化多线程编程，增强程序可移植性的</p><h3 id="jmm-是如何抽象线程和主内存之间的关系" tabindex="-1"><a class="header-anchor" href="#jmm-是如何抽象线程和主内存之间的关系" aria-hidden="true">#</a> JMM 是如何抽象线程和主内存之间的关系？</h3><p><strong>Java 内存模型（JMM）</strong> 抽象了线程和主内存之间的关系，就比如说线程之间的共享变量必须存储在主内存中。</p><p>在 JDK1.2 之前，Java 的内存模型实现总是从 <strong>主存</strong> （即共享内存）读取变量，是不需要进行特别的注意的。而在当前的 Java 内存模型下，线程可以把变量保存 <strong>本地内存</strong> （比如机器的寄存器）中，而不是直接在主存中进行读写。这就可能造成一个线程在主存中修改了一个变量的值，而另外一个线程还继续使用它在寄存器中的变量值的拷贝，造成数据的不一致。</p><p><strong>什么是主内存？什么是本地内存？</strong></p><ul><li><strong>主内存</strong> ：所有线程创建的实例对象都存放在主内存中，不管该实例对象是成员变量还是方法中的本地变量(也称局部变量)</li><li><strong>本地内存</strong> ：每个线程都有一个私有的本地内存来存储共享变量的副本，并且，每个线程只能访问自己的本地内存，无法访问其他线程的本地内存。本地内存是 JMM 抽象出来的一个概念，存储了主内存中的共享变量副本。</li></ul><p>Java 内存模型的抽象示意图如下</p><p><img src="'+k+'" alt="java内存模式抽象" loading="lazy"></p><p>从上图来看，线程 1 与线程 2 之间如果要进行通信的话，必须要经历下面 2 个步骤：</p><ol><li>线程 1 把本地内存中修改过的共享变量副本的值同步到主内存中去。</li><li>线程 2 到主存中读取对应的共享变量的值。</li></ol><p>也就是说，JMM 为共享变量提供了可见性的保障。</p><p>不过，多线程下，对主内存中的一个共享变量进行操作有可能诱发线程安全问题。举个例子：</p><ol><li>线程 1 和线程 2 分别对同一个共享变量进行操作，一个执行修改，一个执行读取。</li><li>线程 2 读取到的是线程 1 修改之前的值还是修改后的值并不确定，都有可能，因为线程 1 和线程 2 都是先将共享变量从主内存拷贝到对应线程的工作内存中。</li></ol><p>关于主内存与工作内存直接的具体交互协议，即一个变量如何从主内存拷贝到工作内存，如何从工作内存同步到主内存之间的实现细节，Java 内存模型定义来以下八种同步操作（了解即可，无需死记硬背）：</p><ul><li><strong>锁定（lock）</strong>: 作用于主内存中的变量，将他标记为一个线程独享变量。</li><li><strong>解锁（unlock）</strong>: 作用于主内存中的变量，解除变量的锁定状态，被解除锁定状态的变量才能被其他线程锁定。</li><li><strong>read（读取）</strong>：作用于主内存的变量，它把一个变量的值从主内存传输到线程的工作内存中，以便随后的 load 动作使用。</li><li><strong>load(载入)</strong>：把 read 操作从主内存中得到的变量值放入工作内存的变量的副本中。</li><li><strong>use(使用)</strong>：把工作内存中的一个变量的值传给执行引擎，每当虚拟机遇到一个使用到变量的指令时都会使用该指令。</li><li><strong>assign（赋值）</strong>：作用于工作内存的变量，它把一个从执行引擎接收到的值赋给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作。</li><li><strong>store（存储）</strong>：作用于工作内存的变量，它把工作内存中一个变量的值传送到主内存中，以便随后的 write 操作使用。</li><li><strong>write（写入）</strong>：作用于主内存的变量，它把 store 操作从工作内存中得到的变量的值放入主内存的变量中。</li></ul><p>除了这 8 种同步操作之外，还规定了下面这些同步规则来保证这些同步操作的正确执行（了解即可，无需死记硬背）：</p><ul><li>不允许一个线程无原因地（没有发生过任何 assign 操作）把数据从线程的工作内存同步回主内存中。</li><li>一个新的变量只能在主内存中 “诞生”，不允许在工作内存中直接使用一个未被初始化（load 或 assign）的变量，换句话说就是对一个变量实施 use 和 store 操作之前，必须先执行过了 assign 和 load 操作。</li><li>一个变量在同一个时刻只允许一条线程对其进行 lock 操作，但 lock 操作可以被同一条线程重复执行多次，多次执行 lock 后，只有执行相同次数的 unlock 操作，变量才会被解锁。</li><li>如果对一个变量执行 lock 操作，将会清空工作内存中此变量的值，在执行引擎使用这个变量前，需要重新执行 load 或 assign 操作初始化变量的值。</li><li>如果一个变量事先没有被 lock 操作锁定，则不允许对它执行 unlock 操作，也不允许去 unlock 一个被其他线程锁定住的变量。</li><li>......</li></ul><h3 id="java-内存区域和-jmm-有何区别" tabindex="-1"><a class="header-anchor" href="#java-内存区域和-jmm-有何区别" aria-hidden="true">#</a> Java 内存区域和 JMM 有何区别？</h3><p>这是一个比较常见的问题，很多初学者非常容易搞混。 <strong>Java 内存区域和内存模型是完全不一样的两个东西</strong> ：</p><ul><li>JVM 内存结构和 Java 虚拟机的运行时区域相关，定义了 JVM 在运行时如何分区存储程序数据，就比如说堆主要用于存放对象实例。</li><li>Java 内存模型和 Java 的并发编程相关，抽象了线程和主内存之间的关系就比如说线程之间的共享变量必须存储在主内存中，规定了从 Java 源代码到 CPU 可执行指令的这个转化过程要遵守哪些和并发相关的原则和规范，其主要目的是为了简化多线程编程，增强程序可移植性的。</li></ul><h2 id="并发编程三个重要特性" tabindex="-1"><a class="header-anchor" href="#并发编程三个重要特性" aria-hidden="true">#</a> 并发编程三个重要特性</h2><h3 id="原子性" tabindex="-1"><a class="header-anchor" href="#原子性" aria-hidden="true">#</a> 1️⃣ 原子性</h3><p>一次操作或者多次操作，要么所有的操作全部都得到执行并且不会受到任何因素的干扰而中断，要么都不执行。 在 Java 中，可以借助<code>synchronized</code> 、各种 <code>Lock</code> 以及各种原子类实现原子性。 <code>synchronized</code> 和各种 <code>Lock</code> 可以保证任一时刻只有一个线程访问该代码块，因此可以保障原子性。各种原子类是利用 CAS (compare and swap) 操作（可能也会用到 <code>volatile</code>或者<code>final</code>关键字）来保证原子操作。</p><h3 id="可见性" tabindex="-1"><a class="header-anchor" href="#可见性" aria-hidden="true">#</a> 2️⃣ 可见性</h3><p>当一个线程对共享变量进行了修改，那么另外的线程都是立即可以看到修改后的最新值。 在 Java 中，可以借助<code>synchronized</code> 、<code>volatile</code> 以及各种 <code>Lock</code> 实现可见性。 如果我们将变量声明为 <code>volatile</code> ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。</p><h3 id="有序性" tabindex="-1"><a class="header-anchor" href="#有序性" aria-hidden="true">#</a> 3️⃣ 有序性</h3><p>由于指令重排序问题，代码的执行顺序未必就是编写代码时候的顺序。 我们上面讲重排序的时候也提到过：</p><blockquote><p><strong>指令重排序可以保证串行语义一致，但是没有义务保证多线程间的语义也一致</strong> ，所以在多线程下，指令重排序可能会导致一些问题。</p></blockquote><p>在 Java 中，<code>volatile</code> 关键字可以禁止指令进行重排序优化。</p>',59);function f(y,J){const s=l("font");return c(),i("div",null,[g,a("ul",null,[a("li",null,[n("yield仅能使一个线程从"),e(s,{color:"red"},{default:t(()=>[n("运行状态")]),_:1}),n("转到"),e(s,{color:"red"},{default:t(()=>[n("就绪状态")]),_:1}),n("，而"),e(s,{color:"red"},{default:t(()=>[n("不是阻塞状态")]),_:1}),n("。")]),m,v]),b])}const M=p(h,[["render",f],["__file","并发编程上.html.vue"]]);export{M as default};
