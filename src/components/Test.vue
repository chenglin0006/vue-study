<template>
    <transition name="slide">
        <div @click="clickFun">
            test-{{message}}
            <div>{{type}}</div>
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
    computed: mapGetters([
        'evenOrOdd'
    ]),
    mounted(){
        this.type=this.$route.query.type;
        console.log(this.store.count,'------')
    },
    methods: {
        clickFun: function () {
            this.message = '123123';
        },
        ...mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
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
