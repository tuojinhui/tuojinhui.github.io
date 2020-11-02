# 多数据源(MultiDataSource)

<<< @/docs/java/java1/LocalDataSourceConfig.java

```yaml

spring:
  localdatasource:
    url: jdbc:mysql://000.000.000.000:3306/common?allowMultiQueries=true&useUnicode=true&useSSL=false&character_set_server=utf8mb4
    username: 0000
    password: 0000
    initial-size: 3
    max-active: 5
    min-idle: 3
    max-wait: 60000
    pool-prepared-statements: true
    max-pool-prepared-statement-per-connection-size: 10
    time-between-eviction-runs-millis: 60000
    min-evictable-idle-time-millis: 300000
    test-while-idle: true
    test-on-borrow: false
    test-on-return: false
    stat-view-servlet:
      enabled: true
      url-pattern: /druid/*
    filter:
      stat:
        log-slow-sql: true
        slow-sql-millis: 1000
        merge-sql: false
      wall:
        config:
          multi-statement-allow: true


```

::: warning
数据源创建借助了阿里的Druid。
如果是tk.mybatis，在mapper包扫描时需要将MapperScan替换为tk.mybatis的MapperScan，
如果是mybatis-plus，在创建SQL会话工厂时需要将SqlSessionFactoryBean替换为MybatisSqlSessionFactoryBean。
:::

::: danger
多数据源配置时有且仅有一个主数据源，即只能有一个数据源配置类上加@Primary注解
:::
