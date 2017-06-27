<style>
</style>

<template>
    <div>
        {{list | orderby }}
    </div>
</template>



<script>
// let myComp={
//     template:'#mytmp',
//     data:{
//         msg:'自定义组件'
//     }
// }

export default {
    data(){
        return {
            list:[3,4,7,2,1,9,0]
        }
    },
    components:{
        //"mytitle":myComp
    },
    filters:{
        orderby(input,val){
            console.log(input)
            return input-val;
        }
    }
}
</script>


