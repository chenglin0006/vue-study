<template>
    <div>
        <common-list 
            @get-common-list="getList" 
            :filterModal="filterModal" 
            :filterData="filterData" 
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
import { filterData } from './filterData';
 
export default {
    components:{
        FilterForm,
        CommonList,
        CmpEdit
    },
    data(){
        return{
            filterModal:{
                brandNameLike:'',
                brandNameEnLike:'',
                hasLogo:''
            },
            filterData:filterData,
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
            'evenOrOdd',
            'yesOrNoEnum'
        ]),
    },
    watch:{
        yesOrNoEnum:function (newValue, oldValue){
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
        },
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
