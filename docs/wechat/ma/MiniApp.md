# 微信小程序

[[toc]]

## 微信小程序获取openId,nickName,avatarUrl

```java 

package com.common;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * 功能描述：
 *
 * @author 拓金辉
 * @version 1.0
 * @date 2021-10-26 15:03:01
 */
@Getter
@Setter
@Schema(description = "小程序登录")
public class WechatMaLoginRequest {

    @Schema(description = "小程序 [wx.login] 返回的授权code码，后端用于换取sessionKey和openId等信息")
    private String code;

    @Valid
    @NotNull
    @Schema(description = "小程序登录getUserInfo")
    private GetUserInfo getUserInfo;

    @Valid
    @NotNull
    @Schema(description = "小程序登录getPhoneNumber")
    private GetPhoneNumber getPhoneNumber;

    @Getter
    @Setter
    @Schema(description = "小程序登录getUserInfo")
    public static class GetUserInfo {

        @NotBlank
        @Schema(description = "小程序 [open-type='getUserInfo'] 返回的消息密文")
        private String encryptedData;

        @NotBlank
        @Schema(description = "小程序 [open-type='getUserInfo'] 返回的加密算法的初始向量")
        private String iv;
        
    }

    @Getter
    @Setter
    @Schema(description = "小程序登录getPhoneNumber")
    public static class GetPhoneNumber {

        @NotBlank
        @Schema(description = "小程序 [open-type='getPhoneNumber'] 返回的消息密文")
        private String encryptedData;

        @NotBlank
        @Schema(description = "小程序 [open-type='getPhoneNumber'] 返回的加密算法的初始向量")
        private String iv;
        
    }

}

```

```java 

        final String code = request.getCode();
        final WechatMaLoginRequest.GetUserInfo getUserInfo = request.getGetUserInfo();
        final WechatMaLoginRequest.GetPhoneNumber getPhoneNumber = request.getGetPhoneNumber();

        final WxMaJscode2SessionResult wxMaJscode2SessionResult = wxMaService.jsCode2SessionInfo(code);
        final String sessionKey = wxMaJscode2SessionResult.getSessionKey();
        final WxMaUserService userService = wxMaService.getUserService();
        final WxMaUserInfo wxMaUserInfo = userService.getUserInfo(sessionKey, getUserInfo.getEncryptedData(), getUserInfo.getIv());
        final WxMaPhoneNumberInfo wxMaPhoneNumberInfo = userService.getPhoneNoInfo(sessionKey, getPhoneNumber.getEncryptedData(), getPhoneNumber.getIv());


```

## 微信小程序生成 URL Scheme 

[urlscheme.generate](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html)

```java

    // "pages/index/index"

    @Resource
    private WxMaService wxMaService;

    public String genSchemeUrl(String appId, String path, String query) {
        try {
            log.debug("生成小程序URL Scheme, appId:{}, path:{}, query:{}", appId, path, query);
            WxMaService wxMaService = this.wxMaService.switchoverTo(appId);
            final WxMaSchemeService wxMaSchemeService = wxMaService.getWxMaSchemeService();
            WxMaGenerateSchemeRequest wxMaGenerateSchemeRequest = WxMaGenerateSchemeRequest.newBuilder().build();
            WxMaGenerateSchemeRequest.JumpWxa jumpWxa = WxMaGenerateSchemeRequest.JumpWxa.newBuilder().build();
            jumpWxa.setPath(path);
            jumpWxa.setQuery(query);
            wxMaGenerateSchemeRequest.setIsExpire(true);
            wxMaGenerateSchemeRequest.setExpireTime(LocalDateTime.now().plusMonths(1L).toEpochSecond(ZoneOffset.ofHours(8)));
            wxMaGenerateSchemeRequest.setJumpWxa(jumpWxa);
            return wxMaSchemeService.generate(wxMaGenerateSchemeRequest);
        } catch (WxErrorException e) {
            log.error("生成小程序URL Scheme错误, 异常信息={}", e.getMessage(), e);
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        } finally {
            WxMaConfigHolder.remove();
        }
    }

```

## 微信小程序扫普通链接二维码打开体验版小程序

```java 

    /**
     * 扫描二维码到体验版
     */
    public static final String SCAN_QR_CODE_TRIAL = "https://open.weixin.qq.com/sns/getexpappinfo?appid=%s&path=%s.html?q=%s";

```

::: warning

跳转页面的动态参数只能携带一个且只能是q，携带其它参数会认为是 open.weixin.qq.com链接的参数，故而跳转携带无效。解决办法：携带q参数，参数值进行url编码并json序列化处理

:::

## 微信小程序扫码绑定openId
```java  

package com.common;

import com.google.common.collect.ImmutableMap;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * 功能描述：二维码Session会话
 *
 * @author 拓金辉
 * @version 1.0
 * @date 2021-11-01 14:48:07
 */

@Setter
@Accessors(chain = true)
public class Session {

    private ImmutableMap<String, String> immutable = ImmutableMap.of(UN_SCAN, "待扫码", SCANNED, "已扫码", CONFIRMED, "已确认", CANCELLED, "已取消", EXPIRED, "已过期");
    public static final String QR_CODE_SESSION_ID = "qrCodeSessionId";
    public static final String QR_CODE_URL = "qrCodeUrl";
    public static final String UN_SCAN = "1";
    public static final String SCANNED = "2";
    public static final String CONFIRMED = "3";
    public static final String CANCELLED = "4";
    public static final String EXPIRED = "5";

    @Getter
    @Schema(description = "二维码会话码")
    private String code;

    @Getter
    @Schema(description = "二维码会话描述")
    private String message;

    @Getter
    @Schema(description = "二维码会话数据集")
    private SessionData data;

    /**
     * 方法描述：每次二维码会话码变更调用此方法
     *
     * @param code 会话码
     * @author 拓金辉
     * @date 2021-11-22 15:10:38
     */
    public Session update(String code) {
        if (!immutable.containsKey(code)) {
            throw new IllegalArgumentException(String.format("非法的二维码code：%s", code));
        }
        return this.setCode(code).setMessage(immutable.get(code));
    }

    /**
     * 功能描述：会话数据存储
     *
     * @author 拓金辉
     * @date 2021-11-22 15:10:38
     */
    @Getter
    @Setter
    @Accessors(chain = true)
    public static class SessionData {
        private String qrCodeSessionId;
        private String qrCodeUrl;
        private String nickName;
        private String avatarUrl;
        private String openId;
        private String unionId;

        // 扩展数据存储
        private Object extend;
    }

}

```

## 微信小程序消息订阅

```java 

   /**
     * 方法描述：发送订阅消息
     * <a href="https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html"></a>
     *
     * @param appId            微信小程序appId
     * @param toUSer           接收者（用户）的 openid
     * @param templateId       所需下发的订阅模板id
     * @param page             点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。
     * @param miniProgramState 跳转小程序类型：developer为开发版；trial为体验版；formal为正式版；默认为正式版
     * @param data             模板内容，格式形如 { "key1": { "value": any }, "key2": { "value": any } }
     * @return java.lang.Boolean
     * @author 拓金辉
     * @date 2021-08-11 14:09:20
     */
    public Boolean sendSubscribeMsg(String appId, String toUSer, String templateId, String page, String miniProgramState, List<WxMaSubscribeMessage.MsgData> data) throws WxErrorException {
        try {
            final WxMaService wxMaService = this.wxMaService.switchoverTo(appId);
            final WxMaMsgService msgService = wxMaService.getMsgService();
            WxMaSubscribeMessage wxMaSubscribeMessage = new WxMaSubscribeMessage();
            wxMaSubscribeMessage.setToUser(toUSer);
            wxMaSubscribeMessage.setTemplateId(templateId);
            wxMaSubscribeMessage.setPage(page);
            wxMaSubscribeMessage.setMiniprogramState(miniProgramState);
            wxMaSubscribeMessage.setLang(WxMaConstants.MiniProgramLang.ZH_CN);
            wxMaSubscribeMessage.setData(new ArrayList<>());
            wxMaSubscribeMessage.getData().addAll(data);
            msgService.sendSubscribeMsg(wxMaSubscribeMessage);
            return Boolean.TRUE;
        } finally {
            WxMaConfigHolder.remove();
        }
    }

```

## 微信小程序支付

    微信小程序支付