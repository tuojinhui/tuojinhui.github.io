# 抽奖算法
[[toc]]

### 根据权重随机抽奖

```java 

package com.common;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Predicate;

/**
 * 功能描述：
 *
 * @author 拓金辉
 * @version 1.0
 */
public class AwardsUtil {

    public static void main(String[] args) {
        for (int i = 0; i < 200000; i++) {
            System.out.println(randomOneAward(null));
        }
    }

    /**
     * 返回中奖奖品（可能包含谢谢参与）。谢谢参与判定方式，#Stringutils.isBlank(goodsId) && Objects.equals(goodsName, "谢谢惠顾");
     */
    private static Award randomOneAward(String actId) {
        Award award0 = Award.builder().id("1387333967586930690").weight(100).name("谢谢惠顾").build();
        Award award1 = Award.builder().id("1387333967586930691").weight(10).name("一等奖").build();
        Award award2 = Award.builder().id("1387333967586930692").weight(20).name("二等奖").build();
        Award award3 = Award.builder().id("1387333967586930693").weight(30).name("三等奖").build();
        Award award4 = Award.builder().id("1387333967586930694").weight(40).name("四等奖").build();

        final List<Award> awards = Arrays.asList(award0, award1, award2, award3, award4);
        final LinkedList<Integer> collect = new LinkedList<>();
        awards.stream().map(Award::getWeight).map(new AtomicInteger()::addAndGet).forEach(collect::add);
        int random = ThreadLocalRandom.current().nextInt(collect.getLast());
        Predicate<Integer> predicate = current -> Objects.equals(current, Math.max(current, random));
        int findFirst = collect.stream().filter(predicate).findFirst().orElse(Integer.MAX_VALUE);
        return awards.get(collect.indexOf(findFirst));
    }

    @Data
    @Builder
    @ToString
    public static class Award {
        /**
         * 奖品id
         */
        private String id;
        /**
         * 名称
         */
        private String name;
        /**
         * 奖品类型
         */
        private String type;
        /**
         * 奖品序号
         */
        private Integer sortBy;
        /**
         * 奖品权重
         */
        private Integer weight;
    }

}

```
