<style>

</style>

<template>
    <div>
        <h3>单选框</h3>
        <p>
            <input type="radio" value="男" v-model="sex">男<br/>
            <input type="radio" value="女" v-model="sex">女<br/>
            <input type="radio" value="保密" v-model="sex">保密<br/>
            <span>性别：{{sex}}</span>
        </p>
        <h3>复选框</h3>
        <p>
            <input type="checkbox" v-model="isall">全选/反选<br/>
            <span>{{isall?'全选':'反选'}}</span>
        </p>
        <h3>多选列表</h3>
        <p>
            <input type="checkbox" value="篮球" v-model="ckselvalues">篮球<br/>
            <input type="checkbox" value="足球" v-model="ckselvalues">足球<br/>
            <input type="checkbox" value="排球" v-model="ckselvalues">排球<br/>
            <input type="checkbox" value="网球" v-model="ckselvalues">网球<br/>
            <input type="checkbox" value="台球" v-model="ckselvalues">台球<br/>
            <input type="checkbox" value="水球" v-model="ckselvalues">水球<br/>
        </p>
        <p>
            <ol>
                <li v-for="item in ckselvalues">{{item}}</li>
            </ol>
        </p>
        <h3>选择框</h3>
        <p>
            <select v-model="selvalues" @change="selchange">
                <option value="0" selected>请选择</option>
                <option v-for="city in citys" :value="city.id">{{city.name}}</option>
                <!--<option v-for="city in citys" :value="city.id+':'+city.name">{{city.name}}</option>-->
            </select>
            <br/>
            <span>选择的城市为：{{selvalues}}</span>
        </p>
        <h3>input自动过滤首尾的空格.trim</h3>
        <p>
            <input type="text" v-model.trim="txt">
            <p>{{txt}}:{{txt.length}}</p>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sex:'',
            isall:false,
            ckselvalues:[],
            selvalues:'',
            citys:[
                {id:1,name:'北京'},
                {id:2,name:'上海'},
                {id:3,name:'广州'},
                {id:4,name:'深圳'},
                {id:5,name:'杭州'},
                {id:6,name:'青岛'}
            ],
            txt:''
        }
    },
    methods:{
        selchange(e){
            console.log(e.target.value);
            console.log(e.target.options[e.target.selectedIndex].text);
        }
    }
}
</script>
