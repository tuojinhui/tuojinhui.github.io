package com.common;

import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.UnauthenticatedException;
import org.apache.shiro.authz.UnauthorizedException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.AbstractMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * 全局异常总控配置
 *
 * @author common
 */
@RestControllerAdvice
@Configuration
@Slf4j
public class ThrowableInterceptConfig {

    @Value("${spring.application.name}")
    private String name;

    /**
     * 账号被禁用
     */
    @ExceptionHandler(DisabledAccountException.class)
    public Map<String, Object> handleError(DisabledAccountException e) {
        return create(" 账号被禁用！", e);
    }

    /**
     * 账号被锁定
     */
    @ExceptionHandler(LockedAccountException.class)
    public Map<String, Object> handleError(LockedAccountException e) {
        return create("账号被锁定！", e);
    }

    /**
     * 用户名错误
     */
    @ExceptionHandler(UnknownAccountException.class)
    public Map<String, Object> handleError(UnknownAccountException e) {
        return create("用户名错误！", e);
    }

    /**
     * 密码错误
     */
    @ExceptionHandler(IncorrectCredentialsException.class)
    public Map<String, Object> handleError(IncorrectCredentialsException e) {
        return create("密码错误！", e);
    }

    /**
     * 凭证异常
     */
    @ExceptionHandler(CredentialsException.class)
    public Map<String, Object> handleError(CredentialsException e) {
        return create("凭证异常！", e);
    }

    /**
     * 并发访问异常
     */
    @ExceptionHandler(ConcurrentAccessException.class)
    public Map<String, Object> handleError(ConcurrentAccessException e) {
        return create("并发访问异常！", e);
    }

    /**
     * 认证次数超过限制
     */
    @ExceptionHandler(ExcessiveAttemptsException.class)
    public Map<String, Object> handleError(ExcessiveAttemptsException e) {
        return create("认证次数超过限制！", e);
    }

    /**
     * 未认证错误
     */
    @ExceptionHandler(UnauthenticatedException.class)
    public Map<String, Object> handleError(UnauthenticatedException e) {
        return create("未认证错误!", e);
    }

    /**
     * 未授权错误
     */
    @ExceptionHandler(UnauthorizedException.class)
    public Map<String, Object> handleError(UnauthorizedException e) {
        return create("未授权错误!", e);
    }

    /**
     * 认证异常
     */
    @ExceptionHandler(AuthenticationException.class)
    public Map<String, Object> handleError(AuthenticationException e) {
        return create("认证异常!", e);
    }

    /**
     * 总控异常
     */
    @ExceptionHandler(Throwable.class)
    public Map<String, Object> handleError(Throwable e) {
        return create("服务器繁忙,请稍后重试!", e);
    }

    /**
     * 日志打印
     * 返回信息
     *
     * @param msg 返回信息
     * @param e   异常栈
     * @return 错误提示
     */
    private Map<String, Object> create(String msg, Throwable e) {
        // TODO 此处待集成钉钉消息推送，监控线上日志
        log.error("服务名：[{}]，异常信息：[{}]：，异常栈：[{}]", name, msg, e);
        return Stream.of(new AbstractMap.SimpleEntry<>("code", "500"), new AbstractMap.SimpleEntry<>("msg", msg)).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
    }

}
