<template>
    <div>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <template v-for="item in colunmns">
                <el-table-column v-if="item.type==='actionBtn'" :key="item.dataIndex"
                    :label="item.title">
                    <template slot-scope="scope">
                        <el-button v-for="ele in item.actionBtns" :key="ele.id" @click="ele.clickFun(scope.row)" type="text" size="small">{{ele.name}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column v-else-if="item.type==='selfComponent'" :key="item.dataIndex"
                    :label="item.title">
                    <template slot-scope="scope">
                        <component :is="getComponentName(scope.row)" :row="scope.row"></component>
                    </template>
                </el-table-column>
                <el-table-column v-else :key="item.dataIndex" :label="item.title" :prop="item.dataIndex">
                </el-table-column>
                
            </template>
        </el-table>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'CommonList',
    props:[],
    data() {
        return {
            colunmns:[{
                title:'日期',
                dataIndex:'date',
            },{
                title:'姓名',
                dataIndex:'name'
            },{
                title:'省份',
                dataIndex:'province'
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
                type:'actionBtn',
                actionBtns:[{
                    id:'edit',
                    name:'编辑',
                    clickFun:(item)=>{
                        console.log(item)
                    }
                }]
            },{
                title:'操作自定义',
                type:'selfComponent',
                template:'<div>{{row.name}}</div>',
            }],
            tableData: [{
                id:1,
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                id:2,
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                id:3,
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
                id:4,
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
            }]
        };
    },
    computed: {
        
    },
    created(){
        let tableData = this.tableData;
        tableData.forEach((ele)=>{
            ele.template = '<div>{{row.name}}-{{row.id}}</div>'
        })
        for (let ele of tableData) {
            Vue.component(`cmp-${ele.id}`, {
                props: ['row'],
                template: ele.template
            })
        }
        this.tableData = tableData
    },
    methods: {
        getComponentName (row) {
            return `cmp-${row.id}`
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import url('./index.less');
</style>
