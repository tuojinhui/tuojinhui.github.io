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
                        ? [this.payStartTime, this.payEndTime]
                        : []
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
 * @desc 功能权限判断
 * @use v-permission = "'action:add'"
 * @see https://cn.vuejs.org/v2/guide/custom-directive.html
 */
Vue.directive('permission', {
  inserted(el, binding) {
    const perms = JSON.parse(window.sessionStorage.getItem('perms') || '[]')
    if (perms && !perms.contains(binding.value)) {
      el.parentNode.removeChild(el)
    } else {
      throw new Error(`need perm like v-permission="'action:add'"`)
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
