import{_ as a,X as e,Y as t,Z as n,a1 as p,$ as c,a2 as o,C as l}from"./framework-0b23a550.js";const i="/assets/1-3099d0d2.png",u="/assets/2-3de10dd5.png",k="/assets/3-e3ead6a4.png",r="/assets/4-38babc05.png",d="/assets/5-875db0b1.png",m="/assets/6-4703e8e7.png",v="/assets/7-3e603522.png",b="/assets/8-ad9020fc.png",g={},y={class:"hint-container tip"},w=n("p",{class:"hint-container-title"},"参考",-1),C={href:"https://developer.aliyun.com/article/785815",target:"_blank",rel:"noopener noreferrer"},h=o(`<h2 id="线路检查工具" tabindex="-1"><a class="header-anchor" href="#线路检查工具" aria-hidden="true">#</a> 线路检查工具</h2><p>1 意义</p><p>为什么需要线路检查工具呢，有以下几个方面的原因：</p><pre><code>每逢大促都需要进行各网络和各行业的线路调整，调整完成之后，是否得到期望状态，需要检查确认。
上下游应用之间数据的一致性检查，如果存在不一致，可能会在订单履行时造成卡单。
有些问题发生后，业务同学需要全面检查一遍线路数据，判断是否符合预期。
各领域之间的数据变更缺乏联动性，导致资源和线路出现不一致。
</code></pre><p>为什么要把线路检查工具产品化呢，考虑如下：</p><pre><code>以前每次大促，都是技术同学现场编写代码捞数据给到业务同学，而且因为人员流动性较大，代码可复用性较低，导致重复劳动。产品化后，可以方便地传承下去，避免不必要的重复劳动。
每次因为时间紧急，现场写的代码都比较简单，经常是直接将数据打印到标准输出，然后复制出来，人工拆分转成Excel格式；这样的过程要进行多次，占用太多技术同学的时间。产品化后，解放了技术同学，业务同学可以自己在页面操作。
很多数据检查，是每次大促都会进行的，业务同学与技术同学之间来回沟通的成本较高。产品化后，可以避免这些耗时耗力的沟通，大家可以把更多的时间放在其他的大促保障工作上。
</code></pre><p>2 检查项</p><p>根据2020年D11进行的数据检查，本次共实现8项，下面列举了4项，如下：</p><pre><code>时效对齐检查：确保履行分单正常。
弱控线路与表达网络一致性：确保履行和路由不会因为线路缺失而卡单。
资源映射和编码映射一致：前者是表达线路时所用，后者是订单履约时所用，确保表达和履约能够一致。
检查线路数量：统计现存线路的情况。
</code></pre><p>好了，了解了背景知识，下面开始介绍所用到的设计模式，以及为什么要用、怎么用。</p><h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h2><h3 id="模板方法模式-泛型" tabindex="-1"><a class="header-anchor" href="#模板方法模式-泛型" aria-hidden="true">#</a> 模板方法模式+泛型</h3><p>1 模板方法模式+泛型</p><p>上述8项数据检查工具，大致的处理流程是类似的，如下：</p><p><img src="`+i+'" alt="" width="300" height="600" loading="lazy"></p><p>针对不同的检查工具，只有“线路数据检查”这一步是不一样的逻辑，其他步骤都是相同的，如果每个检查工具都实现这么一套逻辑，必定造成大量的重复代码，维护性较差。</p><p>模板方法模式能够很好地解决这个问题。模板方法设计模式包含模板方法和基本方法，模板方法包含了主要流程；基本方法是流程中共用的逻辑，如创建检查任务，结果输出等等。</p><p>下图是所实现的模板方法模式的类继承关系：</p><p><img src="'+u+`" alt="" loading="lazy"></p><p>分析如下：</p><p>1）DataCheckProductService接口为对外提供的服务，dataCheck方法为统一的数据检查接口。</p><p>2）AbstractDataCheckProductService是一个抽象类，设定模板，即在dataCheck方法中设定好流程，包括如下：</p><pre><code>commonParamCheck方法：进行参数合法性检查，不合法的情况下，直接返回。
createFileName方法：创建文件名称。
createTaskRecord方法：创建检查任务。
runDataCheck方法：进行数据检查，这是一个抽象方法，所有检查工具都要实现此方法，以实现自己的逻辑。
uploadToOSS方法：将检查结果上传到OSS，便于下载。
updateRouteTask方法：结束时更新任务为完成。
</code></pre><p>dataCheck方法为模板方法，runDataCheck方法由各个子类去实现，其他方法是基本方法。还有一些其他方法，是各个检查工具都需要使用的，所以就放在了父类中。</p><p>3）CheckSupplierAndCodeMappingService类、CheckLandingCoverAreaService类和CheckAncPathNoServiceService类为具体的检查工具子类，必须实现runDataCheck方法</p><p>因为不同检查项检的查结果的格式是不一样的，所以使用了泛型，使得可以兼容不同的检查结果。</p><p>简化的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 数据检查工具产品化对外服务接口
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DataCheckProductService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 数据检查
     * <span class="token keyword">@param</span> <span class="token parameter">requestDTO</span> 请求参数
     * */</span>
  <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">BaseResult</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token function">dataCheck</span><span class="token punctuation">(</span><span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 数据检查工具产品化服务
 *
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractDataCheckProductService</span> <span class="token keyword">implements</span> <span class="token class-name">DataCheckProductService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 数据检查
     * <span class="token keyword">@param</span> <span class="token parameter">requestDTO</span> 请求参数
     * <span class="token keyword">@return</span>
     * */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">BaseResult</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> <span class="token function">dataCheck</span><span class="token punctuation">(</span><span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token comment">//1. 参数合法性检查</span>
            <span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">Boolean</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> paramCheckResult <span class="token operator">=</span> <span class="token function">commonParamCheck</span><span class="token punctuation">(</span>requestDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>paramCheckResult<span class="token punctuation">.</span><span class="token function">getLeft</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token class-name">BaseResult</span><span class="token punctuation">.</span><span class="token function">ofFail</span><span class="token punctuation">(</span>paramCheckResult<span class="token punctuation">.</span><span class="token function">getRight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            
            <span class="token comment">//2. 创建导出任务</span>
            <span class="token class-name">String</span> fileName <span class="token operator">=</span> <span class="token function">createFileName</span><span class="token punctuation">(</span>requestDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">RouteTaskRecordDO</span> taskRecordDO <span class="token operator">=</span> <span class="token function">createTaskRecord</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> requestDTO<span class="token punctuation">.</span><span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//3. 进行数据检查</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">synchronizedList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">runDataCheck</span><span class="token punctuation">(</span>resultList<span class="token punctuation">,</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//4. 写入文件</span>
            <span class="token class-name">String</span> ossUrl <span class="token operator">=</span> <span class="token function">uploadToOSS</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span>resultList<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//5. 更新任务为完成状态</span>
            <span class="token function">updateRouteTask</span><span class="token punctuation">(</span>taskRecordDO<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">DDportTaskStatus</span><span class="token punctuation">.</span><span class="token constant">FINISHED</span><span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> resultList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>ossUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">return</span> <span class="token class-name">BaseResult</span><span class="token punctuation">.</span><span class="token function">ofSuccess</span><span class="token punctuation">(</span>taskRecordDO<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">LogPrinter</span><span class="token punctuation">.</span><span class="token function">errorLog</span><span class="token punctuation">(</span><span class="token string">&quot;dataCheck-error, beanName=&quot;</span><span class="token operator">+</span><span class="token function">getBeanName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">BaseResult</span><span class="token punctuation">.</span><span class="token function">ofFail</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

     <span class="token doc-comment comment">/**
     * 进行数据检查
     * <span class="token keyword">@param</span> <span class="token parameter">resultList</span> 存放检查结果
     * <span class="token keyword">@param</span> <span class="token parameter">requestDTO</span> 请求参数
     * <span class="token keyword">@return</span>
     * */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">runDataCheck</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 检查资源映射和编码映射一致
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckSupplierAndCodeMappingService</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDataCheckProductService</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">runDataCheck</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//自己的检查逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 检查区域内落地配必须三级全覆盖
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckLandingCoverAreaService</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDataCheckProductService</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">runDataCheck</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//自己的检查逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 检查资源映射和编码映射一致
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckAncPathNoServiceService</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDataCheckProductService</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">runDataCheck</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//自己的检查逻辑</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用模板方法模式的好处是：</p><pre><code>简化了代码，每个工具只需要关心自己的核心检查逻辑，不需要关注前置和后置操作。
提高了扩展性，可以方便地增加新的检查工具。
统一的异常捕获和处理逻辑，子类有异常，尽管往外抛出。
</code></pre><h3 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h3><p>之所以会用到策略模式，是因为一些检查工具写完之后，发现跑出来的结果数据太多，有几万、几十万等等，一方面，检查比较耗时，结果文件会很大，下载耗时；另一方面，这么多数据给到业务同学，他们也很难处理和分析，也许他们只是想看一下总体情况，并不想看具体的到哪个地方的线路。为此，在原先方案设计的基础上，增加了“统计信息”的选项，让用户可以自行选择“详细信息”还是“统计信息”，对应到页面上就是一个单选框，如下：</p><p><img src="`+k+'" alt="" loading="lazy"></p><p>现在增加了一种检查方式，今后是否还会有其他的检查方式？完全有可能的。所以得考虑到扩展性，便于后面同学增加新的检查方式。</p><p>此外，还有一种场景也可以使用策略模式，那就是业务系统中有很多业务网络，不同网络之间有一些差异；本次所实现的检查工具，有几个涉及到多个网络，今后可能会涉及到所有网络。</p><p>综合以上两种场景，最合适的就是策略模式了。“详细信息”和“统计信息”各采用一种策略，不同网络使用不同的策略，既便于代码理解，又便于后续扩展。</p><p>“详细信息”和“统计信息”两种检查结果的策略类图如下：</p><p><img src="'+r+`" alt="" loading="lazy"></p><p>解析：</p><p>CompareModeStrategy对外提供统一的结果处理接口doHandle，策略子类必须实现此接口。 SupplierAndCodeMappingStatisticsStrategy和SupplierAndCodeMappingDetailStrategy是检查配送资源和编码映射一致性的两种结果信息方式，前者为统计方式，后者为详细方式。 LandingCoverAreaStatisticsStrategy和LandingCoverAreaDetailStrategy是检查落地配覆盖范围的两种结果信息方式，前者为统计方式，后者为详细方式。 那AbstractCompareModeStrategy是干什么用的？它是一个抽象类，负责承接所有策略子类共用的一些方法。</p><p>简化的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 检查结果策略对外接口
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CompareModeStrategy</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 具体操作
     *
     * <span class="token keyword">@param</span> <span class="token parameter">list</span>
     * <span class="token keyword">@param</span> <span class="token parameter">requestDTO</span>
     * <span class="token keyword">@return</span> 结果集
     * */</span>
    <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">doHandle</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">CompareBO</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 策略公共父类
 *
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * <span class="token keyword">@apiNote</span> 主要是将子类共用方法和成员抽离出来
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractCompareModeStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">CompareModeStrategy</span> <span class="token punctuation">{</span>
    <span class="token comment">//子类的共用方法，可以放在此类中</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 检查落地配覆盖范围 详细信息 策略类
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LandingCoverAreaDetailStrategy</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractCompareModeStrategy</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">doHandle</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">CompareBO</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//检查结果处理逻辑</span>
        <span class="token keyword">return</span> resultList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 检查落地配覆盖范围 统计信息 策略类
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LandingCoverAreaStatisticsStrategy</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractCompareModeStrategy</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">doHandle</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">CompareBO</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//检查结果处理逻辑</span>
        <span class="token keyword">return</span> resultList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 检查配送资源和编码映射一致 详细信息 策略类
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SupplierAndCodeMappingDetailStrategy</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractCompareModeStrategy</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">doHandle</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">CompareBO</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//检查结果处理逻辑</span>
        <span class="token keyword">return</span> resultList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 检查配送资源和编码映射一致 统计信息 策略类
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SupplierAndCodeMappingStatisticsStrategy</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractCompareModeStrategy</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">doHandle</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">CompareBO</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//检查结果处理逻辑</span>
        <span class="token keyword">return</span> resultList<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，不同网络的处理策略类图如下</p><p><img src="`+d+`" alt="" loading="lazy"></p><p>代码与上面类似，就不展示了。</p><p>使用策略模式的好处是：</p><pre><code>提高代码扩展性，后续增加别的结果格式或别的网络处理逻辑，可以在不修改其他策略的情况下直接新增。
提高代码可读性，取代了if...else，条理清晰。
不同系列采用不同的策略，策略与策略之间可以嵌套使用，形成策略的叠加效用。
</code></pre><h3 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h3><p>工厂模式解决的是bean的生产问题，简单工厂模式根据入参生产不同的bean，普通工厂模式针对每个bean都构建一个工厂，此两者各有优劣，看需要。本方案采用的是简单工厂模式。</p><p>之所以使用工厂模式，是因为有太多的bean需要构造，如果在业务逻辑中构造各种bean，则会显得凌乱和分散，所以需要一个统一生成bean的地方，更好地管理和扩展。</p><p>本方案中主要有三类bean需要工厂来生成：</p><pre><code>模板方法模式中所用到的子类。
检查结果格式策略中所用到的子类。
不同网络处理策略中所用到的子类。
</code></pre><p>所以，使用三个工厂分别构造这三种类型的bean。另外，因为每个bean主要的功能都在方法中，不涉及类变量的使用，所以可以利用spring容器生成的bean，而不是我们自己new出来，这样就使得bean可以重复使用。因此，这里的工厂只是bean的决策（根据参数决定使用哪个bean），不用自己new了。</p><p>三个工厂分别如下：</p><p>DataCheckProductFatory：由getDataCheckProductService方法根据输入参数决策使用哪个数据检查工具。 CompareModeStrategyFactory：用于决策使用哪种格式输出，因为将输出策略分为了2类（详细信息和统计信息），所以需要传入两个参数才能决定使用哪种策略。 DataCheckNetworkStrategyFactory：用于决策使用哪种网络处理策略，因为将策略分为了2类（4PL网络和其他网络），所以需要传入两个参数才能决定使用哪种策略。</p><p><img src="`+m+'" alt="" loading="lazy"><img src="'+v+'" alt="" loading="lazy"><img src="'+b+`" alt="" loading="lazy"></p><p>这三个工厂的代码类似，这里就以CompareModeStrategyFactory为例，简化的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 比对结果集方式
 * <span class="token keyword">@author</span> xxx
 * <span class="token keyword">@since</span> xxx
 * */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CompareModeStrategyFactory</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/************************ 详细结果的bean  **************************/</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">LandingCoverAreaDetailStrategy</span> landingCoverAreaDetailStrategy<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">SupplierAndCodeMappingDetailStrategy</span> supplierAndCodeMappingDetailStrategy<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/************************ 统计结果的bean  **************************/</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">LandingCoverAreaStatisticsStrategy</span> landingCoverAreaStatisticsStrategy<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">SupplierAndCodeMappingStatisticsStrategy</span> supplierAndCodeMappingStatisticsStrategy<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 获取比对结果的策略
     * */</span>
    <span class="token keyword">public</span> <span class="token class-name">CompareModeStrategy</span> <span class="token function">getCompareModeStrategy</span><span class="token punctuation">(</span><span class="token class-name">DataCheckProductEnum</span> productEnum<span class="token punctuation">,</span> <span class="token class-name">DataCompareModeEnum</span> modeEnum<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">CompareModeStrategy</span> compareModeStrategy <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>modeEnum<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token constant">DETAIL_INFO</span><span class="token operator">:</span>
                compareModeStrategy <span class="token operator">=</span> <span class="token function">getDetailCompareModeStrategy</span><span class="token punctuation">(</span>productEnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">STATISTICS_INFO</span> <span class="token operator">:</span>
                compareModeStrategy <span class="token operator">=</span> <span class="token function">getStatisticsCompareModeStrategy</span><span class="token punctuation">(</span>productEnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> compareModeStrategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 获取 信息信息 策略对象
     * */</span>
    <span class="token keyword">private</span> <span class="token class-name">CompareModeStrategy</span> <span class="token function">getDetailCompareModeStrategy</span><span class="token punctuation">(</span><span class="token class-name">DataCheckProductEnum</span> productEnum<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">CompareModeStrategy</span> compareModeStrategy <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>productEnum<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token constant">CHECK_LANDING_COVER_AREA</span><span class="token operator">:</span>
                compareModeStrategy <span class="token operator">=</span> landingCoverAreaDetailStrategy<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">CHECK_SUPPLIER_AND_CODE_MAPPING</span><span class="token operator">:</span>
                compareModeStrategy <span class="token operator">=</span> supplierAndCodeMappingDetailStrategy<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> compareModeStrategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * 获取 统计信息 策略对象
     * */</span>
    <span class="token keyword">private</span> <span class="token class-name">CompareModeStrategy</span> <span class="token function">getStatisticsCompareModeStrategy</span><span class="token punctuation">(</span><span class="token class-name">DataCheckProductEnum</span> productEnum<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">CompareModeStrategy</span> compareModeStrategy <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>productEnum<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token constant">CHECK_LANDING_COVER_AREA</span><span class="token operator">:</span>
                compareModeStrategy <span class="token operator">=</span> landingCoverAreaStatisticsStrategy<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token constant">CHECK_SUPPLIER_AND_CODE_MAPPING</span><span class="token operator">:</span>
                compareModeStrategy <span class="token operator">=</span> supplierAndCodeMappingStatisticsStrategy<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> compareModeStrategy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用工厂模式的好处是：</p><pre><code>便于bean的管理，所有的bean都在一处创建（或决策）。
条理清晰，便于阅读和维护。
</code></pre><h3 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> “代理模式”</h3><p>这个代理模式是打着双引号的，因为不是真正的代理模式，只是从实现方式上来说，具有代理模式的意思。为什么需要用到代理模式？是因为类太多了，业务逻辑分散在各个类中，有的在模板子类中，有的在网络策略中，有的在结果输出格式策略中，而这些业务逻辑都需要多线程执行和异常捕获。如果有个代理类，能够收口这些处理逻辑，只需增加前置多线程处理和后置异常处理即可。</p><p>Java语言中的函数式编程，具备这种能力。所谓函数式编程，是指能够将方法当做参数传递给方法，前面“方法”是业务逻辑，后面“方法”是代理，将业务逻辑传递给代理，就实现了统一收口的目的。</p><p>能够实现此功能的接口有四个，分别是：Consumer、Supplier、Predicate与Function，怎么使用可以网上查询。本方案使用的是Consumer，因为它是用来消费的，即需要传入一个参数，没有返回值，符合本方案的设计。</p><p>简化后的代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheckLandingCoverAreaService</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractDataCheckProductService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">runDataCheck</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> resultList<span class="token punctuation">,</span> <span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">)</span><span class="token punctuation">{</span>
        dataCheckUtils<span class="token punctuation">.</span><span class="token function">parallelCheckByFromResCodes</span><span class="token punctuation">(</span>requestDTO<span class="token punctuation">,</span>requestDTO<span class="token punctuation">.</span><span class="token function">getFromResCodeList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>fromResCode<span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token class-name">ExpressNetworkQuery</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ExpressNetworkQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            query<span class="token punctuation">.</span><span class="token function">setNs</span><span class="token punctuation">(</span><span class="token class-name">NssEnum</span><span class="token punctuation">.</span><span class="token constant">PUB</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            query<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token class-name">StatusEnum</span><span class="token punctuation">.</span><span class="token constant">ENABLE</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            query<span class="token punctuation">.</span><span class="token function">setGroupNameList</span><span class="token punctuation">(</span>requestDTO<span class="token punctuation">.</span><span class="token function">getGroupNameList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            query<span class="token punctuation">.</span><span class="token function">setBrandCodeList</span><span class="token punctuation">(</span>requestDTO<span class="token punctuation">.</span><span class="token function">getBrandCodeList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            query<span class="token punctuation">.</span><span class="token function">setFromResCode</span><span class="token punctuation">(</span>fromResCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">TmsMasterExpressNetworkDO</span><span class="token punctuation">&gt;</span></span> masterExpressNetworkDOS <span class="token operator">=</span> tmsMasterExpressNetworkService<span class="token punctuation">.</span><span class="token function">queryExpressNetworkTimeList</span><span class="token punctuation">(</span>query<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">startCompareWithAnc</span><span class="token punctuation">(</span>resultList<span class="token punctuation">,</span>requestDTO<span class="token punctuation">,</span>masterExpressNetworkDOS<span class="token punctuation">,</span>fromResCode<span class="token punctuation">,</span>solutionCodeMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataCheckUtils</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 并行处理每个仓
     * <span class="token keyword">@param</span> <span class="token parameter">requestDTO</span> 请求参数
     * <span class="token keyword">@param</span> <span class="token parameter">fromResCodeList</span> 需要检查的仓列表
     * <span class="token keyword">@param</span> <span class="token parameter">checkOperation</span> 具体的业务处理逻辑
     * */</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">parallelCheckByFromResCodes</span><span class="token punctuation">(</span><span class="token class-name">DataCheckRequestDTO</span> requestDTO<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> fromResCodeList<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> checkOperation<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">&gt;</span></span> futureList <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">synchronizedList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fromResCodeList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>fromResCode<span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token class-name">CompletableFuture</span> future <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">runAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span><span class="token punctuation">{</span>
                    checkOperation<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>fromResCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">LogPrinter</span><span class="token punctuation">.</span><span class="token function">errorLog</span><span class="token punctuation">(</span><span class="token string">&quot;parallelCheckByFromResCodes-error, taskId=&quot;</span><span class="token operator">+</span>requestDTO<span class="token punctuation">.</span><span class="token function">getTaskId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token function">recordErrorInfo</span><span class="token punctuation">(</span>requestDTO<span class="token punctuation">.</span><span class="token function">getTaskId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token constant">DATA_CHECK_THREAD_POOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            futureList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>future<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//等待所有线程结束</span>
        futureList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>future<span class="token operator">-&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span><span class="token punctuation">{</span>
                future<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">LogPrinter</span><span class="token punctuation">.</span><span class="token function">errorLog</span><span class="token punctuation">(</span><span class="token string">&quot;parallelCheckByFromResCodes-future-get-error&quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，Consumer所代表的就是一个方法，将此方法作为parallelCheckByFromResCodes方法的一个参数，在parallelCheckByFromResCodes中进行多线程和异常处理，既能统一收口，又大大减少了重复代码。</p><p>代理模式的好处是：</p><pre><code>统一收口多种不同的业务逻辑，统一做日志和异常处理。
减少重复代码，提高了代码质量。
可维护性较强。
</code></pre><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><p>像结果输出格式策略模式那样，虽然AbstractCompareModeStrategy没有实际的业务逻辑，但仍然把它作为一个基类，目的是所有子类共用的逻辑或方法，能够放在此类中，减少代码量，提升维护性。</p><p>但是有的时候，不是继承自同一个基类的子类们，仍然要共用一些逻辑或方法（如parallelCheckByFromResCodes方法），但Java语言限制一个类只能继承一个基类，怎么办呢？简单的办法就是把这些共用逻辑或方法放到一个工具类（如DataCheckUtils）中。</p><p>总结以下几点：</p><pre><code>将提升代码可读性、可扩展性和可维护性的意识注入到平时的项目中，便于自己，利于他人。
如果项目紧急没时间考虑很多，希望之后有时间时能够改善和优化。
工作不仅是为了完成任务，更是提升自己的过程。能力要用将来进行时。
</code></pre>`,74);function S(D,f){const s=l("ExternalLinkIcon");return e(),t("div",null,[n("div",y,[w,n("p",null,[n("a",C,[p("设计模式在业务系统中的应用"),c(s)])])]),h])}const L=a(g,[["render",S],["__file","apply.html.vue"]]);export{L as default};
