import{_ as o,X as p,Y as l,Z as n,a1 as s,$ as e,a2 as t,C as d}from"./framework-0b23a550.js";const c="/assets/3-2f2b13f3.png",i={},r={class:"hint-container info"},u=n("p",{class:"hint-container-title"},"参考",-1),k={href:"https://segmentfault.com/a/1190000040129107",target:"_blank",rel:"noopener noreferrer"},h=t('<h2 id="mysql-锁" tabindex="-1"><a class="header-anchor" href="#mysql-锁" aria-hidden="true">#</a> MySQL 锁</h2><p>锁是一种常见的并发事务的控制方式。</p><h3 id="表级锁和行级锁了解吗-有什么区别" tabindex="-1"><a class="header-anchor" href="#表级锁和行级锁了解吗-有什么区别" aria-hidden="true">#</a> 表级锁和行级锁了解吗？有什么区别？</h3><p>MyISAM 仅仅支持表级锁(table-level locking)，一锁就锁整张表，这在并发写的情况下性非常差。InnoDB 不光支持表级锁(table-level locking)，还支持行级锁(row-level locking)，默认为行级锁。</p><p>行级锁的粒度更小，仅对相关的记录上锁即可（对一行或者多行记录加锁），所以对于并发写入操作来说， InnoDB 的性能更高。</p><p><strong>表级锁和行级锁对比</strong> ：</p><ul><li><strong>表级锁：</strong> MySQL 中锁定粒度最大的一种锁（全局锁除外），是针对非索引字段加的锁，对当前操作的整张表加锁，实现简单，资源消耗也比较少，加锁快，不会出现死锁。不过，触发锁冲突的概率最高，高并发下效率极低。表级锁和存储引擎无关，MyISAM 和 InnoDB 引擎都支持表级锁。</li><li><strong>行级锁：</strong> MySQL 中锁定粒度最小的一种锁，是 <strong>针对索引字段加的锁</strong> ，只针对当前操作的行记录进行加锁。 行级锁能大大减少数据库操作的冲突。其加锁粒度最小，并发度高，但加锁的开销也最大，加锁慢，会出现死锁。行级锁和存储引擎有关，是在存储引擎层面实现的。</li></ul><h3 id="行级锁的使用有什么注意事项" tabindex="-1"><a class="header-anchor" href="#行级锁的使用有什么注意事项" aria-hidden="true">#</a> 行级锁的使用有什么注意事项？</h3><p>InnoDB 的行锁是针对索引字段加的锁，表级锁是针对非索引字段加的锁。当我们执行 <code>UPDATE</code>、<code>DELETE</code> 语句时，如果 <code>WHERE</code>条件中字段没有命中唯一索引或者索引失效的话，就会导致扫描全表对表中的所有行记录进行加锁。这个在我们日常工作开发中经常会遇到，一定要多多注意！！！</p><p>不过，很多时候即使用了索引也有可能会走全表扫描，这是因为 MySQL 优化器的原因。</p><h3 id="innodb-有哪几类行锁" tabindex="-1"><a class="header-anchor" href="#innodb-有哪几类行锁" aria-hidden="true">#</a> InnoDB 有哪几类行锁？</h3><p>InnoDB 行锁是通过对索引数据页上的记录加锁实现的，MySQL InnoDB 支持三种行锁定方式：</p><ul><li><strong>记录锁（Record Lock）</strong> ：也被称为记录锁，属于单个行记录上的锁。</li><li><strong>间隙锁（Gap Lock）</strong> ：锁定一个范围，不包括记录本身。</li><li><strong>临键锁（Next-Key Lock）</strong> ：Record Lock+Gap Lock，锁定一个范围，包含记录本身，主要目的是为了解决幻读问题（MySQL 事务部分提到过）。记录锁只能锁住已经存在的记录，为了避免插入新记录，需要依赖间隙锁。</li></ul><p><strong>在 InnoDB 默认的隔离级别 REPEATABLE-READ 下，行锁默认使用的是 Next-Key Lock。但是，如果操作的索引是唯一索引或主键，InnoDB 会对 Next-Key Lock 进行优化，将其降级为 Record Lock，即仅锁住索引本身，而不是范围。</strong></p>',14),y={href:"https://segmentfault.com/a/1190000040129107",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="共享锁和排他锁呢" tabindex="-1"><a class="header-anchor" href="#共享锁和排他锁呢" aria-hidden="true">#</a> 共享锁和排他锁呢？</h3><p>不论是表级锁还是行级锁，都存在共享锁（Share Lock，S 锁）和排他锁（Exclusive Lock，X 锁）这两类：</p><p><u>共享锁（S 锁） ：又称读锁</u>，事务在读取记录的时候获取共享锁，允许多个事务同时获取（锁兼容）。 <u>排他锁（X 锁） ：又称写锁/独占锁</u>，事务在修改记录的时候获取排他锁，不允许多个事务同时获取。如果一个记录已经被加了排他锁，那其他事务不能再对这条事务加任何类型的锁（锁不兼容）。</p><p>排他锁与任何的锁都不兼容，共享锁仅和共享锁兼容。</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">S 锁</th><th style="text-align:left;">X 锁</th></tr></thead><tbody><tr><td style="text-align:left;">S 锁</td><td style="text-align:left;">不冲突</td><td style="text-align:left;">冲突</td></tr><tr><td style="text-align:left;">X 锁</td><td style="text-align:left;">冲突</td><td style="text-align:left;">冲突</td></tr></tbody></table><p>由于 MVCC 的存在，对于一般的 <code>SELECT</code> 语句，InnoDB 不会加任何锁。不过， 你可以通过以下语句显式加共享锁或排他锁。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 共享锁</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">LOCK</span> <span class="token operator">IN</span> <span class="token keyword">SHARE</span> <span class="token keyword">MODE</span><span class="token punctuation">;</span>
<span class="token comment"># 排他锁</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="意向锁有什么作用" tabindex="-1"><a class="header-anchor" href="#意向锁有什么作用" aria-hidden="true">#</a> 意向锁有什么作用？</h3><p>如果需要用到表锁的话，如何判断表中的记录没有行锁呢，一行一行遍历肯定是不行，性能太差。我们需要用到一个叫做意向锁的东东来快速判断是否可以对某个表使用表锁。</p><p>意向锁是表级锁，共有两种：</p><ul><li>意向共享锁（Intention Shared Lock，IS 锁）：事务有意向对表中的某些记录加共享锁（S 锁），加共享锁前必须先取得该表的 IS 锁。</li><li>意向排他锁（Intention Exclusive Lock，IX 锁）：事务有意向对表中的某些记录加排他锁（X 锁），加排他锁之前必须先取得该表的 IX 锁。</li></ul><p><strong>意向锁是由数据引擎自己维护的，用户无法手动操作意向锁，在为数据行加共享/排他锁之前，InooDB 会先获取该数据行所在在数据表的对应意向锁。</strong></p><p>意向锁之间是互相兼容的。</p><table><thead><tr><th></th><th>IS 锁</th><th>IX 锁</th></tr></thead><tbody><tr><td>IS 锁</td><td>兼容</td><td>兼容</td></tr><tr><td>IX 锁</td><td>兼容</td><td>兼容</td></tr></tbody></table><p>意向锁和共享锁和排它锁互斥（这里指的是表级别的共享锁和排他锁，意向锁不会与行级的共享锁和排他锁互斥）。</p><table><thead><tr><th></th><th>IS 锁</th><th>IX 锁</th></tr></thead><tbody><tr><td>S 锁</td><td>兼容</td><td>互斥</td></tr><tr><td>X 锁</td><td>互斥</td><td>互斥</td></tr></tbody></table><p>《MySQL 技术内幕 InnoDB 存储引擎》这本书对应的描述应该是笔误了。</p><h3 id="当前读和快照读有什么区别" tabindex="-1"><a class="header-anchor" href="#当前读和快照读有什么区别" aria-hidden="true">#</a> 当前读和快照读有什么区别？</h3><p><strong>快照读</strong>（一致性非锁定读）就是单纯的 <code>SELECT</code> 语句，但不包括下面这两类 <code>SELECT</code> 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">LOCK</span> <span class="token operator">IN</span> <span class="token keyword">SHARE</span> <span class="token keyword">MODE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>快照即记录的历史版本，每行记录可能存在多个历史版本（多版本技术）。</p><p>快照读的情况下，如果读取的记录正在执行 UPDATE/DELETE 操作，读取操作不会因此去等待记录上 X 锁的释放，而是会去读取行的一个快照。</p><p>只有在事务隔离级别 RC(读取已提交) 和 RR（可重读）下，InnoDB 才会使用一致性非锁定读：</p><ul><li>在 RC 级别下，对于快照数据，一致性非锁定读总是读取被锁定行的最新一份快照数据。</li><li>在 RR 级别下，对于快照数据，一致性非锁定读总是读取本事务开始时的行数据版本。</li></ul><p>快照读比较适合对于数据一致性要求不是特别高且追求极致性能的业务场景。</p><p><strong>当前读</strong> （一致性锁定读）就是给行记录加 X 锁或 S 锁。</p><p>当前读的一些常见 SQL 语句类型如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 对读的记录加一个X锁</span>
<span class="token keyword">SELECT</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span>
<span class="token comment"># 对读的记录加一个S锁</span>
<span class="token keyword">SELECT</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token keyword">LOCK</span> <span class="token operator">IN</span> <span class="token keyword">SHARE</span> <span class="token keyword">MODE</span>
<span class="token comment"># 对修改的记录加一个X锁</span>
<span class="token keyword">INSERT</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">UPDATE</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">DELETE</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自增锁有了解吗" tabindex="-1"><a class="header-anchor" href="#自增锁有了解吗" aria-hidden="true">#</a> 自增锁有了解吗？</h3><blockquote><p>不太重要的一个知识点，简单了解即可。</p></blockquote><p>关系型数据库设计表的时候，通常会有一列作为自增主键。InnoDB 中的自增主键会涉及一种比较特殊的表级锁— <strong>自增锁（AUTO-INC Locks）</strong> 。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>sequence_id<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>stub<span class="token punctuation">\`</span></span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>stub<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>stub<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更准确点来说，不仅仅是自增主键，<code>AUTO_INCREMENT</code>的列都会涉及到自增锁，毕竟非主键也可以设置自增长。</p><p>如果一个事务正在插入数据到有自增列的表时，会先获取自增锁，拿不到就可能会被阻塞住。这里的阻塞行为只是自增锁行为的其中一种，可以理解为自增锁就是一个接口，其具体的实现有多种。具体的配置项为 <code>innodb_autoinc_lock_mode</code> （MySQL 5.1.22 引入），可以选择的值如下：</p><table><thead><tr><th style="text-align:left;">innodb_autoinc_lock_mode</th><th style="text-align:left;">介绍</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">传统模式</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">连续模式（MySQL 8.0 之前默认）</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">交错模式(MySQL 8.0 之后默认)</td></tr></tbody></table><p>交错模式下，所有的“INSERT-LIKE”语句（所有的插入语句，包括： <code>INSERT</code>、<code>REPLACE</code>、<code>INSERT…SELECT</code>、<code>REPLACE…SELECT</code>、<code>LOAD DATA</code>等）都不使用表级锁，使用的是轻量级互斥锁实现，多条插入语句可以并发执行，速度更快，扩展性也更好。</p><p>不过，如果你的 MySQL 数据库有主从同步需求并且 Binlog 存储格式为 Statement 的话，不要将 InnoDB 自增锁模式设置为交叉模式，不然会有数据不一致性问题。这是因为并发情况下插入语句的执行顺序就无法得到保障。</p><blockquote><p>如果 MySQL 采用的格式为 Statement ，那么 MySQL 的主从同步实际上同步的就是一条一条的 SQL 语句。</p></blockquote>`,38),b={href:"https://draveness.me/whys-the-design-mysql-auto-increment/",target:"_blank",rel:"noopener noreferrer"},g=t('<h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><p>此时数据库的数据如图所示，对主键索引来说此时数据间隙如下：</p><p><img src="'+c+`" alt="" loading="lazy"></p><h3 id="主键等值查询-——-数据存在" tabindex="-1"><a class="header-anchor" href="#主键等值查询-——-数据存在" aria-hidden="true">#</a> 主键等值查询 —— 数据存在</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; begin; select * from t where id = 10 for update;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果很明显，这里是对表添加了一个 IX 锁 并对主键索引 id = 10 的记录，添加了一个 X,REC_NOT_GAP 锁，表示只锁定了记录。</p><p>同样 for share 是对表添加了一个 IS 锁并对主键索引 id = 10 的记录，添加了一个 S 锁。</p><p>可以得出结论：</p><p>对主键等值加锁，且值存在时，会对表添加意向锁，同时会对主键索引添加行锁。</p><h3 id="主键等值查询-——-数据不存在" tabindex="-1"><a class="header-anchor" href="#主键等值查询-——-数据不存在" aria-hidden="true">#</a> 主键等值查询 —— 数据不存在</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>
mysql&gt; select * from t where id = 11 for update;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是数据不存在的时候，会加什么锁呢？锁的范围又是什么？</p><p>在验证之前，分析一下数据的间隙。</p><pre><code>id = 11 是肯定不存在的。但是加了 for update，这时需要加 next-key lock，

id = 11 所属区间为 (10,15] 的前开后闭区间；
因为是等值查询，不需要锁 id = 15 那条记录，next-key lock 会退化为间隙锁；

最终区间为 (10,15) 的前开后开区间。
</code></pre><h3 id="主键范围查询-重点" tabindex="-1"><a class="header-anchor" href="#主键范围查询-重点" aria-hidden="true">#</a> 主键范围查询（重点）</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; begin; select * from t where id &gt;= 10 and id &lt; 11 for update;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>id &gt;= 10 定位到 10 所在的区间 (10,+∞)；
因为是 &gt;= 存在等值判断，所以需要包含 10 这个值，变为 [10,+∞) 前闭后闭区间；
id &lt; 11 限定后续范围，则根据 11 判断下一个区间为 15 的前开后闭区间；
结合起来则是 [10,15]。（不完全正确）
</code></pre><p>结论一：</p><pre><code>加锁时，会先给表添加意向锁，IX 或 IS；
加锁是如果是多个范围，是分开加了多个锁，每个范围都有锁；（这个可以实践下 id &lt; 20 的情况）
主键等值查询，数据存在时，会对该主键索引的值加行锁 X,REC_NOT_GAP；
主键等值查询，数据不存在时，会对查询条件主键值所在的间隙添加间隙锁 X,GAP；

主键等值查询，范围查询时情况则比较复杂：
    8.0.17 版本是前开后闭，而 8.0.18 版本及以后，进行了优化，主键时判断不等，不会锁住后闭的区间。
    临界 &lt;= 查询时，8.0.17 会锁住下一个 next-key 的前开后闭区间，而 8.0.18 及以后版本，修复了这个 bug。

优化后，导致后开，这个不知道是因为优化后，主键的区间会直接后开，还是因为是个 bug。具体小伙伴可以尝试一下。
</code></pre>`,19);function v(E,L){const a=d("ExternalLinkIcon");return p(),l("div",null,[n("div",r,[u,n("p",null,[n("a",k,[s(" mysql next-key lock 枷锁范围 "),e(a)])])]),h,n("p",null,[s("一些大厂面试中可能会问到 Next-Key Lock 的加锁范围，这里推荐一篇文章："),n("a",y,[s("MySQL next-key lock 加锁范围是什么？ - 程序员小航 - 2021"),e(a)]),s(" 。")]),m,n("p",null,[s("最后，再推荐一篇文章： "),n("a",b,[s("为什么 MySQL 的自增主键不单调也不连续"),e(a)]),s(" 。")]),g])}const S=o(i,[["render",v],["__file","mysql-lock.html.vue"]]);export{S as default};
