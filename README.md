# js-template
JavaScript 模板引擎

## 安装

```
cd js-template
npm install
```

## 引入

```
npm run build
```

引入 dist/out.js 的 compile

```
import { compile } from 'dist/out.js'
```

或修改rollup.config.js中output.format为iife（立即调用函数表达式）打包后引入out.js。
```html
<script src="./dist/out.js"></script>
```

## 使用

一个demo，在id="demo"的div里是模板，然后通过 template.compile 编译。
```
<div id="demo">
    <p>Hello <%= name %></p>
    <% if (!login) { %>
        <p>请登录</p>    
    <% } %>
</div>
<script>
    let demo_template = template.compile('demo')
    document.getElementById('demo').innerHTML = demo_template({
        name:'saobby',
        login:true
    })
</script>
```

template-js 有两种标签，分别是`<% %>`与 `<%= %>`

`<%= %>`: 输出数据到模板
`<% %>` : 脚本标签，可以执行Js

