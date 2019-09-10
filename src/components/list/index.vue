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
    props:['colunmns','tableData'],
    components:{
    },
    data() {
        return {
            
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
