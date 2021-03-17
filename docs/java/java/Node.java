package common;

import com.alibaba.fastjson.annotation.JSONField;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
@Schema(description = "菜单实体")
public class Node {

    @Schema(description = "子节点数据")
    @JSONField(ordinal = Integer.MAX_VALUE)
    private List<Node> children;
    @Schema(description = "菜单ID")
    private String id;
    @Schema(description = "父级ID")
    private String parentId;
    @Schema(description = "名称")
    private String name;
    @Schema(description = "类型(0目录 1菜单 2按钮)")
    private String type;
    @Schema(description = "排序")
    private String order;
    @Schema(description = "前端路由地址")
    private String href;
    @Schema(description = "后端接口地址")
    private String url;
    @Schema(description = "打开方式")
    private String target;
    @Schema(description = "图标")
    private String icon;
    @Schema(description = "权限标识")
    private String perms;
    @Schema(description = "菜单导航(0不显示 1显示)")
    private String visible;
    @Schema(description = "菜单状态(0删除 1正常 2停用)")
    private String status;
    @Schema(description = "备注")
    private String remarks;
    @Schema(description = "是否根节点")
    private Boolean rootNode;
    @Schema(description = "是否叶子节点")
    private Boolean leafNode;

    public void setChildren(List<Node> children) {
        this.children = children;
        this.rootNode = String.valueOf(0).equals(parentId);
        this.leafNode = children == null || children.size() == 0;
    }

}
