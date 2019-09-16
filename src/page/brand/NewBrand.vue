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
                hasLogo:0
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
