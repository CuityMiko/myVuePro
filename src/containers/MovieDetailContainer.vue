<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
        <h5>电影ID：{{id}}，电影名称：{{name}}</h5>
        <p>
            
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            name:this.$route.query.name,
            title:'电影详情'
        }
    },
    watch:{
        '$route':(to,from)=>{

        }
    },
    mounted(){
        console.log(this.$route.params.id)
        console.log(this.$route.query.name)
    }
}
</script>
