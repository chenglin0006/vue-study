<template>
    <div>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <template v-for="item in colunmns">
                <el-table-column v-if="!item.type" :key="item.dataIndex" :label="item.title" :prop="item.dataIndex">
                </el-table-column>
                <el-table-column v-else :key="item.dataIndex"
                    :label="item.title">
                    <template slot-scope="scope">
                        <el-button v-for="ele in item.actionBtns" :key="ele.id" @click="ele.clickFun(scope.row)" type="text" size="small">{{ele.name}}</el-button>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script>

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
                type:'edit',
                actionBtns:[{
                    id:'edit',
                    name:'编辑',
                    clickFun:(item)=>{
                        console.log(item)
                    }
                }]
            }],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
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
    mounted(){
        
    },
    methods: {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import url('./index.less');
</style>
