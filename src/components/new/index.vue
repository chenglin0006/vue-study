<template>
    <div class="new-form">
        <el-form :model="newModal" ref="newModal" label-width="100px" class="demo-ruleForm">
            <el-form-item v-for="(ele) in newData" :class="ele.className" 
                :key="ele.id" 
                :label="ele.name" 
                :prop="ele.id"
                :rules="ele.rules"
                >
                <el-input v-if="ele.type==='input'" type="input" 
                    :placeholder="ele.placeholder" 
                    v-model="newModal[ele.id]" 
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"></el-input>
                <el-input v-if="ele.type==='textarea'" type="textarea"
                    v-model="newModal[ele.id]"
                    :placeholder="ele.placeholder" 
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"
                    ></el-input>
                <el-select v-if="ele.type==='select'" 
                    v-model="newModal[ele.id]" 
                    :placeholder="ele.placeholder" 
                    @change="ele.onChange || null"
                    :disabled="ele.disabled">
                    <el-option v-if="!ele.isHidePleaseSelect" label="请选择" value=""></el-option>
                    <el-option v-for="(item) in ele.data" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
                <el-date-picker v-if="ele.type=='date'" :type="ele.dateType" 
                    :placeholder="ele.placeholder" 
                    v-model="newModal[ele.id]" 
                    :start-placeholder="ele.startPlaceholder"
                    :end-placeholder="ele.endPlaceholder"
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"></el-date-picker>
                <el-switch v-if="ele.type=='switch'"
                    v-model="newModal[ele.id]"
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"
                    ></el-switch>
                <el-checkbox-group v-if="ele.type=='checkbox'"
                    v-model="newModal[ele.id]" 
                    :disabled="ele.disabled"
                    @change="ele.onChange || null">
                    <el-checkbox v-for="item in ele.data" 
                    :label="item.id" 
                    :key="item.id">{{item.name}}</el-checkbox>
                </el-checkbox-group>
                <el-radio-group v-if="ele.type=='radio'"
                    v-model="newModal[ele.id]" 
                    :disabled="ele.disabled"
                    :size="ele.size">
                    <el-radio v-for="item in ele.data" :label="item.id" 
                    :key="item.id">{{item.name}}</el-radio>
                </el-radio-group>
                <template v-if="ele.type==='selfComponent'">
                    <component :is="getComponentName(ele.comName)" :newModal="newModal"></component>
                </template>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('newModal')">提交</el-button>
                <el-button @click="backForm('newModal')">返回</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>

export default {
    name: 'NewForm',
    props:['newModal','newData'],
    data() {
      return {
            
      };
    },
    computed: {
        
    },
    mounted(){
    },
    methods: {
        getComponentName (comName) {
            return comName
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid,values) => {
                if (valid) {
                    this.$emit('newsubmit',this.newModal);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        backForm(formName) {
            this.$emit('newback',this.newModal);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import url('./index.less');
</style>
