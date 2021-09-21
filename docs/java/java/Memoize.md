# 缓存方法(Memoize)
[[toc]]

### 缓存方法

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
     * 方法描述：创建对象
     *
     * @param objectId 优惠券id
     * @return com.billbear.coupon.entity.Coupon
     *
     * @author 拓金辉
     * @date 2021-08-24 16:18:39
     */
    public Object getObject(String objectId) {
        return memoize(createCacheKey(objectId), Object::new);
    }

    /**
     * 方法描述：创建缓存key
     *
     * @param args 变长参数
     * @return org.apache.ibatis.cache.CacheKey
     *
     * @author 拓金辉
     * @date 2021-09-21 21:26:32
     */
    private CacheKey createCacheKey(Object... args) {
        CacheKey cacheKey = new CacheKey();
        StackTraceElement element = Thread.currentThread().getStackTrace()[1];
        String stackTraceElement = Stream.of(
                element.getClassName(), element.getMethodName(),
                element.getLineNumber(), element.getFileName()
        ).map(String::valueOf).collect(Collectors.joining());
        cacheKey.update(stackTraceElement);
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
