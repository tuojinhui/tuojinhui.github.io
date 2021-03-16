# 排序算法(SortingAlgorithm)
[[toc]]

```java
package com.common;

import lombok.AllArgsConstructor;
import lombok.Getter;


@AllArgsConstructor
public enum SortingAlgorithm {

    /**
     * 排序算法
     */
    SELECTION_SORT("SELECTION_SORT", "选择排序", false),
    EXCHANGE_SORT("EXCHANGE_SORT", "交换排序", false),
    BUBBLE_SORT("BUBBLE_SORT", "气泡排序", false),
    INSERTION_SORT("INSERTION_SORT", "插入排序", false),
    COCKTAIL_SORT("COCKTAIL_SORT", "鸡尾酒排序", false),
    SHELL_SORT("SHELL_SORT", "希尔排序", false),
    MERGE_SORT("MERGE_SORT", "合并排序", false),
    QUICK_SORT("QUICK_SORT", "快速排序", false),
    HEAP_SORT("HEAP_SORT", "堆排序", false),
    COUNTING_SORT("COUNTING_SORT", "计数排序", false),
    BUCKET_SORT("BUCKET_SORT", "桶排序", false),
    RADIX_SORT("RADIX_SORT", "基数排序", false),

    ;

    /**
     * 算法编码
     */
    @Getter
    private final String code;

    /**
     * 算法名称
     */
    @Getter
    private final String name;

    /**
     * 是否精通
     */
    @Getter
    private final boolean master;
    
}
```

### 选择排序
### 交换排序
### 气泡排序
### 插入排序
### 鸡尾酒排序
### 希尔排序
### 合并排序
### 快速排序
### 堆排序
### 计数排序
### 桶排序
### 基数排序
