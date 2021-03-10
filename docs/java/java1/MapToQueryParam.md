# MAP转换为URL参数
[[toc]]


### 转换源码
```java 
package com.common;

import java.util.Comparator;
import java.util.Map;
import java.util.Objects;

/**
 * @author common
 */
public class CombinationParamsUtils {

    private final static String EMPTY = "";

    /**
     * Returns a comparator that compares {@link Map.Entry} by key using the given
     * {@link Comparator}.
     */
    private static final Comparator<Map.Entry<String, Object>> KEY_NATURAL_COMPARATOR =
            Map.Entry.comparingByKey(Comparator.comparing(Objects::toString, Comparator.naturalOrder()));

    private static final Comparator<Map.Entry<String, Object>> KEY_REVERSE_COMPARATOR =
            Map.Entry.comparingByKey(Comparator.comparing(Objects::toString, Comparator.reverseOrder()));

    private static final Comparator<Map.Entry<String, Object>> VALUE_NATURAL_COMPARATOR =
            Map.Entry.comparingByValue(Comparator.comparing(Objects::toString, Comparator.naturalOrder()));

    private static final Comparator<Map.Entry<String, Object>> VALUE_REVERSE_COMPARATOR =
            Map.Entry.comparingByValue(Comparator.comparing(Objects::toString, Comparator.reverseOrder()));

    private static final Comparator<Map.Entry<String, Object>> NO_ORDER_COMPARATOR = (o1, o2) -> 0;

    /**
     * Mapping to queryParams.
     *
     * @param params
     * @return
     */
    public static String mappingToQueryParams(Map<String, Object> params, SortedInfo sortedInfo) {
        if (params == null || params.isEmpty() || sortedInfo == null) {
            return EMPTY;
        }
        StringBuilder sb = new StringBuilder();
        params.entrySet().stream().sorted(sortedInfo.comparator).forEach(e -> combination(e, sb));
        return sb.deleteCharAt(0).toString();
    }

    /**
     * Combination entry.
     *
     * @param entry
     * @param sb
     */
    private static void combination(Map.Entry<String, Object> entry, StringBuilder sb) {
        if (entry.getValue() != null && String.valueOf(entry.getValue()).trim().length() != 0) {
            sb.append("&").append(entry.getKey()).append("=").append(entry.getValue());
        }
    }

    public enum SortedInfo {

        /**
         * key升序
         */
        KEY_ASC(KEY_NATURAL_COMPARATOR),

        /**
         * key降序
         */
        KEY_DESC(KEY_REVERSE_COMPARATOR),

        /**
         * value升序
         */
        VALUE_ASC(VALUE_NATURAL_COMPARATOR),

        /**
         * value降序
         */
        VALUE_DESC(VALUE_REVERSE_COMPARATOR),

        /**
         * 加签时key顺序固定，请使用有序Map
         *
         * @see java.util.LinkedHashMap
         */
        NO_ORDER(NO_ORDER_COMPARATOR),

        ;

        private final Comparator<Map.Entry<String, Object>> comparator;

        SortedInfo(Comparator<Map.Entry<String, Object>> comparator) {
            this.comparator = comparator;
        }
    }

}
```

### 构建测试
```java 
package com.common;

import java.util.HashMap;
import java.util.Map;

public class CombinationParamsUtilsTest {

    public static void main(String[] args) {
        Map<String, Object> params = new HashMap<>(16);
        params.put("1", "A");
        params.put("4", "D");
        params.put("7", "Z");
        params.put("8", "S");
        params.put("6", "M");

        System.out.println(CombinationParamsUtils.mappingToQueryParams(params, CombinationParamsUtils.SortedInfo.KEY_ASC));
        System.out.println(CombinationParamsUtils.mappingToQueryParams(params, CombinationParamsUtils.SortedInfo.KEY_DESC));
        System.out.println(CombinationParamsUtils.mappingToQueryParams(params, CombinationParamsUtils.SortedInfo.VALUE_ASC));
        System.out.println(CombinationParamsUtils.mappingToQueryParams(params, CombinationParamsUtils.SortedInfo.VALUE_DESC));
        System.out.println(CombinationParamsUtils.mappingToQueryParams(params, CombinationParamsUtils.SortedInfo.NO_ORDER));
    }

}
```

### 测试结果
```text

1=A&4=D&6=M&7=Z&8=S
8=S&7=Z&6=M&4=D&1=A
1=A&4=D&6=M&8=S&7=Z
7=Z&8=S&6=M&4=D&1=A
1=A&4=D&6=M&7=Z&8=S

```
