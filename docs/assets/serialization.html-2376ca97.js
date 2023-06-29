const e=JSON.parse('{"key":"v-4c6d5095","path":"/interview/java/basic/emphasis/serialization.html","title":"序列化详解详解","lang":"zh-CN","frontmatter":{"title":"序列化详解详解","icon":"creative","category":["面试"],"description":"什么是序列化和反序列化? 如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。 简单来说： 序列化： 将数据结构或对象转换成二进制字节流的过程 反序列化：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程 对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/interview/java/basic/emphasis/serialization.html"}],["meta",{"property":"og:site_name","content":"JavaNative"}],["meta",{"property":"og:title","content":"序列化详解详解"}],["meta",{"property":"og:description","content":"什么是序列化和反序列化? 如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。 简单来说： 序列化： 将数据结构或对象转换成二进制字节流的过程 反序列化：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程 对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"lojzes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"序列化详解详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lojzes\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"什么是序列化和反序列化?","slug":"什么是序列化和反序列化","link":"#什么是序列化和反序列化","children":[]},{"level":2,"title":"常见序列化协议有哪些？","slug":"常见序列化协议有哪些","link":"#常见序列化协议有哪些","children":[{"level":3,"title":"JDK 自带的序列化方式","slug":"jdk-自带的序列化方式","link":"#jdk-自带的序列化方式","children":[]},{"level":3,"title":"Kryo","slug":"kryo","link":"#kryo","children":[]},{"level":3,"title":"Protobuf","slug":"protobuf","link":"#protobuf","children":[]},{"level":3,"title":"ProtoStuff","slug":"protostuff","link":"#protostuff","children":[]},{"level":3,"title":"Hessian","slug":"hessian","link":"#hessian","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"readingTime":{"minutes":8.23,"words":2468},"filePathRelative":"interview/java/basic/emphasis/serialization.md","excerpt":"<h2> 什么是序列化和反序列化?</h2>\\n<p>如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。</p>\\n<p>简单来说：</p>\\n<ul>\\n<li><strong>序列化</strong>： 将数据结构或对象转换成二进制字节流的过程</li>\\n<li><strong>反序列化</strong>：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程</li>\\n</ul>\\n<p>对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。</p>","copyright":{"author":"lojzes","license":"MIT"},"autoDesc":true,"git":{}}');export{e as data};
