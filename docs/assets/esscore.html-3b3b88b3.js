import{_ as t,X as p,Y as o,Z as n,a1 as a,$ as e,a2 as c,C as i}from"./framework-0b23a550.js";const l="/assets/10-50d3be8c.png",r="/assets/11-24102f2f.png",u="/assets/12-4bd489ec.png",d={},k={class:"hint-container tip"},v=n("p",{class:"hint-container-title"},"参考",-1),m={href:"https://blog.csdn.net/laoyang360/article/details/104809787",target:"_blank",rel:"noopener noreferrer"},b={href:"https://cloud.tencent.com/developer/article/1600163",target:"_blank",rel:"noopener noreferrer"},q=c('<h2 id="期望elasticsearch搜索结果更准确-不可回避的三个问题" tabindex="-1"><a class="header-anchor" href="#期望elasticsearch搜索结果更准确-不可回避的三个问题" aria-hidden="true">#</a> 期望Elasticsearch搜索结果更准确，不可回避的三个问题</h2><h3 id="问题1-用户真正的需求是什么" tabindex="-1"><a class="header-anchor" href="#问题1-用户真正的需求是什么" aria-hidden="true">#</a> 问题1：用户真正的需求是什么？</h3><p>如果不能获得用户的搜索意图，搜索的准确性无从谈起。</p><p>比如：同样输入“锤子”，工匠期望的是钉子对应的“锤子”，老罗的粉丝期望的是“锤子科技”、“锤子便签”、“锤子手机”等。</p><p>即使同一用户发出的同一个查询，也可能因为用户所处场景不同，其期望结果也存在很大差异。</p><h3 id="问题2-哪些信息是和用户需求真正相关的" tabindex="-1"><a class="header-anchor" href="#问题2-哪些信息是和用户需求真正相关的" aria-hidden="true">#</a> 问题2：哪些信息是和用户需求真正相关的？</h3><p>搜索引擎本质是一个匹配过程，即从海量的数据中找到匹配用户需求的内容。</p><p><img src="'+l+`" alt="" loading="lazy"></p><p>判定内容与用户查询的相关性(relevance，如上图），一直是搜索引擎领域核心研究课题之一。</p><pre><code>Relevance is a search engine’s holy grail. People want results that are closely
 connected to their queries.— Marc Ostrofsky
https://medium.com
</code></pre><h3 id="问题3-哪些信息是最值得用户信赖的" tabindex="-1"><a class="header-anchor" href="#问题3-哪些信息是最值得用户信赖的" aria-hidden="true">#</a> 问题3：哪些信息是最值得用户信赖的？</h3><p>衡量信息满足用户需求的两个核心属性。</p><pre><code>其一：如前所述的相关性。
其二：信息是否值得信赖。
</code></pre><p>举例：疫情环境下，新华网、人民网发布文章的可信性远大于某公众号大V发布的。</p><h2 id="elasticsearch相关性是如何控制的" tabindex="-1"><a class="header-anchor" href="#elasticsearch相关性是如何控制的" aria-hidden="true">#</a> Elasticsearch相关性是如何控制的？</h2><p>结构化数据库如Mysql，只能查询结果与数据库中的row的是否匹配？回答往往是“是”、“否”。</p><p>如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> title <span class="token keyword">from</span> hbinfos <span class="token keyword">where</span> title <span class="token operator">like</span> ‘<span class="token operator">%</span>发热<span class="token operator">%</span>’。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而全文搜索引擎Elasticsearch中不仅需要找到匹配的文档，还需根据它们相关度的高低进行排序。</p><p>实现相关度排序的核心概念是评分。</p><p><code>_score</code>就是<code>Elasticsearch</code>检索返回的评分。该得分衡量每个文档与查询的匹配程度。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token property">&quot;hits&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;kibana_sample_data_flights&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;FHLWlHABl_xiQyn7bHe2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span> <span class="token operator">:</span> <span class="token number">3.4454226</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个文档都有与之相关的评分，该得分由正浮点数表示。文档分数越高，则文档越相关。</p><p>分数与查询匹配成正比。查询中的每个子句都将有助于文档的得分。</p><h2 id="elasticsearch-如何计算评分" tabindex="-1"><a class="header-anchor" href="#elasticsearch-如何计算评分" aria-hidden="true">#</a> Elasticsearch 如何计算评分？</h2><p>官方文档相关度评分背后的理论解读如下：</p><p>Lucene（或 Elasticsearch）使用 布尔模型查找匹配文档，并用一个名为 实用评分函数的公式来计算相关度。 这个公式借鉴了 词频/逆向文档频率和 向量空间模型，同时也加入了一些现代的新特性，如协调因子（coordination factor），字段长度归一化<code>（field length normalization）</code>，以及词或查询语句权重提升。</p><p><code>Elasticsearch 5 </code>之前的版本，评分机制或者打分模型基于 <code>TF-IDF</code>实现。</p><p>注意：从<code>Elasticsearch 5</code>之后, 缺省的打分机制改成了<code>Okapi BM25</code>。</p><p><code>BM25</code> 的 <code>BM </code>是缩写自 <code>Best Match</code>,<code> 25</code> 貌似是经过 <code>25</code> 次迭代调整之后得出的算法，它也是基于 <code>TF/IDF</code> 进化来的。</p><h3 id="tf-idf与bm25-的相同点" tabindex="-1"><a class="header-anchor" href="#tf-idf与bm25-的相同点" aria-hidden="true">#</a> TF-IDF与BM25 的相同点</h3><p><code>TF-IDF</code> 和<code> BM25</code> 同样使用 逆向文档频率 来区分普通词（不重要）和非普通词（重要），同样认为：</p><pre><code>文档里的某个词出现次数越频繁，文档与这个词就越相关，得分越高。
某个词在集合所有文档里出现的频率是多少？频次越高，权重 越低，
得分越低 。某个词在集合中所有文档中越罕见，得分越高。
</code></pre><h3 id="tf-idf与bm25-的不同点" tabindex="-1"><a class="header-anchor" href="#tf-idf与bm25-的不同点" aria-hidden="true">#</a> TF-IDF与BM25 的不同点</h3><p><code>BM25</code>在传统<code>TF-IDF</code>的基础上增加了几个可调节的参数，使得它在应用上更佳灵活和强大，具有较高的实用性。</p><pre><code>传统的TF值理论上是可以无限大的。而\`BM25\`与之不同，它在TF计算方法中增加了一
个常量k，用来限制\`TF\`值的增长极限。下面是两者的公式：
</code></pre><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>传统 TF Score = sqrt(tf)
BM25的 TF Score = ((k + 1) * tf) / (k + tf)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>BM25还引入了平均文档长度的概念，单个文档长度对相关性的影响力与它和平
均长度的比值有关系。BM25的TF公式里，除了常量k外，引入另外两个参数：L和b。
</code></pre><p>（1）L是文档长度与平均长度的比值。如果文档长度是平均长度的2倍，则L＝2。</p><p>（2）b是一个常数，它的作用是规定L对评分的影响有多大。加了L和b的公式变为：</p><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>TF Score = ((k + 1) * tf) / (k * (1.0 - b + b * L) + tf)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+r+`" alt="" loading="lazy"></p><p>更多细节原理推荐：</p><p>https://blog.mimacom.com/elasticsearch-scoring-algorithm-changes/</p><p>https://blog.mimacom.com/bm25-got/</p><h3 id="elasticsearch-哪些查询影响相关性评分" tabindex="-1"><a class="header-anchor" href="#elasticsearch-哪些查询影响相关性评分" aria-hidden="true">#</a> Elasticsearch 哪些查询影响相关性评分？</h3><p>布尔查询中的每个must，should和must_not元素称为查询子句。</p><pre><code>文档满足must或 should条款的标准的程度有助于文档的相关性得分。
分数越高，文档就越符合您的搜索条件。
must_not子句中的条件被视为过滤器。它会影响文档是否包含在结果中，
但不会影响文档的评分方式。在must_not里还可以显式指定任意过滤器，
以基于结构化数据包括或排除文档。
filter：必须 匹配，但它以不评分、过滤模式来进行。filter内部语句
对评分没有贡献，只是根据过滤标准来排除或包含文档。
</code></pre><p>一句话概括：filter、must_not不影响评分，其他影响评分。</p><h2 id="elasticsearch-如何自定义评分" tabindex="-1"><a class="header-anchor" href="#elasticsearch-如何自定义评分" aria-hidden="true">#</a> Elasticsearch 如何自定义评分？</h2><p>这里说是自定义评分，核心还是通过修改评分修改文档相关性，在最前面返回用户最期望的结果。</p><h3 id="index-boost-索引层面修改相关性" tabindex="-1"><a class="header-anchor" href="#index-boost-索引层面修改相关性" aria-hidden="true">#</a> Index Boost 索引层面修改相关性</h3><h3 id="原理说明" tabindex="-1"><a class="header-anchor" href="#原理说明" aria-hidden="true">#</a> 原理说明</h3><p>允许在跨多个索引搜索时为每个索引配置不同的级别。</p><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h3><p>索引级别调整评分。</p><h3 id="实战举例" tabindex="-1"><a class="header-anchor" href="#实战举例" aria-hidden="true">#</a> 实战举例：</h3><pre><code>一批数据里，有不同的标签，数据结构一致，不同的标签存储到不同的索引（A、B、C），
最后要严格按照标签来分类展示的话，用什么查询比较好？
要求：先展示A类，然后B类，然后C类
elasticsearch.cn
</code></pre><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT index_a/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subject 1&quot;</span>
<span class="token punctuation">}</span>
PUT index_b/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subject 1&quot;</span>
<span class="token punctuation">}</span>
PUT index_c/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subject 1&quot;</span>
<span class="token punctuation">}</span>


GET index_*/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;indices_boost&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index_a&quot;</span><span class="token operator">:</span> <span class="token number">1.5</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index_b&quot;</span><span class="token operator">:</span> <span class="token number">1.2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index_c&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;subject.keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;subject 1&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="boosting-修改文档相关性" tabindex="-1"><a class="header-anchor" href="#boosting-修改文档相关性" aria-hidden="true">#</a> boosting 修改文档相关性</h3><p>boosting分为两种类型：</p><pre><code>第一种：索引期间修改文档的相关性。
</code></pre><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT my_index
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>索引期间修改相关性的弊端非常明显：修改boost值的唯一方式是重建索引，reindex数据，成本太高了！</p><pre><code>第二种：查询的时候修改文档的相关性。
</code></pre><p>本小节着重讲解：查询时候修改文档相关性。 原理说明</p><p>通过boosting修改文档相关性。</p><pre><code>boost取值：0 - 1 之间的值，如：0.2，代表降低评分；
boost取值：&gt; 1， 如：1.5，代表提升评分。
</code></pre><p>适用场景</p><p>自定义修改满足某个查询条件的评分。 实战一把</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
POST _search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pingpang best&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">&quot;title^3&quot;</span><span class="token punctuation">,</span>
              <span class="token string">&quot;content&quot;</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Kimchy&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">0.8</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;quick brown fox&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>negative_boost 降低相关性 原理说明</p><pre><code>negative_boost 对 negative部分query生效，
计算评分时，boosting部分评分不修改，negative部分query 乘以 negative_boost值。
negative_boost 取值：0-1.0，举例：0.3。
</code></pre><p>适用场景</p><p>对某些返回结果不满意，但又不想排除掉（must_not），可以考虑boosting query的negative_boost。 实战一把</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET /_search
<span class="token punctuation">{</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;boosting&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;positive&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;term&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;text&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;apple&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;negative&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                 <span class="token property">&quot;term&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                     <span class="token property">&quot;text&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;pie tart fruit crumble tree&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;negative_boost&quot;</span> <span class="token operator">:</span> <span class="token number">0.5</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function-score-自定义评分" tabindex="-1"><a class="header-anchor" href="#function-score-自定义评分" aria-hidden="true">#</a> function_score 自定义评分</h3><pre><code>原理说明
</code></pre><p>支持用户自定义一个或多个查询或者脚本，达到精细化控制评分的目的。 适用场景</p><p>支持针对复杂查询的自定义评分业务场景。 实战一把</p><p>实战问题1：如何同时根据 销量和浏览人数进行相关度提升？</p><p>问题来源：https://elasticsearch.cn/question/4345</p><p>问题描述：针对商品，例如有</p><p><img src="`+u+`" alt="" loading="lazy"></p><p>想要有一个提升相关度的计算，同时针对销量和浏览人数</p><p>例如oldScore*(销量+浏览人数) field_value_factor好像只能支持单个field 求大神解答？</p><p>解答，可以借助：script_score实现。</p><p>实战如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>PUT product_test/_bulk
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sales&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token property">&quot;visitors&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sales&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token property">&quot;visitors&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;sales&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;visitors&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">}</span>

POST product_test/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;function_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;script_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_score * (doc[&#39;sales&#39;].value+doc[&#39;visitors&#39;].value)&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实战问题2： 基于文章点赞数计算评分。以下：title代表文章标题；like：代表点赞数。</p><p>期望评分标准：基于点赞数评分，且最终评分相对平滑。</p><pre><code>核心原理：field_value_factor 函数使用文档中的字段来影响得分。
</code></pre><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>
DELETE news_index
POST news_index/_bulk
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;ElasticSearch原理- 神一样的存在&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;Elasticsearch 快速开始&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;like&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;开源搜索与分析· Elasticsearch&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;like&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;_id&quot;</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;铭毅天下 死磕Elasticsearch&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;like&quot;</span><span class="token operator">:</span><span class="token number">1000</span><span class="token punctuation">}</span>

GET news_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;function_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Elasticsearch&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;field_value_factor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;like&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;modifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log1p&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;factor&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;missing&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;boost_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sum&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><pre><code>评分计算公式解读：new_score = old_score + log(1 + 0.1 * like值)
missing含义：使用 field_value_factor 时要注意，有的文档可能会缺少这个字段，加上 missing 来个这些缺失字段的文档一个缺省值
</code></pre><p>实战常见问题</p><p>星球提问：有没有办法让同一个索引里面对固定的查询返回的相关性评分是在固定的范围之内的？比如0-100分这样的？</p><p>这样就可以知道对某些词语或文档的搜索，在索引里面是否有满足相关性的文档了。</p><p>回答：</p><pre><code>参数1：&quot;modifier&quot;: &quot;log1p&quot;，使得评分结果平滑。
参数2：max_boost
</code></pre><p>通过设置max_boost参数，可以将新分数限制为不超过特定限制。</p><p>max_boost的默认值为FLT_MAX。</p><div class="language-code line-numbers-mode" data-ext="code"><pre class="language-code"><code>#define FLT_MAX 3.402823466e+38F

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查询后二次打分rescore_query</p><pre><code>原理说明
</code></pre><p>二次评分是指重新计算查询返回结果文档中指定个数文档的得分，Elasticsearch会截取查询返回的前N个，并使用预定义的二次评分方法来重新计算他们的得分。 适用场景</p><p>对查询语句的结果不满意，需要重新打分的场景。</p><p>但，如果对全部有序的结果集进行重新排序的话势必开销会很大，使用rescore_query只对结果集的子集进行处理。 实战一把</p><pre><code>基础上实战
</code></pre><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>GET news_index/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;exists&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;like&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rescore&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;window_size&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;rescore_query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;function_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;script_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;doc.like.value&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>window_size含义：</p><p>query rescorer仅对query和 post_filter阶段返回的前K个结果执行第二个查询。</p><p>每个分片上要检查的文档数量可由window_size参数控制，默认为10。</p><p>探讨了Elasticsearch相关性、打分机制、不同自定义评分的原理、适用场景，并结合实战业务进行解读。</p>`,114);function h(y,g){const s=i("ExternalLinkIcon");return p(),o("div",null,[n("div",k,[v,n("p",null,[n("a",m,[a("实战 | Elasticsearch自定义评分的N种方法"),e(s)])]),n("p",null,[n("a",b,[a("实战 | Elasticsearch自定义评分的N种方法"),e(s)])])]),q])}const f=t(d,[["render",h],["__file","esscore.html.vue"]]);export{f as default};
