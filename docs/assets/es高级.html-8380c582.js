const e=JSON.parse('{"key":"v-461a0be3","path":"/study/elasticsearch/es%E9%AB%98%E7%BA%A7.html","title":"es高级","lang":"zh-CN","frontmatter":{"title":"es高级","index":false,"icon":"discover","category":["学习笔记"],"description":"参考 批量操作 matchAll 查询 默认情况下，es一次展示10条 GET persons/_search { \\"query\\": { \\"match_all\\": { } }, \\"from\\": 0, \\"size\\": 20 }","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/study/elasticsearch/es%E9%AB%98%E7%BA%A7.html"}],["meta",{"property":"og:site_name","content":"JavaNative"}],["meta",{"property":"og:title","content":"es高级"}],["meta",{"property":"og:description","content":"参考 批量操作 matchAll 查询 默认情况下，es一次展示10条 GET persons/_search { \\"query\\": { \\"match_all\\": { } }, \\"from\\": 0, \\"size\\": 20 }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"es高级"}],["meta",{"property":"article:author","content":"lojzes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"es高级\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lojzes\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"批量操作","slug":"批量操作","link":"#批量操作","children":[]},{"level":2,"title":"matchAll 查询","slug":"matchall-查询","link":"#matchall-查询","children":[]},{"level":2,"title":"match","slug":"match","link":"#match","children":[]},{"level":2,"title":"模糊查询","slug":"模糊查询","link":"#模糊查询","children":[]},{"level":2,"title":"范围查询","slug":"范围查询","link":"#范围查询","children":[]}],"readingTime":{"minutes":0.32,"words":96},"filePathRelative":"study/elasticsearch/es高级.md","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">参考</p>\\n</div>\\n<h2> 批量操作</h2>\\n<p></p>\\n<h2> matchAll 查询</h2>\\n<h1> 默认情况下，es一次展示10条</h1>\\n<p>GET persons/_search</p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"query\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">\\"match_all\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"from\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"size\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">20</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"lojzes","license":"MIT"},"autoDesc":true,"git":{}}');export{e as data};
