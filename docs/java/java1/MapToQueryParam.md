# MAP转换为URL参数

```java 
package com.common;

import java.util.Comparator;
import java.util.Map;

/**
 * @author common
 */
public class MapToQueryParamsUtils {

    /**
     * Returns a comparator that compares {@link Map.Entry} by key using the given
     * {@link Comparator}.
     */
    private static final Comparator<Map.Entry<String, Object>> ENTRY_COMPARATOR =
            Map.Entry.comparingByKey(Comparator.comparing(String::valueOf, Comparator.naturalOrder()));

    /**
     * Mapping to queryParams.
     *
     * @param params
     * @return
     */
    public static String mappingToQueryParams(Map<String, Object> params) {
        StringBuilder sb = new StringBuilder();
        Optional.ofNullable(params).orElseGet(Collections::emptyMap).entrySet()
                .stream().sorted(ENTRY_COMPARATOR).forEach(entry -> combination(entry, sb));
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
