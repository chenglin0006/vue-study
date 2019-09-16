<template>
    <div>
        <new-form 
            :newModal="newModal"
            :newData="newData"
            @newsubmit="submitFun"
            @newback="backFun"
        ></new-form>
    </div>   
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex'
import NewForm from '../../components/new/index'
import CommonList from '../../components/list/index'
import CmpEdit from './SelfEdit.js'
import * as Util from '../../util/index'
import { newData } from './newData';
 
export default {
    components:{
        NewForm,
    },
    data(){
        return{
            newModal:{
                brandNameLike:'',
                brandNameEnLike:'',
                hasLogo:0,
                test:'123'
            },
            newData:newData
        }
    },
    computed: {
        ...mapGetters([
            'yesOrNoEnum'
        ]),
    },
    watch:{
        yesOrNoEnum:function (newValue, oldValue){
            newValue&&newValue.forEach((ele)=>{
                ele.id = ele.index;
            })
            newData.forEach((ele)=>{
                if(ele.id === 'hasLogo'){
                    ele.data = newValue;
                }
            })
        }
    },
    created(){
        newData.forEach((ele)=>{
            if(ele.id === 'test'){
                ele.component = Vue.component(`cmp-self`, {
                    props: ['newModal'],
                    template: '<div><el-input v-model="newModal.test"></el-input><el-button @click="testClick" size="small">test</el-button></div>',
                    methods:{
                        testClick:function(){
                            console.log(this.newModal.test)
                        }
                    }
                });
            }
        })
    },
    mounted(){
        this.getYesOrNo();
    },
    methods: {
        ...mapActions([
            'getYesOrNo',
        ]),
        submitFun:function(values){
            console.log(values);
        },
        backFun: function(){
            this.$router.back(-1);
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
