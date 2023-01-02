# reactivity-template-js

**This document is a machine translation and may be incorrect**

JavaScript Responsive Template Engine

[中文教程文档](./README.md)



## Introduction

Jstemplate can be used to generate HTML pages. And it is very small, less than 1K. And it is reactivity

## Build

Please install [rollup. js](https://rollupjs.org/guide/en/) first


```
cd reactivity-template-js

npm install

npm run build
```



## Install


```

npm i reactivity-template

```



## Introduction

```

import compile from 'reactivity-template'

```



Or directly import iife into the html file



```html

<script src="./dist/templatejs.iife.js"></script>

```



## Using



A demo is a template in the div id="demo", and then compiled through template.com. (This example is in index.html)

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

or

```js

import compile from 'reactivity-template'

let demo_template = compile('demo')
document.getElementById('demo').innerHTML = demo_template({
    name: 'saobby',
    login: true
})

```



Template js has two types of labels, namely '<%%>' and '<%=%>`

`<%=%>`: output data to template

`<%%>`: script label, which can execute Js

## reactivity

Sometimes it is a bit troublesome to call rendering when the data changes, so you can use the reactivity mode to let templateJS monitor the data changes and re render.

You only need to add `reactive=true` to the template. template to use the responsive

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



The template. template of the above code returns a proxy, which will be re rendered when the data value changes.



If you want to get the whole data value, please use `data.value`. Otherwise, please use `data.key`



If you want to assign the whole data, please `data.value={...}`



But if you just want to modify its properties, you can directly `data.key=...` For example, the above code can directly modify the time of data to `data.time++`
