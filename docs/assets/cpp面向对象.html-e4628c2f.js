import{_ as a,X as e,Y as t,Z as n,a1 as p,$ as o,a2 as c,C as i}from"./framework-0b23a550.js";const l="/assets/cpp-6-4ade829d.png",u="/assets/cpp-8-6138fe66.png",d="/assets/cpp-9-a35d5796.png",r={},k={class:"hint-container tip"},v=n("p",{class:"hint-container-title"},"参考",-1),m={href:"https://www.runoob.com/cplusplus/cpp-files-streams.html",target:"_blank",rel:"noopener noreferrer"},b=c('<h2 id="类-对象" tabindex="-1"><a class="header-anchor" href="#类-对象" aria-hidden="true">#</a> 类 &amp; 对象</h2><p>C++ 在 C 语言的基础上增加了面向对象编程，C++ 支持面向对象程序设计。类是 C++ 的核心特性，通常被称为用户定义的类型。</p><p>类用于指定对象的形式，是一种用户自定义的数据类型，它是一种封装了数据和函数的组合。类中的数据称为成员变量，函数称为成员函数。类可以被看作是一种模板，可以用来创建具有相同属性和行为的多个对象。</p><h2 id="类定义" tabindex="-1"><a class="header-anchor" href="#类定义" aria-hidden="true">#</a> 类定义</h2><p><img src="'+l+`" alt="" loading="lazy"></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
class Box
<span class="token punctuation">{</span>
   public<span class="token operator">:</span>
      <span class="token keyword">double</span> length<span class="token punctuation">;</span>   <span class="token comment">// 盒子的长度</span>
      <span class="token keyword">double</span> breadth<span class="token punctuation">;</span>  <span class="token comment">// 盒子的宽度</span>
      <span class="token keyword">double</span> height<span class="token punctuation">;</span>   <span class="token comment">// 盒子的高度</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了两个对象：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>Box Box1<span class="token punctuation">;</span>          <span class="token comment">// 声明 Box1，类型为 Box</span>
Box Box2<span class="token punctuation">;</span>          <span class="token comment">// 声明 Box2，类型为 Box</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对象 Box1 和 Box2 都有它们各自的数据成员。</p><h3 id="访问数据成员" tabindex="-1"><a class="header-anchor" href="#访问数据成员" aria-hidden="true">#</a> 访问数据成员</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

using namespace std<span class="token punctuation">;</span>

class Box
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">double</span> length<span class="token punctuation">;</span>  <span class="token comment">// 长度</span>
    <span class="token keyword">double</span> breadth<span class="token punctuation">;</span> <span class="token comment">// 宽度</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>  <span class="token comment">// 高度</span>
    <span class="token comment">// 成员函数声明</span>
    <span class="token keyword">double</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">double</span> len<span class="token punctuation">,</span> <span class="token keyword">double</span> bre<span class="token punctuation">,</span> <span class="token keyword">double</span> hei<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 成员函数定义</span>
<span class="token keyword">double</span> Box<span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> length <span class="token operator">*</span> breadth <span class="token operator">*</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> Box<span class="token operator">::</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">double</span> len<span class="token punctuation">,</span> <span class="token keyword">double</span> bre<span class="token punctuation">,</span> <span class="token keyword">double</span> hei<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    length <span class="token operator">=</span> len<span class="token punctuation">;</span>
    breadth <span class="token operator">=</span> bre<span class="token punctuation">;</span>
    height <span class="token operator">=</span> hei<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Box Box1<span class="token punctuation">;</span>            <span class="token comment">// 声明 Box1，类型为 Box</span>
    Box Box2<span class="token punctuation">;</span>            <span class="token comment">// 声明 Box2，类型为 Box</span>
    Box Box3<span class="token punctuation">;</span>            <span class="token comment">// 声明 Box3，类型为 Box</span>
    <span class="token keyword">double</span> volume <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储体积</span>

    <span class="token comment">// box 1 详述</span>
    Box1<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">5.0</span><span class="token punctuation">;</span>
    Box1<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">6.0</span><span class="token punctuation">;</span>
    Box1<span class="token punctuation">.</span>breadth <span class="token operator">=</span> <span class="token number">7.0</span><span class="token punctuation">;</span>

    <span class="token comment">// box 2 详述</span>
    Box2<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">10.0</span><span class="token punctuation">;</span>
    Box2<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">12.0</span><span class="token punctuation">;</span>
    Box2<span class="token punctuation">.</span>breadth <span class="token operator">=</span> <span class="token number">13.0</span><span class="token punctuation">;</span>

    <span class="token comment">// box 1 的体积</span>
    volume <span class="token operator">=</span> Box1<span class="token punctuation">.</span>height <span class="token operator">*</span> Box1<span class="token punctuation">.</span>length <span class="token operator">*</span> Box1<span class="token punctuation">.</span>breadth<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Box1 的体积：&quot;</span> <span class="token operator">&lt;&lt;</span> volume <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// box 2 的体积</span>
    volume <span class="token operator">=</span> Box2<span class="token punctuation">.</span>height <span class="token operator">*</span> Box2<span class="token punctuation">.</span>length <span class="token operator">*</span> Box2<span class="token punctuation">.</span>breadth<span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Box2 的体积：&quot;</span> <span class="token operator">&lt;&lt;</span> volume <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// box 3 详述</span>
    Box3<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">16.0</span><span class="token punctuation">,</span> <span class="token number">8.0</span><span class="token punctuation">,</span> <span class="token number">12.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    volume <span class="token operator">=</span> Box3<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Box3 的体积：&quot;</span> <span class="token operator">&lt;&lt;</span> volume <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Box1 的体积：210
Box2 的体积：1560
Box3 的体积：1536
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要注意的是，私有的成员和受保护的成员不能使用直接成员访问运算符 (.) 来直接访问</p></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>当创建一个类时，您不需要重新编写新的数据成员和成员函数，只需指定新建的类继承了一个已有的类的成员即可。这个已有的类称为基类，新建的类称为派生类。</p><p>继承代表了 is a 关系。例如，哺乳动物是动物，狗是哺乳动物，因此，狗是动物，等等。</p><p><img src="`+u+`" alt="" loading="lazy"></p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 基类</span>
class Animal <span class="token punctuation">{</span>
    <span class="token comment">// eat() 函数</span>
    <span class="token comment">// sleep() 函数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">//派生类</span>
class Dog <span class="token operator">:</span> public Animal <span class="token punctuation">{</span>
    <span class="token comment">// bark() 函数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基类-派生类" tabindex="-1"><a class="header-anchor" href="#基类-派生类" aria-hidden="true">#</a> 基类 &amp; 派生类</h2><p>一个类可以派生自多个类，这意味着，它可以从多个基类继承数据和函数。定义一个派生类，我们使用一个类派生列表来指定基类。类派生列表以一个或多个基类命名，形式如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>class derived<span class="token operator">-</span>class<span class="token operator">:</span> access<span class="token operator">-</span>specifier base<span class="token operator">-</span>class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，访问修饰符 access-specifier 是 public、protected 或 private 其中的一个，base-class 是之前定义过的某个类的名称。如果未使用访问修饰符 access-specifier，则默认为 private。</p><p>假设有一个基类 Shape，Rectangle 是它的派生类，如下所示：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

using namespace std<span class="token punctuation">;</span>

<span class="token comment">// 基类</span>
class Shape
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        width <span class="token operator">=</span> w<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        height <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

protected<span class="token operator">:</span>
    <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">int</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 派生类</span>
class Rectangle <span class="token operator">:</span> public Shape
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">*</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Rectangle Rect<span class="token punctuation">;</span>

    Rect<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Rect<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出对象的面积</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Total area: &quot;</span> <span class="token operator">&lt;&lt;</span> Rect<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Total area: <span class="token number">35</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="访问控制和继承" tabindex="-1"><a class="header-anchor" href="#访问控制和继承" aria-hidden="true">#</a> 访问控制和继承</h2><p>派生类可以访问基类中所有的非私有成员。因此基类成员如果不想被派生类的成员函数访问，则应在基类中声明为 private。</p><p>我们可以根据访问权限总结出不同的访问类型，如</p><table><thead><tr><th>访问</th><th>public</th><th>protected</th><th>private</th></tr></thead><tbody><tr><td>同一个类</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>派生类</td><td>yes</td><td>yes</td><td>no</td></tr><tr><td>外部的类</td><td>yes</td><td>no</td><td>no</td></tr></tbody></table><p>一个派生类继承了所有的基类方法，但下列情况除外：</p><pre><code>基类的构造函数、析构函数和拷贝构造函数。
基类的重载运算符。
基类的友元函数。
</code></pre><h2 id="继承类型" tabindex="-1"><a class="header-anchor" href="#继承类型" aria-hidden="true">#</a> 继承类型</h2><p>当一个类派生自基类，该基类可以被继承为 public、protected 或 private 几种类型。继承类型是通过上面讲解的访问修饰符 access-specifier 来指定的。</p><p>我们几乎不使用 protected 或 private 继承，通常使用 public 继承。当使用不同类型的继承时，遵循以下几个规则：</p><ul><li>公有继承（public）：当一个类派生自公有基类时，基类的<u>公有成员也是派生类的公有成员</u>， <u>基类的保护成员也是派生类的保护成员</u>，<u>基类的私有成员不能直接被派生类访问</u>， 但是可以通过调用基类的公有和保护成员来访问。</li><li>保护继承（protected）： 当一个类派生自保护基类时，基类的<u>公有和保护</u>成员将成为派 生类的<u>保护成员</u>。</li><li>私有继承（private）：当一个类派生自私有基类时，基类的<u>公有和保护</u>成员将成为派生类 的<u>私有</u>成员。</li></ul><h2 id="多继承" tabindex="-1"><a class="header-anchor" href="#多继承" aria-hidden="true">#</a> 多继承</h2><p>多继承即一个子类可以有多个父类，它继承了多个父类的特性。</p><p>C++ 类可以从多个类继承成员，语法如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>class <span class="token operator">&lt;</span>派生类名<span class="token operator">&gt;</span><span class="token operator">:</span><span class="token operator">&lt;</span>继承方式<span class="token number">1</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>基类名<span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">,</span><span class="token operator">&lt;</span>继承方式<span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>基类名<span class="token number">2</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>…
<span class="token punctuation">{</span>
<span class="token operator">&lt;</span>派生类类体<span class="token operator">&gt;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

using namespace std<span class="token punctuation">;</span>

<span class="token comment">// 基类 Shape</span>
class Shape
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        width <span class="token operator">=</span> w<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        height <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

protected<span class="token operator">:</span>
    <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">int</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 基类 PaintCost</span>
class PaintCost
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">getCost</span><span class="token punctuation">(</span><span class="token keyword">int</span> area<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> area <span class="token operator">*</span> <span class="token number">70</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 派生类</span>
class Rectangle <span class="token operator">:</span> public Shape<span class="token punctuation">,</span> public PaintCost
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">*</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Rectangle Rect<span class="token punctuation">;</span>
    <span class="token keyword">int</span> area<span class="token punctuation">;</span>

    Rect<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Rect<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    area <span class="token operator">=</span> Rect<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出对象的面积</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Total area: &quot;</span> <span class="token operator">&lt;&lt;</span> Rect<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// 输出总花费</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Total paint cost: $&quot;</span> <span class="token operator">&lt;&lt;</span> Rect<span class="token punctuation">.</span><span class="token function">getCost</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Total area: <span class="token number">35</span>
Total paint cost: <span class="token variable">$2450</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重载运算符和重载函数" tabindex="-1"><a class="header-anchor" href="#重载运算符和重载函数" aria-hidden="true">#</a> 重载运算符和重载函数</h2><p>C++ 允许在同一作用域中的某个函数和运算符指定多个定义，分别称为函数重载和运算符重载。</p><p>重载声明是指一个与之前已经在该作用域内声明过的函数或方法具有相同名称的声明，但是它们的参数列表和定义（实现）不相同。</p><p>当您调用一个重载函数或重载运算符时，编译器通过把您所使用的参数类型与定义中的参数类型进行比较，决定选用最合适的定义。选择最合适的重载函数或重载运算符的过程，称为重载决策。</p><h3 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h3><p>在同一个作用域内，可以声明几个功能类似的同名函数，但是这些同名函数的形式参数（指参数的个数、类型或者顺序）必须不同。您不能仅通过返回类型的不同来重载函数。</p><p>下面的实例中，同名函数 print() 被用于输出不同的数据类型：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>

class printData
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;整数为: &quot;</span> <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">double</span> f<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;浮点数为: &quot;</span> <span class="token operator">&lt;&lt;</span> f <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;字符串为: &quot;</span> <span class="token operator">&lt;&lt;</span> c <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    printData pd<span class="token punctuation">;</span>

    <span class="token comment">// 输出整数</span>
    pd<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出浮点数</span>
    pd<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token number">500.263</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出字符串</span>
    <span class="token keyword">char</span> c<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello C++&quot;</span><span class="token punctuation">;</span>
    pd<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>整数为: <span class="token number">5</span>
浮点数为: <span class="token number">500.263</span>
字符串为: Hello C++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算符重载" tabindex="-1"><a class="header-anchor" href="#运算符重载" aria-hidden="true">#</a> 运算符重载</h3><p>您可以重定义或重载大部分 C++ 内置的运算符。这样，您就能使用自定义类型的运算符。</p><p>重载的运算符是带有特殊名称的函数，函数名是由关键字 operator 和其后要重载的运算符符号构成的。与其他函数一样，重载运算符有一个返回类型和一个参数列表。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>Box operator<span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Box<span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>声明加法运算符用于把两个 Box 对象相加，返回最终的 Box 对象。大多数的重载运算符可被定义为普通的非成员函数或者被定义为类成员函数。如果我们定义上面的函数为类的非成员函数，那么我们需要为每次操作传递两个参数，如下所示：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>Box operator<span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Box<span class="token operator">&amp;</span><span class="token punctuation">,</span> <span class="token keyword">const</span> Box<span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的实例使用成员函数演示了运算符重载的概念。在这里，对象作为参数进行传递，对象的属性使用 this 运算符进行访问，如下所示</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>

class Box
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">double</span> <span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> length <span class="token operator">*</span> breadth <span class="token operator">*</span> height<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">setLength</span><span class="token punctuation">(</span><span class="token keyword">double</span> len<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        length <span class="token operator">=</span> len<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">setBreadth</span><span class="token punctuation">(</span><span class="token keyword">double</span> bre<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        breadth <span class="token operator">=</span> bre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token keyword">double</span> hei<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        height <span class="token operator">=</span> hei<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 重载 + 运算符，用于把两个 Box 对象相加</span>
    Box operator<span class="token operator">+</span><span class="token punctuation">(</span><span class="token keyword">const</span> Box <span class="token operator">&amp;</span>b<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        Box box<span class="token punctuation">;</span>
        box<span class="token punctuation">.</span>length <span class="token operator">=</span> this<span class="token operator">-&gt;</span>length <span class="token operator">+</span> b<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        box<span class="token punctuation">.</span>breadth <span class="token operator">=</span> this<span class="token operator">-&gt;</span>breadth <span class="token operator">+</span> b<span class="token punctuation">.</span>breadth<span class="token punctuation">;</span>
        box<span class="token punctuation">.</span>height <span class="token operator">=</span> this<span class="token operator">-&gt;</span>height <span class="token operator">+</span> b<span class="token punctuation">.</span>height<span class="token punctuation">;</span>
        <span class="token keyword">return</span> box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

private<span class="token operator">:</span>
    <span class="token keyword">double</span> length<span class="token punctuation">;</span>  <span class="token comment">// 长度</span>
    <span class="token keyword">double</span> breadth<span class="token punctuation">;</span> <span class="token comment">// 宽度</span>
    <span class="token keyword">double</span> height<span class="token punctuation">;</span>  <span class="token comment">// 高度</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 程序的主函数</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Box Box1<span class="token punctuation">;</span>            <span class="token comment">// 声明 Box1，类型为 Box</span>
    Box Box2<span class="token punctuation">;</span>            <span class="token comment">// 声明 Box2，类型为 Box</span>
    Box Box3<span class="token punctuation">;</span>            <span class="token comment">// 声明 Box3，类型为 Box</span>
    <span class="token keyword">double</span> volume <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span> <span class="token comment">// 把体积存储在该变量中</span>

    <span class="token comment">// Box1 详述</span>
    Box1<span class="token punctuation">.</span><span class="token function">setLength</span><span class="token punctuation">(</span><span class="token number">6.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Box1<span class="token punctuation">.</span><span class="token function">setBreadth</span><span class="token punctuation">(</span><span class="token number">7.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Box1<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Box2 详述</span>
    Box2<span class="token punctuation">.</span><span class="token function">setLength</span><span class="token punctuation">(</span><span class="token number">12.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Box2<span class="token punctuation">.</span><span class="token function">setBreadth</span><span class="token punctuation">(</span><span class="token number">13.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Box2<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Box1 的体积</span>
    volume <span class="token operator">=</span> Box1<span class="token punctuation">.</span><span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Volume of Box1 : &quot;</span> <span class="token operator">&lt;&lt;</span> volume <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// Box2 的体积</span>
    volume <span class="token operator">=</span> Box2<span class="token punctuation">.</span><span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Volume of Box2 : &quot;</span> <span class="token operator">&lt;&lt;</span> volume <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token comment">// 把两个对象相加，得到 Box3</span>
    Box3 <span class="token operator">=</span> Box1 <span class="token operator">+</span> Box2<span class="token punctuation">;</span>

    <span class="token comment">// Box3 的体积</span>
    volume <span class="token operator">=</span> Box3<span class="token punctuation">.</span><span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Volume of Box3 : &quot;</span> <span class="token operator">&lt;&lt;</span> volume <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Volume of Box1 <span class="token builtin class-name">:</span> <span class="token number">210</span>
Volume of Box2 <span class="token builtin class-name">:</span> <span class="token number">1560</span>
Volume of Box3 <span class="token builtin class-name">:</span> <span class="token number">5400</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可重载运算符-不可重载运算符" tabindex="-1"><a class="header-anchor" href="#可重载运算符-不可重载运算符" aria-hidden="true">#</a> 可重载运算符/不可重载运算符</h3><p>下面是可重载的运算符列表</p><p><img src="`+d+`" alt="" loading="lazy"></p><p>下面是不可重载的运算符列表：</p><ul><li>.：成员访问运算符</li><li>.<em>, -&gt;</em>：成员指针访问运算符</li><li>::：域运算符</li><li>sizeof：长度运算符</li><li>?:：条件运算符</li><li>#： 预处理符号</li></ul><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><p>多态按字面的意思就是多种形态。当类之间存在层次结构，并且类之间是通过继承关联时，就会用到多态。 <code>C++</code> 多态意味着调用成员函数时，会根据调用函数的对象的类型来执行不同的函数。</p><p>下面的实例中，基类 Shape 被派生为两个类，如下所示：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>

class Shape
<span class="token punctuation">{</span>
protected<span class="token operator">:</span>
    <span class="token keyword">int</span> width<span class="token punctuation">,</span> height<span class="token punctuation">;</span>

public<span class="token operator">:</span>
    <span class="token function">Shape</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        width <span class="token operator">=</span> a<span class="token punctuation">;</span>
        height <span class="token operator">=</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Parent class area :&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
class Rectangle <span class="token operator">:</span> public Shape
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">Shape</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">int</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Rectangle class area :&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">*</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
class Triangle <span class="token operator">:</span> public Shape
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token function">Triangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">Shape</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">int</span> <span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Triangle class area :&quot;</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">*</span> height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 程序的主函数</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Shape <span class="token operator">*</span>shape<span class="token punctuation">;</span>
    Rectangle <span class="token function">rec</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Triangle <span class="token function">tri</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 存储矩形的地址</span>
    shape <span class="token operator">=</span> <span class="token operator">&amp;</span>rec<span class="token punctuation">;</span>
    <span class="token comment">// 调用矩形的求面积函数 area</span>
    shape<span class="token operator">-&gt;</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 存储三角形的地址</span>
    shape <span class="token operator">=</span> <span class="token operator">&amp;</span>tri<span class="token punctuation">;</span>
    <span class="token comment">// 调用三角形的求面积函数 area</span>
    shape<span class="token operator">-&gt;</span><span class="token function">area</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Parent class area <span class="token builtin class-name">:</span>
Parent class area <span class="token builtin class-name">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据抽象" tabindex="-1"><a class="header-anchor" href="#数据抽象" aria-hidden="true">#</a> 数据抽象</h2><p>数据抽象是指，只向外界提供关键信息，并隐藏其后台的实现细节，即只表现必要的信息而不呈现细节。 数据抽象是一种依赖于接口和实现分离的编程（设计）技术。</p><h2 id="数据封装" tabindex="-1"><a class="header-anchor" href="#数据封装" aria-hidden="true">#</a> 数据封装</h2><h2 id="接口-抽象类" tabindex="-1"><a class="header-anchor" href="#接口-抽象类" aria-hidden="true">#</a> 接口（抽象类）</h2><p>接口描述了类的行为和功能，而不需要完成类的特定实现。 C++ 接口是使用抽象类来实现的，抽象类与数据抽象互不混淆，数据抽象是一个把实现细节与相关的数据分离开的概念。 如果类中至少有一个函数被声明为纯虚函数，则这个类就是抽象类。纯虚函数是通过在声明中使用 &quot;= 0&quot; 来指定的，如下所示</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>class Box
<span class="token punctuation">{</span>
   public<span class="token operator">:</span>
      <span class="token comment">// 纯虚函数</span>
      virtual <span class="token keyword">double</span> <span class="token function">getVolume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   private<span class="token operator">:</span>
      <span class="token keyword">double</span> length<span class="token punctuation">;</span>      <span class="token comment">// 长度</span>
      <span class="token keyword">double</span> breadth<span class="token punctuation">;</span>     <span class="token comment">// 宽度</span>
      <span class="token keyword">double</span> height<span class="token punctuation">;</span>      <span class="token comment">// 高度</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类的实例" tabindex="-1"><a class="header-anchor" href="#抽象类的实例" aria-hidden="true">#</a> 抽象类的实例</h3><p>基类 Shape 提供了一个接口 getArea()，在两个派生类 Rectangle 和 Triangle 中分别实现了 getArea()：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

using namespace std<span class="token punctuation">;</span>

<span class="token comment">// 基类</span>
class Shape
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token comment">// 提供接口框架的纯虚函数</span>
    virtual <span class="token keyword">int</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        width <span class="token operator">=</span> w<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        height <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

protected<span class="token operator">:</span>
    <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">int</span> height<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 派生类</span>
class Rectangle <span class="token operator">:</span> public Shape
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">*</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
class Triangle <span class="token operator">:</span> public Shape
<span class="token punctuation">{</span>
public<span class="token operator">:</span>
    <span class="token keyword">int</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>width <span class="token operator">*</span> height<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Rectangle Rect<span class="token punctuation">;</span>
    Triangle Tri<span class="token punctuation">;</span>

    Rect<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Rect<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出对象的面积</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Total Rectangle area: &quot;</span> <span class="token operator">&lt;&lt;</span> Rect<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    Tri<span class="token punctuation">.</span><span class="token function">setWidth</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Tri<span class="token punctuation">.</span><span class="token function">setHeight</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 输出对象的面积</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Total Triangle area: &quot;</span> <span class="token operator">&lt;&lt;</span> Tri<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Total Rectangle area: <span class="token number">35</span>
Total Triangle area: <span class="token number">17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,86);function h(g,x){const s=i("ExternalLinkIcon");return e(),t("div",null,[n("div",k,[v,n("p",null,[n("a",m,[p("https://www.runoob.com/cplusplus/cpp-files-streams.html"),o(s)])])]),b])}const y=a(r,[["render",h],["__file","cpp面向对象.html.vue"]]);export{y as default};
