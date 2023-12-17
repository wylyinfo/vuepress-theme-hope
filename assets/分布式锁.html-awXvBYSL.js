const e=JSON.parse('{"key":"v-0ef7c120","path":"/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html","title":"分布式锁需要具备哪些条件","lang":"zh-CN","frontmatter":{"description":"分布式锁需要具备哪些条件 获取锁和释放锁的性能要好 判断是否获得锁必须是原子性的，否则可能导致多个请求都获取到锁 网络中断或宕机无法释放锁时，锁必须被清除，不然会发生死锁 可重入一个线程中可以多次获取同一把锁，比如一个线程在执行一个带锁的方法，该方法中又调用了另一个需要相同锁的方法，则该线程可以直接 执行调用的方法，而无需重新获得锁（避免死锁） 阻塞锁和非阻塞锁，阻塞锁即没有获取到锁，则继续等待获取锁；费阻塞锁即没有获取到锁后，不继续等待，直接返回锁失败。 分布式锁实现方式","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%88%86%E5%B8%83%E5%BC%8F/%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"分布式锁需要具备哪些条件"}],["meta",{"property":"og:description","content":"分布式锁需要具备哪些条件 获取锁和释放锁的性能要好 判断是否获得锁必须是原子性的，否则可能导致多个请求都获取到锁 网络中断或宕机无法释放锁时，锁必须被清除，不然会发生死锁 可重入一个线程中可以多次获取同一把锁，比如一个线程在执行一个带锁的方法，该方法中又调用了另一个需要相同锁的方法，则该线程可以直接 执行调用的方法，而无需重新获得锁（避免死锁） 阻塞锁和非阻塞锁，阻塞锁即没有获取到锁，则继续等待获取锁；费阻塞锁即没有获取到锁后，不继续等待，直接返回锁失败。 分布式锁实现方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-17T11:44:33.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2023-12-17T11:44:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式锁需要具备哪些条件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-17T11:44:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"分布式锁实现方式","slug":"分布式锁实现方式","link":"#分布式锁实现方式","children":[]},{"level":2,"title":"一、数据库锁","slug":"一、数据库锁","link":"#一、数据库锁","children":[]},{"level":2,"title":"1.基于MySQL锁表","slug":"_1-基于mysql锁表","link":"#_1-基于mysql锁表","children":[]},{"level":2,"title":"2.采用乐观锁增加版本号","slug":"_2-采用乐观锁增加版本号","link":"#_2-采用乐观锁增加版本号","children":[]},{"level":2,"title":"二、缓存锁","slug":"二、缓存锁","link":"#二、缓存锁","children":[]},{"level":2,"title":"1.基于 sex PX  NX","slug":"_1-基于-sex-px-nx","link":"#_1-基于-sex-px-nx","children":[]},{"level":2,"title":"2.RedLock算法","slug":"_2-redlock算法","link":"#_2-redlock算法","children":[]},{"level":2,"title":"zookeeper分布式锁","slug":"zookeeper分布式锁","link":"#zookeeper分布式锁","children":[]},{"level":2,"title":"分布式锁比较","slug":"分布式锁比较","link":"#分布式锁比较","children":[]}],"git":{"createdTime":1702813473000,"updatedTime":1702813473000,"contributors":[{"name":"wuyanluoye","email":"refersearch@163.com","commits":1}]},"readingTime":{"minutes":4.74,"words":1422},"filePathRelative":"分布式/分布式锁.md","localizedDate":"2023年12月17日","excerpt":"<h1> 分布式锁需要具备哪些条件</h1>\\n<ol>\\n<li>获取锁和释放锁的性能要好</li>\\n<li>判断是否获得锁必须是原子性的，否则可能导致多个请求都获取到锁</li>\\n<li>网络中断或宕机无法释放锁时，锁必须被清除，不然会发生死锁</li>\\n<li>可重入一个线程中可以多次获取同一把锁，比如一个线程在执行一个带锁的方法，该方法中又调用了另一个需要相同锁的方法，则该线程可以直接 执行调用的方法，而无需重新获得锁（避免死锁）</li>\\n<li>阻塞锁和非阻塞锁，阻塞锁即没有获取到锁，则继续等待获取锁；费阻塞锁即没有获取到锁后，不继续等待，直接返回锁失败。</li>\\n</ol>\\n<h2> 分布式锁实现方式</h2>","autoDesc":true}');export{e as data};
