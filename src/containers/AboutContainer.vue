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
                        v-model.trim="search" witdh="300"
                        @change="tosearch"
                        >
                    </el-input>    
                </el-col>
            </el-row>
            <ol>
                <li v-for="(item,index) in searchdata" :key="index">{{item}}</li>
            </ol>
        </p>
    </div>
</template>

<script>
import MovieService from '../services/MovieService.js'
import httpHelper from '../js/commons/httpHelper.js'
export default {
    data(){
        return {
            title:'关于我们',
            name:this.$route.params.name||'',
            msg:this.$route.query.msg||'',
            search:'',
            icon:'search',
            searchdata:[]
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
    }
}
</script>
