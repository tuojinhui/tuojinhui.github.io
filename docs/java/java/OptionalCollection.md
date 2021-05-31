# 集合非空

[[toc]]

### 集合防止空指针

```java 

    private <K, V> Map<K, V> c(Map<K, V> c) {
        return Optional.ofNullable(c).orElseGet(Collections::emptyMap);
    }

    private <L> List<L> c(List<L> c) {
        return Optional.ofNullable(c).orElseGet(Collections::emptyList);
    }

    private <S> Set<S> c(Set<S> c) {
        return Optional.ofNullable(c).orElseGet(Collections::emptySet);
    }
    
```
