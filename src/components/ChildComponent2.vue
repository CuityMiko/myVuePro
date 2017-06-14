<style>
    .child{
        border: 1px solid #ccc;
        padding: 11px;
        margin: 11px;
    }
</style>

<template>
    <div class="child">
        <h3>第二个子容器内容</h3>
        <h4>接收兄弟组件的信息</h4>
        <div v-show="hasmsg" class="child">
            <ul>
                <li v-for="(msg,index) in msgs" :key="index">{{msg}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            hasmsg:false,
            msgs:[]
        }
    },
    props:[
        
    ],
    methods:{
        
    },
    mounted(){
        this.$root.bus.$on('tosay',(data)=>{
            console.log(data);
            if(data){
                this.hasmsg=true;
                this.msgs.push(data);
            }
        })
    }
}
</script>
