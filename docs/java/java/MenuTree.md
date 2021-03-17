# 菜单树(MenuTree)
[[toc]]


### 菜单节点
<<< @/docs/java/java1/Node.java

### 构建测试
<<< @/docs/java/java1/NodeTest.java

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
