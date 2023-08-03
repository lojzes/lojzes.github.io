import{_ as r,X as h,Y as s,Z as e,a1 as o,$ as c,a0 as i,a2 as n,C as d}from"./framework-0b23a550.js";const p={},l={class:"hint-container tip"},_=e("p",{class:"hint-container-title"},"参考",-1),f={href:"https://blog.csdn.net/xiaoyu_BD/article/details/108076618",target:"_blank",rel:"noopener noreferrer"},u={href:"https://zhuanlan.zhihu.com/p/343337038",target:"_blank",rel:"noopener noreferrer"},F=n('<p><code>Elasticsearch</code> 中的相关性算法主要还是基于<code>Lucene</code>的相关性算法，<code>Lucene</code>的算法是基于<code>TF-IDF</code>的，但和<code>TF-ID</code>F还是有些区别。那么我们就从<code>TF-IDF</code>开始介绍。</p><h2 id="tf-idf" tabindex="-1"><a class="header-anchor" href="#tf-idf" aria-hidden="true">#</a> TF-IDF</h2><p>定义</p><p><code>TF-IDF（term frequency–inverse document frequency）</code>是一种用于信息检索与数据挖掘的常用加权技术。TF是词频<code>(Term Frequency)</code>，<code>IDF</code>是逆文本频率指数<code>(Inverse Document Frequency)</code>。（来源百度百科）</p><h2 id="算法核心" tabindex="-1"><a class="header-anchor" href="#算法核心" aria-hidden="true">#</a> 算法核心</h2><p>TF-IDF实际上就是TF和IDF的两个算法的乘积。</p><p>TF（词频）</p><p>词频的所在对象是一个具体的文档，是指一个文档中出现某个单词（Term）的频率（Frequency）。这里用的是频率而不是次数，是为了防止文档内容过长从而导致某些单词出现过多.</p><p>IDF（逆向文档频率）</p><p>逆向文件频率描述的对象是一个文档集合中，包含某个单词的文档数量。它表示的是一个单词在一个文档集合中的普遍重要程度。</p><p>TF-IDF</p><p>某一特定文件内的高词语频率，以及该词语在整个文件集合中的低文件频率，可以产生出高权重的tf-idf。因此，tf-idf倾向于过滤掉常见的词语，保留重要的词语。</p><h2 id="bm25" tabindex="-1"><a class="header-anchor" href="#bm25" aria-hidden="true">#</a> BM25</h2><p><code>BM25（Best Match25</code>）是在信息检索系统中根据提出的<code>query</code>对<code>document</code>进行评分的算法。</p><p><code>TF-IDF </code>算法是一个可用的算法，但并不太完美。它给出了一个基于统计学的相关分数算法，而BM25算法则是在此之上做出改进之后的算法。（为什么要改进呢？ <code>TF-IDF</code> 不完美的地方在哪里？）</p>',15),m=e("code",null,"tf",-1),I=e("code",null,"tf",-1),T=e("code",null,"tf ",-1),x=e("code",null,"tf ",-1),D=e("code",null,"tf",-1),b=n('<h2 id="检索词频率" tabindex="-1"><a class="header-anchor" href="#检索词频率" aria-hidden="true">#</a> 检索词频率</h2><p>检索词在该字段出现的频率？出现频率越高，相关性也越高。字段中出现过 5 次要比只出现过 1 次的相关性高。</p><h2 id="反向文档频率" tabindex="-1"><a class="header-anchor" href="#反向文档频率" aria-hidden="true">#</a> 反向文档频率</h2><p>每个检索词在索引中出现的频率？频率越高，相关性越低。检索词出现在多数文档中会比出现在少数文档中的权重更低。常用词如 and 或 the 对相关度贡献很少，因为它们在多数文档中都会出现。</p><h2 id="字段长度准则" tabindex="-1"><a class="header-anchor" href="#字段长度准则" aria-hidden="true">#</a> 字段长度准则</h2><p>字段的长度是多少？长度越长，相关性越低。检索词出现在一个短的 title 要比同样的词出现在一个长的 content 字段权重更大。</p><h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h2><p>假设，检索关键词 <code>honeymoon</code>，在索引上所有文档中的<code>tweet</code>字段中检索。</p><p>检索词频率:</p><p>检索词 <code>honeymoon</code> 在这个文档的 <code>tweet</code> 字段中的出现次数。出现次数越多，评分越高。</p><p>反向文档频率:</p><p>检索词 <code>honeymoon</code> 在索引上所有文档的 <code>tweet</code> 字段中出现的次数。出现次数越多，评分越低。</p><p>字段长度准则:</p><p>在这个文档中， <code>tweet</code> 字段内容的长度 -- 内容越长，评分越低。</p>',14);function B(y,E){const t=d("ExternalLinkIcon"),a=d("font");return h(),s("div",null,[e("div",l,[_,e("p",null,[e("a",f,[o("Elasticsearch原理（九）：相关性排序算法详解"),c(t)])]),e("p",null,[e("a",u,[o("ElasticSearch(ES)搜索排序、相关性、评分机制"),c(t)])])]),F,e("p",null,[o("当两篇描述“人工智能”的文档A和B，其中A出现“人工智能”100次，B出现“人工智能”200次。 两篇文章的单词数量都是10000，那么按照 TF-IDF 算法，A的 "),m,o(" 得分是：0.01，B的 "),I,o(" 得分是0.02。得分上B比A多了一倍，但是两篇文章都是再说人工智能， "),T,o("分数 不应该相差这么多。可见单纯统计的 "),x,o("算法在文本内容多的时候是不可靠的 多篇文档内容的长度长短不同，对 "),D,o(" 算法的结果也影响很大，所以需要将 "),c(a,{color:"red"},{default:i(()=>[o("文本的长度")]),_:1}),o("也考虑到算法当中去")]),b])}const q=r(p,[["render",B],["__file","es排序.html.vue"]]);export{q as default};
