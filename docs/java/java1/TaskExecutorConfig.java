package com.common;

import lombok.extern.slf4j.Slf4j;
import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.lang.reflect.Method;
import java.util.Locale;
import java.util.Objects;
import java.util.concurrent.Executor;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.atomic.AtomicLong;

/**
 * @author common
 * 异步线程配置类
 */
@Configuration
@Slf4j
public class TaskExecutorConfig implements AsyncConfigurer {

    /**
     * Set the ThreadPoolExecutor's core pool size.
     */
    private static final int CORE_POOL_SIZE = Runtime.getRuntime().availableProcessors() * 2 + 1;

    /**
     * Set the ThreadPoolExecutor's maximum pool size.
     */
    private static final int MAX_POOL_SIZE = CORE_POOL_SIZE * 2;

    /**
     * Set the capacity for the ThreadPoolExecutor's BlockingQueue.
     */
    private static final int QUEUE_CAPACITY = 200;

    /**
     * Set the ThreadPoolExecutor's keep-alive seconds.
     */
    private static final int KEEP_ALIVE_SECONDS = 60;


    @Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(CORE_POOL_SIZE);
        executor.setMaxPoolSize(MAX_POOL_SIZE);
        executor.setQueueCapacity(QUEUE_CAPACITY);
        executor.setKeepAliveSeconds(KEEP_ALIVE_SECONDS);
        executor.setThreadFactory(ThreadFactoryBuilder.builder().setNameFormat("common-pool-%d").build());
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.AbortPolicy());
        executor.initialize();
        return executor;
    }

    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new TaskAsyncUncaughtExceptionHandler();
    }

    static class TaskAsyncUncaughtExceptionHandler implements AsyncUncaughtExceptionHandler {

        @Override
        public void handleUncaughtException(Throwable ex, Method method, Object... params) {
            log.info("Get ThreadPoolTaskExecutor Throw Exception Message");
            log.info("Exception message - " + ex.getMessage());
            log.info("Method name - " + method.getName());
            for (Object param : params) {
                log.info("Parameter value - " + param);
            }
        }

    }

    /**
     * A ThreadFactory builder, providing any combination of these features:
     *
     * <p>If no backing thread factory is provided, a default backing thread factory is used as if by
     * calling {@code setThreadFactory(}{@link java.util.concurrent.Executors#defaultThreadFactory()}{@code )}.
     */
    private static final class ThreadFactoryBuilder {

        private String nameFormat = null;
        private Boolean daemon = null;
        private Integer priority = null;
        private Thread.UncaughtExceptionHandler uncaughtExceptionHandler = null;
        private ThreadFactory backingThreadFactory = null;

        private ThreadFactoryBuilder() {
        }

        /**
         * Creates a new {@link ThreadFactory} builder.
         */
        public static ThreadFactoryBuilder builder() {
            return new ThreadFactoryBuilder();
        }

        public ThreadFactoryBuilder setNameFormat(String nameFormat) {
            this.nameFormat = nameFormat;
            return this;
        }

        public ThreadFactoryBuilder setDaemon(boolean daemon) {
            this.daemon = daemon;
            return this;
        }

        public ThreadFactoryBuilder setPriority(int priority) {
            this.priority = priority;
            return this;
        }

        public ThreadFactoryBuilder setUncaughtExceptionHandler(Thread.UncaughtExceptionHandler uncaughtExceptionHandler) {
            this.uncaughtExceptionHandler = Objects.requireNonNull(uncaughtExceptionHandler);
            return this;
        }

        public ThreadFactoryBuilder setThreadFactory(ThreadFactory backingThreadFactory) {
            this.backingThreadFactory = Objects.requireNonNull(backingThreadFactory);
            return this;
        }

        public ThreadFactory build() {
            return doBuild(this);
        }

        private static ThreadFactory doBuild(ThreadFactoryBuilder builder) {
            final String nameFormat = builder.nameFormat;
            final Boolean daemon = builder.daemon;
            final Integer priority = builder.priority;
            final Thread.UncaughtExceptionHandler uncaughtExceptionHandler = builder.uncaughtExceptionHandler;
            final ThreadFactory backingThreadFactory = (builder.backingThreadFactory != null) ? builder.backingThreadFactory : java.util.concurrent.Executors.defaultThreadFactory();
            final AtomicLong count = (nameFormat != null) ? new AtomicLong(0) : null;
            return new ThreadFactory() {
                @Override
                public Thread newThread(Runnable runnable) {
                    Thread thread = backingThreadFactory.newThread(runnable);
                    if (nameFormat != null) {
                        thread.setName(format(nameFormat, count.getAndIncrement()));
                    }
                    if (daemon != null) {
                        thread.setDaemon(daemon);
                    }
                    if (priority != null) {
                        thread.setPriority(priority);
                    }
                    if (uncaughtExceptionHandler != null) {
                        thread.setUncaughtExceptionHandler(uncaughtExceptionHandler);
                    }
                    return thread;
                }
            };
        }

        private static String format(String format, Object... args) {
            return String.format(Locale.ROOT, format, args);
        }

    }

}
