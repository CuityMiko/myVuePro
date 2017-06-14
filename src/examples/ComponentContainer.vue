<style>

</style>

<template>
    <div>
        <h3>组件（Component）</h3>
        <h4>自定义组件在单独页面</h4>
        <mychildcomponent :citys="citys" :qius="bolls" :cname="cname"/>
        <p>
            city:<input type="text" v-model="city1" @keyup.enter="addcity"><br/>
            boll:<input type="text" v-model="boll1" @keyup.enter="addboll"><br/>
            cname:<input type="text" v-model="cname" />
        </p>
        <p>
            <h3>父页面data属性值</h3>
            <ul>
                <li v-for="item in citys" :key="item.id">{{item.name}}</li>
            </ul>
            <hr/>
            <ul>
                <li v-for="item in bolls" :key="item.id">{{item.name}}</li>
            </ul>
        </p>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default {
    data(){
        return{
            citys:[
                {id:1,name:'北京'},
                {id:2,name:'上海'},
                {id:3,name:'广州'},
                {id:4,name:'深圳'},
                {id:5,name:'杭州'}
            ],
            bolls:[
                {id:1,name:'篮球'},
                {id:2,name:'足球'},
                {id:3,name:'网球'}
            ],
            city1:'',
            boll1:'',
            cname:''
        }
    },
    components:{
        'mychildcomponent':ChildComponent
    },
    methods:{
        addcity(){
            this.citys.push({
                id:this.citys.length+1,
                name:this.city1
            });
            this.city1="";
        },
        addboll(){
            this.bolls.push({
                id:this.bolls.length+1,
                name:this.boll1
            });
            this.boll1="";
        }
    },
    events:{
        changeCname(val){
            console.log(val)
        }
    }
}
</script>
