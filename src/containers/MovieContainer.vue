<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
        <el-button @click="todetail">电影详情</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'正在热映'
        }
    },
    watch:{
        '$route' (to, from) {
            // 对路由变化作出响应...
            switch(this.$route.params.type){
                case 'in_theaters':
                    this.title='正在热映';
                    break;
                case 'coming_soon':
                    this.title='即将上映';
                    break;
                case 'top250':
                    this.title='TOP250';
                    break;
                default:
                    this.title='正在热映';
                    break;
            }
        }
    },
    methods:{
        todetail(){
            this.$router.push({path:'/movie/detail/123456',query: { name: '新木乃伊' }})
        }
    }
}
</script>
