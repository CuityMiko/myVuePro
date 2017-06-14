<style>
    .parent{
        border: 1px solid #ccc;
        padding: 11px;
        margin: 11px;
    }
    .hidebtn{
        display: none;
    }
</style>

<template>
    <div>
        <div class="parent">
            <h3>父容器内容</h3>
            <ol>
                <li v-for="city in citys" :key="city.id">{{city.name}}</li>
            </ol>
            <p>
                City: <input type="text" v-model="city" @keyup.enter="addcity" />
            </p>
            <p>
                第{{pagindex}}页
            </p>
        </div>
        <childComponent :citys="citys" :pageindex="pagindex" @autobtn="changepageindex"/>
        <h4>兄弟组件之间的通信</h4>
        <childComponent2 />
        <h4>slot的使用</h4>
        <slotComponent>
            <div>
                <p>一段内容</p>
                <h4>solt可以在子容器标签内填充HTML文本</h4>
            </div>
            <div>
                <p>内容...</p>
            </div>
        </slotComponent>
    </div>
</template>

<script>
import ChildComponent  from '../components/ChildComponent.vue'
import ChildComponent2  from '../components/ChildComponent2.vue'
import SlotContainer  from './SlotContainer.vue'
export default {
    data(){
        return{
            citys:[
                {id:1,name:'北京'},
                {id:2,name:'上海'}
            ],
            city:'',
            pagindex:1
        }
    },
    methods:{
        addcity(){
            this.citys.push({
                id:this.citys.length+1,
                name:this.city
            });
            this.city="";
        },
        changepageindex(flag){
            if(flag>0)
                this.pagindex++;
            else
                this.pagindex--;
        }
    },
    components:{
        "childComponent":ChildComponent,
        "childComponent2":ChildComponent2,
        "slotComponent":SlotContainer
    }
}
</script>
