import{_ as c,X as t,Y as p,Z as a,a1 as n,$ as o,a2 as s,C as d}from"./framework-0b23a550.js";const i="/assets/synchronized-demo-9175c703.png",l="/assets/synchronized-method-d1f7ca3b.png",r="/assets/reentrantlock-1506b754.png",u="/assets/reentrantwritelock-89001241.png",k={},h=s(`<h2 id="synchronized-关键字" tabindex="-1"><a class="header-anchor" href="#synchronized-关键字" aria-hidden="true">#</a> synchronized 关键字</h2><h3 id="synchronized-是什么-有什么用" tabindex="-1"><a class="header-anchor" href="#synchronized-是什么-有什么用" aria-hidden="true">#</a> synchronized 是什么？有什么用？</h3><p><code>synchronized</code> 是 Java 中的一个关键字，翻译成中文是同步的意思，主要解决的是多个线程之间访问资源的同步性， 可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。</p><p>在 Java 早期版本中，<code>synchronized</code> 属于 <strong>重量级锁</strong>，效率低下。这是因为监视器锁（monitor）是依赖于底层的操作系统的 <code>Mutex Lock</code> 来实现的，Java 的线程是映射到操作系统的原生线程之上的。如果要挂起或者唤醒一个线程，都需要操作系统帮忙完成，而操作系统实现线程之间的切换时需要从用户态转换到内核态，这个状态之间的转换需要相对比较长的时间，时间成本相对较高。</p><p>不过，在 Java 6 之后， <code>synchronized</code> 引入了大量的优化如<u>自旋锁、适应性自旋锁、锁消除、锁粗化、偏向锁、轻量级锁</u> 等技术来减少锁操作的开销，这些优化让 <code>synchronized</code> 锁的效率提升了很多。因此， <code>synchronized</code> 还是可以在 实际项目中使用的，像<code>JDK</code>源码、很多开源框架都大量使用了 <code>synchronized</code> 。</p><h3 id="如何使用-synchronized" tabindex="-1"><a class="header-anchor" href="#如何使用-synchronized" aria-hidden="true">#</a> 如何使用 synchronized?</h3><p><code>synchronized</code> 关键字的使用方式主要有下面 3 种：</p><ol><li>修饰实例方法</li><li>修饰静态方法</li><li>修饰代码块</li></ol><p><strong>1、修饰实例方法</strong> （锁当前对象实例）</p><p>给当前对象实例加锁，进入同步代码前要获得 <strong>当前对象实例的锁</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//业务代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、修饰静态方法</strong> （锁当前类）</p><p>给当前类加锁，会作用于类的所有对象实例 ，进入同步代码前要获得 <strong>当前 class 的锁</strong>。</p><p>这是因为静态成员不属于任何一个实例对象，归整个类所有，不依赖于类的特定实例，被类的所有实例共享。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">synchronized</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//业务代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态 <code>synchronized</code> 方法和非静态 <code>synchronized</code> 方法之间的调用互斥么？不互斥！如果一个线程 A 调用一个实例对象的非静态 <code>synchronized</code> 方法，而线程 B 需要调用这个实例对象所属类的静态 <code>synchronized</code> 方法，是允许的，不会发生互斥现象，因为访问静态 <code>synchronized</code> 方法占用的锁是当前类的锁，而访问非静态 <code>synchronized</code> 方法占用的锁是当前实例对象锁。</p><p><strong>3、修饰代码块</strong> （锁指定对象/类）</p><p>对括号里指定的对象/类加锁：</p><ul><li><code>synchronized(object)</code> 表示进入同步代码库前要获得 <strong>给定对象的锁</strong>。</li><li><code>synchronized(类.class)</code> 表示进入同步代码前要获得 <strong>给定 Class 的锁</strong></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//业务代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p><ul><li><code>synchronized</code> 关键字加到 <code>static</code> 静态方法和 <code>synchronized(class)</code> 代码块上都是是给 Class 类上锁；</li><li><code>synchronized</code> 关键字加到实例方法上是给对象实例上锁；</li><li>尽量不要使用 <code>synchronized(String a)</code> 因为 JVM 中，字符串常量池具有缓存功能。</li></ul><h3 id="构造方法可以用-synchronized-修饰么" tabindex="-1"><a class="header-anchor" href="#构造方法可以用-synchronized-修饰么" aria-hidden="true">#</a> 构造方法可以用 synchronized 修饰么？</h3><p>先说结论：<strong>构造方法不能使用 synchronized 关键字修饰。</strong></p><p>构造方法本身就属于线程安全的，不存在同步的构造方法一说。</p><h3 id="synchronized-底层原理了解吗" tabindex="-1"><a class="header-anchor" href="#synchronized-底层原理了解吗" aria-hidden="true">#</a> synchronized 底层原理了解吗？</h3><p>synchronized 关键字底层原理属于 JVM 层面的东西。</p><h4 id="synchronized-同步语句块的情况" tabindex="-1"><a class="header-anchor" href="#synchronized-同步语句块的情况" aria-hidden="true">#</a> synchronized 同步语句块的情况</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;synchronized 代码块&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 JDK 自带的 <code>javap</code> 命令查看 <code>SynchronizedDemo</code> 类的相关字节码信息：首先切换到类的对应目录执行 <code>javac SynchronizedDemo.java</code> 命令生成编译后的 .class 文件，然后执行<code>javap -c -s -v -l SynchronizedDemo.class</code>。</p><p><img src="`+i+`" alt="synchroizeddemo" loading="lazy"></p><p>从上面我们可以看出：<strong><code>synchronized</code> 同步语句块的实现使用的是 <code>monitorenter</code> 和 <code>monitorexit</code> 指令，其中 <code>monitorenter</code> 指令指向同步代码块的开始位置，<code>monitorexit</code> 指令则指明同步代码块的结束位置。</strong></p><p>上面的字节码中包含一个 <code>monitorenter</code> 指令以及两个 <code>monitorexit</code> 指令，这是为了保证锁在同步代码块代码正常执行以及出现异常的这两种情况下都能被正确释放。</p><p>当执行 <code>monitorenter</code> 指令时，线程试图获取锁也就是获取 <strong>对象监视器 <code>monitor</code></strong> 的持有权。</p><blockquote><p>在 Java 虚拟机(HotSpot)中，Monitor 是基于 C++实现的，由ObjectMonitor实现的。每个对象中都内置了一个 <code>ObjectMonitor</code>对象。</p><p>另外，<code>wait/notify</code>等方法也依赖于<code>monitor</code>对象，这就是为什么只有在同步的块或者方法中才能调用<code>wait/notify</code>等方法，否则会抛出<code>java.lang.IllegalMonitorStateException</code>的异常的原因。</p></blockquote><p>在执行<code>monitorenter</code>时，会尝试获取对象的锁，如果锁的计数器为 0 则表示锁可以被获取，获取后将锁计数器设为 1 也就是加 1。</p><p>对象锁的的拥有者线程才可以执行 <code>monitorexit</code> 指令来释放锁。在执行 <code>monitorexit</code> 指令后，将锁计数器设为 0，表明锁被释放，其他线程可以尝试获取锁。</p><p>如果获取对象锁失败，那当前线程就要阻塞等待，直到锁被另外一个线程释放为止。</p><h4 id="synchronized-修饰方法的的情况" tabindex="-1"><a class="header-anchor" href="#synchronized-修饰方法的的情况" aria-hidden="true">#</a> synchronized 修饰方法的的情况</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;synchronized 方法&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="synchroizedmethod" loading="lazy"></p><p><code>synchronized</code> 修饰的方法并没有 <code>monitorenter</code> 指令和 <code>monitorexit</code> 指令，取得代之的确实是 <code>ACC_SYNCHRONIZED</code> 标识，该标识指明了该方法是一个同步方法。JVM 通过该 <code>ACC_SYNCHRONIZED</code> 访问标志来辨别一个方法是否声明为同步方法，从而执行相应的同步调用。</p><p>如果是实例方法，JVM 会尝试获取实例对象的锁。如果是静态方法，<code>JVM</code> 会尝试获取当前 <code>class </code>的锁。</p><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p><code>synchronized</code> 同步语句块的实现使用的是 <code>monitorenter</code> 和 <code>monitorexit</code> 指令，其中 <code>monitorenter</code> 指令指向同步代码块的开始位置，<code>monitorexit</code> 指令则指明同步代码块的结束位置。</p><p><code>synchronized</code> 修饰的方法并没有 <code>monitorenter</code> 指令和 <code>monitorexit</code> 指令，取得代之的确实是 <code>ACC_SYNCHRONIZED</code> 标识，该标识指明了该方法是一个同步方法。</p><p><strong>不过两者的本质都是对对象监视器 monitor 的获取。</strong></p><h3 id="jdk1-6-之后的-synchronized-底层做了哪些优化" tabindex="-1"><a class="header-anchor" href="#jdk1-6-之后的-synchronized-底层做了哪些优化" aria-hidden="true">#</a> JDK1.6 之后的 synchronized 底层做了哪些优化？</h3><p>JDK1.6 对锁的实现引入了大量的优化，如<u>偏向锁、轻量级锁、自旋锁、适应性自旋锁、锁消除、锁粗化</u>等技术来减少锁操作的开销。</p><p>锁主要存在四种状态，依次是：<u>无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态</u>，他们会随着竞争的激烈而逐渐升级。注意锁可以升级不可降级，这种策略是为了提高获得锁和释放锁的效率。</p>',50),m={href:"https://www.cnblogs.com/wuqinglong/p/9945618.html",target:"_blank",rel:"noopener noreferrer"},v=s(`<h3 id="synchronized-和-volatile-有什么区别" tabindex="-1"><a class="header-anchor" href="#synchronized-和-volatile-有什么区别" aria-hidden="true">#</a> synchronized 和 volatile 有什么区别？</h3><p><code>synchronized</code> 关键字和 <code>volatile</code> 关键字是两个互补的存在，而不是对立的存在！</p><ul><li><code>volatile</code> 关键字是线程同步的轻量级实现，所以 <code>volatile</code>性能肯定比<code>synchronized</code>关键字要好 。但是 <code>volatile</code> 关键字<u>只能用于变量</u>而 <code>synchronized</code> 关键字可以<u>修饰方法以及代码块</u> 。</li><li><code>volatile</code> 关键字能保证数据的可见性，但不能保证数据的原子性。<code>synchronized</code> 关键字两者都能保证。</li><li><code>volatile</code>关键字主要用于解决变量在多个线程之间的<u>可见性</u>，而 <code>synchronized</code> 关键字解决的是多个线程之间访问<u>资源的同步性</u>。</li></ul><h2 id="reentrantlock" tabindex="-1"><a class="header-anchor" href="#reentrantlock" aria-hidden="true">#</a> ReentrantLock</h2><h3 id="reentrantlock-是什么" tabindex="-1"><a class="header-anchor" href="#reentrantlock-是什么" aria-hidden="true">#</a> ReentrantLock 是什么？</h3><p><code>ReentrantLock</code> 实现了 <code>Lock</code> 接口，是一个可重入且独占式的锁，和 <code>synchronized</code> 关键字类似。不过，<code>ReentrantLock</code> 更灵活、更强大，增加了轮询、超时、中断、公平锁和非公平锁等高级功能。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReentrantLock</span> <span class="token keyword">implements</span> <span class="token class-name">Lock</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ReentrantLock</code> 里面有一个内部类 <code>Sync</code>，<code>Sync</code> 继承 AQS（<code>AbstractQueuedSynchronizer</code>），添加锁和释放锁的大部分操作实际上都是在 <code>Sync</code> 中实现的。<code>Sync</code> 有公平锁 <code>FairSync</code> 和非公平锁 <code>NonfairSync</code> 两个子类。</p><p><img src="`+r+`" alt="reentrantlock" loading="lazy"></p><p><code>ReentrantLock</code> 默认使用非公平锁，也可以通过构造器来显式的指定使用公平锁。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 传入一个 boolean 值，true 时为公平锁，false 时为非公平锁</span>
<span class="token keyword">public</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sync <span class="token operator">=</span> fair <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">FairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),y=a("code",null,"ReentrantLock",-1),b={href:"https://javaguide.cn/java/concurrent/aqs.html",target:"_blank",rel:"noopener noreferrer"},g=s(`<h3 id="公平锁和非公平锁有什么区别" tabindex="-1"><a class="header-anchor" href="#公平锁和非公平锁有什么区别" aria-hidden="true">#</a> 公平锁和非公平锁有什么区别？</h3><ul><li><strong>公平锁</strong> : 锁被释放之后，先申请的线程先得到锁。性能较差一些，因为公平锁为了保证时间上的绝对顺序，上下文切换更频繁。</li><li><strong>非公平锁</strong> ：锁被释放之后，后申请的线程可能会先获取到锁，是随机或者按照其他优先级排序的。性能更好，但可能会导致某些线程永远无法获取到锁。</li></ul><h3 id="synchronized-和-reentrantlock-有什么区别" tabindex="-1"><a class="header-anchor" href="#synchronized-和-reentrantlock-有什么区别" aria-hidden="true">#</a> synchronized 和 ReentrantLock 有什么区别？</h3><h4 id="两者都是可重入锁" tabindex="-1"><a class="header-anchor" href="#两者都是可重入锁" aria-hidden="true">#</a> 两者都是可重入锁</h4><p><strong>可重入锁</strong> 也叫递归锁，指的是线程可以再次获取自己的内部锁。比如一个线程获得了某个对象的锁，此时这个对象锁还没有释放，当其再次想要获取这个对象的锁的时候还是可以获取的，如果是不可重入锁的话，就会造成死锁。</p><p>JDK 提供的所有现成的 <code>Lock</code> 实现类，包括 <code>synchronized</code> 关键字锁都是可重入的。</p><p>在下面的代码中，<code>method1()</code> 和 <code>method2()</code>都被 <code>synchronized</code> 关键字修饰，<code>method1()</code>调用了<code>method2()</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReentrantLockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;方法2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 <code>synchronized</code>锁是可重入的，同一个线程在调用<code>method1()</code> 时可以直接获得当前对象的锁，执行 <code>method2()</code> 的时候可以再次获取这个对象的锁，不会产生死锁问题。假如<code>synchronized</code>是不可重入锁的话，由于该对象的锁已被当前线程所持有且无法释放，这就导致线程在执行 <code>method2()</code>时获取锁失败，会出现死锁问题。</p><h4 id="synchronized-依赖于-jvm-而-reentrantlock-依赖于-api" tabindex="-1"><a class="header-anchor" href="#synchronized-依赖于-jvm-而-reentrantlock-依赖于-api" aria-hidden="true">#</a> synchronized 依赖于 JVM 而 ReentrantLock 依赖于 API</h4><p><code>synchronized</code> 是依赖于 JVM 实现的，前面我们也讲到了 虚拟机团队在 JDK1.6 为 <code>synchronized</code> 关键字进行了很多优化，但是这些优化都是在虚拟机层面实现的，并没有直接暴露给我们。</p><p><code>ReentrantLock</code> 是 JDK 层面实现的（也就是 API 层面，需要 lock() 和 unlock() 方法配合 try/finally 语句块来完成），所以我们可以通过查看它的源代码，来看它是如何实现的。</p><h4 id="reentrantlock-比-synchronized-增加了一些高级功能" tabindex="-1"><a class="header-anchor" href="#reentrantlock-比-synchronized-增加了一些高级功能" aria-hidden="true">#</a> ReentrantLock 比 synchronized 增加了一些高级功能</h4><p>相比<code>synchronized</code>，<code>ReentrantLock</code>增加了一些高级功能。主要来说主要有三点：</p><ul><li><strong>等待可中断</strong> : <code>ReentrantLock</code>提供了一种能够中断等待锁的线程的机制，通过 <code>lock.lockInterruptibly()</code> 来实现这个机制。也就是说正在等待的线程可以选择放弃等待，改为处理其他事情。</li><li><strong>可实现公平锁</strong> : <code>ReentrantLock</code>可以指定是公平锁还是非公平锁。而<code>synchronized</code>只能是非公平锁。所谓的公平锁就是先等待的线程先获得锁。<code>ReentrantLock</code>默认情况是非公平的，可以通过 <code>ReentrantLock</code>类的<code>ReentrantLock(boolean fair)</code>构造方法来制定是否是公平的。</li><li><strong>可实现选择性通知（锁可以绑定多个条件）</strong>: <code>synchronized</code>关键字与<code>wait()</code>和<code>notify()</code>/<code>notifyAll()</code>方法相结合可以实现等待/通知机制。<code>ReentrantLock</code>类当然也可以实现，但是需要借助于<code>Condition</code>接口与<code>newCondition()</code>方法。</li></ul><p>如果你想使用上述功能，那么选择 <code>ReentrantLock</code> 是一个不错的选择。</p><p>关于 <code>Condition</code>接口的补充：</p><blockquote><p><code>Condition</code>是 JDK1.5 之后才有的，它具有很好的灵活性，比如可以实现多路通知功能也就是在一个<code>Lock</code>对象中可以创建多个<code>Condition</code>实例（即对象监视器），<strong>线程对象可以注册在指定的<code>Condition</code>中，从而可以有选择性的进行线程通知，在调度线程上更加灵活。 在使用<code>notify()/notifyAll()</code>方法进行通知时，被通知的线程是由 JVM 选择的，用<code>ReentrantLock</code>类结合<code>Condition</code>实例可以实现“选择性通知”</strong> ，这个功能非常重要，而且是 <code>Condition</code> 接口默认提供的。而<code>synchronized</code>关键字就相当于整个 <code>Lock</code> 对象中只有一个<code>Condition</code>实例，所有的线程都注册在它一个身上。如果执行<code>notifyAll()</code>方法的话就会通知所有处于等待状态的线程，这样会造成很大的效率问题。而<code>Condition</code>实例的<code>signalAll()</code>方法，只会唤醒注册在该<code>Condition</code>实例中的所有等待线程。</p></blockquote><h3 id="可中断锁和不可中断锁有什么区别" tabindex="-1"><a class="header-anchor" href="#可中断锁和不可中断锁有什么区别" aria-hidden="true">#</a> 可中断锁和不可中断锁有什么区别？</h3><ul><li><strong>可中断锁</strong> ：获取锁的过程中可以被中断，不需要一直等到获取锁之后 才能进行其他逻辑处理。<code>ReentrantLock</code> 就属于是可中断锁。</li><li><strong>不可中断锁</strong> ：一旦线程申请了锁，就只能等到拿到锁以后才能进行其他的逻辑处理。 <code>synchronized</code> 就属于是不可中断锁。</li></ul><h2 id="reentrantreadwritelock" tabindex="-1"><a class="header-anchor" href="#reentrantreadwritelock" aria-hidden="true">#</a> ReentrantReadWriteLock</h2><p><code>ReentrantReadWriteLock</code> 在实际项目中使用的并不多，面试中也问的比较少，简单了解即可。JDK 1.8 引入了性能更好的读写锁 <code>StampedLock</code> 。</p><h3 id="reentrantreadwritelock-是什么" tabindex="-1"><a class="header-anchor" href="#reentrantreadwritelock-是什么" aria-hidden="true">#</a> ReentrantReadWriteLock 是什么？</h3><p><code>ReentrantReadWriteLock</code> 实现了 <code>ReadWriteLock</code> ，是一个可重入的读写锁，既可以保证多个线程同时读的效率，同时又可以保证有写入操作时的线程安全。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReentrantReadWriteLock</span>
        <span class="token keyword">implements</span> <span class="token class-name">ReadWriteLock</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ReadWriteLock</span> <span class="token punctuation">{</span>
    <span class="token class-name">Lock</span> <span class="token function">readLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Lock</span> <span class="token function">writeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>一般锁进行并发控制的规则：读读互斥、读写互斥、写写互斥。</li><li>读写锁进行并发控制的规则：读读不互斥、读写互斥、写写互斥（只有读读不互斥）。</li></ul><p><code>ReentrantReadWriteLock</code> 其实是两把锁，一把是 <code>WriteLock</code> (写锁)，一把是 <code>ReadLock</code>（读锁） 。读锁是共享锁，写锁是独占锁。读锁可以被同时读，可以同时被多个线程持有，而写锁最多只能同时被一个线程持有。</p><p>和 <code>ReentrantLock</code> 一样，<code>ReentrantReadWriteLock</code> 底层也是基于 AQS 实现的。</p><p><img src="`+u+`" alt="" loading="lazy"></p><p><code>ReentrantReadWriteLock</code> 也支持公平锁和非公平锁，默认使用非公平锁，可以通过构造器来显示的指定。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 传入一个 boolean 值，true 时为公平锁，false 时为非公平锁</span>
<span class="token keyword">public</span> <span class="token class-name">ReentrantReadWriteLock</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sync <span class="token operator">=</span> fair <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">FairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    readerLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReadLock</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    writerLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WriteLock</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reentrantreadwritelock-适合什么场景" tabindex="-1"><a class="header-anchor" href="#reentrantreadwritelock-适合什么场景" aria-hidden="true">#</a> ReentrantReadWriteLock 适合什么场景？</h3><p>由于 <code>ReentrantReadWriteLock</code> 既可以保证多个线程同时读的效率，同时又可以保证有写入操作时的线程安全。因此，在读多写少的情况下，使用 <code>ReentrantReadWriteLock</code> 能够明显提升系统性能。</p><h3 id="共享锁和独占锁有什么区别" tabindex="-1"><a class="header-anchor" href="#共享锁和独占锁有什么区别" aria-hidden="true">#</a> 共享锁和独占锁有什么区别？</h3><ul><li><strong>共享锁</strong> ：一把锁可以被多个线程同时获得。</li><li><strong>独占锁</strong> ：一把锁只能被一个线程获得。</li></ul><h3 id="线程持有读锁还能获取写锁吗" tabindex="-1"><a class="header-anchor" href="#线程持有读锁还能获取写锁吗" aria-hidden="true">#</a> 线程持有读锁还能获取写锁吗？</h3><ul><li>在线程持有读锁的情况下，该线程不能取得写锁(因为获取写锁的时候，如果发现当前的读锁被占用，就马上获取失败，不管读锁是不是被当前线程持有)。</li><li>在线程持有写锁的情况下，该线程可以继续获取读锁（获取读锁时如果发现写锁被占用，只有写锁没有被当前线程占用的情况才会获取失败）。</li></ul>`,37),z={href:"https://mp.weixin.qq.com/s/h3VIUyH9L0v14MrQJiiDbw",target:"_blank",rel:"noopener noreferrer"},L=s(`<h3 id="读锁为什么不能升级为写锁" tabindex="-1"><a class="header-anchor" href="#读锁为什么不能升级为写锁" aria-hidden="true">#</a> 读锁为什么不能升级为写锁？</h3><p>写锁可以降级为读锁，但是读锁却不能升级为写锁。这是因为读锁升级为写锁会引起线程的争夺，毕竟写锁属于是独占锁，这样的话，会影响性能。</p><p>另外，还可能会有死锁问题发生。举个例子：假设两个线程的读锁都想升级写锁，则需要对方都释放自己锁，而双方都不释放，就会产生死锁。</p><h2 id="stampedlock" tabindex="-1"><a class="header-anchor" href="#stampedlock" aria-hidden="true">#</a> StampedLock</h2><p><code>StampedLock</code> 面试中问的比较少，不是很重要，简单了解即可。</p><h3 id="stampedlock-是什么" tabindex="-1"><a class="header-anchor" href="#stampedlock-是什么" aria-hidden="true">#</a> StampedLock 是什么？</h3><p><code>StampedLock</code> 是 JDK 1.8 引入的性能更好的读写锁，不可重入且不支持条件变量 <code>Conditon</code>。</p><p>不同于一般的 <code>Lock</code> 类，<code>StampedLock</code> 并不是直接实现 <code>Lock</code>或 <code>ReadWriteLock</code>接口，而是基于 <strong>CLH 锁</strong> 独立实现的（AQS 也是基于这玩意）。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StampedLock</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>StampedLock</code> 提供了三种模式的读写控制模式：读锁、写锁和乐观读。</p><ul><li><strong>写锁</strong>：独占锁，一把锁只能被一个线程获得。当一个线程获取写锁后，其他请求读锁和写锁的线程必须等待。类似于 <code>ReentrantReadWriteLock</code> 的写锁，不过这里的写锁是不可重入的。</li><li><strong>读锁</strong> （悲观读）：共享锁，没有线程获取写锁的情况下，多个线程可以同时持有读锁。如果己经有线程持有写锁，则其他线程请求获取该读锁会被阻塞。类似于 <code>ReentrantReadWriteLock</code> 的读锁，不过这里的读锁是不可重入的。</li><li><strong>乐观读</strong> ：允许多个线程获取乐观读以及读锁。同时允许一个写线程获取写锁。</li></ul><p>另外，<code>StampedLock</code> 还支持这三种锁在一定条件下进行相互转换 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">long</span> <span class="token function">tryConvertToWriteLock</span><span class="token punctuation">(</span><span class="token keyword">long</span> stamp<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">long</span> <span class="token function">tryConvertToReadLock</span><span class="token punctuation">(</span><span class="token keyword">long</span> stamp<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">long</span> <span class="token function">tryConvertToOptimisticRead</span><span class="token punctuation">(</span><span class="token keyword">long</span> stamp<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>StampedLock</code> 在获取锁的时候会返回一个 long 型的数据戳，该数据戳用于稍后的锁释放参数，如果返回的数据戳为 0 则表示锁获取失败。当前线程持有了锁再次获取锁还是会返回一个新的数据戳，这也是<code>StampedLock</code>不可重入的原因。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 写锁</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">writeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> s<span class="token punctuation">,</span> next<span class="token punctuation">;</span>  <span class="token comment">// bypass acquireWrite in fully unlocked case only</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s <span class="token operator">=</span> state<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token constant">ABITS</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0L</span> <span class="token operator">&amp;&amp;</span>
             <span class="token class-name">U</span><span class="token punctuation">.</span><span class="token function">compareAndSwapLong</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token constant">STATE</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> next <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token constant">WBIT</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span>
            next <span class="token operator">:</span> <span class="token function">acquireWrite</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 读锁</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">readLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> s <span class="token operator">=</span> state<span class="token punctuation">,</span> next<span class="token punctuation">;</span>  <span class="token comment">// bypass acquireRead on common uncontended case</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>whead <span class="token operator">==</span> wtail <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>s <span class="token operator">&amp;</span> <span class="token constant">ABITS</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token constant">RFULL</span> <span class="token operator">&amp;&amp;</span>
             <span class="token class-name">U</span><span class="token punctuation">.</span><span class="token function">compareAndSwapLong</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token constant">STATE</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> next <span class="token operator">=</span> s <span class="token operator">+</span> <span class="token constant">RUNIT</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">?</span>
            next <span class="token operator">:</span> <span class="token function">acquireRead</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 乐观读</span>
<span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">tryOptimisticRead</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span> s<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s <span class="token operator">=</span> state<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token constant">WBIT</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0L</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>s <span class="token operator">&amp;</span> <span class="token constant">SBITS</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0L</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stampedlock-的性能为什么更好" tabindex="-1"><a class="header-anchor" href="#stampedlock-的性能为什么更好" aria-hidden="true">#</a> StampedLock 的性能为什么更好？</h3><p>相比于传统读写锁多出来的乐观读是<code>StampedLock</code>比 <code>ReadWriteLock</code> 性能更好的关键原因。<code>StampedLock</code> 的乐观读允许一个写线程获取写锁，所以不会导致所有写线程阻塞，也就是当读多写少的时候，写线程有机会获取写锁，减少了线程饥饿的问题，吞吐量大大提高。</p><h3 id="stampedlock-适合什么场景" tabindex="-1"><a class="header-anchor" href="#stampedlock-适合什么场景" aria-hidden="true">#</a> StampedLock 适合什么场景？</h3><p>和 <code>ReentrantReadWriteLock</code> 一样，<code>StampedLock</code> 同样适合读多写少的业务场景，可以作为 <code>ReentrantReadWriteLock</code>的替代品，性能更好。</p><p>不过，需要注意的是<code>StampedLock</code>不可重入，不支持条件变量 <code>Conditon</code>，对中断操作支持也不友好（使用不当容易导致 CPU 飙升）。如果你需要用到 <code>ReentrantLock</code> 的一些高级性能，就不太建议使用 <code>StampedLock</code> 了。</p>`,20);function w(f,R){const e=d("ExternalLinkIcon");return t(),p("div",null,[h,a("p",null,[n("关于这几种优化的详细信息可以查看下面这篇文章："),a("a",m,[n("Java6 及以上版本对 synchronized 的优化"),o(e)]),n(" 。")]),v,a("p",null,[n("从上面的内容可以看出， "),y,n(" 的底层就是由 AQS 来实现的。关于 AQS 的相关内容推荐阅读 "),a("a",b,[n("AQS 详解"),o(e)]),n(" 这篇文章。")]),g,a("p",null,[n("读写锁的源码分析，推荐阅读 "),a("a",z,[n("聊聊 Java 的几把 JVM 级锁 - 阿里巴巴中间件 "),o(e)]),n(" 这篇文章，写的很不错。")]),L])}const S=c(k,[["render",w],["__file","lock.html.vue"]]);export{S as default};