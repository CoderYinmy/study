### 组件注册

Vue.component(组件名，{})

### 自定义事件

1. 2.2.0 component 增加 module

```html
<base-checkbox v-model="lovingVue"></base-checkbox>
```

```js
Vue.component('base-checkBox', {
    module: {
        prop: 'checked',
        event: 'chenge',
    },
    prop: {
        checked: Boolean,
    },
    template: `
    <input
     type="checkbox"
    :checked= "checked"
    :change="$emit('change',$event.target.checked)"
    >
    `,
})
```

2. 将原生事件绑定到组件
   v-on:focus.native 在组件根元素上监听原生事件;
   v-bind:事件名.sync 监听数据双向绑定并更新父组件元素数据，不能和表达式一起使用;

3. 插槽
   普通插槽<slot></slot>;
   具名插槽<slot name="header"></slot> 缩写 #header #default=“{}”;
   作用域插槽 v-slot:default='slotProps';
   解构插槽 v-slot="{ user }";
   动态插槽 v-slot：[];

4. 动态组件 & 异步组件

```js
//动态组件<keep-alive> 第一次创建就缓存下来
<keep-alive>
    <component v-bind:is="currentTabComponent"> </component>
</keep-alive>
```

```html
<keep-alive>
    <component v-bind:is="currentTabComponent"> </component>
</keep-alive>
```

```js
Vue.component('tab-a', {})
Vue.component('tab-b', {})
new Vue = ({
el:'#tab-demo',
data:{
    tabs: ['a', 'b'],,
    current:'a',
    computed:{
        currentTabComponent: function() {
            return 'tab-'+this.current.toLowerCase()
        }
    }
}
})
```

### 边界处理情况

1. 访问元素 & 组件

-   访问子组件实例
    this.$root、this.$refs
-   访问父组件实例
    this.$parent
-   注入依赖

```js
Vue.component('a', {
    //写入实例
    provide: function () {
        return {
            getMap: this.getMap,
        }
    },
    methods: {
        getMap() {},
    },
})
Vue.component('b', {
    // 接收数据
    inject: ['getMap'],
})
```

2. 程序化事件监听
   this.$on
   this.$once
   this.$off
3. 循环引用
4. 强制更新
   $forceUpdate
5. 通过 v-once 创建低开销的静态组件
6. 过渡
   <transition name='' :duration="{ enter: 500, leave: 800 }"></transition>
   enter-active、leave-active、enter、leave-to

### 可复用性

1. mixins

```js
export const myMixin = {
    data() {
        num: 0
    },
    created() {
        console.log('mixin ')
    },
}

import { myMixin } from ''
export default {
    mixins: [myMixin],
    created() {
        this.num++
    },
}
```

### 自定义指令

```js
// 全局注册
Vue.directive('focus', {
    inserted: function (e) {
        e.focus()
    },
})
```

```js
<input v-focus>
// 局部注册
export default = {
    directives:{
        focus: {
            inserted: function (e) {
                e.focus()
            },
        }
    }
}


```

-   钩子函数
    bind 只调用一次，第一次绑定到元素时触发（一次性初始化设置）
    inserted 被绑定元素插入父节点时调用
    update 所在组件 VNode 更新时/更新前调用（存在不确定性）
    componentUpdated 指令所在组件 VNode 及子 VNode 全部更新时调用
    unbind 只调用一次，指令和元素解绑时调用
-   函数参数
    inserted: function(el, binding ,VNode){}
    el: 可以直接操作 DOM
    binding: {
    name ,//指令名
    value,// 指令绑定值
    oldValue,//指令绑定前一个值
    expression,//字符串指令形式的表达式
    arg,//传给指令的参数
    modifiers,//一个包含修饰符的对象
    }
    VNode：vue 编译生成的虚拟节点
    oldVNode： 上一个虚拟节点

### 渲染函数 & JSX

1. render 函数

```js
Vue.component('a', {
    render: function (createElement) {
        return createElement('h' + this.level, this.$slots.default)
    },
    props: {
        level: {
            type: Number,
            required: true,
        },
    },
})
```
