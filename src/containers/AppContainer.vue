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
            <router-link to="/elementui">Element-UI</router-link>
            <router-link to="/vuex">Vuex</router-link>
            <router-link to="/mintui">MintUI</router-link>
        </div>
        <!--路由渲染的页面容器-->
        <router-view name='header'></router-view>
        <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
            <!--keep-alive：保持页面状态，可以作为页面缓存使用.可以缓存住异步请求加载的数据-->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <router-view name='footer'></router-view>
    </div>
</template>

<script>
    import '../bower_components/animate.css/animate.css'
    export default{
        data(){
            return {
                msg:'Vue-豆瓣电影'
            }
        }
    }
</script>