# 红黑树(RedBlackTree)
[[toc]]

::: tip

红黑树:
    两种颜色，五种性质的自平衡二叉树
:::

### 红黑树实现
[TreeMap](./TreeMap.md) <Badge text="Red-Black tree"/>

### 红黑树遍历

```java 
package com.common;

import com.billbear.foodie.utils.map.TreeMap;

import java.util.LinkedList;
import java.util.Optional;
import java.util.Queue;


public class BinaryTreeTraversal {

    public static void main(String[] args) {
        TreeMap<String, String> map = new TreeMap<>();
        map.put("1", "1");
        map.put("2", "2");
        map.put("3", "3");
        map.put("4", "4");
        map.put("5", "5");
        map.put("6", "6");
        map.put("7", "7");
        map.put("8", "8");
        map.put("9", "9");

        // 获取TreeMap中root节点
        TreeMap.Entry<String, String> root = map.root;

        preorder(root);
        inorder(root);
        postorder(root);
        levelorder(root);
    }

    /**
     * 前序遍历
     */
    public static void preorder(TreeMap.Entry<String, String> entry) {
        if (entry == null) {
            return;
        }
        processnode(entry);
        preorder(entry.left);
        preorder(entry.right);
    }

    /**
     * 中序遍历
     */
    public static void inorder(TreeMap.Entry<String, String> entry) {
        if (entry == null) {
            return;
        }
        preorder(entry.left);
        processnode(entry);
        preorder(entry.right);
    }

    /**
     * 后续遍历
     */
    public static void postorder(TreeMap.Entry<String, String> entry) {
        if (entry == null) {
            return;
        }
        preorder(entry.left);
        preorder(entry.right);
        processnode(entry);
    }

    /**
     * 层序遍历
     */
    public static void levelorder(TreeMap.Entry<String, String> entry) {
        if (entry == null) {
            return;
        }
        Queue<TreeMap.Entry<String, String>> queue = new LinkedList<>();
        queue.add(entry);
        while (!queue.isEmpty()) {
            TreeMap.Entry<String, String> node = queue.poll();
            processnode(node);
            Optional.ofNullable(node.left).ifPresent(queue::add);
            Optional.ofNullable(node.right).ifPresent(queue::add);
        }
    }

    /**
     * 节点处理
     */
    private static void processnode(TreeMap.Entry<String, String> entry) {
        System.out.print(entry.getKey() + ",");
    }

}

```
