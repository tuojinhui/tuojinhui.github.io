package common;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.*;
import java.util.stream.Collectors;

public class NodeTest {

    List<Node> nodes;

    @Before
    public void before() {
        nodes = Arrays.asList(
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
    }

    @Test
    public void buildTree() {
        Map<String, List<Node>> groups = (nodes = c(nodes)).stream().collect(Collectors.groupingBy(Node::getParentId, LinkedHashMap::new, Collectors.toList()));
        nodes = nodes.stream().filter(Objects::nonNull).peek(node -> node.setChildren(groups.get(node.getId()))).filter(Node::getRootNode).collect(Collectors.toList());
    }

    private <T> List<T> c(List<T> c) {
        return Optional.ofNullable(c).orElseGet(Collections::emptyList);
    }

    @After
    public void after() {
        System.out.println(JSON.toJSONString(nodes, SerializerFeature.WriteNullListAsEmpty, SerializerFeature.DisableCircularReferenceDetect));
    }

}
