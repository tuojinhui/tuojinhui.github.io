# 信息处理

## 手机号脱敏

```java

    final static java.util.regex.Pattern PATTERN_PHONE = Pattern.compile("(\\d{3})\\d{4}(\\d{4})");

    public static String desensitizationPhone(String phone) {
        return Objects.isNull(phone) ? null : PATTERN_PHONE.matcher(phone).replaceAll("$1****$2");
    }

```

## 身份证号脱敏
```java

    final static java.util.regex.Pattern PATTERN_ID_CARD = Pattern.compile("(\\d{4})\\d{10}(\\w{4})");

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

    DecimalFormat DECIMALFORMAT = new DecimalFormat("000000000000");

    public static String formatAmount(BigDecimal amount) {
        return DECIMALFORMAT.format(amount.doubleValue());
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
无论是长整形或者单精度浮点型亦或双精度浮点型的数据转换为BigDecimal时，
都建议先转换为对应的字符串，然后创建一个参数为字符串的BigDecimal实例。
:::

# 流排序

```java 

    public static void main(String[] args) {
        List<String> list = Arrays.asList("111", "222", "333", "333", "222", "666", null, "");
        list.stream().filter(Objects::nonNull).sorted(Comparator.comparing(String::toString, Comparator.nullsLast(Comparator.reverseOrder()))).forEach(System.out::println);
    }

```
::: warning
Comparator.comparing需要传两个参数， Function函数式接口 和 Comparator比较器，
Comparator比较器需要指定NULL在首部或末尾以及自然排序或逆序排序
:::

# 资源加载器

```java 

    final static org.springframework.core.io.ResourceLoader RESOURCE_LOADER = new DefaultResourceLoader(Object.class.getClassLoader());

    public static void main(String[] args) {
        RESOURCE_LOADER.getResource(org.springframework.util.ResourceUtils.CLASSPATH_URL_PREFIX + "");
    }

```

::: warning
使用Spring框架默认的资源加载器的优点，可以帮助我们加载类路径下的资源，强大之处在于即使资源被打包进jar中依然能够加载，
除此之外能够根据资源前缀自动加载相应的资源。eg: classpath:、file:、jar:、war:、等一系列资源
:::

# 路径匹配器

```java 

    final static org.springframework.util.PathMatcher MACHER = new org.springframework.util.AntPathMatcher();

    public static void main(String[] args) {
        MACHER.match("", "");
    }

```
