<template>
    <div>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <template v-for="item in colunmns">
                <el-table-column v-if="item.type==='selfComponent'" :key="item.dataIndex"
                    :label="item.title">
                    <template slot-scope="scope">
                        <component :is="getComponentName(item.dataIndex)" :row="scope.row"></component>
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
                dataIndex:'edit',
                type:'selfComponent',
                component:Vue.component(`cmp-edit`, {
                    props: ['row'],
                    template: '<div><el-button @click="clickTest" type="text" size="small">编辑</el-button></div>',
                    methods:{
                        clickTest:function(){
                            alert(this.row.address);
                        }
                    }
                })
            },{
                title:'操作自定义',
                dataIndex:'self',
                type:'selfComponent',
                component:Vue.component(`cmp-self`, {
                    props: ['row'],
                    template: '<div><el-button @click="clickTest">{{row.province}}</el-button></div>',
                    methods:{
                        clickTest:function(){
                            alert(this.row.address);
                        }
                    }
                })
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
    },
    methods: {
        getComponentName (dataIndex) {
            return `cmp-${dataIndex}`
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import url('./index.less');
</style>
