<template>
    <div>
        <div>父组件</div>
        <child>
            <div>
                <div>---slot----</div>
                <div>test1</div>
                <div>test2</div>
                <div>---slot----</div>
            </div>
            <div slot="up">
                <div>---slot up----</div>
                <div>test1</div>
                <div>test2</div>
                <div>---slot up----</div>
            </div>
            <div slot="down">
                <div>---slot down----</div>
                <div>test1</div>
                <div>test2</div>
                <div>---slot down----</div>
            </div>
            <div slot="data" slot-scope="test">
                <div>---slot data----</div>
                    <div v-for="ele in test.data" :key="ele">{{ele}}</div>
                <div>---slot data----</div>
            </div>
        </child>
    </div>
</template>
<script>
import Child from './Child'
export default {
    name:'SlotExample',
    components:{
        Child
    }
    
}
</script>
<style scoped lang="less">

</style>