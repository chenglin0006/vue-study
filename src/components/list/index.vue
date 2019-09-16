<template>
    <div>
        <filter-form 
            :filterModal="filterModal" 
            :filterData="filterData" 
            @filtersubmit='filterSubmitFun'
            @filterreset='filterResetFun'
            ></filter-form>
        <div class="action-btns">
            <el-button :type="item.primary?'primary':''" v-for="(item,index) in actionBtns" :key="index" @click="item.clickHandle(multipleSelection)">{{item.name}}</el-button>
        </div>
        <el-table
            :data="tableData"
            border
            stripe
            width="100%"
            @selection-change="handleSelectionChange">
            >
            <el-table-column
                v-if="showRowSelection"
                type="selection"
                width="55">
            </el-table-column>
            <template v-for="item in colunmns">
                <el-table-column  v-if="item.type==='selfComponent'" :key="item.dataIndex"
                    :label="item.title"
                    :fixed="item.fixed"
                    :width="item.width"
                    >
                    <template slot-scope="scope">
                        <component :is="getComponentName(item.comName)" :row="scope.row"></component>
                    </template>
                </el-table-column>
                <el-table-column v-else :key="item.dataIndex" :label="item.title" :prop="item.dataIndex" :fixed="item.fixed" :width="item.width">
                    <template slot-scope="scope">
                        <span v-if="item.maxSize&&scope.row[item.dataIndex].length>item.maxSize">
                            <el-popover
                                placement="top-start"
                                width="200"
                                trigger="hover"
                                :content="scope.row[item.dataIndex]">
                                <span slot="reference">{{scope.row[item.dataIndex].substring(0,item.maxSize)+'...'}}</span>
                            </el-popover>
                        </span>
                        <span v-else>{{scope.row[item.dataIndex]}}</span>
                    </template>
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
import * as Util from '../../util/index'

export default {
    name: 'CommonList',
    props:['colunmns','tableData','totalCount','filterModal','filterData','scrollX','showRowSelection','actionBtns'],
    components:{
        FilterForm
    },
    data() {
        return {
            curPage: 1,
			pageSize: 10,
            searchParams: '',
            multipleSelection:[],
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
        },
        handleSelectionChange: function(val) {
            this.multipleSelection = val;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import url('./index.less');
</style>
