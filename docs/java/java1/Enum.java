package common;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;
import java.util.Objects;
import java.util.Optional;

/**
 * @author common
 */
@AllArgsConstructor
public enum UserTypeEnum {

    /**
     * 系统账户
     */
    SYSTEM_ACCOUNT("0", "系统账户"),

    /**
     * 客户管理员
     */
    CUSTOMER_ADMIN("1", "客户管理员"),

    /**
     * 供货商管理员
     */
    SUPPLIER_ADMIN("2", "供货商管理员"),

    ;

    @Getter
    private final String type;

    @Getter
    private final String name;

    /**
     * 根据type 获取enum
     */
    public static UserTypeEnum getUserTypeEnum(String type) {
        return Arrays.stream(UserTypeEnum.values()).filter(e -> Objects.equals(type, e.getType())).findFirst().orElse(null);
    }

    /**
     * 根据type 获取name
     */
    public static String getUserTypeName(String type) {
        return Optional.ofNullable(UserTypeEnum.getUserTypeEnum(type)).map(UserTypeEnum::getName).orElse(null);
    }

}
