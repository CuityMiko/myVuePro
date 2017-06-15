<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
        <p>
            <router-link to="/movie/detail/1000?name=新木乃伊">电影详情</router-link>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'榜单电影'
        }
    }
}
</script>
