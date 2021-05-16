package com.billbear.ali.controller;

import org.apache.commons.lang3.StringUtils;

import java.util.*;


public class UrlParams {

    /**
     * Creates a new HashMap using data copied from a ResourceBundle.
     *
     * @param message the message bundle to convert, may not be null
     * @return the hashmap containing the data
     * @throws NullPointerException if the bundle is null
     */
    public Map<String, String> toMap(final Map<String, Object> message) {
        final Iterator<Map.Entry<String, Object>> iterator = message.entrySet().iterator();
        final Map<String, String> map = new HashMap<>(8);

        while (iterator.hasNext()) {
            Map.Entry<String, Object> next = iterator.next();
            final String key = Objects.toString(next.getKey());
            final String value = Objects.toString(next.getValue());
            map.put(key, value);
        }

        return map;
    }

    /**
     * custom variables convert
     *
     * @param customVariables
     * @return
     */
    private Map<String, String> customVariablesConvert(String customVariables) {
        Map<String, String> custom = new HashMap<>(8);
        Arrays.stream(customVariables.split("&")).forEach(str -> {
            String[] keyValue = StringUtils.split(str, "=");
            custom.put(keyValue[0], keyValue[1]);
        });
        return custom;
    }

}
