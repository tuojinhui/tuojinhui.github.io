package com.common;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.http.server.reactive.ServerHttpRequest;
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

    public String resolve(ServerHttpRequest request) {
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

    private static String resolveFromAuthorizationHeader(ServerHttpRequest request) {
        String authorization = request.getHeaders().getFirst("Authorization");
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

    private static String resolveFromRequestParameters(ServerHttpRequest request) {
        List<String> values = request.getQueryParams().get("access_token");
        if (values != null && values.size() != 0) {
            if (values.size() == 1) {
                return values.get(0);
            } else {
                throw new RuntimeException("Found multiple bearer tokens in the request");
            }
        } else {
            return null;
        }
    }

    private boolean isParameterTokenSupportedForRequest(ServerHttpRequest request) {
        return this.allowFormEncodedBodyParameter && "POST".equals(request.getMethod()) || this.allowUriQueryParameter && "GET".equals(request.getMethod());
    }
}
