<template>
    <div>
        <filter-form 
            :filterModal="filterModal" 
            :filterData="filterData" 
            @filtersubmit='filterSubmitFun'
            @filterreset='filterResetFun'
            ></filter-form>
        <common-list 
            @get-common-list="getList" 
            :colunmns="colunmns" 
            :tableData="tableData"
            :totalCount="totalCount"
            ></common-list>
    </div>   
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex'
import FilterForm from '../../components/filter/index'
import CommonList from '../../components/list/index'
import CmpEdit from './SelfEdit.js'
import * as Util from '../../util/index'
 
export default {
    components:{
        FilterForm,
        CommonList,
        CmpEdit
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
            ],
            colunmns:[{
                    title: '品牌',
                    dataIndex: 'brandName',
                },
                {
                    title: '操作时间',
                    dataIndex: 'modifyTime'
                },{
                    title: '操作人',
                    dataIndex: 'modifierIdStr'
                },{
                    title:'市区',
                    dataIndex:'city'
                },{
                    title:'地址',
                    dataIndex:'address'
                },{
                    title:'邮编',
                    dataIndex:'zip'
                },{
                    title:'操作',
                    dataIndex:'edit',
                    type:'selfComponent',
                    component:CmpEdit,
                    comName:'action-column',
                },{
                    title:'操作自定义',
                    dataIndex:'self',
                    type:'selfComponent',
                    comName:'cmp-self',
                    component:Vue.component(`cmp-self`, {
                        props: ['row'],
                        template: '<div><el-button @click="clickTest">{{row.brandName}}</el-button></div>',
                        methods:{
                            clickTest:function(){
                                alert(this.row.address);
                            }
                        }
                    })
                }],
            tableData: [],
            searchParams:{},
            totalCount:0
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
        getList: async function(params){
            this.searchParams = params;
            let data = await Util.fetchFun(
                {
                    param:params,
                    type:'get',
                    url:'/brand/list',
                }
            )
            console.log(data,'-------');
            this.tableData = data.result.data;
            this.totalCount = data.result.page.totalNum;
        },
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
