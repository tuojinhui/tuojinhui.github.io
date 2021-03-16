# 设计模式(DesignPatterns)
[[toc]]

```java 
package com.billbear.common.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * @author common
 */
@AllArgsConstructor
public enum DesignPatterns {

    /**
     * 设计模式
     */

    // 创建型模式
    SINGLETON_PATTERN("SINGLETON_PATTERN", "单例模式", "某个类只能生成一个实例，该类提供了一个全局访问点供外部获取该实例，其拓展是有限多例模式。",  false),
    PROTOTYPE_PATTERN("PROTOTYPE_PATTERN", "原型模式", "将一个对象作为原型，通过对其进行复制而克隆出多个和原型类似的新实例。",  false),
    FACTORY_METHOD_PATTERN("FACTORY_METHOD_PATTERN", "工厂方法模式", "定义一个用于创建产品的接口，由子类决定生产什么产品。",  false),
    ABSTRACT_FACTORY_PATTERN("ABSTRACT_FACTORY_PATTERN", "抽象工厂模式", "提供一个创建产品族的接口，其每个子类可以生产一系列相关的产品。",  false),
    BUILDER_PATTERN("BUILDER_PATTERN", "建造者模式", "将一个复杂对象分解成多个相对简单的部分，然后根据不同需要分别创建它们，最后构建成该复杂对象。",  false),

    // 结构型模式
    PROXY_PATTERN("PROXY_PATTERN", "代理模式", "为某对象提供一种代理以控制对该对象的访问。即客户端通过代理间接地访问该对象，从而限制、增强或修改该对象的一些特性。",  false),
    ADAPTER_PATTERN("ADAPTER_PATTERN", "适配器模式", "将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类能一起工作。",  false),
    BRIDGE_PATTERN("BRIDGE_PATTERN", "桥接模式", "将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。",  false),
    DECORATOR_PATTERN("DECORATOR_PATTERN", "装饰模式", "动态的给对象增加一些职责，即增加其额外的功能。",  false),
    FACADE_PATTERN("FACADE_PATTERN", "外观模式", "为多个复杂的子系统提供一个一致的接口，使这些子系统更加容易被访问。",  false),
    FLYWEIGHT_PATTERN("FLYWEIGHT_PATTERN", "享元模式", "运用共享技术来有效地支持大量细粒度对象的复用。",  false),
    COMPOSITE_PATTERN("COMPOSITE_PATTERN", "组合模式", "将对象组合成树状层次结构，使用户对单个对象和组合对象具有一致的访问性。",  false),

    // 行为型模式
    TEMPLATE_METHOD_PATTERN("TEMPLATE_METHOD_PATTERN", "模板方法模式", "定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤。",  false),
    STRATEGY_PATTERN("STRATEGY_PATTERN", "策略模式", "定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的改变不会影响使用算法的客户。",  false),
    COMMAND_PATTERN("COMMAND_PATTERN", "命令模式", "将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开。",  false),
    CHAIN_OF_RESPONSIBILITY_PATTERN("CHAIN_OF_RESPONSIBILITY_PATTERN", "责任链模式", "把请求从链中的一个对象传到下一个对象，直到请求被响应为止。通过这种方式去除对象之间的耦合。",  false),
    STATE_PATTERN("STATE_PATTERN", "状态模式", "允许一个对象在其内部状态发生改变时改变其行为能力。",  false),
    OBSERVER_PATTERN("OBSERVER_PATTERN", "观察者模式", "多个对象间存在一对多关系，当一个对象发生改变时，把这种改变通知给其他多个对象，从而影响其他对象的行为。",  false),
    MEDIATOR_PATTERN("MEDIATOR_PATTERN", "中介者模式", "定义一个中介对象来简化原有对象之间的交互关系，降低系统中对象间的耦合度，使原有对象之间不必相互了解。",  false),
    ITERATOR_PATTERN("ITERATOR_PATTERN", "迭代器模式", "提供一种方法来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示。",  false),
    VISITOR_PATTERN("VISITOR_PATTERN", "访问者模式", "在不改变集合元素的前提下，为一个集合中的每个元素提供多种访问方式，即每个元素有多个访问者对象访问。",  false),
    MEMENTO_PATTERN("MEMENTO_PATTERN", "备忘录模式", "在不破坏封装性的前提下，获取并保存一个对象的内部状态，以便以后恢复它。",  false),
    INTERPRETER_PATTERN("INTERPRETER_PATTERN", "解释器模式", "提供如何定义语言的文法，以及对语言句子的解释方法，即解释器。",  false),
    ;

    /**
     * 模式编码
     */
    @Getter
    private final String code;

    /**
     * 模式名称
     */
    @Getter
    private final String name;

    /**
     * 模式名称
     */
    @Getter
    private final String define;

    /**
     * 是否精通
     */
    @Getter
    private final boolean master;

}
```
### 单例模式
### 原型模式
### 工厂方法模式
### 抽象工厂模式
### 建造者模式
### 代理模式
### 适配器模式
### 桥接模式
### 装饰模式
### 外观模式
### 享元模式
### 组合模式
### 模板方法模式
### 策略模式
### 命令模式
### 责任链模式
### 状态模式
### 观察者模式
### 中介者模式
### 迭代器模式
### 访问者模式
### 备忘录模式
### 解释器模式
