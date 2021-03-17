# Optional使用
[[toc]]

### 所有方法
![Image](./feature/Optional.png)

### 对象A不为空取A，否则B
```java
    Optional.ofNullable(user).orElseGet(User::new);
```
### 对象A不为空取A.prop, 否则取给定值
```java 
    Optional.ofNullable(user).map(User::getUsername).orElse("Default Name");
```
### 对象A为空，抛出异常
```java 
    Optional.ofNullable(user).orElseThrow(RuntimeException::new);
```

### 检验参数有效性
```java 
    Optional.ofNullable(user).filter(User::isValid).orElseThrow(RuntimeException::new);

    @Data
    static class User {
        private String username;
        private String password;

        static boolean isValid(User user){
            return Objects.nonNull(user.username);
        }
    }

```
