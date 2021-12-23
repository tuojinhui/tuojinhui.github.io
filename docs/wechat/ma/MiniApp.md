# 微信小程序

[[toc]]

## 微信小程序生成 URL Scheme 

[urlscheme.generate](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html)

```java

  @Resource
    private WxMaService wxMaService;

    public String genSchemeUrl(String code, String state, String appId) {
        try {
            log.debug("生成小程序RUL参数, code:{}, state:{}, appId:{}", code, state, appId);
            WxMaService wxMaService = this.wxMaService.switchoverTo(appId);
            final WxMaSchemeService wxMaSchemeService = wxMaService.getWxMaSchemeService();
            WxMaGenerateSchemeRequest wxMaGenerateSchemeRequest = WxMaGenerateSchemeRequest.newBuilder().build();
            WxMaGenerateSchemeRequest.JumpWxa jumpWxa = WxMaGenerateSchemeRequest.JumpWxa.newBuilder().build();
            jumpWxa.setPath("pages/index/index");
            jumpWxa.setQuery(String.format("code=%s&state=%s", code, state));
            wxMaGenerateSchemeRequest.setIsExpire(true);
            wxMaGenerateSchemeRequest.setExpireTime(LocalDateTime.now().plusMonths(1L).toEpochSecond(ZoneOffset.ofHours(8)));
            wxMaGenerateSchemeRequest.setJumpWxa(jumpWxa);
            return wxMaSchemeService.generate(wxMaGenerateSchemeRequest);
        } catch (WxErrorException e) {
            log.error("生成小程序RUL错误, 异常信息={}", e.getMessage(), e);
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

::: warning

  跳转页面的动态参数只能携带一个且只能是q，携带其它参数会认为是 open.weixin.qq.com链接的参数，故而跳转携带无效。解决办法：携带q参数，参数值json序列化处理

:::

```
