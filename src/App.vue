<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="fade" mode="out-in">
        <div>
            <el-container class="container">
                <el-header class="header">
                  <div class="logoContainer">
                      <img src='./assets/logo.jpg' class="logo"/>
                      <span class="title" ref="memberTitle">百安居</span>
                  </div>
                  <el-menu :default-active="activeHeadIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                     <el-menu-item v-for="(ele,index) in menus" :key="index" :index='ele.url' @click="pushRouter(ele.defaultUrl)">{{ele.name}}</el-menu-item>
                  </el-menu>
                </el-header>
                <el-container>
                  <el-aside width="250px">
                      <el-menu
                        :default-active="activeLeftIndex"
                        class="el-menu-vertical-demo"
                      >
                          <menu-tree :menus="leftMenus" @pushrouter="pushRouter"></menu-tree>
                      </el-menu>
                  </el-aside>
                  <router-view></router-view>
                </el-container>
            </el-container>
        </div> 
    </transition>
    
  </div>
</template>

<script>
  import menus from './router/menu'
  import MenuTree from './components/menuTree'
  export default {
    name: 'App',
    components:{
      MenuTree
    },
    computed:{
        leftMenus:function(){
            let list = []
            menus.forEach((ele)=>{
                if(ele.url === this.activeHeadIndex){
                    list = ele.children
                }
            })
            return list
        }
    },
    watch: {
      $route: function (newValue, oldValue) {
          let path = newValue.path;
          let key = path.replace(/\/((new)|(edit)|(detail)|(show))$/, '/list')
          this.activeLeftIndex = key;
      }
    },
    data(){
      return {
        activeHeadIndex:'goodsmanager',
        menus:this.menus,
        question:'',
        activeLeftIndex:'',
      }
    },
    created(){
      this.menus = menus;
      let pathname = this.$route.path;
      let currentHeaderMenu = [];
      let defaultSelectedHeadKeys = menus && menus[0] && menus[0]['url'] ? [menus[0]['url']] : [];
      ;
      let defaultSelectedKeys = [];
      if (pathname.substring(1, pathname.length)) {
        let pathArr = pathname.split('/');
        let path = pathname.split('/');
        currentHeaderMenu = path[1];
        defaultSelectedHeadKeys = (path[1] === 'welcome' || path[1] === 'permission') ? [menus[0]['url']] : [path[1]];
        pathArr.shift();
        pathArr.shift();
        pathArr.pop();
        pathArr.pop();
        pathArr.push(pathname.replace(/\/((new)|(edit)|(detail)|(show))$/, '/list'));
        defaultSelectedKeys = pathArr;
      }
      this.activeHeadIndex = defaultSelectedHeadKeys[0];
      let key = pathname.replace(/\/((new)|(edit)|(detail)|(show))$/, '/list')
      this.activeLeftIndex = key;

    },
    mounted(){
      
    },
    methods:{
      handleSelect(key, keyPath) {
          if(this.activeHeadIndex!=key){
              this.activeHeadIndex = key;
          }
      },
      pushRouter(url){
        this.$router.push({path:url})
      }
    }
  }
</script>

<style lang="less">
  @import url('./index.less');
</style>
