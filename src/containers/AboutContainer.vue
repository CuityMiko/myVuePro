<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
        <p>{{name}}：{{msg}}</p>
        <p>
            <h3>element-ui</h3>
            <el-button type="primary">主要按钮</el-button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'关于我们',
            name:this.$route.params.name||'',
            msg:this.$route.query.msg||''
        }
    }
}
</script>
