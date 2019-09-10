<template>
  <div class="try">
        <span v-for="(ele) in menus" :key="ele.url">
            <el-submenu v-if="ele.children&&ele.children.length" :index="ele.url" >
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{ele.name}}</span>
                </template>
                <menu-tree :menus="ele.children" @pushrouter="pushRouterFun"></menu-tree>
            </el-submenu>
            <router-link :to="ele.url" v-else>
                <el-menu-item :index="ele.url" :key="ele.url">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{ele.name}}</span>
                </el-menu-item>
            </router-link>
            
        </span>
        <!-- <span>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航1</span>
                </template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
        </span>
        <span>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
        </span> -->
  </div>
</template>
 
<script>
export default {
  name: 'MenuTree',
  props:{
      menus:Array,
  },
  data () {
    return {
    }
  },
  mounted(){
      console.log(this.menus,'menus')
  },
  methods: {
    change (item) {
      item.show = !item.show
    },
    pushRouterFun:function(ele,event){
        this.$emit('pushrouter',ele.url || ele)
    }
  }
}
</script>