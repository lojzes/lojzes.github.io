import{_ as n,X as o,Y as s,Z as e,a1 as a,$ as r,a2 as i,C as c}from"./framework-0b23a550.js";const l="/assets/6-6bdc43df.png",d="/assets/7-73e1115b.png",p={},h={class:"hint-container tip"},_=e("p",{class:"hint-container-title"},"参考",-1),b={href:"https://www.cnblogs.com/lonely-wolf/p/14397704.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://segmentfault.com/a/1190000023008259",target:"_blank",rel:"noopener noreferrer"},m=i('<h2 id="rabbitmq-集群知多少" tabindex="-1"><a class="header-anchor" href="#rabbitmq-集群知多少" aria-hidden="true">#</a> RabbitMQ 集群知多少</h2><p>通常情况下，在集群中我们把每一个服务称之为一个节点，在 <code>RabbitMQ</code> 集群中，节点类型可以分为两种：</p><ul><li>内存节点：元数据存放于内存中。为了重启后能同步数据，内存节点会将磁盘节点的地址存放于磁盘之中，除此之外，如果消息被持久化了也会存放于磁盘之中，因为内存节点读写速度快，一般客户端会连接内存节点。</li><li>磁盘节点：元数据存放于磁盘中（默认节点类型），需要保证至少一个磁盘节点，否则一旦宕机，无法恢复数据，从而也就无法达到集群的高可用目的。</li></ul><p>PS：元数据，指的是包括<u>队列名字属性、交换机的类型名字属性、绑定信息、vhost等基础信息，不包括队列中的消息数据</u>。</p><p>RabbitMQ 中的集群主要有两种模式：普通集群模式和镜像队列模式。</p><h2 id="普通集群模式" tabindex="-1"><a class="header-anchor" href="#普通集群模式" aria-hidden="true">#</a> 普通集群模式</h2><p>在普通集群模式下，集群中各个节点之间<u>只会相互同步元数据</u>，也就是说，消<u>息数据不会被同步</u>。那么问题就来了，假如我们连接到 A 节点，但是消息又存储在 B 节点又怎么办呢？</p><p>不论是生产者还是消费者，假如连接到的节点上没有存储队列数据，那么内部会将其转发到存储队列数据的节点上进行存储。虽然说内部可以实现转发，但是因为消息仅仅只是存储在一个节点，那么假如这节点挂了，消息是不是就没有了？这个问题确实存在，所以这种普通集群模式并没有达到高可用的目的。</p><p><img src="'+l+'" alt="" loading="lazy"></p><h2 id="镜像队列模式" tabindex="-1"><a class="header-anchor" href="#镜像队列模式" aria-hidden="true">#</a> 镜像队列模式</h2><p>镜像队列模式下，节点之间不<u>仅仅会同步元数据，消息内容也会在镜像节点间同步</u>，可用性更高。这种方案提升了可用性的同时，因为同步数据之间也会带来网络开销从而在一定程度上会影响到性能。</p><p><img src="'+d+'" alt="" loading="lazy"></p>',12);function f(g,x){const t=c("ExternalLinkIcon");return o(),s("div",null,[e("div",h,[_,e("p",null,[e("a",b,[a("高可用rabbitmq集群方案"),r(t)])]),e("p",null,[e("a",u,[a("如何保证消息队列（RabbitMQ）的高可用？"),r(t)])])]),m])}const q=n(p,[["render",f],["__file","rabbitmq-cluster.html.vue"]]);export{q as default};