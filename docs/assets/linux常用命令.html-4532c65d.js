const e=JSON.parse('{"key":"v-72c5e419","path":"/study/linux/linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"linux常用命令","lang":"zh-CN","frontmatter":{"title":"linux常用命令","index":false,"icon":"discover","category":["学习笔记"],"description":"yum yum autoremove 对于大部分使用红帽系（RedHat）Linux系统的用户而言，我们习惯使用yum命令安装或卸载软件包。当我们使用yum install命令安装一枚软件包时，yum会将该软件包连同其所有依赖包一并安装到本机。但当我们使用yum remove命令卸载一枚已安装软件包时，yum默认只会移除你所指定的那枚软件包，并不会移除该包的相关依赖包。 自从Fedora 18之后，我们便可以使用yum autoremove pakage命令来干净卸载软件包了。","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/study/linux/linux%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"JavaNative"}],["meta",{"property":"og:title","content":"linux常用命令"}],["meta",{"property":"og:description","content":"yum yum autoremove 对于大部分使用红帽系（RedHat）Linux系统的用户而言，我们习惯使用yum命令安装或卸载软件包。当我们使用yum install命令安装一枚软件包时，yum会将该软件包连同其所有依赖包一并安装到本机。但当我们使用yum remove命令卸载一枚已安装软件包时，yum默认只会移除你所指定的那枚软件包，并不会移除该包的相关依赖包。 自从Fedora 18之后，我们便可以使用yum autoremove pakage命令来干净卸载软件包了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"lojzes"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"linux常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"lojzes\\",\\"url\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"yum","slug":"yum","link":"#yum","children":[{"level":3,"title":"yum  autoremove","slug":"yum-autoremove","link":"#yum-autoremove","children":[]},{"level":3,"title":"yum clean all","slug":"yum-clean-all","link":"#yum-clean-all","children":[]}]},{"level":2,"title":"env 环境变量","slug":"env-环境变量","link":"#env-环境变量","children":[]},{"level":2,"title":"权限","slug":"权限","link":"#权限","children":[{"level":3,"title":"更改文件权限 （chmod命令）","slug":"更改文件权限-chmod命令","link":"#更改文件权限-chmod命令","children":[]}]},{"level":2,"title":"数字权限使用格式","slug":"数字权限使用格式","link":"#数字权限使用格式","children":[]},{"level":2,"title":"更改文件拥有者（chown命令）","slug":"更改文件拥有者-chown命令","link":"#更改文件拥有者-chown命令","children":[]},{"level":2,"title":"echo","slug":"echo","link":"#echo","children":[{"level":3,"title":"覆盖方式","slug":"覆盖方式","link":"#覆盖方式","children":[]}]},{"level":2,"title":"EOF","slug":"eof","link":"#eof","children":[]},{"level":2,"title":"线上查询、帮助文档","slug":"线上查询、帮助文档","link":"#线上查询、帮助文档","children":[]},{"level":2,"title":"文件和目录","slug":"文件和目录","link":"#文件和目录","children":[]},{"level":2,"title":"查看文件及内容处理","slug":"查看文件及内容处理","link":"#查看文件及内容处理","children":[]},{"level":2,"title":"文件压缩解压","slug":"文件压缩解压","link":"#文件压缩解压","children":[]},{"level":2,"title":"显示系统信息命令","slug":"显示系统信息命令","link":"#显示系统信息命令","children":[]},{"level":2,"title":"搜索文件","slug":"搜索文件","link":"#搜索文件","children":[]},{"level":2,"title":"用户命令","slug":"用户命令","link":"#用户命令","children":[]},{"level":2,"title":"基础网络","slug":"基础网络","link":"#基础网络","children":[]},{"level":2,"title":"查看端口占用","slug":"查看端口占用","link":"#查看端口占用","children":[]},{"level":2,"title":"输入网络操作命令","slug":"输入网络操作命令","link":"#输入网络操作命令","children":[]},{"level":2,"title":"系用户权限相关","slug":"系用户权限相关","link":"#系用户权限相关","children":[]},{"level":2,"title":"查看系统用户登录信息的命令","slug":"查看系统用户登录信息的命令","link":"#查看系统用户登录信息的命令","children":[]},{"level":2,"title":"内置命令","slug":"内置命令","link":"#内置命令","children":[]},{"level":2,"title":"系统关联与性能","slug":"系统关联与性能","link":"#系统关联与性能","children":[]},{"level":2,"title":"关机 重启 注销 和查看系统信息","slug":"关机-重启-注销-和查看系统信息","link":"#关机-重启-注销-和查看系统信息","children":[]},{"level":2,"title":"进程关联相关命令","slug":"进程关联相关命令","link":"#进程关联相关命令","children":[]}],"readingTime":{"minutes":20.1,"words":6029},"filePathRelative":"study/linux/linux常用命令.md","excerpt":"<h2> yum</h2>\\n<h3> yum  autoremove</h3>\\n<p>对于大部分使用红帽系（RedHat）Linux系统的用户而言，我们习惯使用<code>yum</code>命令安装或卸载软件包。当我们使用<code>yum install</code>命令安装一枚软件包时，<code>yum</code>会将该软件包连同其所有依赖包一并安装到本机。但当我们使用<code>yum remove</code>命令卸载一枚已安装软件包时，<code>yum</code>默认只会移除你所指定的那枚软件包，并不会移除该包的相关依赖包。</p>\\n<p>自从<em>Fedora 18</em>之后，我们便可以使用<code>yum autoremove pakage</code>命令来干净卸载软件包了。</p>","copyright":{"author":"lojzes","license":"MIT"},"autoDesc":true,"git":{}}');export{e as data};
