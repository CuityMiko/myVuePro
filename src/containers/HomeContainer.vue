<style>

</style>

<template>
    <div>
        <h3>{{title}}</h3>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:'首页'
        }
    },
    mounted(){
        console.log(this.$store.state.num);
    }
}
</script>
