package com.common;

import org.owasp.validator.html.AntiSamy;
import org.owasp.validator.html.CleanResults;
import org.owasp.validator.html.Policy;
import org.springframework.core.io.DefaultResourceLoader;
import org.springframework.util.ObjectUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.web.util.HtmlUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.nio.charset.StandardCharsets;
import java.util.AbstractMap;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 *
 * @author common
 * @version 1.0
 * @desc 基于AntiSamy的防御
 */
public class XssHttpServletRequestWrapper extends HttpServletRequestWrapper {

    public XssHttpServletRequestWrapper(HttpServletRequest request) {
        super(request);
    }

    /**
     * @desc Clean Header
     */
    @Override
    public String getHeader(String name) {
        return Objects.isNull(super.getHeader(name)) ? null : this.clean(super.getHeader(name));
    }

    /**
     * @desc Clean Parameter Name
     */
    @Override
    public String getParameter(String name) {
        return Objects.isNull(super.getParameter(name)) ? null : this.clean(super.getParameter(name));
    }

    /**
     * @desc Clean Parameter Value
     */
    @Override
    public String[] getParameterValues(String name) {
        return Objects.isNull(super.getParameterValues(name)) ? null : Stream.of(super.getParameterValues(name)).map(this::clean).toArray(String[]::new);
    }

    /**
     * @desc Clean Parameter Map
     */
    @Override
    public Map<String, String[]> getParameterMap() {
        return Objects.isNull(super.getParameterMap()) ? null : super.getParameterMap()
                .entrySet().stream().map(entry -> new AbstractMap.SimpleEntry<>(entry.getKey(), Objects.isNull(entry.getValue()) ? null : Stream.of(entry.getValue()).map(this::clean).toArray(String[]::new)))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
    }

    /**
     * @desc AntiSamy Clean Data 数据清洗
     */
    private String clean(String taintedHtml) {

        if (ObjectUtils.isEmpty(taintedHtml)) {
            return taintedHtml;
        }

        try {

            AntiSamy antiSamy = XssHttpServletRequestWrapper.getAntiSamyInstance();
            Policy policy = XssHttpServletRequestWrapper.getPolicyInstance();

            final CleanResults cr = antiSamy.scan(taintedHtml, policy);

            return HtmlUtils.htmlEscape(cr.getCleanHTML(), StandardCharsets.UTF_8.name())
                    .replaceAll(antiSamy.scan("&nbsp;", policy).getCleanHTML(), "")
                    .replaceAll(antiSamy.scan("\"", policy).getCleanHTML(), "\"");
        } catch (Exception ignored) {

        }

        return taintedHtml;
    }


    private enum SingletonAntiSamy {

        /**
         * AntiSamy INSTANCE
         */
        INSTANCE;

        private final AntiSamy instance;

        SingletonAntiSamy() {
            instance = new AntiSamy();
        }

        private AntiSamy getInstance() {
            return instance;
        }
    }

    public static AntiSamy getAntiSamyInstance() {
        return SingletonAntiSamy.INSTANCE.getInstance();
    }


    private enum SingletonPolicy {

        /**
         * Policy INSTANCE
         */
        INSTANCE;

        private Policy instance = null;

        SingletonPolicy() {
            try {
                instance = Policy.getInstance(new DefaultResourceLoader(Object.class.getClassLoader())
                        .getResource(ResourceUtils.CLASSPATH_URL_PREFIX + "antisamy-ebay.xml").getInputStream());
            } catch (Exception ignored) {
            }
        }

        private Policy getInstance() {
            return instance;
        }
    }

    public static Policy getPolicyInstance() {
        return SingletonPolicy.INSTANCE.getInstance();
    }

}
