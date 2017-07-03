<style>
  body{
    margin: 0px;
  }
  .mint-tab-item a{
    text-decoration:none;
  }

  .content{
    position:absolute;
    width: 100%;
    height: 100%;
    margin-top: 40px;
    margin-bottom: 60px;
  }
</style>

<template>
  <div id="app">
    <mt-header :title="msg" v-show="true" fixed>
      <mt-button icon="back" slot="left">返回</mt-button>
      <mt-button icon="search" v-show="false" slot="right"></mt-button>
    </mt-header>

    <!--<div class="content">
      <router-view></router-view>
    </div>

    <mt-tabbar v-model="selected" v-show="true" :fixed="true">
      <mt-tab-item id="1">
        <router-link to='/home' tag="div" slot="icon">
          <img src="./assets/images/home.ico" width="27" height="27">
        </router-link>
        首页
      </mt-tab-item>
      <mt-tab-item id="2">
        <router-link to='/movie' tag="div" slot="icon">
          <img src="./assets/images/list.ico" width="27" height="27">
        </router-link>
        电影列表
      </mt-tab-item>
      <mt-tab-item id="3">
        <router-link to='/user' tag="div" slot="icon">
          <img src="./assets/images/user.ico" width="27" height="27">
        </router-link>
        我的
      </mt-tab-item>
    </mt-tabbar>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      selected:'1'
    }
  },
  methods:{
  },
  watch:{
    
  }
}
</script>
