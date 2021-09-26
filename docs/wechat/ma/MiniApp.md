# 微信小程序
[[toc]]

### urlscheme.generate [urlscheme.generate](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/url-scheme/urlscheme.generate.html)
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