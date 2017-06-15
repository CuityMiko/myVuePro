<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
        <p>
            <router-link to="/movie/in_theaters/1/null">正在热映</router-link>
            <router-link to="/movie/coming_soon/1/null">即将上映</router-link>
            <router-link to="/movie/top250/1/null">TOP250</router-link>
        </p>
        <!--路由渲染的页面容器-->
        <router-view></router-view>
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
    }
}
</script>
