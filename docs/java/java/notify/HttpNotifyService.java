package com.common.service;

import com.common.NotifyResult;
import io.netty.channel.ChannelOption;
import io.netty.handler.timeout.ReadTimeoutHandler;
import io.netty.handler.timeout.WriteTimeoutHandler;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.ClientResponse;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;
import reactor.netty.http.client.HttpClient;
import reactor.netty.resources.ConnectionProvider;
import reactor.netty.tcp.TcpClient;

import javax.annotation.PostConstruct;
import java.time.Duration;
import java.util.Map;

/**
 * http 通知通用实现
 */
@Service
public class HttpNotifyService {
    private static final Logger log = LogManager.getLogger();

    private WebClient webClient;

    @PostConstruct
    public void init() {
        ConnectionProvider provider = ConnectionProvider.builder("notify-http-connection-provider").maxConnections(30)
                .maxIdleTime(Duration.ofSeconds(30))
                .maxLifeTime(Duration.ofSeconds(30))
                .pendingAcquireTimeout(Duration.ofSeconds(30))
                .build();

        TcpClient tcpClient = TcpClient.create(provider)
                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 2000)
                .doOnConnected(conn -> conn
                        .addHandlerLast(new ReadTimeoutHandler(30))
                        .addHandlerLast(new WriteTimeoutHandler(10)));

        webClient = WebClient.builder().clientConnector(new ReactorClientHttpConnector(HttpClient.from(tcpClient))).build();
    }

    public Mono<NotifyResult> notifyForm(
            String notifyUrl,
            Map<String, String> formData
    ) {
        log.info("httpNotify[notifyUrl:{},formData:{}]", notifyUrl, formData);
        LinkedMultiValueMap<String, String> multiValueMap = new LinkedMultiValueMap<>();
        multiValueMap.setAll(formData);

        return webClient.post().uri(notifyUrl)
                .contentType(MediaType.APPLICATION_FORM_URLENCODED)
                .accept(MediaType.ALL)
                .body(BodyInserters.fromFormData(multiValueMap))
                .exchangeToMono(this::handlerResponse)
                .doOnSuccess(r -> {
                    log.info("httpNotifyResult[notifyUrl:{},formData:{},result:{}]", notifyUrl, formData, r);
                });
    }

    public Mono<NotifyResult> notifyRest(
            String notifyUrl,
            Map<String, String> restData
    ) {
        log.info("httpNotify[notifyUrl:{}, restData:{}]", notifyUrl, restData);

        return webClient.post().uri(notifyUrl)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.ALL)
                .body(Mono.just(restData.get(HttpNotifyService.class.getSimpleName())), String.class)
                .exchangeToMono(this::handlerResponse)
                .doOnSuccess(r -> {
                    log.info("httpNotifyResult[notifyUrl:{},restData:{},result:{}]", notifyUrl, restData, r);
                });
    }

    public Mono<NotifyResult> handlerResponse(ClientResponse clientResponse) {
        log.info("handlerResponse[clientResponse:{}]", clientResponse);
        return clientResponse.bodyToMono(String.class)
                .doOnSuccess(r -> {
                    log.info("handlerResponseText[text:{}]", r);
                })
                .map(result -> NotifyResult.builder()
                        .statusCode(clientResponse.statusCode().value())
                        .result(result)
                        .build()
                ).switchIfEmpty(Mono.fromCallable(() -> NotifyResult.builder()
                        .statusCode(clientResponse.statusCode().value())
                        .result(null)
                        .build()));
    }

}
