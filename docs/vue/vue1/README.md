# vue知识讲解

## 获取地址栏code参数值
```js

console.log(window.decodeURIComponent(window.location.search.substr(1).match(new RegExp("(^|&)code=([^&]*)(&|$)", "i"))?.[2]));

```
