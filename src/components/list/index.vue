<template>
    <div>
        <filter-form 
            :filterModal="filterModal" 
            :filterData="filterData" 
            @filtersubmit='filterSubmitFun'
            @filterreset='filterResetFun'
            ></filter-form>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <template v-for="item in colunmns">
                <el-table-column v-if="item.type==='selfComponent'" :key="item.dataIndex"
                    :label="item.title">
                    <template slot-scope="scope">
                        <component :is="getComponentName(item.comName)" :row="scope.row"></component>
                    </template>
                </el-table-column>
                <el-table-column v-else :key="item.dataIndex" :label="item.title" :prop="item.dataIndex">
                </el-table-column>
            </template>
        </el-table>
        <el-pagination
            :small="false"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="curPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total,sizes, prev, pager, next"
            :total="totalCount">
        </el-pagination>
    </div>
</template>

<script>
import Vue from 'vue'
import FilterForm from '../filter/index'

export default {
    name: 'CommonList',
    props:['colunmns','tableData','totalCount','filterModal','filterData'],
    components:{
        FilterForm
    },
    data() {
        return {
            curPage: 1,
			pageSize: 10,
            searchParams: ''
        };
    },
    computed: {
        
    },
    created(){
    },
    mounted(){
        this.$emit('get-common-list',{
            curPage:this.curPage,
            pageSize:this.pageSize
        });
        this.searchParams={
            curPage: this.curPage,
            pageSize: this.pageSize
		};
    },
    methods: {
        getComponentName (comName) {
            return comName
        },
        handleSizeChange(val) {
            let searchParams = this.searchParams;
            if(searchParams) {
                searchParams['pageSize'] = val;
            }
            this.pageSize = val;
            this.searchParams = searchParams;
            this.$emit('get-common-list',this.searchParams);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            let currentPage = val;
            let searchParams = this.searchParams;
            if(searchParams) {
                searchParams['curPage'] = currentPage;
            }
            this.curPage = currentPage;
            this.searchParams = searchParams;
            this.$emit('get-common-list',this.searchParams);
        },
        filterSubmitFun: function(values){
            let params = {
                curPage: 1,
                pageSize: this.pageSize
            }
            params = Object.assign({},params,values);
            this.searchParams = params;
            this.$emit('get-common-list',this.searchParams);
        },
        filterResetFun: function(values){
            let params = {
                curPage: 1,
                pageSize: this.pageSize
            }
            params = Object.assign({},params,values);
            this.searchParams = params;
            this.$emit('get-common-list',this.searchParams);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import url('./index.less');
</style>
