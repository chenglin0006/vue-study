<template>
    <transition name="slide">
        <div @click="clickFun">
            test-{{message}}
            <div>{{type}}</div>
            <div>{{$store.state.home.userName}}</div>
            <div>
                Clicked: {{ store.count }} times, count is {{ evenOrOdd }}.
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
                <button @click="incrementIfOdd">Increment if odd</button>
                <button @click="incrementAsync">Increment async</button>
            </div>
            <div>
                <div v-for="(todo,index) in todos" :key="index">
                    <span>{{todo.text}}</span>
                </div>
            </div>
            <div>{{countBig}}</div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
 
export default {
    data(){
        return{
            totalCount:0,   //总的条目
            message:'test-index',
            type:'',
            store:this.$store.state.test,
            todos: [
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ]
        }
    },
    computed: {
        ...mapGetters([
            'evenOrOdd'
        ]),
        countBig: function () {
            // `this` 指向 vm 实例
            return this.store.count>15?true:false
        }
    },
    mounted(){
        this.type=this.$route.query.type;
        console.log(this.store.count,'------')
    },
    methods: {
        ...mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ]),
        clickFun: function () {
            this.message = '123123';
            this.$store.dispatch('incrementAsync').then((data)=>{
                console.log(data);
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .test{
        color:blue;
        cursor: pointer;
    }
</style>
