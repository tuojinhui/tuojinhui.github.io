# 信息整理
[[toc]]

## 控制台打印VUE实例

```js
console.log($0.__vue__)
```

## 控制台打印徽章
```js
console.log("%c vue-press %c v".concat("1.0.0-beta.1", " ").concat("dd10c50", " %c"), 'background: #35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff', 'background: #41b883; padding: 1px; border-radius: 0 3px 3px 0; color: #fff', 'background: transparent');
```

## 控制台打印code参数值
```js
console.log(window.decodeURIComponent(window.location.search.substr(1).match(new RegExp("(^|&)code=([^&]*)(&|$)", "i"))?.[2]));
```

## 立即调用函数表达式(IIFE)
[IIFE](https://developer.mozilla.org/zh-CN/docs/Glossary/%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F) <Badge text="IIFE"/>
```js
(function () {
    statements
})();
```

## 控制台引入js
```js
(function() {
    const script = document.createElement('script');
    script.src = "https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.1/moment.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
})()
```

## 网站置灰
```js
(function() {
    const html = document.getElementsByTagName('html')[0];
    html.style = html.style.cssText + "-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%); -ms-filter: grayscale(100%); -o-filter: grayscale(100%); filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); _filter: none; filter: grayscale(100%)"
})()
```

## 浏览器跳转
打开新窗口跳转
```js
window.open('http://www.baidu.com', '_blank')
```
自身窗口跳转
```js
window.open('http://www.baidu.com', '_self')
```


## Element-UI时间段取值

```js
 export default {

        data() {

            return {
                payStartTime: '',
                payEndTime: '',
            }

        },

        computed: {

            /**
             * 支付时间 时间段
             */
            payTimePeriod: {
                set(val) {
                    this.payStartTime = (val === null) ? '' : val[0]
                    this.payEndTime = (val === null) ? '' : val[1]
                }
                ,
                get() {
                    return (this.payStartTime && this.payEndTime)
                        ? [this.payStartTime, this.payEndTime]: []
                }
            },

        }
    }

```

## 功能权限判断

@/directive目录下创建permission.js
```js

import Vue from 'vue'


/**
 * VUE自定义权限指令
 * @author tjh
 * @desc 功能权限判断-可以移除和禁用 目前只启用移除
 * @use v-permission = "'action:add'"
 * @see https://cn.vuejs.org/v2/guide/custom-directive.html
 */
Vue.directive('permission', {
  inserted(el, binding) {
    const perms = JSON.parse(window.sessionStorage.getItem('perms') || '[]')
    if (perms && !perms.contains(binding.value)) {
      el.parentNode.removeChild(el)
      // 禁用
      // el.disabled = true
      // el.classList.add('is-disabled')
    }
  }
})

// eslint-disable-next-line no-extend-native
Array.prototype.contains = function (val) {
  return this.indexOf(val) !== -1
}

```
main.js 导入
```js
import '@/directive/permission.js'
```




## 返回上一页
```js 
  export default {

        mounted() {
        },

        destroyed() {
            if (window.history && window.history.pushState) {
                history.pushState(null, null, document.URL);
                window.addEventListener('popstate', this.$router.replace({name: 'home'}), false);
            } else {
                window.removeEventListener('popstate', this.$router.replace({name: 'home'}), false);
            }
        },

    }
```

## ES6 swap array
```js 
arr = [1,2,3,4];
[arr[0], arr[1]] = [arr[1], arr[0]];
arr = [2,1,3,4];
```