# 过滤器(Filter)
[[toc]]

## complexRequestsFilter
```java 

    /**
     * 创建 complexRequestsFilter
     */
    @Bean
    public FilterRegistrationBean<Filter> complexRequestsFilterRegistration() {
        FilterRegistrationBean<Filter> registration = new FilterRegistrationBean<>();
        registration.setDispatcherTypes(DispatcherType.REQUEST);
        registration.setFilter((req, res, chain) -> {
            if (!Objects.equals(RequestMethod.OPTIONS.toString().toLowerCase(), ((HttpServletRequest) req).getMethod().toLowerCase())) {
                chain.doFilter(req, res);
            }
        });
        registration.addUrlPatterns("/*");
        registration.setName(Thread.currentThread().getStackTrace()[1].getMethodName());
        registration.setOrder(Integer.MIN_VALUE + 1);
        return registration;
    }

```

## xssFilter 
[XssHttpServletRequestWrapper](./XssHttpServletRequestWrapper.md) <Badge text="XSS"/>
```java 

    /**
     * 创建 xssFilter
     */
    @Bean
    public FilterRegistrationBean<Filter> xssFilterRegistration() {
        FilterRegistrationBean<Filter> registration = new FilterRegistrationBean<>();
        registration.setDispatcherTypes(DispatcherType.REQUEST);
        registration.setFilter((req, res, chain) -> {
            HttpServletRequest request = (HttpServletRequest) req;
            chain.doFilter(new XssHttpServletRequestWrapper(request), res);
        });
        registration.addUrlPatterns("/*");
        registration.setName(Thread.currentThread().getStackTrace()[1].getMethodName());
        registration.setOrder(Integer.MIN_VALUE + 2);
        return registration;
    }

```

## characterEncodingFilter
```java 

  /**
     * 创建 characterEncodingFilter
     */
    @Bean
    public FilterRegistrationBean<Filter> characterEncodingFilterRegistration() {
        FilterRegistrationBean<Filter> registration = new FilterRegistrationBean<>();
        registration.setDispatcherTypes(DispatcherType.REQUEST);
        registration.setFilter((req, res, chain) -> {
            HttpServletRequest request = (HttpServletRequest) req;
            HttpServletResponse response = (HttpServletResponse) res;
            request.setCharacterEncoding(StandardCharsets.UTF_8.name());
            response.setCharacterEncoding(StandardCharsets.UTF_8.name());
            response.setHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS, String.valueOf(true));
            response.setHeader(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, request.getHeader(HttpHeaders.ORIGIN));
            chain.doFilter(request, response);
        });
        registration.addUrlPatterns("/*");
        registration.setName(Thread.currentThread().getStackTrace()[1].getMethodName());
        registration.setOrder(Integer.MIN_VALUE + 3);
        return registration;
    }

```

## corsFilter
```java 

    /**
     * 创建 corsFilter
     */
    @Bean
    public FilterRegistrationBean<Filter> corsFilterRegistration() {
        FilterRegistrationBean<Filter> registration = new FilterRegistrationBean<>();
        registration.setDispatcherTypes(DispatcherType.REQUEST);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowCredentials(Boolean.TRUE);
        corsConfiguration.setAllowedOrigins(Collections.singletonList(CorsConfiguration.ALL));
        corsConfiguration.setAllowedHeaders(Collections.singletonList(CorsConfiguration.ALL));
        corsConfiguration.setAllowedMethods(Collections.singletonList(CorsConfiguration.ALL));
        source.registerCorsConfiguration("/**", corsConfiguration);
        CorsFilter corsFilter = new CorsFilter(source);
        registration.setFilter(corsFilter);
        registration.addUrlPatterns("/*");
        registration.setName(Thread.currentThread().getStackTrace()[1].getMethodName());
        registration.setOrder(Integer.MIN_VALUE + 4);
        return registration;
    }

```
