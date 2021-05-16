package com.common;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.servlet.http.HttpServletRequest;

import org.springframework.util.StringUtils;

/**
 * @author common
 * Bearer令牌解析器
 * @see <a href="https://tools.ietf.org/html/rfc6750#section-3.1"></a>
 */
public final class BearerTokenResolver {
    private static final Pattern authorizationPattern = Pattern.compile("^Bearer (?<token>[a-zA-Z0-9-._~+/]+)=*$", Pattern.CASE_INSENSITIVE);
    private boolean allowFormEncodedBodyParameter = false;
    private boolean allowUriQueryParameter = false;

    public BearerTokenResolver() {
    }

    public String resolve(HttpServletRequest request) {
        String authorizationHeaderToken = resolveFromAuthorizationHeader(request);
        String parameterToken = resolveFromRequestParameters(request);
        if (authorizationHeaderToken != null) {
            if (parameterToken != null) {
                throw new RuntimeException("Found multiple bearer tokens in the request");
            } else {
                return authorizationHeaderToken;
            }
        } else {
            return parameterToken != null && this.isParameterTokenSupportedForRequest(request) ? parameterToken : null;
        }
    }

    public void setAllowFormEncodedBodyParameter(boolean allowFormEncodedBodyParameter) {
        this.allowFormEncodedBodyParameter = allowFormEncodedBodyParameter;
    }

    public void setAllowUriQueryParameter(boolean allowUriQueryParameter) {
        this.allowUriQueryParameter = allowUriQueryParameter;
    }

    private static String resolveFromAuthorizationHeader(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        if (StringUtils.startsWithIgnoreCase(authorization, "bearer")) {
            Matcher matcher = authorizationPattern.matcher(authorization);
            if (!matcher.matches()) {
                throw new RuntimeException("Bearer token is malformed");
            } else {
                return matcher.group("token");
            }
        } else {
            return null;
        }
    }

    private static String resolveFromRequestParameters(HttpServletRequest request) {
        String[] values = request.getParameterValues("access_token");
        if (values != null && values.length != 0) {
            if (values.length == 1) {
                return values[0];
            } else {
                throw new RuntimeException("Found multiple bearer tokens in the request");
            }
        } else {
            return null;
        }
    }

    private boolean isParameterTokenSupportedForRequest(HttpServletRequest request) {
        return this.allowFormEncodedBodyParameter && "POST".equals(request.getMethod()) || this.allowUriQueryParameter && "GET".equals(request.getMethod());
    }
}
