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

# 小数处理

## 小数格式化(BigDecimal)
```java 

    public static String formatAmount(BigDecimal amount) {
        double doubleValue = amount.doubleValue();
        DecimalFormat decimalFormat = new DecimalFormat("000000000000");
        return decimalFormat.format(doubleValue);
    }

```


## 提供精确加法运算(BigDecimal)
```java 

    public static double add(Double v1, Double v2) {
        return new BigDecimal(Double.toString(Optional.ofNullable(v1).orElse(0D))).add(new BigDecimal(Double.toString(Optional.ofNullable(v2).orElse(0D)))).doubleValue();
    }

```

## 提供精确减法运算(BigDecimal)
```java 

    public static double subtract(Double v1, Double v2) {
        return new BigDecimal(Double.toString(Optional.ofNullable(v1).orElse(0D))).subtract(new BigDecimal(Double.toString(Optional.ofNullable(v2).orElse(0D)))).doubleValue();
    }

```

## 提供精确乘法运算(BigDecimal)
```java

    public static double multiply(Double v1, Double v2) {
        return new BigDecimal(Double.toString(Optional.ofNullable(v1).orElse(0D))).multiply(new BigDecimal(Double.toString(Optional.ofNullable(v2).orElse(0D)))).doubleValue();
    }

```

## 提供精确除法运算(BigDecimal)
```java 

    public static double divide(Double v1, Double v2) {
        return divide(v1, v2, 10);
    }

    public static double divide(Double v1, Double v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        return new BigDecimal(Double.toString(Optional.ofNullable(v1).orElse(0D))).divide(new BigDecimal(Double.toString(Optional.ofNullable(v2).orElse(0D))), scale, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

```

## 提供精确求和运算(BigDecimal)
```java

    public static void main(String[] args) {
        List<BigDecimal> bigDecimals = Arrays.asList(new BigDecimal("12.23"), new BigDecimal(Float.toString(23.43F)), new BigDecimal(Double.toString(23.45D)));
        BigDecimal total = bigDecimals.stream().reduce(BigDecimal.ZERO, BigDecimal::add);
        System.out.println(total);
    }

```

::: warning
无论是长整形，单精度浮点型，双精度浮点型的数据转换为BigDecimal时，
都建议先转换为对应的字符串，然后创建一个参数为字符串的BigDecimal实例。
:::
