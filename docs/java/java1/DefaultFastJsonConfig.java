package common;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.parser.ParserConfig;
import com.alibaba.fastjson.parser.deserializer.Jdk8DateCodec;
import com.alibaba.fastjson.serializer.SerializeConfig;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.PostConstruct;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.List;

/**
 * @author common
 */
@Configuration
public class DefaultFastJsonConfig implements WebMvcConfigurer {

    @PostConstruct
    public void init() {
        /**
         * 有关Java8的时间处理按需加载修改为立即加载，设置序列化器
         */
        SerializeConfig serializeConfig = SerializeConfig.getGlobalInstance();
        serializeConfig.put(java.time.LocalDateTime.class, Jdk8DateCodec.instance);
        serializeConfig.put(java.time.LocalDate.class, Jdk8DateCodec.instance);
        serializeConfig.put(java.time.LocalTime.class, Jdk8DateCodec.instance);
        /**
         * 有关Java8的时间处理按需加载修改为立即加载，设置反序列化器
         */
        ParserConfig parserConfig = ParserConfig.getGlobalInstance();
        parserConfig.putDeserializer(java.time.LocalDateTime.class, Jdk8DateCodec.instance);
        parserConfig.putDeserializer(java.time.LocalDate.class, Jdk8DateCodec.instance);
        parserConfig.putDeserializer(java.time.LocalTime.class, Jdk8DateCodec.instance);
    }

    public HttpMessageConverter<String> stringConverter() {
        return new StringHttpMessageConverter(StandardCharsets.UTF_8);
    }

    public HttpMessageConverter<Object> fastJsonConverter() {
        FastJsonHttpMessageConverter fastJsonConverter = new FastJsonHttpMessageConverter();
        SerializerFeature[] serializerFeatures = {
                SerializerFeature.WriteMapNullValue,
                SerializerFeature.WriteNullStringAsEmpty,
                SerializerFeature.WriteNullNumberAsZero,
                SerializerFeature.WriteNullListAsEmpty,
                SerializerFeature.WriteNullBooleanAsFalse,
                SerializerFeature.DisableCircularReferenceDetect
        };
        FastJsonConfig fastJsonConfig = new FastJsonConfig();
        fastJsonConfig.setSerializerFeatures(serializerFeatures);
        fastJsonConfig.setCharset(StandardCharsets.UTF_8);
        fastJsonConfig.setDateFormat(JSON.DEFFAULT_DATE_FORMAT);
        fastJsonConverter.setSupportedMediaTypes(Collections.singletonList(MediaType.APPLICATION_JSON_UTF8));
        fastJsonConverter.setFastJsonConfig(fastJsonConfig);
        return fastJsonConverter;
    }

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
        converters.clear();
        converters.add(stringConverter());
        converters.add(fastJsonConverter());
    }

}
