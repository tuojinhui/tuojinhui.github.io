package com.common;

import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.data.redis.listener.PatternTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.data.redis.listener.Topic;
import org.springframework.stereotype.Component;

/**
 * Redis key失效监听器
 * 仅监听0号DB库
 *
 * @author common
 */
@Component
public class RedisKeyExpirationListener extends org.springframework.data.redis.listener.KeyExpirationEventMessageListener {

    private static final Topic KEYEVENT_EXPIRED_TOPIC = new PatternTopic("__keyevent@0__:expired");

    /**
     * Creates new {@link MessageListener} for {@code __keyevent@*__:expired} messages.
     *
     * @param listenerContainer must not be {@literal null}.
     */
    public RedisKeyExpirationListener(RedisMessageListenerContainer listenerContainer) {
        super(listenerContainer);
    }

    @Override
    public void onMessage(Message message, byte[] pattern) {
        System.out.println(message.toString());
    }

    @Override
    public void doRegister(RedisMessageListenerContainer listenerContainer) {
        listenerContainer.addMessageListener(this, KEYEVENT_EXPIRED_TOPIC);
    }

}
