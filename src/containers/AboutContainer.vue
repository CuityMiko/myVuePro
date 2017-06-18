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
    </div>
</template>

<script>
import MovieService from '../services/MovieService.js'
export default {
    data(){
        return {
            title:'关于我们',
            name:this.$route.params.name||'',
            msg:this.$route.query.msg||''
        }
    },
    methods:{
    },
    mounted(){
        let _movietype="coming_soon";
        // let _params={
        //     start:0,
        //     count:8,
        //     city:'杭州',
        //     q:''
        // }
        let _params={
            start:0,
            count:7,
            city:'杭州',
            q:''
        }
        MovieService.GetMovieList(_movietype,_params,this.$http).then((data)=>{
            console.log(data);
        },(err)=>{
            console.log(err);
        }).catch((err)=>{
            console.log(err);
        })
    }
}
</script>
