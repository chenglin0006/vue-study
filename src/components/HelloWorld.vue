<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link to="/test">test1</router-link>
        <div @click="testPush">test2</div>
        <div @click="changeUserNameFun">{{this.$store.state.home.userName}}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'HelloWorld',
    data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {
      
    },
    mounted(){
        console.log(process.env.NODE_ENV,'=====')
    },
    methods:{
        testPush:function(){
          this.$router.push({path:'/test',query:{type:'push'}});
        },
        changeUserNameFun: function () {
            this.message = '123123';
            this.$store.dispatch('changeUserName',
            {
                payload:{
                    param:{
                        curpage:1,
                        pageSize:10,
                    },
                    type:'get',
                    url:'/skuBarcode/list',

                },
                cb:(data)=>{
                    console.log('data:',data)
                }
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
