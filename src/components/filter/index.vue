<template>
    <div>
        <el-form :model="formModal" ref="formModal" label-width="100px" class="demo-ruleForm">
            <el-form-item v-for="(ele) in formData"  
                :key="ele.id" 
                :label="ele.name" 
                :prop="ele.id"
                :rules="ele.rules"
                >
                <el-input v-if="ele.type==='input'" type="input" 
                    :placeholder="ele.placeholder" 
                    v-model="formModal[ele.id]" 
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"></el-input>
                <el-input v-if="ele.type==='textarea'" type="textarea"
                    v-model="formModal[ele.id]"
                    :placeholder="ele.placeholder" 
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"
                    ></el-input>
                <el-select v-if="ele.type==='select'" 
                    v-model="formModal[ele.id]" 
                    :placeholder="ele.placeholder" 
                    @change="ele.onChange || null"
                    :disabled="ele.disabled">
                    <el-option v-for="(item) in ele.data" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
                <el-date-picker v-if="ele.type=='date'" :type="ele.dateType" 
                    :placeholder="ele.placeholder" 
                    v-model="formModal[ele.id]" 
                    :start-placeholder="ele.startPlaceholder"
                    :end-placeholder="ele.endPlaceholder"
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"></el-date-picker>
                <el-switch v-if="ele.type=='switch'"
                    v-model="formModal[ele.id]"
                    @change="ele.onChange || null"
                    :disabled="ele.disabled"
                    ></el-switch>
                <el-checkbox-group v-if="ele.type=='checkbox'"
                    v-model="formModal[ele.id]" 
                    :disabled="ele.disabled"
                    @change="ele.onChange || null">
                    <el-checkbox v-for="item in ele.data" 
                    :label="item.id" 
                    :key="item.id">{{item.name}}</el-checkbox>
                </el-checkbox-group>
                <el-radio-group v-if="ele.type=='radio'"
                    v-model="formModal[ele.id]" 
                    :disabled="ele.disabled"
                    :size="ele.size">
                    <el-radio v-for="item in ele.data" :label="item.id" 
                    :key="item.id">{{item.name}}</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('formModal')">立即创建</el-button>
                <el-button @click="resetForm('formModal')">重置</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>

export default {
    name: 'FilterForm',
    data() {
      return {
            formModal:{
                title:'1213',
                region:1,
                dateSingle:'2019-09-09',
                dateTimeSingle:'2019-09-09 11:11:11',
                dateRange:['2019-09-10','2019-09-11'],
                dateTimeRange:['2019-09-10 11:11:11','2019-09-11 12:12:12'],
                checkboxGroup:[1],
                radioGroup:1,
                textarea:'666',
            },
            formData:[
                {
                    id:'title',
                    type:'input',
                    name:'标题',
                    disabled:true,
                    placeholder:'test',
                    rules:{
                        required: true, message: '域名不能为空', trigger: 'blur'
                    }
                },
                {
                    id:'region',
                    type:'select',
                    name:'区域',
                    placeholder:'12313',
                    data:[{name:'区域1',id:1},{name:'区域2',id:2}],
                    rules:{
                        required: true, message: '域名不能为空', trigger: 'blur'
                    }
                },
                {
                    id:'dateSingle',
                    type:'date',
                    dateType:'date',
                    name:'日期',
                    placeholder:'选择日期',
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    }
                },
                {
                    id:'dateTimeSingle',
                    type:'date',
                    dateType:'datetime',
                    name:'日期时间',
                    placeholder:'选择日期',
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    }
                },
                {
                    id:'dateRange',
                    type:'date',
                    dateType:'daterange',
                    name:'日期段',
                    startPlaceholder:'开始',
                    endPlaceholder:'结束',
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    }
                },
                {
                    id:'dateTimeRange',
                    type:'date',
                    dateType:'datetimerange',
                    name:'日期时间段',
                    startPlaceholder:'开始时间',
                    endPlaceholder:'结束时间',
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    }
                },
                {
                    id:'switch',
                    type:'switch',
                    name:'配送',
                    disabled:false,
                    rules:{
                        required: false, message: '不能为空', trigger: 'blur'
                    }
                },
                {
                    id:'checkboxGroup',
                    type:'checkbox',
                    name:'checkbox',
                    placeholder:'12313',
                    data:[{name:'区域1',id:1},{name:'区域2',id:2}],
                    rules:{
                        required: true, message: '不能为空', trigger: 'change'
                    },
                    onChange:(value)=>{
                        console.log(value,'checkbox')
                    }
                },
                {
                    id:'radioGroup',
                    type:'radio',
                    name:'radio',
                    data:[{name:'区域1',id:1},{name:'区域2',id:2}],
                    rules:{
                        required: true, message: '不能为空', trigger: 'blur'
                    },
                    onChange:(value)=>{
                        console.log(value,'radio')
                    }
                },
                {
                    id:'textarea',
                    type:'textarea',
                    name:'textarea',
                    rules:{
                        required: true, message: '不能为空', trigger: 'blur'
                    },
                    onChange:(value)=>{
                        console.log(value,'textarea')
                    }
                },
          ]
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
                    alert(JSON.stringify(this.formModal));
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    
</style>
