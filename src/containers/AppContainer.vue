<template>
    <div class="container">
        {{msg}}
    </div>
</template>
<style>
    .container{
        color: red;
        font-size: 33px;
        font-weight: bold;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg:'hello vue'
            }
        }
    }
</script>