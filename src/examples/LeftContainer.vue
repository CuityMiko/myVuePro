<template>
  <div>
      <p>{{title}}</p>
      <p>pageindex:{{pageindex}}</p>
      <button v-on:click="chanagedata(pageindex)">分页+1</button>
  </div>
</template>

<style>

</style>

<script>
export default {
  data(){
      return {
          title:'组件的生命周期',
          pageindex:1
      }
  },
  methods:{
    chanagedata(pindex){
        console.log(pindex)
        this.pageindex++;
    }
  },
  beforeCreate(){
    console.log('------beforeCreate------');
  },
  created(){
    console.log('------created------');
  },
  beforeMount(){
    console.log('------beforeMount------');
  },
  mounted(){
      console.log('------mounted------');
  },
  // 以上方法在组件的生命周期内有且只会走一次
  beforeUpdate(){
      console.log('------beforeUpdate------');
  },
  updated(){
      console.log('------updated------');
  },
  beforeDestroy(){
      console.log('------beforeDestroy------');
  },
  deactivated(){
      console.log('------deactivated------');
  }  
}
</script>
