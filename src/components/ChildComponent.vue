<style>
    .child{
        border: 1px solid #ccc;
        padding: 11px;
        margin: 11px;
    }
</style>

<template>
    <div class="child">
        <h3>子容器内容</h3>
        <ol>
            <li v-for="city in citys" :key="city.id">{{city.name}}</li>
        </ol>
        <p>
            City: <input type="text" v-model="city" @keyup.enter="addcity" />
        </p>
        <p>
            <button @click="addpageindex">+</button>{{npindex}}<button @click="jianpageindex">-</button>
        </p>
        <p>
            <input type="text" v-model="msg" />
            <button @click='sendtoorz'>往第兄弟组件传递消息</button>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            city:'',
            npindex:this.pageindex,
            msg:''
        }
    },
    props:[
        "citys",
        "pageindex"
    ],
    methods:{
        addcity(){
            this.citys.push({
                id:this.citys.length+1,
                name:this.city
            });
            this.city="";
        },
        addpageindex(){
            this.npindex++;
            this.$emit('autobtn',1); // 通过$emit方式将子容器的值传到父容器内
        },
        jianpageindex(){
            this.npindex--;
            this.$emit('autobtn',-1);
        },
        sendtoorz(){ // 往第兄弟组件传递消息
            this.$root.bus.$emit('tosay',this.msg);
            this.msg='';
        }
    }
}
</script>
