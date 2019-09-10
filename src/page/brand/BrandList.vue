<template>
    <div>
        <filter-form 
            :filterModal="filterModal" 
            :filterData="filterData" 
            @filtersubmit='filterSubmitFun'
            @filterreset='filterResetFun'
            ></filter-form>
        <common-list></common-list>
    </div>   
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import FilterForm from '../../components/filter/index'
import CommonList from '../../components/list/index'
 
export default {
    components:{
        FilterForm,
        CommonList
    },
    data(){
        return{
            filterModal:{
                title:'1213',
                region:1,
                dateSingle:'2019-09-09',
                dateTimeSingle:'2019-09-09 11:11:11',
                dateRange:['2019-09-10','2019-09-11'],
                dateTimeRange:['2019-09-10 11:11:11','2019-09-11 12:12:12'],
                checkboxGroup:[1],
                radioGroup:1,
                textarea:'',
            },
            filterData:[
                {
                    id:'title',
                    type:'input',
                    name:'标题',
                    disabled:true,
                    placeholder:'test',
                    rules:{
                        required: true, message: '域名不能为空', trigger: 'blur'
                    }
                },
                {
                    id:'region',
                    type:'select',
                    name:'区域',
                    placeholder:'12313',
                    data:[{name:'区域1',id:1},{name:'区域2',id:2}],
                    rules:{
                        required: true, message: '域名不能为空', trigger: 'blur'
                    }
                },
                {
                    id:'dateSingle',
                    type:'date',
                    dateType:'date',
                    name:'日期',
                    placeholder:'选择日期',
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    }
                },
                {
                    id:'dateTimeSingle',
                    type:'date',
                    dateType:'datetime',
                    name:'日期时间',
                    placeholder:'选择日期',
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    }
                },
                {
                    id:'dateRange',
                    type:'date',
                    dateType:'daterange',
                    name:'日期段',
                    startPlaceholder:'开始',
                    endPlaceholder:'结束',
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    },
                    className:'width-item'
                },
                {
                    id:'dateTimeRange',
                    type:'date',
                    dateType:'datetimerange',
                    name:'日期时间段',
                    startPlaceholder:'开始时间',
                    endPlaceholder:'结束时间',
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    },
                    className:'width-item'
                },
                {
                    id:'switch',
                    type:'switch',
                    name:'配送',
                    disabled:false,
                    rules:{
                        required: false, message: '不能为空', trigger: 'blur'
                    }
                },
                {
                    id:'checkboxGroup',
                    type:'checkbox',
                    name:'checkbox',
                    placeholder:'12313',
                    data:[{name:'区域1',id:1},{name:'区域2',id:2}],
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    },
                    onChange:(value)=>{
                        console.log(value,'checkbox')
                    }
                },
                {
                    id:'radioGroup',
                    type:'radio',
                    name:'radio',
                    data:[{name:'区域1',id:1},{name:'区域2',id:2}],
                    rules:{
                        required: true, message: '不能为空', trigger: 'blur'
                    },
                    onChange:(value)=>{
                        console.log(value,'radio')
                    }
                },
                {
                    id:'textarea',
                    type:'textarea',
                    name:'textarea',
                    rules:{
                        required: true, message: '不能为空', trigger: 'blur'
                    },
                    onChange:(value)=>{
                        console.log(value,'textarea')
                    }
                },
          ]
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
        },
        filterSubmitFun: function(values){
            alert(JSON.stringify(values));
        },
        filterResetFun: function(values){
            alert(JSON.stringify(values));
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
