<template>
    <div>
        <common-list 
            @get-common-list="getList" 
            :filterModal="filterModal" 
            :filterData="filterData" 
            :colunmns="colunmns" 
            :tableData="tableData"
            :totalCount="totalCount"
            :scrollX="800"
            :showRowSelection=true
            :actionBtns="actionBtns"
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
import { filterData } from './filterData';
import { newData } from './newData';
 
export default {
    components:{
        FilterForm,
        CommonList,
    },
    data(){
        return{
            actionBtns:[{name:'新增',primary:true,clickHandle:(rows)=>{
                this.$router.push({path:'./edit'});
            }},{name:'批量删除',primary:true,clickHandle:(rows)=>{
                console.log(rows);
            }}],
            filterModal:{
                brandNameLike:'',
                brandNameEnLike:'',
                hasLogo:0
            },
            filterData:filterData,
            colunmns:[{
                    title: '品牌',
                    dataIndex: 'brandName',
                    fixed:'left',
                    width:100,
                    maxSize:20
                },
                {
                    title: '操作时间',
                    dataIndex: 'modifyTime',
                    width:100,
                },{
                    title: '操作人',
                    dataIndex: 'modifierIdStr',
                    width:100,
                },{
                    title:'市区',
                    dataIndex:'city1',
                    width:100,
                },{
                    title:'地址',
                    dataIndex:'address1',
                    width:100,
                },{
                    title:'市区',
                    dataIndex:'city4',
                    width:100,
                },{
                    title:'地址',
                    dataIndex:'address4',
                    width:100,
                },{
                    title:'邮编',
                    dataIndex:'zip3',
                    width:100,
                },{
                    title:'操作',
                    dataIndex:'edit',
                    type:'selfComponent',
                    component:CmpEdit,
                    comName:'action-column',
                    width:100,
                },{
                    title:'操作自定义',
                    dataIndex:'self',
                    type:'selfComponent',
                    comName:'cmp-self',
                    fixed:'right',
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
            'evenOrOdd',
            'yesOrNoEnum'
        ]),
    },
    watch:{
        yesOrNoEnum:function (newValue, oldValue){
            newValue&&newValue.forEach((ele)=>{
                ele.id = ele.index;
            })
            filterData.forEach((ele)=>{
                if(ele.id === 'hasLogo'){
                    ele.data = newValue;
                }
            })
        }
    },
    mounted(){
        this.$store.dispatch('getYesOrNo');
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
