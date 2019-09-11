import Vue from 'vue';
export default Vue.component(`action-column`, {
    props: ['row'],
    template: '<div><el-button @click="clickTest" type="text">编辑</el-button></div>',
    methods:{
        clickTest:function(){
            alert(this.row.address);
        }
    }
})

