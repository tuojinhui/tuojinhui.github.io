package com.common;

import java.math.BigDecimal;
import java.util.Optional;

/**
 * 浮点型精确计算
 *
 * @author common
 */
public class BigDecimals {

    /**
     * 提供精确的加法运算
     */
    public static double add(Double v1, Double v2) {
        return new BigDecimal(Double.toString(Optional.ofNullable(v1).orElse(0D))).add(new BigDecimal(Double.toString(Optional.ofNullable(v2).orElse(0D)))).doubleValue();
    }

    /**
     * 提供精确的减法运算
     */
    public static double subtract(Double v1, Double v2) {
        return new BigDecimal(Double.toString(Optional.ofNullable(v1).orElse(0D))).subtract(new BigDecimal(Double.toString(Optional.ofNullable(v2).orElse(0D)))).doubleValue();
    }

    /**
     * 提供精确的乘法运算
     */
    public static double multiply(Double v1, Double v2) {
        return new BigDecimal(Double.toString(Optional.ofNullable(v1).orElse(0D))).multiply(new BigDecimal(Double.toString(Optional.ofNullable(v2).orElse(0D)))).doubleValue();
    }

    /**
     * 提供精确的除法运算
     */
    public static double divide(Double v1, Double v2) {
        return divide(v1, v2, 10);
    }

    public static double divide(Double v1, Double v2, int scale) {
        if (scale < 0) {
            throw new IllegalArgumentException("The scale must be a positive integer or zero");
        }
        return new BigDecimal(Double.toString(Optional.ofNullable(v1).orElse(0D))).divide(new BigDecimal(Double.toString(Optional.ofNullable(v2).orElse(0D))), scale, BigDecimal.ROUND_HALF_UP).doubleValue();
    }

}
