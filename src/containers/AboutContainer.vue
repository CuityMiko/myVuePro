<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
        <p>{{name}}：{{msg}}</p>
        <p>
            <h3>element-ui</h3>
            <el-button type="primary">主要按钮</el-button>
        </p>
        <div class="line"></div>
        <p>
            <h3>智能搜索</h3>
            <el-row type="flex">
                <el-col :span="6">
                    <el-input
                        placeholder="请输入搜索内容..."
                        :icon="icon"
                        v-model.trim="search"
                        @change="tosearch"
                        >
                    </el-input>    
                </el-col>
            </el-row>
            <ol>
                <li v-for="(item,index) in searchdata" :key="index">{{item}}</li>
            </ol>
        </p>
        <div class="line"></div>
        <p>
            <ul>
                <li v-for="(val,index) in qius" :key="index">{{val}}</li>
            </ul>
            <el-row type="flex">
                <el-col :span="3">
                    <el-input
                        placeholder="请输入..."
                        v-model.trim="qiu"
                        >
                    </el-input>    
                </el-col>
                <el-col :span="3">
                    <el-button size="small" @click='addqiu'>添加球</el-button>
                </el-col>
            </el-row>
        </p>
        <p>
            <h3>自定义指令</h3>
            <input type="text" v-model="txtcolor">
            <div v-red="txtcolor">
                dsasadsa
            </div>
        </p>
        <mywatch></mywatch>
    </div>
</template>

<script>
import MovieService from '../services/MovieService.js'
import httpHelper from '../js/commons/httpHelper.js'
// examples
import WatchComponent from '../components/examples/WatchComponent.vue'
export default {
    data(){
        return {
            title:'关于我们',
            name:this.$route.params.name||'',
            msg:this.$route.query.msg||'',
            search:'',
            icon:'search',
            searchdata:[],
            qius:[],
            qiu:'',
            txtcolor:'#ccc'
        }
    },
    methods:{
        tosearch(){
            if(this.search.length>=3){
                let that=this;
                that.icon='loading'
                let _params={
                    wd:that.search
                }
                httpHelper.Jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',_params,'cb').then((res)=>{
                    that.icon='edit';
                    that.searchdata=res.s
                },(err)=>{ console.log(err) })
            }
        },
        addqiu(){
            this.qius.push(this.qiu)
        }
    },
    mounted(){
        let _movietype="coming_soon";
        // let _params={
        //     start:0,
        //     count:8,
        //     city:'杭州',
        //     q:''
        // }
        // let _params={
        //     start:0,
        //     count:7,
        //     city:'杭州',
        //     q:''
        // }
        // MovieService.GetMovieList(_movietype,_params,this.$http).then((data)=>{
        //     console.log(data);
        // },(err)=>{
        //     console.log(err);
        // }).catch((err)=>{
        //     console.log(err);
        // })
    },
    directives:{ // 自定义指令
        red(el,params){ // 使用的时候指令名称：v-red
            // el:当前指令所在标签的DOM元素
            // params:给指令传递的值
            el.style.backgroundColor=params.value;
        }
    },
    watch:{
    },
    components:{
        'mywatch':WatchComponent
    }
}
</script>
