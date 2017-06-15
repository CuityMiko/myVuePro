<style>
    .container{
        color: #696969;
        font-size: 14px;
        border: 1px solid #ccc;
        padding: 9px;
    }
    .nav{
        display: flex;
        flex-direction: row;
        justify-content:flex-start;
        border-bottom: 1px solid #ccc;
    }
    .nav a{
        flex: 1;
        margin: 9px;
    }
</style>

<template>
    <div class="container">
        <h3>{{msg}}</h3>
        <div class="nav">
            <router-link to="/home">首页</router-link>
            <router-link to="/movie">榜单电影</router-link>
            <router-link to="/about">关于我们</router-link>
        </div>
        <!--路由渲染的页面容器-->
        <router-view name='header'></router-view>
        <router-view></router-view>
        <router-view name='footer'></router-view>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                msg:'Vue-豆瓣电影'
            }
        }
    }
</script>