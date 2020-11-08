# 重试机制(Retry)

### Retry Maven依赖
```xml

    <dependency>
        <groupId>org.springframework.retry</groupId>
        <artifactId>spring-retry</artifactId>
        <version>1.2.2.RELEASE</version>
    </dependency>

```

### 重试策略
```java

    private static final RetryTemplate RETRY_TEMPLATE = new RetryTemplate();

    static {
        RETRY_TEMPLATE.setRetryPolicy(new SimpleRetryPolicy(3, Collections.singletonMap(BaseRetryException.class, Boolean.TRUE)));
    }

```

### 重试异常
```java 

    public static class BaseRetryException extends RuntimeException {

        @Setter
        @Getter
        private String message;

        @Getter
        @Setter
        private String errorCode;

        public BaseRetryException(String msg) {
            super(msg);
            this.message = msg;
        }

        public BaseRetryException(String errorCode, String msg) {
            super(msg);
            this.errorCode = errorCode;
        }
    }

```

### 重试测试
```java 

    public static void main(String[] args) {
        AtomicInteger atomicInteger = new AtomicInteger(1);
        RETRY_TEMPLATE.execute(context -> {
            System.out.println("第" + atomicInteger.getAndIncrement() + "次请求");
            throw new BaseRetryException("重试失败");
        });
    }


```
