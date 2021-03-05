# MAP转换为URL参数

```java 
package com.common;

import java.util.Comparator;
import java.util.Map;
import java.util.Objects;

/**
 * @author common
 */
public class MapToQueryParamsUtils {

    private final static String EMPTY = "";

    /**
     * Returns a comparator that compares {@link Map.Entry} by key using the given
     * {@link Comparator}.
     */
    private static final Comparator<Map.Entry<String, Object>> COMPARATOR =
            Map.Entry.comparingByKey(Comparator.comparing(Objects::toString, Comparator.naturalOrder()));

    /**
     * Mapping to queryParams.
     *
     * @param params
     * @return
     */
    public static String mappingToQueryParams(Map<String, Object> params) {
        if (params == null || params.isEmpty()) {
            return EMPTY;
        }
        StringBuilder sb = new StringBuilder();
        params.entrySet().stream().sorted(COMPARATOR).forEach(e -> combination(e, sb));
        return sb.deleteCharAt(0).toString();
    }

    /**
     * Combination entry.
     *
     * @param entry
     * @param sb
     */
    private static void combination(Map.Entry<String, Object> entry, StringBuilder sb) {
        sb.append("&").append(entry.getKey()).append("=").append(entry.getValue());
    }

}

```
