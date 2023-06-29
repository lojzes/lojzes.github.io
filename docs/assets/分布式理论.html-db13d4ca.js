import{_ as r,X as l,Y as s,Z as e,a1 as i,$ as n,a2 as t,C as o}from"./framework-b6ea3384.js";const c="/assets/cap-1-7f5a338a.png",p="/assets/nacos-1-c1cca371.png",d={},h={class:"hint-container info"},u=e("p",{class:"hint-container-title"},"参考",-1),v={href:"https://segmentfault.com/a/1190000014918849",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.51cto.com/u_15281317/3008688",target:"_blank",rel:"noopener noreferrer"},_={href:"https://juejin.cn/post/7150662426436829191",target:"_blank",rel:"noopener noreferrer"},f=t('<h2 id="cap-理论" tabindex="-1"><a class="header-anchor" href="#cap-理论" aria-hidden="true">#</a> CAP 理论</h2><p>CAP 理论是分布式系统中最核心的基础理论。</p><ul><li>一致性 (Consistency): 一个写操作返回成功，那么之后的读请求都必须读到这个新数据；如果返回失败，那么所有读操作都不能读到这个数据。所有节点访问同一份最新的数据。</li></ul><div class="hint-container info"><p class="hint-container-title">一致性的理解</p><p>一个将数据副本分布在不同分布式节点上的系统来说，如果对第一个节点的数据进行了更新操作并且更新成功后，其他节点上的数据也应该得到更新，并且所有用户都可以读取到其最新的值，那么这样的系统就被认为具有强一致性（或严格的一致性，最终一致性）。</p></div><ul><li>可用性 (Availability): 对数据更新具备高可用性，请求能够及时处理，不会一直等待，即使出现节点失效。</li></ul><div class="hint-container info"><p class="hint-container-title">可用性的理解</p><p>可用性是指系统提供的服务必须一直处于可用的状态，对于用户的每一个操作请求总是能够在有限的时间内返回结果。“有效的时间内”是指，对于用户的一个操作请求，系统必须能够在指定的时间（即响应时间）内返回对应的处理结果，如果超过了这个时间范围，那么系统就被认为是不可用的。</p><p>“返回结果”是可用性的另一个非常重要的指标，它要求系统在完成对用户请求的处理后，返回一个正常的响应结果。正常的响应结果通常能够明确的反映出对请求的处理结果，即成功或失败，而不是一个让用户感到困惑的返回结果。</p></div><ul><li>分区容错性 (Partition tolerance): 能容忍网络分区，在网络断开的情况下，被分隔的节点仍能正常对外提供服务。</li></ul><div class="hint-container info"><p class="hint-container-title">分区容错性的理解</p><p>分区容错性约束了一个分布式系统需要具有如下特性：分布式系统在遇到任何网络分区故障的时候，仍然需要能够保证对外提供满足一致性和可用性的服务，除非是整个网络环境都发生了故障。</p><p>网络分区是指在分布式系统中，不同的节点分布在不同的子网络（机房或异地网络等）中，由于一些特殊的原因导致这些子网络之间出现网络不连通的状况，但各个子网络的内部网络是正常的，从而导致整个系统的网络环境被切分成了若干个孤立的区域。需要注意的是，组成一个分布式系统的每个节点的加入与退出都可以看作是一个特殊的网络分区。</p></div><h2 id="一致性的分类" tabindex="-1"><a class="header-anchor" href="#一致性的分类" aria-hidden="true">#</a> 一致性的分类</h2><p>一致性是指从系统外部读取系统内部的数据时，在一定约束条件下相同，即数据变动在系统内部各节点应该是同步的。根据一致性的强弱程度不同，可以将一致性的分类为如下几种：</p><ul><li><p>强一致性：（strong consistency）。任何时刻，任何用户都能读取到最近一次成功更新的数据。</p></li><li><p>单调一致性：（monotonic consistency）。任何时刻，任何用户一旦读到某个数据在某次更新后的值，那么就不会再读到比这个值更旧的值。也就是说，可获取的数据顺序必是单调递增的。</p></li><li><p>会话一致性：（session consistency）。任何用户在某次会话中，一旦读到某个数据在某次更新后的值，那么在本次会话中就不会再读到比这值更旧的值，会话一致性是在单调一致性的基础上进一步放松约束，只保证单个用户单个会话内的单调性，在不同用户或同一用户不同会话间则没有保障。</p></li><li><p>最终一致性：（eventual consistency）。用户只能读到某次更新后的值，但系统保证数据将最终达到完全一致的状态，只是所需时间不能保障。</p></li><li><p>弱一致性：（weak consistency）。用户无法在确定时间内读到最新更新的值。</p></li></ul><p>在分布式环境中，一致性是指数据在多个副本之间是否能够保持数据一致的特性。在一致性的需求下，当一个系统在数据一致的状态下执行更新操作后，应该保证系统的数据仍然处于一致的状态。例如</p><p>C、A、P 只能同时满足两个目标，而由于在分布式系统中， P 是必须要保留的，所以要在 C 和 A 间进行取舍。假如要保证服务的可用性，就选择 AP 模型，而要保证一致性的话，就选择 CP 模型。</p><h3 id="如何理解cap理论" tabindex="-1"><a class="header-anchor" href="#如何理解cap理论" aria-hidden="true">#</a> 如何理解CAP理论</h3><ul><li>CA - 单点集群，满足一致性，可用性的系统，通常在可扩展性上不太强大。</li><li>CP - 满足一致性，分区容忍性的系统，通常性能不是特别高。</li><li>AP - 满足可用性，分区容忍性的系统，通常可能对一致性要求低一些。</li></ul><p><img src="'+c+`" alt="" loading="lazy"></p><h2 id="cap-案例" tabindex="-1"><a class="header-anchor" href="#cap-案例" aria-hidden="true">#</a> CAP 案例</h2><h3 id="zoookeeper" tabindex="-1"><a class="header-anchor" href="#zoookeeper" aria-hidden="true">#</a> zoookeeper</h3><p>ZooKeeper从以下几点保证了数据的一致性</p><ul><li><p>顺序一致性：来自任意特定客户端的更新都会按其发送顺序被提交保持一致。也就是说，如果一个客户端将Znode z的值更新为a，在之后的操作中，它又将z的值更新为b，则没有客户端能够在看到z的值是b之后再看到值a（如果没有其他对z的更新）。</p></li><li><p>原子性：每个更新要么成功，要么失败。这意味着如果一个更新失败，则不会有客户端会看到这个更新的结果。</p></li><li><p>单一系统映像：一个客户端无论连接到哪一台服务器，它看到的都是同样的系统视图。这意味着，如果一个客户端在同一个会话中连接到一台新的服务器，它所看到的系统状态不会比 在之前服务器上所看到的更老。当一台服务器出现故障，导致它的一个客户端需要尝试连接集合体中其他的服务器时，所有滞后于故障服务器的服务器都不会接受该 连接请求，除非这些服务器赶上故障服务器。</p></li><li><p>持久性：一个更新一旦成功，其结果就会持久存在并且不会被撤销。这表明更新不会受到服务器故障的影响。</p></li><li><p>实时性：在特定的一段时间内，客户端看到的系统需要被保证是实时的（在十几秒的时间里）。在此时间段内，任何系统的改变将被客户端看到，或者被客户端侦测到。</p></li></ul><p>在此ZooKeeper保证的是 <mark>CP</mark></p><p>分析：可用性（A:Available）</p><p>不能保证每次服务请求的可用性。任何时刻对ZooKeeper的访问请求能得到一致的数据结果，同时系统对网络分割具备容错性；但是它不能保证每次服务请求的可用性（注：也就是在极端环境下，ZooKeeper可能会丢弃一些请求，消费者程序需要重新请求才能获得结果）。所以说，<u><code>ZooKeeper不能保证服务可用性</code></u>。</p><p>进行leader选举时集群都是不可用。在使用ZooKeeper获取服务列表时，当master节点因为网络故障与其他节点失去联系时，剩余节点会重新进行leader选举。问题在于，选举leader的时间太长，30 ~ 120s, 且选举期间整个zk集群都是不可用的，这就导致在选举期间注册服务瘫痪，虽然服务能够最终恢复，但是漫长的选举时间导致的注册长期不可用是不能容忍的。所以说，<u><code>ZooKeeper不能保证服务可用性</code></u>。</p><h3 id="eureka" tabindex="-1"><a class="header-anchor" href="#eureka" aria-hidden="true">#</a> Eureka</h3><p>计时就优先保证可用性。Eureka各个节点都是平等的，几个节点挂掉不影响正常节点的工作，剩余的节点依然可以提供注册和查询服务。而Eureka的客户端在向某个Eureka注册时如果发现连接失败，则会自动切换至其他的节点，只要有一台Eureka还在，就能保证注册服务可用（保证可用性），只不过查到的信息可能不是最新的（不保证一致性）。除此之外，Eureka还有一种自我保护机制，如果在15分钟内超过85%的节点都没有正常的心跳，那么Eureka就认为客户端与注册中心出现了网络故障，此时会出现以下几种情况：</p><p>1.Eureka不再从注册列表中移除因为长时间没有收到心跳而应该过期的服务 2.Eureka仍然能够接受新服务的注册和查询请求，但是不会被同步到其它节点上（即保证当前节点依然可用） 3.当前网络稳定时，当前实例新的注册信息会被同步到其它节点中 因此，Eureka可以很好的应对因网络故障导致节点失去联系的情况，而不会像zookeeper那样使整个注册服务瘫痪。</p><h3 id="nacos" tabindex="-1"><a class="header-anchor" href="#nacos" aria-hidden="true">#</a> nacos</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
        group:  mall-order
        cluster-name: SH
        ephemeral: false   //持久化实例，使用 CP架构
        ephemeral: true	   //临时实例，使用 AP架

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>临时实例，选择AP架构，使用Distro协议，分布式协议的一种，阿里内部的协议，服务是放在内存中！ 持久实例，选择CP架构，使用Raft协议来实现，点击查看Raft协议详情！服务是放在磁盘中！</p><p><img src="`+p+'" alt="" loading="lazy"></p><h3 id="遵循ap原则的框架和中间件" tabindex="-1"><a class="header-anchor" href="#遵循ap原则的框架和中间件" aria-hidden="true">#</a> 遵循AP原则的框架和中间件</h3><p>有两种支持高可用性的模式: 故障切换（fail-over） 和复制（replication） 。遵循AP原则的框架和中间件，大体都是通过这两种模式来保证服务的高可用性。</p><h2 id="base-理论" tabindex="-1"><a class="header-anchor" href="#base-理论" aria-hidden="true">#</a> BASE 理论</h2><p>Basically Available（基本可用）、Soft state（软状态）和Eventually consistent（最终一致性）三个短语的简写，BASE是对CAP中一致性和可用性权衡的结果，其来源于对大规模互联网系统分布式实践的结论，是基于CAP定理逐步演化而来的，其核心思想是即使无法做到强一致性（Strong consistency），但每个应用都可以根据自身的业务特点，采用适当的方式来使系统达到最终一致性（Eventual consistency）。 简单来说BASE就是CAP的折中，C A P我三个都要，但不用100%保证每一次原则。</p><h2 id="常见面试题" tabindex="-1"><a class="header-anchor" href="#常见面试题" aria-hidden="true">#</a> 常见面试题</h2><p>什么是脑裂： 集群（M-S的情况）通常是发生在节点通信不可达(分区)的情况下，集群会分裂成不同的小集群，小集群各自选举出多个master节点的情况。</p><p>nacos和zookeeper是如何避免脑裂的？ leader选举，要求节点的投票数量&gt;总节点数量/2，即过半数，有这个选举原则保证了集群出现分区，无论如何最多只能有一个小集群选出leader。</p><p>M-S 模式的集群节点个数为何推荐是奇数个？ 首先，偶数个节点的集群一旦出现对半分区(比如4个节点分区成两个节点和两个节点的情况)，整个集群无法选举出leader，集群无法提供服务。 其次，在容错能力相同的情况下，奇数节点比偶数节约资源。比如，5个节点挂了2个还能选出leader，而6个节点最多也只能挂2个节点才能保证选举出leader。</p>',39);function b(k,A){const a=o("ExternalLinkIcon");return l(),s("div",null,[e("div",h,[u,e("p",null,[e("a",v,[i("https://segmentfault.com/a/1190000014918849"),n(a)])]),e("p",null,[e("a",m,[i("Nacos集群的CP架构，CAP原则与BASE原则的应用"),n(a)])]),e("p",null,[e("a",_,[i("https://juejin.cn/post/7150662426436829191"),n(a)])])]),f])}const g=r(d,[["render",b],["__file","分布式理论.html.vue"]]);export{g as default};
