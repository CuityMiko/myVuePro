<style>

</style>

<template>
    <div>
        <h3>wacth的使用</h3>
        <input type="text" v-model="stu.name">
        <p>
            {{stu}}
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            stu:{
                name:'zhangsan',
                age:24
            }
        }
    },
    watch:{
        'stu.name':function(oval,nval){
            console.log(oval);
            console.log(nval);
        }
    }
}
</script>


