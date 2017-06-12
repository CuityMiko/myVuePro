<template>
  <div>
      <p><input type="text" v-model="content"></p>
      <p>{{content | touper}}</p>
      <p>
          <!--<a v-bind:href="content" target="_blank">链接</a>-->
          <!--属性绑定的简写方式-->
          <a :href="content" target="_blank">链接</a>
      </p>
      <p>
          <!--绑定并自动解析html标签-->
          <div v-html="txthtml"></div>
      </p>
      <p>
          <!--<button v-on:click="clearcontent">清空</button>-->
          <!--事件绑定的缩写方式-->
          <button @click="clearcontent">清空</button>
      </p>
  </div>
</template>
<style>

</style>
<script>
export default {
    data(){
        return {
            content:'',
            txthtml:'<h3>一段html标签</h3>'
        }
    },
    methods:{
        clearcontent(){
            this.content='';
        }
    },
    filters:{ // 自定义过滤器
        touper:(str)=>{
           return str.toString().toUpperCase();
        }
    }
}
</script>
