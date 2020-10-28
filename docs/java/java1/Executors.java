package com.common;

import java.util.Locale;
import java.util.Objects;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicLong;

/**
 * Factory and utility methods for {@link Executor}, {@link
 * ExecutorService} classes defined in this package.
 * <p>
 * <p>
 * Methods that create and return an {@link ExecutorService}
 * set up with commonly useful configuration settings
 *
 * @author common
 */
public class Executors {

    /**
     * Creates a new {@code ThreadPoolExecutor} with the given initial
     */
    public static ExecutorService getFeatureThreadPool() {
        return SingletonExecutorService.INSTANCE.getInstance();
    }

    /**
     * The number of threads to keep in the pool.
     */
    private static final Integer THREAD_NUMBER = Runtime.getRuntime().availableProcessors() * 2 + 1;

    /**
     * Example of a Java Singleton.
     * It is suggested to use an enum as a singleton. The Class
     * cannot be instantiated more then once, specifically when
     * using reflection.
     */
    private enum SingletonExecutorService {

        /**
         * Enum singleton instance.
         */
        INSTANCE;

        private final ExecutorService instance;

        SingletonExecutorService() {
            instance = new ThreadPoolExecutor(THREAD_NUMBER, THREAD_NUMBER * 2, 1000 * 60L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<>(), ThreadFactoryBuilder.builder().setNameFormat("yangxiaozhi-pool-%d").build(), new ThreadPoolExecutor.AbortPolicy());
        }

        private ExecutorService getInstance() {
            return instance;
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
