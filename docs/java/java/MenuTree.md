# 菜单树(MenuTree)

[[toc]]

### 菜单节点

<<< @/docs/java/java/Node.java

### 构建测试

<<< @/docs/java/java/NodeTest.java

### 测试结果

```js

[
    {
        "id": "1",
        "leafNode": false,
        "name": "权限管理",
        "parentId": "0",
        "rootNode": true,
        "children": [
            {
                "id": "2",
                "leafNode": true,
                "name": "用户管理",
                "parentId": "1",
                "rootNode": false,
                "children": []
            },
            {
                "id": "3",
                "leafNode": true,
                "name": "角色管理",
                "parentId": "1",
                "rootNode": false,
                "children": []
            },
            {
                "id": "4",
                "leafNode": true,
                "name": "组织架构管理",
                "parentId": "1",
                "rootNode": false,
                "children": []
            },
            {
                "id": "5",
                "leafNode": true,
                "name": "功能菜单",
                "parentId": "1",
                "rootNode": false,
                "children": []
            }
        ]
    },
    {
        "id": "6",
        "leafNode": false,
        "name": "库存管理",
        "parentId": "0",
        "rootNode": true,
        "children": [
            {
                "id": "7",
                "leafNode": true,
                "name": "库存发布",
                "parentId": "6",
                "rootNode": false,
                "children": []
            },
            {
                "id": "8",
                "leafNode": true,
                "name": "库存出售",
                "parentId": "6",
                "rootNode": false,
                "children": []
            },
            {
                "id": "9",
                "leafNode": true,
                "name": "库存审核",
                "parentId": "6",
                "rootNode": false,
                "children": []
            }
        ]
    },
    {
        "id": "10",
        "leafNode": false,
        "name": "客户管理",
        "parentId": "0",
        "rootNode": true,
        "children": [
            {
                "id": "11",
                "leafNode": true,
                "name": "客户列表",
                "parentId": "10",
                "rootNode": false,
                "children": []
            },
            {
                "id": "12",
                "leafNode": true,
                "name": "客户商品列表",
                "parentId": "10",
                "rootNode": false,
                "children": []
            }
        ]
    },
    {
        "id": "13",
        "leafNode": true,
        "name": "供货商管理",
        "parentId": "0",
        "rootNode": true,
        "children": []
    }
]

```

### 层序遍历

```java 

    @Test
    public void executelevelorder() {
        Node root = new Node();
        root.setChildren(nodes);
        List<String> names = levelorder(root);
        System.out.println(names);
    }

    /**
     * 遍历获取菜单名字
     *
     * @param root
     * @return
     */
    public List<String> levelorder(Node root) {
        if (root == null) {
            return Collections.emptyList();
        }
        List<String> result = new ArrayList<>(10);
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);
        while (!queue.isEmpty()) {
            Optional.ofNullable(queue.poll().getChildren()).orElseGet(Collections::emptyList).stream().map(Node::getName).forEach(result::add);
        }

        return result;
    }

```

###    

TreeNode

```java 

package com.common;

import com.alibaba.fastjson.annotation.JSONField;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

/**
 * @author tjh
 * @version 1.0
 * <p>
 * 树节点
 */
public abstract class TreeNode {

    /**
     * 当前节点id
     */
    public abstract String getId();

    /**
     * 父级节点id
     */
    public abstract String getParentId();

    /**
     * 是否根节点
     */
    @Getter
    @JSONField(ordinal = Integer.MAX_VALUE - 3)
    private Boolean rootNode;

    /**
     * 是否叶子节点
     **/
    @Getter
    @JSONField(ordinal = Integer.MAX_VALUE - 2)
    private Boolean leafNode;

    /**
     * 子节点数据
     **/
    @Getter
    @JSONField(ordinal = Integer.MAX_VALUE - 1)
    private List<TreeNode> children;

    /**
     * 设置子节点数据
     **/
    protected void setChildren(List<TreeNode> children) {
        this.children = children;
        this.rootNode = Objects.equals("0", getParentId());
        this.leafNode = children == null || children.size() == 0;
    }

}

```

TreeBuilder

``` java 

package com.common;

import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;

/**
 * 功能描述：树形数据构建器
 *
 * @author 拓金辉
 * @version 1.0
 * @date 2021-11-17 13:09:05
 */
@Component
public class TreeBuilder {

    /**
     * 方法描述：构建树形数据
     *
     * @param nodes 节点数据
     * @return java.util.List<TreeNode>
     */
    public <T extends TreeNode> List<T> buildTree(List<T> nodes) {
        Map<String, List<TreeNode>> groups = (nodes = c(nodes)).stream().collect(Collectors.groupingBy(TreeNode::getParentId, LinkedHashMap::new, Collectors.toList()));
        return nodes.stream().filter(Objects::nonNull).peek(pnd -> pnd.setChildren(groups.get(pnd.getId()))).filter(TreeNode::getRootNode).collect(Collectors.toList());
    }

    /**
     * 方法描述：防止空指针异常处理
     *
     * @param c 集合数据
     * @return java.util.List<L>
     */
    private <L> List<L> c(List<L> c) {
        return Optional.ofNullable(c).orElseGet(Collections::emptyList);
    }

}

```

TreeBuilder

```java

package com.common;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.billbear.common.utils.TreeNode;
import com.billbear.common.utils.TreeUtils;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

/**
 * 树形数据构建测试
 *
 * @author tjh
 * @version 1.0
 */
public class TreeBuilder {

    @EqualsAndHashCode(callSuper = true)
    @Data
    @Accessors(chain = true)
    public static class Node extends TreeNode {
        private String id;
        private String parentId;
        private String name;
    }

    @Test
    public void buildTree() {

        List<Node> nodeList = Arrays.asList(
                new Node().setId("1").setParentId("0").setName("权限管理"),
                new Node().setId("2").setParentId("1").setName("用户管理"),
                new Node().setId("3").setParentId("1").setName("角色管理"),
                new Node().setId("4").setParentId("1").setName("组织架构管理"),
                new Node().setId("5").setParentId("1").setName("功能菜单"),

                new Node().setId("6").setParentId("0").setName("库存管理"),
                new Node().setId("7").setParentId("6").setName("库存发布"),
                new Node().setId("8").setParentId("6").setName("库存出售"),
                new Node().setId("9").setParentId("6").setName("库存审核"),

                new Node().setId("10").setParentId("0").setName("客户管理"),
                new Node().setId("11").setParentId("10").setName("客户列表"),
                new Node().setId("12").setParentId("10").setName("客户商品列表"),

                new Node().setId("13").setParentId("0").setName("供货商管理")
        );

        List<Node> nodes = TreeUtils.initTree(nodeList);

        System.out.println(JSON.toJSONString(nodes, SerializerFeature.WriteNullListAsEmpty, SerializerFeature.DisableCircularReferenceDetect));

    }

}

```

在新增后或修改（修改当前节点父级节点或者当前节点名称）后需要进行路径修复动作

```java 

    /**
     * 修复路径
     */
    private void fixPath(String id) {
        final List<Category> lowerCategories = this.baseMapper.lowerRecursive(id);
        for (Category lowerCategory : lowerCategories) {
            final List<Category> upperCategories = this.baseMapper.upperRecursive(lowerCategory.getId());
            Collections.reverse(upperCategories);
            final String parentIds = upperCategories.stream().map(Category::getId).collect(Collectors.joining(DEFAULT_PATH_SPLIT));
            final String path = upperCategories.stream().map(Category::getName).collect(Collectors.joining(DEFAULT_PATH_SPLIT));
            this.lambdaUpdate().eq(Category::getId, lowerCategory.getId()).set(Category::getParentIds, parentIds).set(Category::getPath, path).update();
        }
    }

```

```java  

public interface CategoryMapper extends BaseMapper<Category> {

    @Select("WITH RECURSIVE temp AS (\n" +
            "    SELECT * FROM category r WHERE r.id = #{id}\n" +
            "    UNION ALL\n" +
            "    SELECT r.* FROM category r,temp t WHERE t.parent_id = r.id\n" +
            ")select * from temp")
    List<Category> upperRecursive(@Param("id") String id);

    @Select("WITH RECURSIVE temp AS (\n" +
            "\tSELECT * FROM category r WHERE r.id = #{id} \n" +
            "\tUNION ALL\n" +
            "\tSELECT r.* FROM category r,temp t WHERE t.id = r.parent_id\n" +
            ")select * from temp")
    List<Category> lowerRecursive(@Param("id") String id);

}

```