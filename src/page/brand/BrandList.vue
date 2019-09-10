<template>
    <div>
        <div>品牌列表</div>
        <filter-form></filter-form>
    </div>   
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FilterForm from '../../components/filter/index'
 
export default {
    components:{
        FilterForm
    },
    data(){
        return{
            
        }
    },
    computed: {
        ...mapGetters([
            'evenOrOdd'
        ]),
    },
    mounted(){
        
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
            this.incrementAsync().then((data)=>{
                console.log(data);
            })
            // this.$store.dispatch('incrementAsync').then((data)=>{
            //     console.log(data);
            // })
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
