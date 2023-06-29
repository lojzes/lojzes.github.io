import{_ as t}from"./class-life-2-3a6ff617.js";import{_ as c,X as p,Y as l,Z as s,a1 as a,$ as e,a2 as i,C as d}from"./framework-b6ea3384.js";const o="/assets/类加载器层次关系-ed661148.png",u="/assets/tomcat-classload-1f08d0de.png",r={},k={class:"hint-container info"},v=s("p",{class:"hint-container-title"},"参考",-1),m={href:"https://javaguide.cn/java/jvm/classloader.html",target:"_blank",rel:"noopener noreferrer"},b=i('<h2 id="回顾一下类加载过程" tabindex="-1"><a class="header-anchor" href="#回顾一下类加载过程" aria-hidden="true">#</a> 回顾一下类加载过程</h2><p>开始介绍类加载器和双亲委派模型之前，简单回顾一下类加载过程。</p><ul><li>类加载过程：<strong>加载-&gt;连接-&gt;初始化</strong>。</li><li>连接过程又可分为三步：<strong>验证-&gt;准备-&gt;解析</strong>。</li></ul><p><img src="'+t+`" alt="类加载过程" loading="lazy"></p><p>加载是类加载过程的第一步，主要完成下面 3 件事情：</p><ol><li>通过全类名获取定义此类的二进制字节流</li><li>将字节流所代表的静态存储结构转换为方法区的运行时数据结构</li><li>在内存中生成一个代表该类的 <code>Class</code> 对象，作为方法区这些数据的访问入口</li></ol><h2 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器" aria-hidden="true">#</a> 类加载器</h2><h3 id="类加载器介绍" tabindex="-1"><a class="header-anchor" href="#类加载器介绍" aria-hidden="true">#</a> 类加载器介绍</h3><p>类加载器从 JDK 1.0 就出现了，最初只是为了满足 Java Applet（已经被淘汰） 的需要。后来，慢慢成为 Java 程序中的一个重要组成部分，赋予了 Java 类可以被动态加载到 JVM 中并执行的能力。</p><p>根据官方 API 文档的介绍：</p><blockquote><p>A class loader is an object that is responsible for loading classes. The class ClassLoader is an abstract class. Given the binary name of a class, a class loader should attempt to locate or generate data that constitutes a definition for the class. A typical strategy is to transform the name into a file name and then read a &quot;class file&quot; of that name from a file system.</p><p>Every Class object contains a reference to the ClassLoader that defined it.</p><p>Class objects for array classes are not created by class loaders, but are created automatically as required by the Java runtime. The class loader for an array class, as returned by Class.getClassLoader() is the same as the class loader for its element type; if the element type is a primitive type, then the array class has no class loader.</p></blockquote><p>翻译过来大概的意思是：</p><blockquote><p>类加载器是一个负责加载类的对象。<code>ClassLoader</code> 是一个抽象类。给定类的二进制名称，类加载器应尝试定位或生成构成类定义的数据。典型的策略是将名称转换为文件名，然后从文件系统中读取该名称的“类文件”。</p><p>每个 Java 类都有一个引用指向加载它的 <code>ClassLoader</code>。不过，数组类不是通过 <code>ClassLoader</code> 创建的，而是 JVM 在需要的时候自动创建的，数组类通过<code>getClassLoader()</code>方法获取 <code>ClassLoader</code> 的时候和该数组的元素类型的 <code>ClassLoader</code> 是一致的。</p></blockquote><p>从上面的介绍可以看出:</p><ul><li>类加载器是一个负责加载类的对象，用于实现类加载过程中的加载这一步。</li><li>每个 Java 类都有一个引用指向加载它的 <code>ClassLoader</code>。</li><li>数组类不是通过 <code>ClassLoader</code> 创建的（数组类没有对应的二进制字节流），是由 JVM 直接生成的。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ClassLoader</span> classLoader<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@CallerSensitive</span>
  <span class="token keyword">public</span> <span class="token class-name">ClassLoader</span> <span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//...</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单来说，<strong>类加载器的主要作用就是加载 Java 类的字节码（ <code>.class</code> 文件）到 JVM 中（在内存中生成一个代表该类的 <code>Class</code> 对象）。</strong> 字节码可以是 Java 源程序（<code>.java</code>文件）经过 <code>javac</code> 编译得来，也可以是通过工具动态生成或者通过网络下载得来。</p><p>其实除了加载类之外，类加载器还可以加载 Java 应用所需的资源如文本、图像、配置文件、视频等等文件资源。本文只讨论其核心功能：加载类。</p><h3 id="类加载器加载规则" tabindex="-1"><a class="header-anchor" href="#类加载器加载规则" aria-hidden="true">#</a> 类加载器加载规则</h3><p>JVM 启动的时候，并不会一次性加载所有的类，而是根据需要去动态加载。也就是说，大部分类在具体用到的时候才会去加载，这样对内存更加友好。</p><p>对于已经加载的类会被放在 <code>ClassLoader</code> 中。在类加载的时候，系统会首先判断当前类是否被加载过。已经被加载的类会直接返回，否则才会尝试加载。也就是说，对于一个类加载器来说，相同二进制名称的类只会被加载一次。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ClassLoader</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ClassLoader</span> parent<span class="token punctuation">;</span>
  <span class="token comment">// 由这个类加载器加载的类。</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Vector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Class</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> classes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 由JVM调用，用此类加载器记录每个已加载类。</span>
  <span class="token keyword">void</span> <span class="token function">addClass</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        classes<span class="token punctuation">.</span><span class="token function">addElement</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类加载器总结" tabindex="-1"><a class="header-anchor" href="#类加载器总结" aria-hidden="true">#</a> 类加载器总结</h3><p>JVM 中内置了三个重要的 <code>ClassLoader</code>：</p><ol><li><strong><code>BootstrapClassLoader</code>(启动类加载器)</strong>：最顶层的加载类，由 C++实现，通常表示为 null，并且没有父级，主要用来加载 JDK 内部的核心类库（ <code>%JAVA_HOME%/lib</code>目录下的 <code>rt.jar</code>、<code>resources.jar</code>、<code>charsets.jar</code>等 jar 包和类）以及被 <code>-Xbootclasspath</code>参数指定的路径下的所有类。</li><li><strong><code>ExtensionClassLoader</code>(扩展类加载器)</strong>：主要负责加载 <code>%JRE_HOME%/lib/ext</code> 目录下的 jar 包和类以及被 <code>java.ext.dirs</code> 系统变量所指定的路径下的所有类。</li><li><strong><code>AppClassLoader</code>(应用程序类加载器)</strong>：面向我们用户的加载器，负责加载当前应用 classpath 下的所有 jar 包和类。</li></ol><blockquote><p>🌈 拓展一下：</p><ul><li><strong><code>rt.jar</code></strong>：rt 代表“RunTime”，<code>rt.jar</code>是 Java 基础类库，包含 Java doc 里面看到的所有的类的类文件。也就是说，我们常用内置库 <code>java.xxx.* </code>都在里面，比如<code>java.util.*</code>、<code>java.io.*</code>、<code>java.nio.*</code>、<code>java.lang.*</code>、<code>java.sql.*</code>、<code>java.math.*</code>。</li><li>Java 9 引入了模块系统，并且略微更改了上述的类加载器。扩展类加载器被改名为平台类加载器（platform class loader）。Java SE 中除了少数几个关键模块，比如说 <code>java.base</code> 是由启动类加载器加载之外，其他的模块均由平台类加载器所加载。</li></ul></blockquote><p>除了这三种类加载器之外，用户还可以加入自定义的类加载器来进行拓展，以满足自己的特殊需求。就比如说，我们可以对 Java 类的字节码（ <code>.class</code> 文件）进行加密，加载时再利用自定义的类加载器对其解密。</p><p><img src="`+o+`" alt="类加载器层次关系图" loading="lazy"></p><p>除了 <code>BootstrapClassLoader</code> 是 JVM 自身的一部分之外，其他所有的类加载器都是在 JVM 外部实现的，并且全都继承自 <code>ClassLoader</code>抽象类。这样做的好处是用户可以自定义类加载器，以便让应用程序自己决定如何去获取所需的类。</p><p>每个 <code>ClassLoader</code> 可以通过<code>getParent()</code>获取其父 <code>ClassLoader</code>，如果获取到 <code>ClassLoader</code> 为<code>null</code>的话，那么该类是通过 <code>BootstrapClassLoader</code> 加载的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ClassLoader</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token comment">// 父加载器</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ClassLoader</span> parent<span class="token punctuation">;</span>
  <span class="token annotation punctuation">@CallerSensitive</span>
  <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">ClassLoader</span> <span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//...</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么 获取到 <code>ClassLoader</code> 为<code>null</code>就是 <code>BootstrapClassLoader</code> 加载的呢？</strong> 这是因为<code>BootstrapClassLoader</code> 由 C++ 实现，由于这个 C++ 实现的类加载器在 Java 中是没有与之对应的类的，所以拿到的结果是 null。</p><p>下面我们来看一个获取 <code>ClassLoader</code> 的小案例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PrintClassLoaderTree</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">ClassLoader</span> classLoader <span class="token operator">=</span> <span class="token class-name">PrintClassLoaderTree</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">StringBuilder</span> split <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">&quot;|--&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> needContinue <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>needContinue<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>split<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> classLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>classLoader <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                needContinue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                classLoader <span class="token operator">=</span> classLoader<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                split<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果(JDK 8 )：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|--sun.misc.Launcher$AppClassLoader@18b4aac2
    |--sun.misc.Launcher$ExtClassLoader@53bd815b
        |--null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果可以看出：</p><ul><li>我们编写的 Java 类 <code>PrintClassLoaderTree</code> 的 <code>ClassLoader</code> 是<code>AppClassLoader</code>；</li><li><code>AppClassLoader</code>的父 <code>ClassLoader</code> 是<code>ExtClassLoader</code>；</li><li><code>ExtClassLoader</code>的父<code>ClassLoader</code>是<code>Bootstrap ClassLoader</code>，因此输出结果为 null。</li></ul><h3 id="自定义类加载器" tabindex="-1"><a class="header-anchor" href="#自定义类加载器" aria-hidden="true">#</a> 自定义类加载器</h3><p>我们前面也说说了，除了 <code>BootstrapClassLoader</code> 其他类加载器均由 Java 实现且全部继承自<code>java.lang.ClassLoader</code>。如果我们要自定义自己的类加载器，很明显需要继承 <code>ClassLoader</code>抽象类。</p><p><code>ClassLoader</code> 类有两个关键的方法：</p><ul><li><code>protected Class loadClass(String name, boolean resolve)</code>：加载指定二进制名称的类，实现了双亲委派机制 。<code>name</code> 为类的二进制名称，<code>resove</code> 如果为 true，在加载时调用 <code>resolveClass(Class&lt;?&gt; c)</code> 方法解析该类。</li><li><code>protected Class findClass(String name)</code>：根据类的二进制名称来查找类，默认实现是空方法。</li></ul><p>官方 API 文档中写到：</p><blockquote><p>Subclasses of <code>ClassLoader</code> are encouraged to override <code>findClass(String name)</code>, rather than this method.</p><p>建议 <code>ClassLoader</code>的子类重写 <code>findClass(String name)</code>方法而不是<code>loadClass(String name, boolean resolve)</code> 方法。</p></blockquote><p>如果我们不想打破双亲委派模型，就重写 <code>ClassLoader</code> 类中的 <code>findClass()</code> 方法即可，无法被父类加载器加载的类最终会通过这个方法被加载。但是，如果想打破双亲委派模型则需要重写 <code>loadClass()</code> 方法。</p><h2 id="双亲委派模型" tabindex="-1"><a class="header-anchor" href="#双亲委派模型" aria-hidden="true">#</a> 双亲委派模型</h2><h3 id="双亲委派模型介绍" tabindex="-1"><a class="header-anchor" href="#双亲委派模型介绍" aria-hidden="true">#</a> 双亲委派模型介绍</h3><p>类加载器有很多种，当我们想要加载一个类的时候，具体是哪个类加载器加载呢？这就需要提到双亲委派模型了。</p><p>根据官网介绍：</p><blockquote><p>The ClassLoader class uses a delegation model to search for classes and resources. Each instance of ClassLoader has an associated parent class loader. When requested to find a class or resource, a ClassLoader instance will delegate the search for the class or resource to its parent class loader before attempting to find the class or resource itself. The virtual machine&#39;s built-in class loader, called the &quot;bootstrap class loader&quot;, does not itself have a parent but may serve as the parent of a ClassLoader instance.</p></blockquote><p>翻译过来大概的意思是：</p><blockquote><p><code>ClassLoader</code> 类使用委托模型来搜索类和资源。每个 <code>ClassLoader</code> 实例都有一个相关的父类加载器。需要查找类或资源时，<code>ClassLoader</code> 实例会在试图亲自查找类或资源之前，将搜索类或资源的任务委托给其父类加载器。 虚拟机中被称为 &quot;bootstrap class loader&quot;的内置类加载器本身没有父类加载器，但是可以作为 <code>ClassLoader</code> 实例的父类加载器。</p></blockquote><p>从上面的介绍可以看出：</p><ul><li><code>ClassLoader</code> 类使用委托模型来搜索类和资源。</li><li>双亲委派模型要求除了顶层的启动类加载器外，其余的类加载器都应有自己的父类加载器。</li><li><code>ClassLoader</code> 实例会在试图亲自查找类或资源之前，将搜索类或资源的任务委托给其父类加载器。</li></ul><p>下图展示的各种类加载器之间的层次关系被称为类加载器的“<strong>双亲委派模型(Parents Delegation Model)</strong>”。</p><p><img src="`+o+`" alt="类加载器层次关系图" loading="lazy"></p><p>注意 ⚠️：双亲委派模型并不是一种强制性的约束，只是 JDK 官方推荐的一种方式。如果我们因为某些特殊需求想要打破双亲委派模型，也是可以的，后文会介绍具体的方法。</p><p>其实这个双亲翻译的容易让别人误解，我们一般理解的双亲都是父母，这里的双亲更多地表达的是“父母这一辈”的人而已，并不是说真的有一个 <code>MotherClassLoader</code> 和一个<code>FatherClassLoader</code> 。个人觉得翻译成单亲委派模型更好一些，不过，国内既然翻译成了双亲委派模型并流传了，按照这个来也没问题，不要被误解了就好。</p><p>另外，类加载器之间的父子关系一般不是以继承的关系来实现的，而是通常使用组合关系来复用父加载器的代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ClassLoader</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
  <span class="token comment">// 组合</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ClassLoader</span> parent<span class="token punctuation">;</span>
  <span class="token keyword">protected</span> <span class="token class-name">ClassLoader</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token function">checkCreateClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在面向对象编程中，有一条非常经典的设计原则：<strong>组合优于继承，多用组合少用继承。</strong></p><h3 id="双亲委派模型的执行流程" tabindex="-1"><a class="header-anchor" href="#双亲委派模型的执行流程" aria-hidden="true">#</a> 双亲委派模型的执行流程</h3><p>双亲委派模型的实现代码非常简单，逻辑非常清晰，都集中在 <code>java.lang.ClassLoader</code> 的 <code>loadClass()</code> 中，相关代码如下所示。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">boolean</span> resolve<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span>
<span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token function">getClassLoadingLock</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//首先，检查该类是否已经加载过</span>
        <span class="token class-name">Class</span> c <span class="token operator">=</span> <span class="token function">findLoadedClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果 c 为 null，则说明该类没有被加载过</span>
            <span class="token keyword">long</span> t0 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">//当父类的加载器不为空，则通过父类的loadClass来加载该类</span>
                    c <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">//当父类的加载器为空，则调用启动类加载器来加载该类</span>
                    c <span class="token operator">=</span> <span class="token function">findBootstrapClassOrNull</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//非空父类的类加载器无法找到相应的类，则抛出异常</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//当父类加载器无法加载时，则调用findClass方法来加载该类</span>
                <span class="token comment">//用户可通过覆写该方法，来自定义类加载器</span>
                <span class="token keyword">long</span> t1 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                c <span class="token operator">=</span> <span class="token function">findClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">//用于统计类加载器相关的信息</span>
                <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getParentDelegationTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTime</span><span class="token punctuation">(</span>t1 <span class="token operator">-</span> t0<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getFindClassTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addElapsedTimeFrom</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getFindClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//对类进行link操作</span>
            <span class="token function">resolveClass</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> c<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每当一个类加载器接收到加载请求时，它会先将请求转发给父类加载器。在父类加载器没有找到所请求的类的情况下，该类加载器才会尝试去加载。</p><p>结合上面的源码，简单总结一下双亲委派模型的执行流程：</p><p>1️⃣ 在类加载的时候，系统会首先判断当前类是否被加载过。已经被加载的类会直接返回，否则才会尝试加载（每个父类加载器都会走一遍这个流程）。<br> 2️⃣ 类加载器在进行类加载的时候，它首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器去完成（调用父加载器 <code>loadClass()</code>方法来加载类）。这样的话，所有的请求最终都会传送到顶层的启动类加载器 <code>BootstrapClassLoader</code> 中。<br> 3️⃣ 只有当父加载器反馈自己无法完成这个加载请求（它的搜索范围中没有找到所需的类）时，子加载器才会尝试自己去加载（调用自己的 <code>findClass()</code> 方法来加载类）。</p><p>🌈 拓展一下：</p><p><strong>JVM 判定两个 Java 类是否相同的具体规则</strong>：JVM 不仅要看类的全名是否相同，还要看加载此类的类加载器是否一样。只有两者都相同的情况，才认为两个类是相同的。即使两个类来源于同一个 <code>Class</code> 文件，被同一个虚拟机加载，只要加载它们的类加载器不同，那这两个类就必定不相同。</p><h3 id="双亲委派模型的好处" tabindex="-1"><a class="header-anchor" href="#双亲委派模型的好处" aria-hidden="true">#</a> 双亲委派模型的好处</h3><p><u>双亲委派模型保证了 Java 程序的稳定运行，可以避免类的重复加载（JVM 区分不同类的方式不仅仅根据类名，相同的类文件被不同的类加载器加载产生的是两个不同的类），也保证了 Java 的核心 API 不被篡改。</u></p><p>如果没有使用双亲委派模型，而是每个类加载器加载自己的话就会出现一些问题，比如我们编写一个称为 <code>java.lang.Object</code> 类的话，那么程序运行的时候，系统就会出现两个不同的 <code>Object</code> 类。双亲委派模型可以保证加载的是 JRE 里的那个 <code>Object</code> 类，而不是你写的 <code>Object</code> 类。这是因为 <code>AppClassLoader</code> 在加载你的 <code>Object</code> 类时，会委托给 <code>ExtClassLoader</code> 去加载，而 <code>ExtClassLoader</code> 又会委托给 <code>BootstrapClassLoader</code>，<code>BootstrapClassLoader</code> 发现自己已经加载过了 <code>Object</code> 类，会直接返回，不会去加载你写的 <code>Object</code> 类。</p><h3 id="打破双亲委派模型方法" tabindex="-1"><a class="header-anchor" href="#打破双亲委派模型方法" aria-hidden="true">#</a> 打破双亲委派模型方法</h3><p>自定义加载器的话，需要继承 <code>ClassLoader</code> 。如果我们不想打破双亲委派模型，就重写 <code>ClassLoader</code> 类中的 <code>findClass()</code> 方法即可，无法被父类加载器加载的类最终会通过这个方法被加载。但是，如果想打破双亲委派模型则需要重写 <code>loadClass()</code> 方法。</p><p>为什么是重写 <code>loadClass()</code> 方法打破双亲委派模型呢？双亲委派模型的执行流程已经解释了：</p><blockquote><p>类加载器在进行类加载的时候，它首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器去完成（调用父加载器 <code>loadClass()</code>方法来加载类）。</p></blockquote><p>我们比较熟悉的 Tomcat 服务器为了能够优先加载 Web 应用目录下的类，然后再加载其他目录下的类，就自定义了类加载器 <code>WebAppClassLoader</code> 来打破双亲委托机制。这也是 Tomcat 下 Web 应用之间的类实现隔离的具体原理。</p><p>Tomcat 的类加载器的层次结构如下：</p><p><img src="`+u+'" alt="Tomcat 的类加载器的层次结构" loading="lazy"></p>',79),C={href:"http://gk.link/a/10Egr",target:"_blank",rel:"noopener noreferrer"};function h(g,f){const n=d("ExternalLinkIcon");return p(),l("div",null,[s("div",k,[v,s("p",null,[a("请查看原创"),s("a",m,[a("ClassLoad详解(重点)"),e(n)])])]),b,s("p",null,[a("感兴趣的小伙伴可以自行研究一下 Tomcat 类加载器的层次结构，这有助于我们搞懂 Tomcat 隔离 Web 应用的原理，推荐资料是"),s("a",C,[a("《深入拆解 Tomcat & Jetty》"),e(n)]),a("。")])])}const w=c(r,[["render",h],["__file","类加载器.html.vue"]]);export{w as default};
