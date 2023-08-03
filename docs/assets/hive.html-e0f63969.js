const e=JSON.parse('{"key":"v-c6863be4","path":"/study/bigdata/hive/hive.html","title":"hive","lang":"zh-CN","frontmatter":{"title":"hive","index":false,"icon":"discover","category":["学习"],"description":"参考 安装、源码 hive 远程模式安装 在 hadoop 集群中任选一台机器安装即可 一般会选择安装在 manager 节点上 # 解压 hive tar zxvf apache-hive-3.1.2-bin.tar.gz # 重命名 mv apache-hive-3.1.2-bin hive-3.1.2 # 升级guava 和 hadoop 中的一样 # 删除 hive 中的 guava rm -rf /export/server/hive-3.1.2/lib/guava-19.0.jar # /export/server/hive-3.1.2/lib/ cp /export/server/hadoop-3.3.0/share/hadoop/common/lib/guava-27.0-jre.jar ./ # 新建 配置文件 # 切换到 /export/server/hive-3.1.2/conf cp hive-env.sh.template hive-env.sh # 添加 export HADOOP_HOME=/export/server/hadoop-3.3.0 export HIVE_CONF_DIR=/export/server/hive-3.1.2/conf export HIVE_AUX_JARS_PATH=/export/server/hive-3.1.2/lib","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/study/bigdata/hive/hive.html"}],["meta",{"property":"og:site_name","content":"JavaNative"}],["meta",{"property":"og:title","content":"hive"}],["meta",{"property":"og:description","content":"参考 安装、源码 hive 远程模式安装 在 hadoop 集群中任选一台机器安装即可 一般会选择安装在 manager 节点上 # 解压 hive tar zxvf apache-hive-3.1.2-bin.tar.gz # 重命名 mv apache-hive-3.1.2-bin hive-3.1.2 # 升级guava 和 hadoop 中的一样 # 删除 hive 中的 guava rm -rf /export/server/hive-3.1.2/lib/guava-19.0.jar # /export/server/hive-3.1.2/lib/ cp /export/server/hadoop-3.3.0/share/hadoop/common/lib/guava-27.0-jre.jar ./ # 新建 配置文件 # 切换到 /export/server/hive-3.1.2/conf cp hive-env.sh.template hive-env.sh # 添加 export HADOOP_HOME=/export/server/hadoop-3.3.0 export HIVE_CONF_DIR=/export/server/hive-3.1.2/conf export HIVE_AUX_JARS_PATH=/export/server/hive-3.1.2/lib"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"hive"}],["meta",{"property":"article:author","content":"lojzes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hive\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lojzes\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"hive 远程模式安装","slug":"hive-远程模式安装","link":"#hive-远程模式安装","children":[]},{"level":2,"title":"配置环境变量","slug":"配置环境变量","link":"#配置环境变量","children":[]},{"level":2,"title":"初始化元数据","slug":"初始化元数据","link":"#初始化元数据","children":[]},{"level":2,"title":"启动 metastore 服务","slug":"启动-metastore-服务","link":"#启动-metastore-服务","children":[]},{"level":2,"title":"链接客户端端","slug":"链接客户端端","link":"#链接客户端端","children":[{"level":3,"title":"DDL","slug":"ddl","link":"#ddl","children":[]},{"level":3,"title":"DML","slug":"dml","link":"#dml","children":[]}]},{"level":2,"title":"修改中文注释为乱码问题","slug":"修改中文注释为乱码问题","link":"#修改中文注释为乱码问题","children":[]},{"level":2,"title":"show 命令","slug":"show-命令","link":"#show-命令","children":[]},{"level":2,"title":"hive load 加载数据","slug":"hive-load-加载数据","link":"#hive-load-加载数据","children":[]},{"level":2,"title":"insert","slug":"insert","link":"#insert","children":[]},{"level":2,"title":"select","slug":"select","link":"#select","children":[]},{"level":2,"title":"join","slug":"join","link":"#join","children":[]},{"level":2,"title":"hive 内置函数","slug":"hive-内置函数","link":"#hive-内置函数","children":[]},{"level":2,"title":"ETL（抽取 转换 加载） 清洗数据","slug":"etl-抽取-转换-加载-清洗数据","link":"#etl-抽取-转换-加载-清洗数据","children":[]}],"readingTime":{"minutes":4.46,"words":1339},"filePathRelative":"study/bigdata/hive/hive.md","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">参考</p>\\n<p><a href=\\"https://github.com/lojzes/bigdata/tree/master\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">安装、源码</a></p>\\n</div>\\n<h2> hive 远程模式安装</h2>\\n<p>在 hadoop 集群中任选一台机器安装即可</p>\\n<p>一般会选择安装在 manager 节点上</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 解压 hive</span>\\n\\n<span class=\\"token function\\">tar</span> zxvf apache-hive-3.1.2-bin.tar.gz\\n\\n<span class=\\"token comment\\">#  重命名</span>\\n<span class=\\"token function\\">mv</span> apache-hive-3.1.2-bin hive-3.1.2\\n\\n<span class=\\"token comment\\">#  升级guava 和 hadoop 中的一样</span>\\n<span class=\\"token comment\\">#  删除 hive 中的 guava</span>\\n\\n<span class=\\"token function\\">rm</span>  <span class=\\"token parameter variable\\">-rf</span> /export/server/hive-3.1.2/lib/guava-19.0.jar\\n\\n<span class=\\"token comment\\"># /export/server/hive-3.1.2/lib/</span>\\n <span class=\\"token function\\">cp</span> /export/server/hadoop-3.3.0/share/hadoop/common/lib/guava-27.0-jre.jar ./\\n\\n\\n\\n<span class=\\"token comment\\"># 新建 配置文件</span>\\n<span class=\\"token comment\\"># 切换到 /export/server/hive-3.1.2/conf</span>\\n<span class=\\"token function\\">cp</span> hive-env.sh.template hive-env.sh\\n\\n<span class=\\"token comment\\"># 添加</span>\\n<span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">HADOOP_HOME</span><span class=\\"token operator\\">=</span>/export/server/hadoop-3.3.0\\n<span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">HIVE_CONF_DIR</span><span class=\\"token operator\\">=</span>/export/server/hive-3.1.2/conf\\n<span class=\\"token builtin class-name\\">export</span> <span class=\\"token assign-left variable\\">HIVE_AUX_JARS_PATH</span><span class=\\"token operator\\">=</span>/export/server/hive-3.1.2/lib\\n\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"lojzes","license":"MIT"},"autoDesc":true,"git":{}}');export{e as data};