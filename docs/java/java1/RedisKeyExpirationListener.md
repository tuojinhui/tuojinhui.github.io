# 延时任务(KeyExpire)

### Spring容器中注入RedisMessageListenerContainer
```java 

    /**
     * 创建RedisMessageListenerContainer
     */
    @Bean
    public RedisMessageListenerContainer createMessageListenerContainer() {
        RedisMessageListenerContainer redisMessageListenerContainer = new RedisMessageListenerContainer();
        redisMessageListenerContainer.setConnectionFactory(redisConnectionFactory);
            redisMessageListenerContainer.afterPropertiesSet();
        return redisMessageListenerContainer;
    }


```

<<< @/docs/java/java1/RedisKeyExpirationListener.java


::: warning
Redis配置文件需要开启 notify-keyspace-events Ex，注意代码所监听的库
:::
