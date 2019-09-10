<template>
    <div>
        <div>子组件</div>
        <slot></slot>
        <slot name="down"></slot>
        <slot name="up"></slot>
        <slot name="data" :data="data"></slot>
    </div>
</template>
<script>
export default {
    name:'Child',
    data(){
        return {
            data:['1-1','1-2']
        }
    }
}
</script>
<style scoped lang="less">

</style>