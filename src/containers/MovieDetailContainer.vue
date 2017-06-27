<style>
    .go{
        float: right;
    }
</style>

<template>
    <div>
        <h3>
            {{title}}
            <button class="go" @click="$router.go(-1)">返 回</button>
        </h3>
        <h5>电影ID：{{id}}，电影名称：{{name}}</h5>
        <p>
            <button @click='toabout'>去关于我们</button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            name:this.$route.query.name,
            title:'电影详情'
        }
    },
    watch:{
        '$route' (to, from) {
            // 对路由变化作出响应...
        }
    },
    methods:{
        toabout(){
            // this.$router.push('/about/zhangsan?msg=hello')
            // 此种导航浏览器是有回退按钮的
            this.$router.push({path:'/about/wangwu',query: { msg: 'nihao' }})
            // 替换路由，此种方式的导航，浏览器是没有回退按钮的，此种方式的导航是不进入浏览器的历史记录的
            // this.$router.replace({path:'/about/wangwu',query: { msg: 'nihao' }})
        }
    },
    mounted(){
        console.log(this.$route.params.id) // 获取:name参数
        console.log(this.$route.query.name) // 获取?的参数
    }
}
</script>
