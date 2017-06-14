<style>
    .child{
        border: 1px solid #ccc;
        padding: 9px;
    }
</style>

<template>
    <div class="child">
        <p>
            <h3>父容器传过来的:</h3>
            <ol>
                <li v-for="city in citys" :key="city.id">{{city.name}}</li>
            </ol>
            city:<input type="text" v-model="city" @keyup.enter="addcity">
            <hr/>
            <ol>
                <li v-for="qiu in qius" :key="qiu.id">{{qiu.name}}</li>
            </ol>
            qiu:<input type="text" v-model="qiu" @keyup.enter="addqiu">
            <hr/>
            <h5>Cname: <input type="text" v-model="upcname" @keyup.enter="toparent"></h5>
        </p>
        <hr/>
        <p>
            <input type="text" v-model="msg" v-on:keyup.enter="add" />
        </p>
        <p>{{msg}}</p>
        <p>
            <button @click="add">添 加</button>
        </p>
        <p>
            <ol>
                <li v-for="(item,index) in todos" :key="index">{{item}}</li>
            </ol>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"子组件",
            todos:[],
            city:'',
            qiu:''
        }
    },
    props:[
        'citys',
        'qius',
        'cname'
    ],
    methods:{
        add(){
            if(this.msg.length>0)
                this.todos.push(this.msg)
        },
        toparent(){
            this.$emit("changeCname",this.upcname)
        },
        addcity(){
            // 当前父容器传递给子容器的值类型为Object和数组类型的时候，子容器改变值，父容器也会同时改变
            if(this.city.length>0)
                this.citys.push({
                    id:this.citys.length+1,
                    name:this.city
                })
        },
        addqiu(){
            if(this.qiu.length>0)
                this.qius.push({
                    id:this.qius.length+1,
                    name:this.qiu
                })
        }
    },
    watch:{
        citys:function(newval,oldval){
            // console.log(newval);
            // console.log(oldval);
        }
    },
    computed:{
        upcname(){
            return this.cname.toUpperCase();
        }
    },
}
</script>
