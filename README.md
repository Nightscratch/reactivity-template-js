# reactivity-template-js
JavaScript 响应式模板引擎

## 简介

js-template 可以用js生成 HTML 页面。而且非常小，不到1K。并且支持响应式

## 打包

请先安装[rollup.js](https://rollupjs.org/guide/en/)

```
cd js-template
npm install
npm run build
```

## 引入

引入 dist/template-js.js 的 compile

```
import { compile } from 'dist/template-js.js'
```

或修改rollup.config.js中output.format为iife（立即调用函数表达式）打包后引入template-js.js。
```html
<script src="./dist/template-js.js"></script>
```

## 使用

一个demo，在id="demo"的div里是模板，然后通过 template.compile 编译。（该示例在 index.html 里）
```html
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
或
```js
import {
	compile
} from 'dist/template-js.js'

let demo_template = compile('demo')
document.getElementById('demo').innerHTML = demo_template({
    name: 'saobby',
    login: true
})
```

template-js 有两种标签，分别是`<% %>`与 `<%= %>`

`<%= %>`: 输出数据到模板

`<% %>` : 脚本标签，可以执行Js

## 响应式

有时在数据更改时调用渲染有点麻烦，所以你可以使用响应式让templateJS来监测数据的改变并重新渲染。

只需要在template.compile 里加上 reactive=true 即可使用响应式

```html
<div id="demo">
    <p>Hello <%= name %></p>
    <% if (!login) { %>
        <p>请登录</p>    
    <% } %>
    <%= time %>
</div>
<script>
    let data = {
        name:'saobby',
        login:true,
        time:0,
    }
    data = template.compile('demo',data,reactive=true);

    setInterval(()=>{
        data.time ++
    },1000)
</script>
```

以上代码的`template.compile`返回了一个Proxy，当data值改变时重新渲染。

若你想获取整个`data`值的话请使用`data.value`。否则请用`data.key`

若你想要赋值整个`data`的话请`data.value = {...}`

但是只想修改它的属性的话可以直接`data.key = ...`修改。比如上面的代码修改data的time就可以直接`data.time ++`
