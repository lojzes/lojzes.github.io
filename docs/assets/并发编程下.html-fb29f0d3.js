const e=JSON.parse('{"key":"v-6f775f12","path":"/interview/java/concurrency/%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E4%B8%8B.html","title":"并发编程下","lang":"zh-CN","frontmatter":{"title":"并发编程下","icon":"markdown","order":1,"category":["面试"],"tag":["并发编程"],"description":"volatile 关键字 如何保证变量的可见性？ 在 Java 中，volatile 关键字可以保证变量的可见性，如果我们将变量声明为 volatile ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。 volatile 关键字其实并非是 Java 语言特有的，在 C 语言里也有，它最原始的意义就是禁用 CPU 缓存。如果我们将一个变量使用 volatile 修饰，这就指示 编译器，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/interview/java/concurrency/%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%E4%B8%8B.html"}],["meta",{"property":"og:site_name","content":"JavaNative"}],["meta",{"property":"og:title","content":"并发编程下"}],["meta",{"property":"og:description","content":"volatile 关键字 如何保证变量的可见性？ 在 Java 中，volatile 关键字可以保证变量的可见性，如果我们将变量声明为 volatile ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。 volatile 关键字其实并非是 Java 语言特有的，在 C 语言里也有，它最原始的意义就是禁用 CPU 缓存。如果我们将一个变量使用 volatile 修饰，这就指示 编译器，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"并发编程下"}],["meta",{"property":"article:author","content":"lojzes"}],["meta",{"property":"article:tag","content":"并发编程"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发编程下\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lojzes\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"volatile 关键字","slug":"volatile-关键字","link":"#volatile-关键字","children":[{"level":3,"title":"如何保证变量的可见性？","slug":"如何保证变量的可见性","link":"#如何保证变量的可见性","children":[]},{"level":3,"title":"如何禁止指令重排序？","slug":"如何禁止指令重排序","link":"#如何禁止指令重排序","children":[]},{"level":3,"title":"volatile 可以保证原子性么？","slug":"volatile-可以保证原子性么","link":"#volatile-可以保证原子性么","children":[]}]},{"level":2,"title":"乐观锁和悲观锁","slug":"乐观锁和悲观锁","link":"#乐观锁和悲观锁","children":[{"level":3,"title":"什么是悲观锁？","slug":"什么是悲观锁","link":"#什么是悲观锁","children":[]},{"level":3,"title":"什么是乐观锁？","slug":"什么是乐观锁","link":"#什么是乐观锁","children":[]},{"level":3,"title":"如何实现乐观锁？","slug":"如何实现乐观锁","link":"#如何实现乐观锁","children":[]},{"level":3,"title":"乐观锁存在哪些问题？","slug":"乐观锁存在哪些问题","link":"#乐观锁存在哪些问题","children":[]}]},{"level":2,"title":"synchronized 关键字","slug":"synchronized-关键字","link":"#synchronized-关键字","children":[{"level":3,"title":"synchronized 是什么？有什么用？","slug":"synchronized-是什么-有什么用","link":"#synchronized-是什么-有什么用","children":[]},{"level":3,"title":"如何使用 synchronized?","slug":"如何使用-synchronized","link":"#如何使用-synchronized","children":[]},{"level":3,"title":"构造方法可以用 synchronized 修饰么？","slug":"构造方法可以用-synchronized-修饰么","link":"#构造方法可以用-synchronized-修饰么","children":[]},{"level":3,"title":"synchronized 底层原理了解吗？","slug":"synchronized-底层原理了解吗","link":"#synchronized-底层原理了解吗","children":[]},{"level":3,"title":"JDK1.6 之后的 synchronized 底层做了哪些优化？","slug":"jdk1-6-之后的-synchronized-底层做了哪些优化","link":"#jdk1-6-之后的-synchronized-底层做了哪些优化","children":[]},{"level":3,"title":"synchronized 和 volatile 有什么区别？","slug":"synchronized-和-volatile-有什么区别","link":"#synchronized-和-volatile-有什么区别","children":[]}]},{"level":2,"title":"ReentrantLock","slug":"reentrantlock","link":"#reentrantlock","children":[{"level":3,"title":"ReentrantLock 是什么？","slug":"reentrantlock-是什么","link":"#reentrantlock-是什么","children":[]},{"level":3,"title":"公平锁和非公平锁有什么区别？","slug":"公平锁和非公平锁有什么区别","link":"#公平锁和非公平锁有什么区别","children":[]},{"level":3,"title":"synchronized 和 ReentrantLock 有什么区别？","slug":"synchronized-和-reentrantlock-有什么区别","link":"#synchronized-和-reentrantlock-有什么区别","children":[]},{"level":3,"title":"可中断锁和不可中断锁有什么区别？","slug":"可中断锁和不可中断锁有什么区别","link":"#可中断锁和不可中断锁有什么区别","children":[]}]},{"level":2,"title":"ReentrantReadWriteLock","slug":"reentrantreadwritelock","link":"#reentrantreadwritelock","children":[{"level":3,"title":"ReentrantReadWriteLock 是什么？","slug":"reentrantreadwritelock-是什么","link":"#reentrantreadwritelock-是什么","children":[]},{"level":3,"title":"ReentrantReadWriteLock 适合什么场景？","slug":"reentrantreadwritelock-适合什么场景","link":"#reentrantreadwritelock-适合什么场景","children":[]},{"level":3,"title":"共享锁和独占锁有什么区别？","slug":"共享锁和独占锁有什么区别","link":"#共享锁和独占锁有什么区别","children":[]},{"level":3,"title":"线程持有读锁还能获取写锁吗？","slug":"线程持有读锁还能获取写锁吗","link":"#线程持有读锁还能获取写锁吗","children":[]},{"level":3,"title":"读锁为什么不能升级为写锁？","slug":"读锁为什么不能升级为写锁","link":"#读锁为什么不能升级为写锁","children":[]}]},{"level":2,"title":"StampedLock","slug":"stampedlock","link":"#stampedlock","children":[{"level":3,"title":"StampedLock 是什么？","slug":"stampedlock-是什么","link":"#stampedlock-是什么","children":[]},{"level":3,"title":"StampedLock 的性能为什么更好？","slug":"stampedlock-的性能为什么更好","link":"#stampedlock-的性能为什么更好","children":[]},{"level":3,"title":"StampedLock 适合什么场景？","slug":"stampedlock-适合什么场景","link":"#stampedlock-适合什么场景","children":[]}]}],"readingTime":{"minutes":26.36,"words":7909},"filePathRelative":"interview/java/concurrency/并发编程下.md","excerpt":"<h2> volatile 关键字</h2>\\n<h3> 如何保证变量的可见性？</h3>\\n<p>在 Java 中，<code>volatile</code> 关键字可以保证变量的可见性，如果我们将变量声明为 <strong><code>volatile</code></strong> ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。</p>\\n<p><code>volatile</code> 关键字其实并非是 Java 语言特有的，在 C 语言里也有，它最原始的意义就是禁用 CPU 缓存。如果我们将一个变量使用 <code>volatile</code> 修饰，这就指示 编译器，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。</p>","copyright":{"author":"lojzes","license":"MIT"},"autoDesc":true,"git":{}}');export{e as data};
