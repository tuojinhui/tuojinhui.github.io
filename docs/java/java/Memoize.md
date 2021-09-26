# 缓存方法(Memoize)
[[toc]]

### 缓存方法

1. 此方法原理和mybatis一级缓存原理一致；
2. 借助了mybatis的Cachekey实现了结果缓存 [mybatis createCacheKey](https://github.com/mybatis/mybatis-3/blob/mybatis-3.5.7/src/main/java/org/apache/ibatis/executor/BaseExecutor.java#L195)；
3. 该缓存生命周期只针对当前线程即ThreadLocal；
4. 在用户不需要缓存时需主动调用clear方法清除数据。

```java 

package com.common;

import com.alibaba.fastjson.JSON;
import org.apache.ibatis.cache.CacheKey;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.function.Supplier;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * 功能描述：数据存储Context
 *
 * @author 拓金辉
 * @version 1.0
 * @date 2021-09-14 13:17:40
 */
@Component
public class SubscribeContext {

    /**
     * 方法描述：ThreadLocal
     *
     * @author 拓金辉
     * @date 2021-09-21 21:54:07
     */
    private final ThreadLocal<Map<CacheKey, Object>> contextThreadLocal = ThreadLocal.withInitial(HashMap::new);

    /**
     * 方法描述：获取对象
     *
     * @param objectId 对象id
     * @return java.lang.Object
     *
     * @author 拓金辉
     * @date 2021-09-22 17:45:28
     */
    public Object getObject(String objectId) {
        return memoize(createCacheKey(Thread.currentThread().getStackTrace()[1], objectId), Object::new);
    }

    /**
     * 方法描述：创建缓存key
     *
     * @param element 栈元素
     * @param args    变长参数
     * @return org.apache.ibatis.cache.CacheKey
     *
     * @author 拓金辉
     * @date 2021-09-21 21:26:32
     */
    private CacheKey createCacheKey(StackTraceElement element, Object... args) {
        CacheKey cacheKey = new CacheKey();
        cacheKey.update(element.getClassName());
        cacheKey.update(element.getMethodName());
        cacheKey.update(element.getLineNumber());
        cacheKey.update(element.getFileName());
        cacheKey.update(JSON.toJSONString(args));
        return cacheKey;
    }

    /**
     * 方法描述：缓存方法
     *
     * @param cacheKey cacheKey
     * @param supplier supplier
     * @return T  返回对象
     *
     * @author 拓金辉
     * @date 2021-09-14 11:02:31
     */
    @SuppressWarnings("unchecked")
    private  <T> T memoize(CacheKey cacheKey, Supplier<T> supplier) {
        Map<CacheKey, Object> context = contextThreadLocal.get();
        T t;
        if (context.containsKey(cacheKey)) {
            t = (T) context.get(cacheKey);
        } else {
            t = supplier.get();
            context.put(cacheKey, t);
        }
        return t;
    }

    /**
     * 方法描述：清除数据
     *
     * @author 拓金辉
     * @date 2021-09-12 16:58:16
     */
    public void clear() {
        Map<CacheKey, Object> context = contextThreadLocal.get();
        Optional.ofNullable(context).ifPresent(Map::clear);
        contextThreadLocal.remove();
    }

}

```
