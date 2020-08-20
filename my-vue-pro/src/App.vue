<template>
    <div id="app">
        <div id="nav">
            <div class="tab-item" v-for="(item,index) in tabList" :key="index" @click="switchTo(index)">
                <a>{{item.selected}}</a>
                <span>{{item.tit}}</span>
            </div>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabList: [
              {normal: "tu",selected:'pian',tit:'首页',page:'/' },
              {normal: "tu",selected:'pian',tit:'关于',page:'/about' },
              {normal: "tu",selected:'pian',tit:'我的',page:'/mine' },
            ],
        };
    },
    methods: {
        switchTo(idx) {
            console.log(idx)
            if(idx == 0) {
              this.$router.replace('/');
            }else if(idx == 1) {
              this.$router.replace('/about');
            }else if(idx == 2) {
              this.$router.replace('/mine');
            }
            
        },
    },
};
</script>
<style lang="scss">
body {
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

#nav {
    a {
        font-weight: bold;
        color: #000;

        &.router-link-exact-active {
            color: #f90;
        }
    }
}
</style>
