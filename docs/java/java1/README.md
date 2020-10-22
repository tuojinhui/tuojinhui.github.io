# 信息处理

## 手机号脱敏

```java

final static java.util.regex.Pattern PATTERN_PHONE = Pattern.compile("(\\d{3})\\d{4}(\\d{4})");

/**
 * 脱敏手机号
 */
public static String desensitizationPhone(String phone) {
    return Objects.isNull(phone) ? null : PATTERN_PHONE.matcher(phone).replaceAll("$1****$2");
}

```

## 身份证号脱敏
```java

final static java.util.regex.Pattern PATTERN_ID_CARD = Pattern.compile("(\\d{4})\\d{10}(\\w{4})");

/**
 * 脱敏身份证号
 */
public static String desensitizationIdCard(String idCard) {
    return Objects.isNull(idCard) ? null : PATTERN_ID_CARD.matcher(idCard).replaceAll("$1****$2");
}

```

::: warning
在使用正则表达式时，利用好其预编译功能，可以有效加快正则匹配速度。 
:::


