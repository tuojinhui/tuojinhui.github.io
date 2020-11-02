package com.common;

import com.alibaba.druid.spring.boot.autoconfigure.DruidDataSourceBuilder;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

/**
 * local 数据源
 *
 * @author common
 */
@Configuration
@MapperScan(basePackages = LocalDataSourceConfig.PACKAGE,
        sqlSessionFactoryRef = LocalDataSourceConfig.PREFIX + LocalDataSourceConfig.SQL_SESSION_FACTORY)
public class LocalDataSourceConfig {

    /**
     * DataSource 数据源前缀
     */
    static final String PREFIX = "local";
    /**
     * MAPPER 接口全限定名
     */
    static final String PACKAGE = "com.common.mapper.local";
    /**
     * MAPPER 文件相对路径
     */
    private static final String MAPPER_LOCATION = "classpath*:mapper/local/*.xml";
    /**
     * 固定：数据源常量
     */
    private final String DATASOURCE = "datasource";
    /**
     * 固定：事物管理器常量
     */
    private final String TRANSACTION_MANAGER = "TransactionManager";
    /**
     * 固定：SQL会话工厂常量
     */
    final static String SQL_SESSION_FACTORY = "SqlSessionFactory";

    /**
     * 创建数据源实例
     */
    @Primary
    @Bean(name = PREFIX + DATASOURCE)
    @Qualifier(PREFIX + DATASOURCE)
    @ConfigurationProperties(prefix = "spring.datasource." + PREFIX + DATASOURCE)
    public DataSource getDataSource() {
        return DruidDataSourceBuilder.create().build();
    }

    /**
     * 创建该数据源事务管理器实例
     */
    @Primary
    @Bean(name = PREFIX + TRANSACTION_MANAGER)
    public DataSourceTransactionManager getTransactionManager() {
        return new DataSourceTransactionManager(getDataSource());
    }

    /**
     * 创建MyBatis SQL会话工厂实例
     */
    @Primary
    @Bean(name = PREFIX + SQL_SESSION_FACTORY)
    public SqlSessionFactory getSqlSessionFactory(
            @Qualifier(PREFIX + DATASOURCE) DataSource dataSource) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver()
                .getResources(LocalDataSourceConfig.MAPPER_LOCATION));
        return sessionFactory.getObject();
    }

}
