import{_ as n,X as l,Y as a,Z as e,a1 as d,$ as s,a2 as r,C as t}from"./framework-0b23a550.js";const c={},u={class:"hint-container tip"},v=e("p",{class:"hint-container-title"},"参考",-1),o={href:"https://juejin.cn/post/6844903951502934030",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.xiaolincoding.com/redis/data_struct/command.html#%E5%86%85%E9%83%A8%E5%AE%9E%E7%8E%B0-3",target:"_blank",rel:"noopener noreferrer"},p=r(`<p>Redis支持5种数据类型：string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)。何时使用Redis呢?</p><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h2><p>string 是 redis 最基本的类型。string 类型是二进制安全的。意思是 redis 的 string 可以包含任何数据。比如jpg图片或者序列化的对象。string 类型是 Redis 最基本的数据类型，string 类型的值最大能存储 <u>512MB</u>。</p><p>常用命令：<u>get、set、incr、decr、mget</u>等。</p><div class="language-redis line-numbers-mode" data-ext="redis"><pre class="language-redis"><code># 设置 key-value 类型的值
&gt; SET name lin
OK
# 根据 key 获得对应的 value
&gt; GET name
&quot;lin&quot;
# 判断某个 key 是否存在
&gt; EXISTS name
(integer) 1
# 返回 key 所储存的字符串值的长度
&gt; STRLEN name
(integer) 3
# 删除某个 key 对应的值
&gt; DEL name
(integer) 1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量设置</p><div class="language-redis line-numbers-mode" data-ext="redis"><pre class="language-redis"><code># 批量设置 key-value 类型的值
&gt; MSET key1 value1 key2 value2 
OK
# 批量获取多个 key 对应的 value
&gt; MGET key1 key2 
1) &quot;value1&quot;
2) &quot;value2&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计数器（字符串的内容为整数的时候可以使用）：</p><div class="language-redis line-numbers-mode" data-ext="redis"><pre class="language-redis"><code># 设置 key-value 类型的值
&gt; SET number 0
OK
# 将 key 中储存的数字值增一
&gt; INCR number
(integer) 1
# 将key中存储的数字值加 10
&gt; INCRBY number 10
(integer) 11
# 将 key 中储存的数字值减一
&gt; DECR number
(integer) 10
# 将key中存储的数字值键 10
&gt; DECRBY number 10
(integer) 0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景：String 是最常用的一种数据类型，普通的<code>key/ value</code>存储都可以归为此类。还可以享受Redis的定时持久化，操作日志及 Replication等功能。</p><pre><code>获取字符串长度
往字符串append内容
设置和获取字符串的某一段内容
设置及获取字符串的某一位（bit）
批量设置一系列字符串的内容
</code></pre><p>使用场景：常规 <code>key-value</code> 缓存应用。常规<code>计数: 微博数, 粉丝数</code>。</p><h2 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> Hash</h2><p>Hash 是一个键值(key =&gt; value)对集合。<code>Redis hash </code>是一个 <code>string</code> 类型的 <code>field</code> 和 <code>value</code> 的映射表，hash 特别适合用于存储对象。</p><p>常用命令：<code>hget,hset,hgetall、Hdel、HLEN</code> 等。</p><div class="language-redis line-numbers-mode" data-ext="redis"><pre class="language-redis"><code># 存储一个哈希表key的键值
HSET key field value   
# 获取哈希表key对应的field键值
HGET key field

# 在一个哈希表key中存储多个键值对
HMSET key field value [field value...] 
# 批量获取哈希表key中多个field键值
HMGET key field [field ...]       
# 删除哈希表key中的field键值
HDEL key field [field ...]    

# 返回哈希表key中field的数量
HLEN key       
# 返回哈希表key中所有的键值
HGETALL key 

# 为哈希表key中field键的值加上增量n
HINCRBY key field n                         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应用场景：我们简单举个实例来描述下Hash的应用场景，比如我们要存储一个用户信息对象数据</p><div class="language-redis line-numbers-mode" data-ext="redis"><pre class="language-redis"><code>redis&gt; HSET myhash field1 &quot;Hello&quot; field2 &quot;World&quot;
&quot;OK&quot; redis&gt; HGET myhash field1
&quot;Hello&quot; redis&gt; HGET myhash field2
&quot;World&quot;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例中我们使用了 Redis HMSET, HGET 命令，HMSET 设置了两个 field=&gt;value 对, HGET 获取对应 field 对应的 value。 <u>每个 hash 可以存储 2<sup>32</sup> -1 键值对（40多亿）</u>。</p><h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h2><p><code>list</code> 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。</p><p>常用命令：<code>lpush（添加左边元素）</code>,<code>rpush</code>,<code>lpop（移除左边第一个元素）</code>,<code>rpop</code>,lrange（获取列表片段，<code>LRANGE key start stop</code>）等。</p><p>应用场景：Redis list的应用场景非常多，也是Redis最重要的数据结构之一，比如<u>twitter的关注列表，粉丝列</u>表等都可以用Redis的list结构来实现。</p><p>列表最多可存储 2<sup>32</sup> - 1 元素 (4294967295, 每个列表可存储40多亿)。</p><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h2><p><code>set</code> 是 <code>string</code> 类型的无序集合。集合是通过 <code>hashtable</code> 实现的，概念和数学中个的集合基本类似，可以<u>交集，并集，差集</u>等等，<u>set 中的元素是没有顺序的</u>。所以<u>添加，删除，查找的复杂度都是O(1)</u>。</p><p>sadd 命令：添加一个 <code>string</code> 元素到 <code>key</code> 对应的 <code>set</code> 集合中，成功返回1 ，如果元素已经在集合中返回 0，如果 key 对应的 set 不存在则返回错误。</p><p>常用命令：<code>sadd,spop,smembers,srem,sunion</code> 等。</p><p>应用场景：Redis set对外提供的功能与list类似是一个列表的功能，特殊之处在于set是可以自动排重的，当你需要存储一个列表数据，又不希望出现重复数据时，set是一个很好的选择，并且set提供了判断某个成员是否在一个set集合内的重要接口，这个也是list所不能提供的。</p><p>Set 就是一个集合，集合的概念就是一堆不重复值的组合。利用Redis提供的Set数据结构，可以存储一些集合性的数据。</p><p>案例：在微博中，可以将一个用户所有的关注人存在一个集合中，将其所有粉丝存在一个集合。Redis还为集合提供了<u>求交集、并集、差集</u>等操作，可以非常方便的实现如<u>共同关注、共同喜好、二度好友</u>等功能，对上面的所有集合操作，你还可以使用不同的命令选择将结果返回给客户端还是存集到一个新的集合中。</p><h2 id="zset" tabindex="-1"><a class="header-anchor" href="#zset" aria-hidden="true">#</a> zset</h2><p>zset 和 set 一样也是 string 类型元素的集合,且不允许重复的成员。</p><p><em>zadd 命令：</em> 添加元素到集合，元素在集合中存在则更新对应 score。</p><p>常用命令：<code>zadd,zrange,zrem,zcard</code>等</p><p>使用场景：Redis sorted set的使用场景与set类似，区别是set不是自动有序的，而sorted set可以通过用户额外提供一个优先级(score)的参数来为成员排序，并且是插入有序的，即自动排序。当你需要一个有序的并且不重复的集合列表，那么可以选择sorted set数据结构，比如twitter 的public timeline可以以发表时间作为score来存储，这样获取时就是自动按时间排好序的。和Set相比，Sorted Set关联了一个double类型权重参数score，使得集合中的元素能够按score进行有序排列，redis正是通过分数来为集合中的成员进行从小到大的排序。zset的成员是唯一的,但分数(score)却可以重复。比如一个存储全班同学成绩的Sorted Set，其集合value可以是同学的学号，而score就可以是其考试得分，这样在数据插入集合的时候，就已经进行了天然的排序。另外还可以用Sorted Set来做带权重的队列，比如普通消息的score为1，重要消息的score为2，然后工作线程可以选择按score的倒序来获取工作任务。让重要的任务优先执行。</p><p>实现方式：Redis sorted set的内部使用<u>HashMap和跳跃表(SkipList)来保证数据的存储和有序</u>，HashMap里放的是成员到score的映射，而跳跃表里存放的是所有的成员，排序依据是HashMap里存的score,使用跳跃表的结构可以获得比较高的查找效率，并且在实现上比较简单。</p><h2 id="redis实际应用场景" tabindex="-1"><a class="header-anchor" href="#redis实际应用场景" aria-hidden="true">#</a> Redis实际应用场景</h2>`,38);function b(h,g){const i=t("ExternalLinkIcon");return l(),a("div",null,[e("div",u,[v,e("p",null,[e("a",o,[d("Redis 几种数据类型及应用场景 "),s(i)])]),e("p",null,[e("a",m,[d(" Redis 常见数据类型和应用场景"),s(i)])])]),p])}const y=n(c,[["render",b],["__file","redis数据类型.html.vue"]]);export{y as default};
