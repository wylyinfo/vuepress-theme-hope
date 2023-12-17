const e=JSON.parse('{"key":"v-43a1a3c2","path":"/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E5%8E%9F%E7%90%86.html","title":"分布式架构","lang":"zh-CN","frontmatter":{"description":"分布式架构 分布式系统主要特征： 分布性：分布式系统中的多台计算机之间在空间位置上可以随意分布，同时，机器分布情况也会随时变动 对等性：分布式系统中的计算机没有主从之分，所有计算机节点都是对等的。副本(Replica)是分布式系统最常见概念之一，指的是分布式系统对数据和服务提供的一种冗余方式 并发性：同一个分布式系统中的多个节点，可能会并发地操作一些共享的资源，如何准确并高效地协调分布式并发操作也成为分布式系统架构与设计中最大的挑战之一 缺乏全局时钟：分布式系统缺乏一个全局的时钟序列控制 故障总是会发生：组成分布式系统的所有计算机，都有可能发生任何形式的故障。除非需求指标允许，在系统设计时不能放过任何异常情况","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vuepress-theme-hope/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E5%8E%9F%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"分布式架构"}],["meta",{"property":"og:description","content":"分布式架构 分布式系统主要特征： 分布性：分布式系统中的多台计算机之间在空间位置上可以随意分布，同时，机器分布情况也会随时变动 对等性：分布式系统中的计算机没有主从之分，所有计算机节点都是对等的。副本(Replica)是分布式系统最常见概念之一，指的是分布式系统对数据和服务提供的一种冗余方式 并发性：同一个分布式系统中的多个节点，可能会并发地操作一些共享的资源，如何准确并高效地协调分布式并发操作也成为分布式系统架构与设计中最大的挑战之一 缺乏全局时钟：分布式系统缺乏一个全局的时钟序列控制 故障总是会发生：组成分布式系统的所有计算机，都有可能发生任何形式的故障。除非需求指标允许，在系统设计时不能放过任何异常情况"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-17T11:44:33.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2023-12-17T11:44:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式架构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-17T11:44:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"分布式系统面临的问题","slug":"分布式系统面临的问题","link":"#分布式系统面临的问题","children":[]},{"level":2,"title":"分布式理论-CAP定理","slug":"分布式理论-cap定理","link":"#分布式理论-cap定理","children":[]},{"level":2,"title":"CAP原则权衡","slug":"cap原则权衡","link":"#cap原则权衡","children":[]},{"level":2,"title":"关于P的理解","slug":"关于p的理解","link":"#关于p的理解","children":[]},{"level":2,"title":"CA非0/1的选择","slug":"ca非0-1的选择","link":"#ca非0-1的选择","children":[]},{"level":2,"title":"BASE理论","slug":"base理论","link":"#base理论","children":[]},{"level":2,"title":"最终一致性分为5种","slug":"最终一致性分为5种","link":"#最终一致性分为5种","children":[]},{"level":2,"title":"分布式事务","slug":"分布式事务","link":"#分布式事务","children":[{"level":3,"title":"分布式锁","slug":"分布式锁","link":"#分布式锁","children":[]}]},{"level":2,"title":"分布式Session","slug":"分布式session","link":"#分布式session","children":[]},{"level":2,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]},{"level":2,"title":"高可用之\\"脑裂\\"","slug":"高可用之-脑裂","link":"#高可用之-脑裂","children":[]},{"level":2,"title":"2PC(two phase commit)","slug":"_2pc-two-phase-commit","link":"#_2pc-two-phase-commit","children":[]},{"level":2,"title":"3PC(three phase commit)","slug":"_3pc-three-phase-commit","link":"#_3pc-three-phase-commit","children":[]},{"level":2,"title":"Paxos","slug":"paxos","link":"#paxos","children":[]},{"level":2,"title":"Basic Paxos","slug":"basic-paxos","link":"#basic-paxos","children":[]},{"level":2,"title":"Multi Paxos","slug":"multi-paxos","link":"#multi-paxos","children":[]},{"level":2,"title":"Raft","slug":"raft","link":"#raft","children":[]},{"level":2,"title":"Zab(Zookeeper atomic broadcast protocol)","slug":"zab-zookeeper-atomic-broadcast-protocol","link":"#zab-zookeeper-atomic-broadcast-protocol","children":[]},{"level":2,"title":"选举、多数派和租约","slug":"选举、多数派和租约","link":"#选举、多数派和租约","children":[]},{"level":2,"title":"选举(election)","slug":"选举-election","link":"#选举-election","children":[]},{"level":2,"title":"多数派(quorum)","slug":"多数派-quorum","link":"#多数派-quorum","children":[]},{"level":2,"title":"租约(lease)","slug":"租约-lease","link":"#租约-lease","children":[]}],"git":{"createdTime":1702813473000,"updatedTime":1702813473000,"contributors":[{"name":"wuyanluoye","email":"refersearch@163.com","commits":1}]},"readingTime":{"minutes":23.99,"words":7196},"filePathRelative":"分布式/分布式原理.md","localizedDate":"2023年12月17日","excerpt":"<h1> 分布式架构</h1>\\n<p>分布式系统主要特征：</p>\\n<p>分布性：分布式系统中的多台计算机之间在空间位置上可以随意分布，同时，机器分布情况也会随时变动</p>\\n<p>对等性：分布式系统中的计算机没有主从之分，所有计算机节点都是对等的。副本(Replica)是分布式系统最常见概念之一，指的是分布式系统对数据和服务提供的一种冗余方式</p>\\n<p>并发性：同一个分布式系统中的多个节点，可能会并发地操作一些共享的资源，如何准确并高效地协调分布式并发操作也成为分布式系统架构与设计中最大的挑战之一</p>\\n<p>缺乏全局时钟：分布式系统缺乏一个全局的时钟序列控制</p>\\n<p>故障总是会发生：组成分布式系统的所有计算机，都有可能发生任何形式的故障。除非需求指标允许，在系统设计时不能放过任何异常情况</p>","autoDesc":true}');export{e as data};
