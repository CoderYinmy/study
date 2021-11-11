# 模块化

避免全局变量污染、增加代码复用率、便于编写和维护

### AMD

采用异步模式加载依赖的其他模块，主要解决浏览器环境的模块化问题

[requirejs](https://requirejs.org/)

```JS
    //定义一个模块
    define('module', ['dep'],function(dep){
        return exports;
    })

    //引入和使用
    require(['module'], function(module){

    })
```

优点：

1. 可在不转换代码在浏览器中运行
2. 可异步加载依赖
3. 可并行加载多个依赖
4. 可运行在浏览器环境和 Node.js 环境

缺点：

js 运行环境没有原生之持 AMD，需要先导入 AMD 库后才能正常使用

### CMD

### CommonJS

通过 require 同步的加载依赖的其他模块，通过 module.exports 暴露需要的接口

```JS
//引入
const moduleA = require('./moduleA')
//导出
module.exports = moduleA

```

优点：代码可复用于 node.js 环境下并运行
缺点：无法直接运行在浏览器下，必须通过工具转为 ES5

### ESM

在语言的层面上实现了模块化

```JS
//导入
import {readfile} from 'fs'
import Vue from 'vue'

//导出
export function(){}
export default {}
```

缺点： 无法运行在大部分 js 运行环境下，需要通过工具转成 ES5 才能正常运行

### 样式模块化

将样式片段放进一个通用文件夹，在另一个文件里通过@import 导入和使用样式片段

```JS
//util.scss
@mixin center {
  // 水平竖直居中
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
//main.scss
@import 'util'
#box{
  @include center;
}

```
