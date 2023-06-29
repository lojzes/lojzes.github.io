const l=JSON.parse('{"key":"v-2b821e84","path":"/interview/java/jvm/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html","title":"垃圾回收详解(重点)","lang":"zh-CN","frontmatter":{"title":"垃圾回收详解(重点)","icon":"markdown","order":1,"category":["面试"],"tag":["jvm"],"description":"如果没有特殊说明，都是针对的是 HotSpot 虚拟机。 本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。 常见面试题 ： 如何判断对象是否死亡（两种方法）。 简单的介绍一下强引用、软引用、弱引用、虚引用（虚引用与软引用和弱引用的区别、使用软引用能带来的好处）。 如何判断一个常量是废弃常量 如何判断一个类是无用的类 垃圾收集有哪些算法，各自的特点？ HotSpot 为什么要分为新生代和老年代？ 常见的垃圾回收器有哪些？ 介绍一下 CMS,G1 收集器。 Minor Gc 和 Full GC 有什么不同呢？","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/interview/java/jvm/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html"}],["meta",{"property":"og:site_name","content":"JavaNative"}],["meta",{"property":"og:title","content":"垃圾回收详解(重点)"}],["meta",{"property":"og:description","content":"如果没有特殊说明，都是针对的是 HotSpot 虚拟机。 本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。 常见面试题 ： 如何判断对象是否死亡（两种方法）。 简单的介绍一下强引用、软引用、弱引用、虚引用（虚引用与软引用和弱引用的区别、使用软引用能带来的好处）。 如何判断一个常量是废弃常量 如何判断一个类是无用的类 垃圾收集有哪些算法，各自的特点？ HotSpot 为什么要分为新生代和老年代？ 常见的垃圾回收器有哪些？ 介绍一下 CMS,G1 收集器。 Minor Gc 和 Full GC 有什么不同呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"垃圾回收详解(重点)"}],["meta",{"property":"article:author","content":"lojzes"}],["meta",{"property":"article:tag","content":"jvm"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾回收详解(重点)\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lojzes\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"堆空间的基本结构","slug":"堆空间的基本结构","link":"#堆空间的基本结构","children":[]},{"level":2,"title":"内存分配和回收原则","slug":"内存分配和回收原则","link":"#内存分配和回收原则","children":[{"level":3,"title":"对象优先在 Eden 区分配","slug":"对象优先在-eden-区分配","link":"#对象优先在-eden-区分配","children":[]},{"level":3,"title":"大对象直接进入老年代","slug":"大对象直接进入老年代","link":"#大对象直接进入老年代","children":[]},{"level":3,"title":"长期存活的对象将进入老年代","slug":"长期存活的对象将进入老年代","link":"#长期存活的对象将进入老年代","children":[]},{"level":3,"title":"主要进行 gc 的区域","slug":"主要进行-gc-的区域","link":"#主要进行-gc-的区域","children":[]},{"level":3,"title":"空间分配担保","slug":"空间分配担保","link":"#空间分配担保","children":[]}]},{"level":2,"title":"死亡对象判断方法","slug":"死亡对象判断方法","link":"#死亡对象判断方法","children":[{"level":3,"title":"引用计数法","slug":"引用计数法","link":"#引用计数法","children":[]},{"level":3,"title":"可达性分析算法","slug":"可达性分析算法","link":"#可达性分析算法","children":[]},{"level":3,"title":"引用类型总结","slug":"引用类型总结","link":"#引用类型总结","children":[]},{"level":3,"title":"如何判断一个常量是废弃常量？","slug":"如何判断一个常量是废弃常量","link":"#如何判断一个常量是废弃常量","children":[]},{"level":3,"title":"如何判断一个类是无用的类","slug":"如何判断一个类是无用的类","link":"#如何判断一个类是无用的类","children":[]}]},{"level":2,"title":"垃圾收集算法","slug":"垃圾收集算法","link":"#垃圾收集算法","children":[{"level":3,"title":"标记-清除算法","slug":"标记-清除算法","link":"#标记-清除算法","children":[]},{"level":3,"title":"标记-复制算法","slug":"标记-复制算法","link":"#标记-复制算法","children":[]},{"level":3,"title":"标记-整理算法","slug":"标记-整理算法","link":"#标记-整理算法","children":[]},{"level":3,"title":"分代收集算法","slug":"分代收集算法","link":"#分代收集算法","children":[]}]},{"level":2,"title":"垃圾收集器","slug":"垃圾收集器","link":"#垃圾收集器","children":[{"level":3,"title":"Serial 收集器","slug":"serial-收集器","link":"#serial-收集器","children":[]},{"level":3,"title":"ParNew 收集器","slug":"parnew-收集器","link":"#parnew-收集器","children":[]},{"level":3,"title":"Parallel Scavenge 收集器","slug":"parallel-scavenge-收集器","link":"#parallel-scavenge-收集器","children":[]},{"level":3,"title":"Serial Old 收集器","slug":"serial-old-收集器","link":"#serial-old-收集器","children":[]},{"level":3,"title":"Parallel Old 收集器","slug":"parallel-old-收集器","link":"#parallel-old-收集器","children":[]},{"level":3,"title":"CMS 收集器","slug":"cms-收集器","link":"#cms-收集器","children":[]},{"level":3,"title":"G1 收集器","slug":"g1-收集器","link":"#g1-收集器","children":[]},{"level":3,"title":"分代特性","slug":"分代特性","link":"#分代特性","children":[]},{"level":3,"title":"g1 回收过程","slug":"g1-回收过程","link":"#g1-回收过程","children":[]},{"level":3,"title":"g1 回收算法","slug":"g1-回收算法","link":"#g1-回收算法","children":[]},{"level":3,"title":"g1 回收特点","slug":"g1-回收特点","link":"#g1-回收特点","children":[]},{"level":3,"title":"g1 使用场景","slug":"g1-使用场景","link":"#g1-使用场景","children":[]},{"level":3,"title":"ZGC 收集器","slug":"zgc-收集器","link":"#zgc-收集器","children":[]},{"level":3,"title":"ZGC 目标","slug":"zgc-目标","link":"#zgc-目标","children":[]},{"level":3,"title":"ZGC 内存布局","slug":"zgc-内存布局","link":"#zgc-内存布局","children":[]},{"level":3,"title":"ZGC回收过程","slug":"zgc回收过程","link":"#zgc回收过程","children":[]},{"level":3,"title":"ZGC 的读屏障","slug":"zgc-的读屏障","link":"#zgc-的读屏障","children":[]},{"level":3,"title":"ZGC 触发时机","slug":"zgc-触发时机","link":"#zgc-触发时机","children":[]}]}],"readingTime":{"minutes":34.26,"words":10278},"filePathRelative":"interview/java/jvm/垃圾回收.md","excerpt":"<blockquote>\\n<p>如果没有特殊说明，都是针对的是 HotSpot 虚拟机。</p>\\n<p>本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。</p>\\n<p>常见面试题 ：</p>\\n<ul>\\n<li>如何判断对象是否死亡（两种方法）。</li>\\n<li>简单的介绍一下强引用、软引用、弱引用、虚引用（虚引用与软引用和弱引用的区别、使用软引用能带来的好处）。</li>\\n<li>如何判断一个常量是废弃常量</li>\\n<li>如何判断一个类是无用的类</li>\\n<li>垃圾收集有哪些算法，各自的特点？</li>\\n<li>HotSpot 为什么要分为新生代和老年代？</li>\\n<li>常见的垃圾回收器有哪些？</li>\\n<li>介绍一下 CMS,G1 收集器。</li>\\n<li>Minor Gc 和 Full GC 有什么不同呢？</li>\\n</ul>\\n</blockquote>","copyright":{"author":"lojzes","license":"MIT"},"autoDesc":true,"git":{}}');export{l as data};
