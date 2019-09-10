<template>
    <div class="filter-form">
        <el-form :model="filterModal" ref="filterModal" label-width="100px" class="demo-ruleForm">
            <el-form-item v-for="(ele) in filterData" :class="ele.className" 
                :key="ele.id" 
                :label="ele.name" 
                :prop="ele.id"
                :rules="ele.rules"
                >
                <el-input v-if="ele.type==='input'" type="input" 
                    :placeholder="ele.placeholder" 
                    v-model="filterModal[ele.id]" 
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"></el-input>
                <el-input v-if="ele.type==='textarea'" type="textarea"
                    v-model="filterModal[ele.id]"
                    :placeholder="ele.placeholder" 
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"
                    ></el-input>
                <el-select v-if="ele.type==='select'" 
                    v-model="filterModal[ele.id]" 
                    :placeholder="ele.placeholder" 
                    @change="ele.onChange || null"
                    :disabled="ele.disabled">
                    <el-option v-for="(item) in ele.data" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
                <el-date-picker v-if="ele.type=='date'" :type="ele.dateType" 
                    :placeholder="ele.placeholder" 
                    v-model="filterModal[ele.id]" 
                    :start-placeholder="ele.startPlaceholder"
                    :end-placeholder="ele.endPlaceholder"
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"></el-date-picker>
                <el-switch v-if="ele.type=='switch'"
                    v-model="filterModal[ele.id]"
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"
                    ></el-switch>
                <el-checkbox-group v-if="ele.type=='checkbox'"
                    v-model="filterModal[ele.id]" 
                    :disabled="ele.disabled"
                    @change="ele.onChange || null">
                    <el-checkbox v-for="item in ele.data" 
                    :label="item.id" 
                    :key="item.id">{{item.name}}</el-checkbox>
                </el-checkbox-group>
                <el-radio-group v-if="ele.type=='radio'"
                    v-model="filterModal[ele.id]" 
                    :disabled="ele.disabled"
                    :size="ele.size">
                    <el-radio v-for="item in ele.data" :label="item.id" 
                    :key="item.id">{{item.name}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('filterModal')">提交</el-button>
                <el-button @click="resetForm('filterModal')">重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>

export default {
    name: 'FilterForm',
    props:['filterModal','filterData'],
    data() {
      return {
            
      };
    },
    computed: {
        
    },
    mounted(){
        
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid,values) => {
                if (valid) {
                    this.$emit('filtersubmit',this.filterModal);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
            this.$emit('filterreset',this.filterModal);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import url('./index.less');
</style>
