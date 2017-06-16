<style>
    .go{
        float: right;
    }
</style>

<template>
    <div>
        <h3>
            {{title}}
            <el-button class="go" @click="$router.go(-1)">返 回</el-button>
        </h3>
        <h5>电影ID：{{id}}，电影名称:{{name}}</h5>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            title:'电影详情',
            name:this.$route.query.name
        }
    },
    watch:{
        '$route' (to, from) {
            // 对路由变化作出响应...
        }
    },
    methods:{
    },
    mounted(){
        console.log(this.$route.params.id) // 获取:name参数
        console.log(this.$route.query.name) // 获取?的参数
    }
}
</script>
