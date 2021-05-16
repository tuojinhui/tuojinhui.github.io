package com.common;

import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Supplier;

/**
 * @author common
 */
public class ObjectHandlerFactory {

    /**
     * 缓存容器
     */
    private static final Map<String, Optional<Supplier<Object>>> context = new ConcurrentHashMap<>(4);

    /**
     * 获取处理器
     *
     * @param channel
     * @return
     */
    public static Object obtainObjectHandler(String channel) {
        return context.getOrDefault(channel, Optional.empty()).orElseThrow(() -> new RuntimeException("渠道不存在")).get();
    }

    /**
     * 注册处理器
     *
     * @param channel
     * @param object
     */
    public static void registerObjectHandler(String channel, Object object) {
        boolean canRegister = Objects.nonNull(channel) && Objects.nonNull(object);
        if (canRegister) {
            context.put(channel, Optional.of(() -> object));
        }
    }

}
